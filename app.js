// 全局变量
let currentStep = 1;
let userData = {};
let vocabulary = [];
let tags = [];
let finalPrompt = '';
let generatedImageUrl = '';

// 页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    console.log('=== 初始化应用 ===');

    // 确保元素存在后再绑定事件
    const form = document.getElementById('questionsForm');
    if (form) {
        console.log('找到表单，绑定提交事件');
        form.addEventListener('submit', handleFormSubmit);
    } else {
        console.error('未找到表单元素！');
        alert('页面加载失败，请刷新页面重试！');
        return;
    }

    // 添加全局函数供HTML调用
    window.handleThemeChange = handleThemeChange;

    // 绑定环境选择变化事件
    document.getElementById('environment').addEventListener('change', function() {
        const customInput = document.getElementById('customEnvironment');
        if (this.value) {
            customInput.style.display = 'none';
            customInput.value = '';
        } else {
            customInput.style.display = 'block';
        }
    });
}

// 处理主题变化
function handleThemeChange() {
    const themeSelect = document.getElementById('theme');
    const customDiv = document.getElementById('customThemeDiv');
    const customInput = document.getElementById('customTheme');

    if (themeSelect.value === 'custom') {
        customDiv.style.display = 'block';
        customInput.required = true;
    } else {
        customDiv.style.display = 'none';
        customInput.required = false;
        customInput.value = '';
    }
}

// 处理表单提交
function handleFormSubmit(e) {
    e.preventDefault();

    // 收集用户数据
    const formData = new FormData(e.target);
    const themeValue = formData.get('theme');
    const customTheme = formData.get('customTheme');

    userData = {
        theme: themeValue === 'custom' ? customTheme : themeValue,
        title: formData.get('title'),
        languages: formData.getAll('languages'),
        difficulty: formData.get('difficulty'),
        environment: formData.get('environment') || document.getElementById('customEnvironment').value
    };

    // 调试信息
    console.log('表单数据:', userData);

    // 验证必填字段
    console.log('验证必填字段:', {
        theme: userData.theme,
        title: userData.title,
        languages: userData.languages,
        difficulty: userData.difficulty
    });

    if (!userData.theme || userData.theme === '') {
        console.error('主题验证失败:', userData.theme);
        alert('请选择主题！');
        return;
    }

    if (!userData.title || userData.title === '') {
        console.error('标题验证失败:', userData.title);
        alert('请填写标题！');
        return;
    }

    if (!userData.languages || userData.languages.length === 0) {
        console.error('语言验证失败:', userData.languages);
        alert('请选择至少一种语言！');
        return;
    }

    if (!userData.difficulty || userData.difficulty === '') {
        console.error('难度验证失败:', userData.difficulty);
        alert('请选择难度等级！');
        return;
    }

    console.log('验证通过，开始生成词汇');

    // 生成词汇
    generateVocabulary();
}

// 生成词汇
function generateVocabulary() {
    console.log('=== 开始生成词汇 ===');
    console.log('用户数据:', userData);
    console.log('主题:', userData.theme, '难度:', userData.difficulty);

    try {
        showLoading('正在生成词汇库...');

        // 立即尝试获取词汇
        vocabulary = getVocabulary(userData.theme, userData.difficulty);
        console.log('成功获取词汇，数量:', vocabulary.length);
        console.log('词汇列表前5个:', vocabulary.slice(0, 5));

        // 显示词汇
        displayVocabulary();
        console.log('词汇显示完成');

        // 隐藏加载提示
        hideLoading();
        console.log('隐藏加载提示完成');

        // 等待一小段时间后跳转
        setTimeout(() => {
            console.log('准备跳转到步骤2...');
            goToStep(2);
            console.log('跳转完成');
        }, 500);

    } catch (error) {
        console.error('生成词汇时出错:', error);
        hideLoading();
        alert('生成词汇时出错：' + error.message);
    }
}

