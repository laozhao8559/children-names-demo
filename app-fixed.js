// 全局变量
let currentStep = 1;
let userData = {};
let vocabulary = [];
let tags = [];
let finalPrompt = '';
let generatedImageUrl = '';

// 页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DOM加载完成 ===');
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
    window.previousStep = previousStep;
    window.nextStep = nextStep;
    window.restart = restart;
    window.generateImage = generateImage;
    window.downloadImage = downloadImage;
    window.copyPrompt = copyPrompt;
    window.exportData = exportData;
    window.showHistory = showHistory;
    window.clearAllHistory = clearAllHistory;
    window.closeHistory = closeHistory;
    window.exportHistory = exportHistory;

    // 绑定环境选择变化事件
    const environmentSelect = document.getElementById('environment');
    const customInput = document.getElementById('customEnvironment');

    if (environmentSelect && customInput) {
        environmentSelect.addEventListener('change', function() {
            if (this.value) {
                customInput.style.display = 'none';
                customInput.value = '';
            } else {
                customInput.style.display = 'block';
            }
        });
    }

    console.log('初始化完成');
}

// 主题变化处理
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
    console.log('=== 表单提交开始 ===');
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
        environment: formData.get('environment') || (document.getElementById('customEnvironment') ? document.getElementById('customEnvironment').value : '')
    };

    console.log('收集到的数据:', userData);

    // 验证必填字段
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

        // 保存到历史记录
        saveToHistory();

        // 跳转到第二步
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
    if (!container) {
        console.error('未找到词汇列表容器');
        return;
    }

    let html = '<div class="vocabulary-grid">';

    vocabulary.forEach((word, index) => {
        html += `
            <div class="vocabulary-item">
                <strong>${index + 1}. ${word.chinese}</strong><br>
                <small>${word.pinyin}</small><br>
                <small>${word.english}</small>
            </div>
        `;
    });

    html += '</div>';

    html += `
        <div class="vocabulary-summary">
            <h4>词汇信息</h4>
            <p><strong>主题：</strong>${userData.theme}</p>
            <p><strong>难度：</strong>${getDifficultyDescription()}</p>
            <p><strong>词汇数量：</strong>${vocabulary.length} 个</p>
        </div>
    `;

    container.innerHTML = html;
}

// 获取难度描述
function getDifficultyDescription() {
    const difficultyMap = {
        'level1': 'Level 1：日常常见（适合 5–6 岁）',
        'level2': 'Level 2：场景完整词汇（适合 6–8 岁）',
        'level3': 'Level 3：细节丰富、难度较高（适合 8–9 岁）'
    };
    return difficultyMap[userData.difficulty] || userData.difficulty;
}

// 生成标签
function generateTags() {
    console.log('=== 开始生成标签 ===');

    try {
        showLoading('正在生成标签...');

        tags = generateTagText(vocabulary, userData.languages);
        console.log('生成标签成功:', tags.length);

        displayTags();
        hideLoading();

    } catch (error) {
        console.error('生成标签时出错:', error);
        hideLoading();
        alert('生成标签时出错：' + error.message);
    }
}

// 显示标签
function displayTags() {
    const container = document.getElementById('tagList');
    if (!container) {
        console.error('未找到标签列表容器');
        return;
    }

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
            <h4>标签配置</h4>
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
    console.log('=== 开始生成Prompt ===');

    try {
        showLoading('正在生成绘图Prompt...');

        finalPrompt = createImagePrompt();
        displayPrompt();
        hideLoading();

    } catch (error) {
        console.error('生成Prompt时出错:', error);
        hideLoading();
        alert('生成Prompt时出错：' + error.message);
    }
}

// 创建图像Prompt
function createImagePrompt() {
    const sceneDescription = generateSceneDescription();
    const characterDescription = getCharactersByTheme(userData.theme);

    let prompt = `儿童识字小报插图：${userData.title}

场景描述：${sceneDescription}

画面要求：
- 风格：温馨可爱的儿童插画风格
- 色彩：明亮鲜艳，适合儿童观看
- 构图：清晰展示所有词汇对应的物品
- 人物：包含${characterDescription}
- 环境：${userData.environment ? userData.environment + '环境' : '明亮干净的室内环境'}

词汇标签要求：
每个物品旁边都需要标注，格式为：${generateTagFormatExample()}

需要包含的词汇（${vocabulary.length}个）：
${vocabulary.map((item, index) => `${index + 1}. ${item.chinese}`).join('\n')}

画面风格：
- 适合5-9岁儿童的认知水平
- 线条简洁，色彩明快
- 教育性强，便于识字学习
- 整体布局清晰有序`;

    return prompt;
}