// 显示词汇
function displayVocabulary() {
    const container = document.getElementById('vocabularyList');
    let html = `
        <div class="vocabulary-grid">
            <table class="vocabulary-table">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>中文</th>
                        <th>拼音</th>
                        <th>英文</th>
                        <th>日文</th>
                    </tr>
                </thead>
                <tbody>
    `;

    vocabulary.forEach((word, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>${word.chinese}</td>
                <td>${word.pinyin}</td>
                <td>${word.english}</td>
                <td>${word.japanese}</td>
            </tr>
        `;
    });

    html += `
                </tbody>
            </table>
        </div>
        <div class="vocabulary-summary">
            <p><strong>主题：</strong>${userData.theme}</p>
            <p><strong>难度等级：</strong>${userData.difficulty.replace('level', 'Level ')}</p>
            <p><strong>词汇数量：</strong>${vocabulary.length} 个</p>
        </div>
    `;

    container.innerHTML = html;
}

// 下一步
function nextStep() {
    if (currentStep === 2) {
        // 生成标签
        tags = generateTagText(vocabulary, userData.languages);
        displayTags();
    } else if (currentStep === 3) {
        // 生成Prompt
        generatePrompt();
    } else if (currentStep === 4) {
        // 显示完成页面
        showCompletionPage();
    }

    if (currentStep < 5) {
        goToStep(currentStep + 1);
    }
}

// 上一步
function previousStep() {
    if (currentStep > 1) {
        goToStep(currentStep - 1);
    }
}

// 跳转到指定步骤
function goToStep(step) {
    // 隐藏所有步骤
    document.querySelectorAll('.step-content').forEach(el => {
        el.classList.remove('active');
    });

    // 显示当前步骤
    document.getElementById(`step${step}`).classList.add('active');

    // 更新步骤指示器
    document.querySelectorAll('.step').forEach(el => {
        el.classList.remove('active');
        el.classList.remove('completed');
    });

    for (let i = 1; i <= step; i++) {
        const stepEl = document.querySelector(`.step[data-step="${i}"]`);
        if (i < step) {
            stepEl.classList.add('completed');
        } else {
            stepEl.classList.add('active');
        }
    }

    currentStep = step;
}

// 显示标签
function displayTags() {
    const container = document.getElementById('tagList');
    let html = '<div class="tag-grid">';

    tags.forEach((tag, index) => {
        html += `
            <div class="tag-item">
                <span class="tag-number">${index + 1}</span>
                <span class="tag-text">${tag}</span>
            </div>
        `;
    });

    html += '</div>';

    html += `
        <div class="tag-summary">
            <h4>标签配置：</h4>
            <ul>
                <li><strong>主题：</strong>${userData.theme}</li>
                <li><strong>标题：</strong>${userData.title}</li>
                <li><strong>语言组合：</strong>${getLanguageDescription()}</li>
                <li><strong>标签数量：</strong>${tags.length} 个</li>
            </ul>
        </div>
    `;

    container.innerHTML = html;
}

// 获取语言描述
function getLanguageDescription() {
    const languageMap = {
        'chinese': '中文',
        'pinyin': '拼音',
        'english': '英文',
        'japanese': '日文'
    };

    return userData.languages.map(lang => languageMap[lang]).join(' + ');
}

// 生成Prompt
function generatePrompt() {
    showLoading('正在生成绘图Prompt...');

    setTimeout(() => {
        finalPrompt = createImagePrompt();
        displayPrompt();
        hideLoading();
    }, 1500);
}

// 创建图像Prompt
function createImagePrompt() {
    const environmentText = userData.environment ? `，${userData.environment}环境` : '';
    const vocabularyItems = vocabulary.map(v => v.chinese).join('、');
    const ageGroup = userData.difficulty === 'level1' ? '5-6岁' : userData.difficulty === 'level2' ? '6-8岁' : '8-9岁';

    // 生成详细的标签样本和说明
    const sampleTagText = tags.slice(0, 3).join('，');
    const languageDescription = getLanguageDescription();

    // 生成每个物品的具体标签格式说明
    const tagFormatExamples = vocabulary.slice(0, 3).map((item, index) => {
        return `${item.chinese}: "${tags[index]}"`;
    }).join('；');

    const prompt = `儿童识字教育海报，标题"《${userData.title}}"，${userData.theme}主题场景${environmentText}，适合${ageGroup}儿童学习识字。

【重要】必须绘制的具体物品清单：${vocabularyItems}

每个物品的多语言标签格式要求：
- 用户选择的语言组合：${languageDescription}
- 标签必须包含所有选择的语言，不能遗漏任何一种
- 标签示例格式：${tagFormatExamples}
- 每个标签都要按照这个格式显示完整的多语言信息

【标签格式详细说明】
1. 如果选择了"中文+英文"：每个物品标签显示为 "中文 (english)"
2. 如果选择了"中文+拼音+英文"：每个物品标签显示为 "中文 [pīnyīn] (english)"
3. 如果选择了全选：每个物品标签显示为 "中文 [pīnyīn] (english) {japanese}"
4. 必须确保每个物品的标签都包含所有选择的语言部分

场景设计要求：
- 场景人物：${getCharactersByTheme()}
- ${userData.theme}的典型环境特征，背景简洁不杂乱
- 整体布局为儿童教育海报风格，重点突出学习物品

视觉风格要求：
- A4竖版比例，专业儿童插画风格
- 线条清晰流畅，色彩鲜艳但不过于饱和
- 每个物品都要有充足的留白空间放置完整标签
- 物品大小适中，便于儿童识别和学习
- 标签字体要大而清晰，适合儿童阅读

【关键要求】标签显示规则：
- 每个物品旁边必须放置对应的多语言标签
- 标签位置要紧邻物品，用细线连接指向
- 所有标签必须包含完整的语言信息，不能只显示部分语言
- 标签之间不能重叠，分布要均匀清晰
- 标签文字要清晰可读，字体大小一致

技术要求：8K高分辨率，高质量细节，专业儿童插画风格，教育用途友好设计。`;

      // 生成详细的场景描述
    const sceneDescription = generateSceneDescription();

    const prompt = `儿童识字教育海报，标题"《${userData.title}>"，${userData.theme}主题场景${environmentText}，适合${ageGroup}儿童学习识字。

${sceneDescription}

【重点要求】必须包含的教学物品：
在${userData.theme}场景中，必须清晰绘制以下具体物品：${vocabularyItems}。每个物品都要有清晰的多语言标签，标签格式如：${tagFormatExamples}。

【标签格式说明】
- 语言组合：${languageDescription}
- 每个物品标签必须包含所有选择的语言，不能遗漏
- 中文：直接显示物品名称
- 拼音：用方括号包围，如[pīnyīn]
- 英文：用圆括号包围，如(english)
- 日文：用花括号包围，如{japanese}

【视觉构图要求】
- A4竖版比例，儿童教育海报风格
- 线条清晰流畅，色彩鲜艳明快，适合儿童视觉
- 简洁干净的背景，突出教学内容
- 每个物品都要有充足的留白空间放置完整标签
- 物品大小适中，便于儿童识别和学习
- 标签文字要大而清晰，字体适合儿童阅读

【人物和活动】
场景中包含：${getCharactersByTheme()}

【标签布局规则】
- 标签要放在对应物品附近，用细线指向
- 所有标签不能重叠，分布要均匀清晰
- 标签颜色要醒目但不刺眼，易于阅读
- 标签位置要考虑画面整体的平衡性

【技术规格】
- 8K超高分辨率，细节丰富
- 专业儿童插画矢量风格
- 高质量渲染，色彩饱和度适中
- 教育用途友好，图像清晰度极高`;

    return prompt;
}

// 根据主题获取人物描述
function getCharactersByTheme() {
    const characterMap = {
        '超市': '收银员、购物的小朋友、店员、推购物车的家庭',
        '医院': '医生、护士、小病人、陪伴的家长',
        '公园': '玩耍的小朋友、散步的老人、锻炼的成年人',
        '学校': '老师、学生、校长、值班老师',
        '公交站': '等车的乘客、司机、老人、学生',
        '游乐场': '玩耍的孩子们、工作人员、陪同的家长',
        '家里': '爸爸、妈妈、孩子、爷爷奶奶',
        '火车站': '旅客、检票员、搬运工、列车员、志愿者',
        '飞机场': '乘客、空姐、飞行员、地勤人员、安检员',
        '图书馆': '图书管理员、读者、学生、研究人员',
        '动物园': '游客、饲养员、讲解员、小朋友',
        '博物馆': '参观者、讲解员、保安、学生、考古学家',
        '书店': '读者、店员、学生、老师、家长',
        '菜市场': '摊主、顾客、农民、家庭主妇',
        '面包店': '面包师、顾客、排队的小朋友',
        '花店': '花艺师、顾客、买花的情侣',
        '银行': '柜员、客户、保安、排队的人们',
        '邮局': '邮递员、工作人员、寄信的市民'
    };

    // 对于自定义主题，使用通用描述
    const theme = userData.theme;
    if (characterMap[theme]) {
        return characterMap[theme];
    } else {
        // 根据主题关键词推断可能的人物
        if (theme.includes('店') || theme.includes('市场') || theme.includes('商场')) {
            return '店员、顾客、服务员、收银员';
        } else if (theme.includes('学校') || theme.includes('教育') || theme.includes('培训')) {
            return '老师、学生、家长、校长';
        } else if (theme.includes('医院') || theme.includes('诊所') || theme.includes('药店')) {
            return '医生、护士、病人、家属';
        } else if (theme.includes('公园') || theme.includes('广场') || theme.includes('花园')) {
            return '游客、孩子、家长、散步的人';
        } else if (theme.includes('交通') || theme.includes('车站') || theme.includes('机场')) {
            return '乘客、司机、工作人员、旅客';
        } else {
            return '小朋友、老师、家长、工作人员';
        }
    }
}

// 显示Prompt
function displayPrompt() {
    const container = document.getElementById('promptResult');
    container.innerHTML = `
        <div class="prompt-content">
            <pre>${finalPrompt}</pre>
        </div>
        <div class="prompt-actions">
            <button class="btn btn-secondary" onclick="copyPrompt()">复制Prompt</button>
            <button class="btn btn-info" onclick="downloadPrompt()">下载Prompt</button>
        </div>
    `;
}

// 生成图像
function generateImage() {
    const apiKey = document.getElementById('apiKey').value;
    if (!apiKey) {
        alert('请输入API Key');
        return;
    }

    showLoading('正在生成图像，请稍候...');

    const imageData = {
        model: 'nano-banana-pro',
        input: {
            prompt: finalPrompt,
            image_input: [],
            aspect_ratio: '3:4', // A4竖版
            resolution: '4K',
            output_format: 'png'
        }
    };

    // 调用API创建任务
    fetch('https://api.kie.ai/api/v1/jobs/createTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(imageData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.code === 200) {
            const taskId = data.data.taskId;
            pollTaskStatus(taskId, apiKey);
        } else {
            hideLoading();
            alert('创建任务失败：' + data.msg);
        }
    })
    .catch(error => {
        hideLoading();
        alert('请求失败：' + error.message);
    });
}

// 轮询任务状态
function pollTaskStatus(taskId, apiKey) {
    const checkStatus = () => {
        fetch(`https://api.kie.ai/api/v1/jobs/recordInfo?taskId=${taskId}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                const state = data.data.state;
                if (state === 'success') {
                    const result = JSON.parse(data.data.resultJson);
                    generatedImageUrl = result.resultUrls[0];
                    hideLoading();
                    showCompletionPage();
                } else if (state === 'fail') {
                    hideLoading();
                    alert('图像生成失败：' + data.data.failMsg);
                } else {
                    // 继续等待
                    setTimeout(checkStatus, 3000);
                }
            } else {
                hideLoading();
                alert('查询状态失败：' + data.msg);
            }
        })
        .catch(error => {
            hideLoading();
            alert('查询状态失败：' + error.message);
        });
    };

    checkStatus();
}