// 生成场景描述
function generateSceneDescription() {
    const sceneMap = {
        '超市': '繁忙的超市内部，有整齐排列的货架、明亮的灯光和购物的家庭',
        '家里': '温馨的家庭客厅，有舒适的家具和家庭成员',
        '学校': '明亮的教室，有课桌椅、黑板和学习的学生',
        '医院': '干净的医院环境，有医生、护士和医疗设备',
        '公园': '绿色的公园环境，有树木、花草和休闲的人们',
        '游乐场': '欢乐的游乐场，有各种游乐设施和快乐的孩子们',
        '动物园': '生动的动物园，有各种动物和参观的游客',
        '公交站': '城市公交站，有候车亭、站牌和等车的乘客',
        '火车站': '繁忙的火车站，有站台、列车和旅客',
        '飞机场': '现代化的机场，有候机厅、飞机和旅客',
        '图书馆': '安静的图书馆，有书架、桌椅和阅读的人们',
        '博物馆': '庄重的博物馆，有展品、说明牌和参观者',
        '书店': '温馨的书店，有书架、桌椅和购书读者'
    };

    const baseDescription = sceneMap[userData.theme] || `一个关于${userData.theme}的场景，包含相关的物品和人物`;

    if (userData.environment) {
        return `${baseDescription}，体现${userData.environment}的特色。`;
    }

    return baseDescription + '。';
}

// 获取人物描述
function getCharactersByTheme(theme) {
    const characterMap = {
        '超市': '购物家庭、收银员、理货员',
        '家里': '家庭成员（父母、孩子）',
        '学校': '学生、老师',
        '医院': '医生、护士、病人',
        '公园': '游客、孩子、老人',
        '游乐场': '小朋友、家长、工作人员',
        '动物园': '游客、饲养员、孩子',
        '公交站': '乘客、司机、学生',
        '火车站': '旅客、乘务员、工作人员',
        '飞机场': '旅客、空乘人员、地勤人员',
        '图书馆': '读者、图书管理员、学生',
        '博物馆': '参观者、讲解员、保安',
        '书店': '读者、店员、学生'
    };

    return characterMap[theme] || '相关的人物和角色';
}

// 生成标签格式示例
function generateTagFormatExample() {
    const formatMap = {
        'chinese': '中文',
        'chinese,english': '中文 (english)',
        'chinese,pinyin': '中文 [pinyin]',
        'chinese,pinyin,english': '中文 [pinyin] (english)',
        'chinese,pinyin,english,japanese': '中文 [pinyin] (english) {japanese}'
    };

    const key = userData.languages.sort().join(',');
    return formatMap[key] || '中文';
}

// 显示Prompt
function displayPrompt() {
    const container = document.getElementById('promptResult');
    if (!container) {
        console.error('未找到Prompt结果容器');
        return;
    }

    const html = `
        <div class="prompt-content">
            <h3>生成的绘图Prompt</h3>
            <pre>${finalPrompt}</pre>
        </div>
        <div class="prompt-actions">
            <button class="btn btn-secondary" onclick="copyPrompt()">复制Prompt</button>
        </div>
    `;

    container.innerHTML = html;
}

// 跳转到指定步骤
function goToStep(step) {
    console.log(`跳转到步骤 ${step}`);

    // 隐藏所有步骤
    document.querySelectorAll('.step-content').forEach(el => {
        el.classList.remove('active');
    });

    // 显示当前步骤
    const stepElement = document.getElementById(`step${step}`);
    if (stepElement) {
        stepElement.classList.add('active');
        console.log(`成功显示步骤 ${step}`);
        currentStep = step;
    } else {
        console.error(`未找到步骤 ${step} 的元素`);
    }

    // 更新步骤指示器
    document.querySelectorAll('.step').forEach(el => {
        el.classList.remove('active');
        el.classList.remove('completed');
    });

    for (let i = 1; i <= step; i++) {
        const stepIndicator = document.querySelector(`.step[data-step="${i}"]`);
        if (stepIndicator) {
            if (i < step) {
                stepIndicator.classList.add('completed');
            } else if (i === step) {
                stepIndicator.classList.add('active');
            }
        }
    }
}