// 显示完成页面
function showCompletionPage() {
    // 创建词汇表
    const vocabularyTable = createVocabularyTable();
    document.getElementById('vocabularyTable').innerHTML = vocabularyTable;

    // 显示生成的图像
    if (generatedImageUrl) {
        document.getElementById('generatedImage').innerHTML = `
            <img src="${generatedImageUrl}" alt="生成的儿童识字小报" class="generated-image">
        `;
    } else {
        document.getElementById('generatedImage').innerHTML = `
            <p>图像生成中或未生成</p>
        `;
    }

    goToStep(5);
}

// 创建词汇表
function createVocabularyTable() {
    let html = `
        <table class="vocabulary-table">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>标签</th>
                    <th>中文</th>
                    <th>拼音</th>
                    <th>英文</th>
                    <th>日文</th>
                </tr>
            </thead>
            <tbody>
    `;

    vocabulary.forEach((word, index) => {
        const tagText = tags[index] || word.chinese;
        html += `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${tagText}</strong></td>
                <td>${word.chinese}</td>
                <td>${word.pinyin}</td>
                <td>${word.english}</td>
                <td>${word.japanese}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    return html;
}

// 复制Prompt
function copyPrompt() {
    navigator.clipboard.writeText(finalPrompt).then(() => {
        showMessage('Prompt已复制到剪贴板');
    });
}

// 下载Prompt
function downloadPrompt() {
    const blob = new Blob([finalPrompt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${userData.title}_prompt.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// 下载图像
function downloadImage() {
    if (!generatedImageUrl) {
        alert('图像还未生成完成');
        return;
    }

    const a = document.createElement('a');
    a.href = generatedImageUrl;
    a.download = `${userData.title}_xiaozibao.png`;
    a.click();
}

// 导出数据
function exportData() {
    const exportData = {
        userData: userData,
        vocabulary: vocabulary,
        tags: tags,
        prompt: finalPrompt,
        imageUrl: generatedImageUrl,
        timestamp: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${userData.title}_export.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// 重新开始
function restart() {
    currentStep = 1;
    userData = {};
    vocabulary = [];
    tags = [];
    finalPrompt = '';
    generatedImageUrl = '';

    // 重置表单
    document.getElementById('questionsForm').reset();

    // 回到第一步
    goToStep(1);
}

// 显示加载提示
function showLoading(text = '处理中...') {
    const overlay = document.getElementById('loadingOverlay');
    const loadingText = document.getElementById('loadingText');
    loadingText.textContent = text;
    overlay.classList.remove('hidden');
}

// 隐藏加载提示
function hideLoading() {
    document.getElementById('loadingOverlay').classList.add('hidden');
}

// 显示消息
function showMessage(message) {
    // 创建消息元素
    const messageEl = document.createElement('div');
    messageEl.className = 'message toast';
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(messageEl);

    // 3秒后自动移除
    setTimeout(() => {
        messageEl.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(messageEl);
        }, 300);
    }, 3000);
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ==================== 历史记录功能 ====================

// 历史记录管理类
class HistoryManager {
    constructor() {
        this.storageKey = 'xiaozibao_history';
        this.maxHistory = 50; // 最多保存50条记录
    }

    // 保存记录
    save(record) {
        try {
            const history = this.getHistory();
            const newRecord = {
                id: Date.now(),
                timestamp: new Date().toISOString(),
                ...record
            };

            // 添加到历史记录开头
            history.unshift(newRecord);

            // 限制历史记录数量
            if (history.length > this.maxHistory) {
                history.splice(this.maxHistory);
            }

            localStorage.setItem(this.storageKey, JSON.stringify(history));
            console.log('历史记录已保存:', newRecord);
        } catch (error) {
            console.error('保存历史记录失败:', error);
        }
    }

    // 获取所有历史记录
    getHistory() {
        try {
            const history = localStorage.getItem(this.storageKey);
            return history ? JSON.parse(history) : [];
        } catch (error) {
            console.error('获取历史记录失败:', error);
            return [];
        }
    }

    // 删除单条记录
    delete(id) {
        try {
            const history = this.getHistory();
            const filtered = history.filter(item => item.id !== id);
            localStorage.setItem(this.storageKey, JSON.stringify(filtered));
            return true;
        } catch (error) {
            console.error('删除历史记录失败:', error);
            return false;
        }
    }

    // 清空所有历史
    clear() {
        try {
            localStorage.removeItem(this.storageKey);
            return true;
        } catch (error) {
            console.error('清空历史记录失败:', error);
            return false;
        }
    }

    // 导出历史记录
    export() {
        const history = this.getHistory();
        const dataStr = JSON.stringify(history, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `xiaozibao_history_${new Date().toISOString().split('T')[0]}.json`;
        link.click();

        URL.revokeObjectURL(link.href);
    }
}

// 全局历史管理器实例
const historyManager = new HistoryManager();

// 显示历史记录
function showHistory() {
    const history = historyManager.getHistory();
    const historyList = document.getElementById('historyList');
    const modal = document.getElementById('historyModal');

    if (history.length === 0) {
        historyList.innerHTML = '<p class="no-history">暂无历史记录</p>';
    } else {
        const historyHtml = history.map(item => createHistoryItem(item)).join('');
        historyList.innerHTML = historyHtml;
    }

    modal.classList.remove('hidden');
}

// 创建历史记录项
function createHistoryItem(item) {
    const date = new Date(item.timestamp);
    const timeStr = date.toLocaleString('zh-CN');

    const languageMap = {
        'chinese': '中文',
        'pinyin': '拼音',
        'english': '英文',
        'japanese': '日文'
    };

    const languages = item.languages.map(lang => languageMap[lang]).join(' + ');

    return `
        <div class="history-item" data-id="${item.id}">
            <div class="history-item-header">
                <div class="history-item-title">《${item.title}》</div>
                <div class="history-item-time">${timeStr}</div>
            </div>
            <div class="history-item-details">
                <div class="history-item-detail"><strong>主题:</strong> ${item.theme}</div>
                <div class="history-item-detail"><strong>语言:</strong> ${languages}</div>
                <div class="history-item-detail"><strong>难度:</strong> ${item.difficulty.replace('level', 'Level ')}</div>
                ${item.environment ? `<div class="history-item-detail"><strong>环境:</strong> ${item.environment}</div>` : ''}
                ${item.generatedImageUrl ? '<div class="history-item-detail"><strong>状态:</strong> 已生成图像</div>' : '<div class="history-item-detail"><strong>状态:</strong> 仅生成Prompt</div>'}
            </div>
            <div class="history-item-actions">
                <button class="btn btn-primary" onclick="viewHistoryItem(${item.id})">查看详情</button>
                <button class="btn btn-secondary" onclick="useHistoryItem(${item.id})">使用此配置</button>
                <button class="btn btn-info" onclick="copyHistoryPrompt(${item.id})">复制Prompt</button>
                <button class="btn btn-danger" onclick="deleteHistoryItem(${item.id})">删除</button>
            </div>
        </div>
    `;
}

// 关闭历史记录
function closeHistory() {
    document.getElementById('historyModal').classList.add('hidden');
}

// 查看历史记录详情
function viewHistoryItem(id) {
    const history = historyManager.getHistory();
    const item = history.find(h => h.id === id);

    if (item) {
        // 创建详情弹窗
        const detailHtml = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>历史记录详情 - 《${item.title}》</h2>
                    <button class="close-btn" onclick="closeHistoryDetail()">&times;</button>
                </div>
                <div class="modal-body">
                    <h3>基本信息</h3>
                    <p><strong>主题:</strong> ${item.theme}</p>
                    <p><strong>标题:</strong> ${item.title}</p>
                    <p><strong>语言组合:</strong> ${item.languages.join(' + ')}</p>
                    <p><strong>难度等级:</strong> ${item.difficulty}</p>
                    ${item.environment ? `<p><strong>环境特征:</strong> ${item.environment}</p>` : ''}

                    <h3>生成的词汇 (${item.vocabulary ? item.vocabulary.length : 0} 个)</h3>
                    ${item.vocabulary ? `
                        <div class="vocabulary-table-container" style="max-height: 200px; overflow-y: auto;">
                            <table class="vocabulary-table">
                                <thead>
                                    <tr>
                                        <th>中文</th>
                                        <th>拼音</th>
                                        <th>英文</th>
                                        <th>日文</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${item.vocabulary.slice(0, 10).map(word => `
                                        <tr>
                                            <td>${word.chinese}</td>
                                            <td>${word.pinyin}</td>
                                            <td>${word.english}</td>
                                            <td>${word.japanese}</td>
                                        </tr>
                                    `).join('')}
                                    ${item.vocabulary.length > 10 ? `<tr><td colspan="4" style="text-align: center; color: #666;">... 还有 ${item.vocabulary.length - 10} 个词汇</td></tr>` : ''}
                                </tbody>
                            </table>
                        </div>
                    ` : '<p>无词汇数据</p>'}

                    <h3>生成的Prompt</h3>
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; max-height: 200px; overflow-y: auto; white-space: pre-wrap; font-family: monospace; font-size: 12px;">
                        ${item.finalPrompt || '无Prompt数据'}
                    </div>

                    ${item.generatedImageUrl ? `
                        <h3>生成的图像</h3>
                        <div style="text-align: center;">
                            <img src="${item.generatedImageUrl}" alt="生成的图像" style="max-width: 100%; max-height: 300px; border-radius: 8px;">
                        </div>
                    ` : ''}
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="closeHistoryDetail()">关闭</button>
                    <button class="btn btn-primary" onclick="useHistoryItem(${id})">使用此配置</button>
                </div>
            </div>
        `;

        // 创建详情弹窗
        const detailModal = document.createElement('div');
        detailModal.id = 'historyDetailModal';
        detailModal.className = 'modal';
        detailModal.innerHTML = detailHtml;
        document.body.appendChild(detailModal);
    }
}

// 关闭历史记录详情
function closeHistoryDetail() {
    const modal = document.getElementById('historyDetailModal');
    if (modal) {
        modal.remove();
    }
}

// 使用历史记录配置
function useHistoryItem(id) {
    const history = historyManager.getHistory();
    const item = history.find(h => h.id === id);

    if (item) {
        // 恢复用户数据
        userData = {
            theme: item.theme,
            title: item.title,
            languages: item.languages,
            difficulty: item.difficulty,
            environment: item.environment || ''
        };

        vocabulary = item.vocabulary || [];
        tags = item.tags || [];
        finalPrompt = item.finalPrompt || '';
        generatedImageUrl = item.generatedImageUrl || '';

        // 关闭历史记录弹窗
        closeHistory();
        closeHistoryDetail();

        // 跳转到最后一步显示结果
        showCompletionPage();

        alert('已恢复历史记录配置！');
    }
}

// 复制历史记录Prompt
function copyHistoryPrompt(id) {
    const history = historyManager.getHistory();
    const item = history.find(h => h.id === id);

    if (item && item.finalPrompt) {
        navigator.clipboard.writeText(item.finalPrompt).then(() => {
            showMessage('Prompt已复制到剪贴板！');
        });
    }
}

// 删除历史记录项
function deleteHistoryItem(id) {
    if (confirm('确定要删除这条历史记录吗？')) {
        if (historyManager.delete(id)) {
            showHistory(); // 刷新列表
            showMessage('历史记录已删除');
        } else {
            alert('删除失败');
        }
    }
}

// 清空所有历史记录
function clearAllHistory() {
    if (confirm('确定要清空所有历史记录吗？此操作不可恢复！')) {
        if (historyManager.clear()) {
            showHistory();
            showMessage('所有历史记录已清空');
        } else {
            alert('清空失败');
        }
    }
}

// 导出历史记录
function exportHistory() {
    historyManager.export();
}

// 修改完成步骤函数，保存历史记录
function showCompletionPage() {
    // 保存到历史记录
    historyManager.save({
        userData: userData,
        vocabulary: vocabulary,
        tags: tags,
        finalPrompt: finalPrompt,
        generatedImageUrl: generatedImageUrl
    });

    // 创建词汇表
    const vocabularyTable = createVocabularyTable();
    document.getElementById('vocabularyTable').innerHTML = vocabularyTable;

    // 显示生成的图像
    if (generatedImageUrl) {
        document.getElementById('generatedImage').innerHTML = `
            <img src="${generatedImageUrl}" alt="生成的儿童识字小报" class="generated-image">
        `;
    } else {
        document.getElementById('generatedImage').innerHTML = `
            <p>图像生成中或未生成</p>
        `;
    }

    goToStep(5);
}
// 生成详细的场景描述
function generateSceneDescription() {
    const theme = userData.theme;
    const environmentText = userData.environment ? `带有${userData.environment}特征` : "";

    const sceneMap = {
        "超市": `【场景环境】：繁忙的超市内部，有整齐排列的货架、明亮的灯光和购物的家庭。${environmentText}`,
        "医院": `【场景环境】：干净的医院走廊或诊室，有医疗设备和穿着白大褂的医护人员。${environmentText}`,
        "公园": `【场景环境】：绿意盎然的公园，有树木、花草和休闲设施。适合家庭游玩。${environmentText}`,
        "学校": `【场景环境】：明亮的教室或校园，有课桌椅、黑板和学习的孩子们。${environmentText}`,
        "公交站": `【场景环境】：城市街道边的公交站，有站牌、候车亭和等车的市民。${environmentText}`,
        "游乐场": `【场景环境】：充满欢乐的游乐场，有各种游乐设施和开心的孩子们。${environmentText}`,
        "家里": `【场景环境】：温馨的家庭环境，有家具和生活用品，体现家庭生活。${environmentText}`,
        "火车站": `【场景环境】：现代化的火车站台，有列车、电子显示屏和候车的旅客。${environmentText}`,
        "飞机场": `【场景环境】：宽敞的机场航站楼，有登机口、行李传送带和准备登机的乘客。${environmentText}`,
        "图书馆": `【场景环境】：安静的图书馆，有整齐的书架、阅读区和正在学习的人们。${environmentText}`,
        "动物园": `【场景环境】：生动的动物园，有各种动物、围栏和参观的游客。${environmentText}`,
        "博物馆": `【场景环境】：庄重的博物馆展厅，有展柜、文物和认真参观的游客。${environmentText}`,
        "书店": `【场景环境】：充满书香的书店，有高大的书架、安静的读者和各式书籍。${environmentText}`
    };

    // 对于自定义主题，生成通用描述
    if (sceneMap[theme]) {
        return sceneMap[theme];
    } else {
        // 根据主题关键词生成场景描述
        let sceneDesc = "";
        if (theme.includes("店") || theme.includes("市场") || theme.includes("商场")) {
            sceneDesc = `商业场所，有店铺、商品、收银台和购物的顾客。${environmentText}`;
        } else if (theme.includes("学校") || theme.includes("教育") || theme.includes("培训")) {
            sceneDesc = `教育场所，有教室、课桌椅、学习用具和师生互动。${environmentText}`;
        } else if (theme.includes("医院") || theme.includes("诊所") || theme.includes("药店")) {
            sceneDesc = `医疗机构，有医疗设备、病房、医生和病人。${environmentText}`;
        } else if (theme.includes("公园") || theme.includes("广场") || theme.includes("花园")) {
            sceneDesc = `公共休闲空间，有绿地、设施、散步的人们和休息区。${environmentText}`;
        } else if (theme.includes("交通") || theme.includes("车站") || theme.includes("机场")) {
            sceneDesc = `交通枢纽，有车辆、设施、乘客和工作人员。${environmentText}`;
        } else {
            sceneDesc = `生活场景，有相关的人物、设施和活动内容。${environmentText}`;
        }
        return `【场景环境】：${sceneDesc}`;
    }
}