// 上一步
function previousStep() {
    if (currentStep > 1) {
        goToStep(currentStep - 1);
    }
}

// 下一步
function nextStep() {
    console.log('下一步按钮被点击，当前步骤:', currentStep);

    switch (currentStep) {
        case 2:
            generateTags();
            goToStep(3);
            break;
        case 3:
            generatePrompt();
            goToStep(4);
            break;
        case 4:
            goToStep(5);
            break;
    }
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
    const form = document.getElementById('questionsForm');
    if (form) {
        form.reset();
    }

    goToStep(1);
}

// 显示加载提示
function showLoading(text) {
    const overlay = document.getElementById('loadingOverlay');
    const loadingText = document.getElementById('loadingText');

    if (overlay && loadingText) {
        loadingText.textContent = text;
        overlay.classList.remove('hidden');
    }
}

// 隐藏加载提示
function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

// 历史记录管理
function saveToHistory() {
    const history = JSON.parse(localStorage.getItem('xiaozibao_history') || '[]');

    const record = {
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        theme: userData.theme,
        title: userData.title,
        languages: userData.languages,
        difficulty: userData.difficulty,
        environment: userData.environment,
        vocabularyCount: vocabulary.length,
        prompt: finalPrompt
    };

    history.unshift(record);

    // 只保留最近20条记录
    if (history.length > 20) {
        history.splice(20);
    }

    localStorage.setItem('xiaozibao_history', JSON.stringify(history));
}

// 显示历史记录
function showHistory() {
    const history = JSON.parse(localStorage.getItem('xiaozibao_history') || '[]');
    const modal = document.getElementById('historyModal');
    const list = document.getElementById('historyList');

    if (!modal || !list) return;

    if (history.length === 0) {
        list.innerHTML = '<p class="no-history">暂无历史记录</p>';
    } else {
        let html = '';
        history.forEach(record => {
            html += `
                <div class="history-item">
                    <div class="history-item-header">
                        <span class="history-item-title">${record.title}</span>
                        <span class="history-item-time">${record.timestamp}</span>
                    </div>
                    <div class="history-item-details">
                        <div class="history-item-detail">主题：${record.theme}</div>
                        <div class="history-item-detail">语言：${record.languages.join(', ')}</div>
                        <div class="history-item-detail">词汇数：${record.vocabularyCount}</div>
                    </div>
                    <div class="history-item-actions">
                        <button class="btn btn-secondary" onclick="loadHistoryItem(${record.id})">加载</button>
                        <button class="btn btn-info" onclick="copyHistoryPrompt(${record.id})">复制Prompt</button>
                    </div>
                </div>
            `;
        });
        list.innerHTML = html;
    }

    modal.classList.remove('hidden');
}

// 关闭历史记录
function closeHistory() {
    const modal = document.getElementById('historyModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// 清空历史记录
function clearAllHistory() {
    if (confirm('确定要清空所有历史记录吗？此操作不可恢复。')) {
        localStorage.removeItem('xiaozibao_history');
        alert('历史记录已清空');
    }
}

// 导出历史记录
function exportHistory() {
    const history = JSON.parse(localStorage.getItem('xiaozibao_history') || '[]');

    if (history.length === 0) {
        alert('没有历史记录可以导出');
        return;
    }

    const dataStr = JSON.stringify(history, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    const exportFileDefaultName = `xiaozibao_history_${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// 占位函数（为完整功能保留）
function generateImage() {
    alert('图像生成功能需要配置API Key');
}

function downloadImage() {
    alert('请先生成图像');
}

function copyPrompt() {
    if (!finalPrompt) {
        alert('请先生成Prompt');
        return;
    }

    navigator.clipboard.writeText(finalPrompt).then(() => {
        alert('Prompt已复制到剪贴板！');
    }).catch(err => {
        console.error('复制失败:', err);
        alert('复制失败，请手动复制');
    });
}

function exportData() {
    if (!userData || !vocabulary || !tags) {
        alert('没有可导出的数据');
        return;
    }

    const exportData = {
        userData: userData,
        vocabulary: vocabulary,
        tags: tags,
        prompt: finalPrompt,
        exportTime: new Date().toISOString()
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    const exportFileDefaultName = `xiaozibao_${userData.title}_${Date.now()}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

console.log('app-fixed.js 加载完成');