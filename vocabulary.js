// 词汇库数据
const vocabularyDatabase = {
    '超市': {
        level1: [
            { chinese: '苹果', pinyin: 'píng guǒ', english: 'apple', japanese: 'りんご' },
            { chinese: '香蕉', pinyin: 'xiāng jiāo', english: 'banana', japanese: 'バナナ' },
            { chinese: '牛奶', pinyin: 'niú nǎi', english: 'milk', japanese: 'ミルク' },
            { chinese: '面包', pinyin: 'miàn bāo', english: 'bread', japanese: 'パン' },
            { chinese: '鸡蛋', pinyin: 'jī dàn', english: 'egg', japanese: '卵' },
            { chinese: '米饭', pinyin: 'mǐ fàn', english: 'rice', japanese: 'ご飯' },
            { chinese: '蔬菜', pinyin: 'shū cài', english: 'vegetables', japanese: '野菜' },
            { chinese: '水果', pinyin: 'shuǐ guǒ', english: 'fruit', japanese: '果物' },
            { chinese: '果汁', pinyin: 'guǒ zhī', english: 'juice', japanese: 'ジュース' },
            { chinese: '饼干', pinyin: 'bǐng gān', english: 'cookie', japanese: 'クッキー' },
            { chinese: '巧克力', pinyin: 'qiǎo kè lì', english: 'chocolate', japanese: 'チョコレート' },
            { chinese: '糖果', pinyin: 'táng guǒ', english: 'candy', japanese: 'キャンディー' },
            { chinese: '酸奶', pinyin: 'suān nǎi', english: 'yogurt', japanese: 'ヨーグルト' },
            { chinese: '奶酪', pinyin: 'nǎi lào', english: 'cheese', japanese: 'チーズ' },
            { chinese: '蛋糕', pinyin: 'dàn gāo', english: 'cake', japanese: 'ケーキ' }
        ],
        level2: [
            { chinese: '购物车', pinyin: 'gòu wù chē', english: 'shopping cart', japanese: 'ショッピングカート' },
            { chinese: '收银台', pinyin: 'shōu yín tái', english: 'cashier', japanese: 'レジ' },
            { chinese: '货架', pinyin: 'huò jià', english: 'shelf', japanese: '棚' },
            { chinese: '价格标签', pinyin: 'jià gé biāo qiān', english: 'price tag', japanese: '値札' },
            { chinese: '购物袋', pinyin: 'gòu wù dài', english: 'shopping bag', japanese: '買い物袋' },
            { chinese: '冰柜', pinyin: 'bīng guì', english: 'freezer', japanese: '冷凍庫' },
            { chinese: '称重台', pinyin: 'chēng zhòng tái', english: 'weighing scale', japanese: '計量器' },
            { chinese: '促销牌', pinyin: 'cù xiāo pái', english: 'promotion sign', japanese: 'プロモーション看板' },
            { chinese: '会员卡', pinyin: 'huì yuán kǎ', english: 'membership card', japanese: '会員カード' },
            { chinese: '二维码', pinyin: 'èr wéi mǎ', english: 'QR code', japanese: 'QRコード' },
            { chinese: '购物清单', pinyin: 'gòu wù qīng dān', english: 'shopping list', japanese: '買い物リスト' },
            { chinese: '购物篮', pinyin: 'gòu wù lán', english: 'shopping basket', japanese: '買い物かご' },
            { chinese: '冷柜', pinyin: 'lěng guì', english: 'refrigerator', japanese: '冷蔵庫' },
            { chinese: '入口', pinyin: 'rù kǒu', english: 'entrance', japanese: '入口' },
            { chinese: '出口', pinyin: 'chū kǒu', english: 'exit', japanese: '出口' },
            { chinese: '存包柜', pinyin: 'cún bāo guì', english: 'locker', japanese: 'ロッカー' },
            { chinese: '电梯', pinyin: 'diàn tī', english: 'elevator', japanese: 'エレベーター' }
        ],
        level3: [
            { chinese: '条码扫描器', pinyin: 'tiáo mǎ sǎo miáo qì', english: 'barcode scanner', japanese: 'バーコードスキャナー' },
            { chinese: '促销员', pinyin: 'cù xiāo yuán', english: 'promoter', japanese: 'プロモーションスタッフ' },
            { chinese: '理货员', pinyin: 'lǐ huò yuán', english: 'stocker', japanese: '品出し担当者' },
            { chinese: '冷藏区', pinyin: 'lěng cáng qū', english: 'refrigerated section', japanese: '冷蔵セクション' },
            { chinese: '生鲜区', pinyin: 'shēng xiān qū', english: 'fresh food section', japanese: '生鮮食品コーナー' },
            { chinese: '干货区', pinyin: 'gān huò qū', english: 'dry goods section', japanese: 'ドライ食品コーナー' },
            { chinese: '酒水区', pinyin: 'jiǔ shuǐ qū', english: 'beverage section', japanese: '飲料コーナー' },
            { chinese: '化妆品区', pinyin: 'huà zhuāng pǐn qū', english: 'cosmetics section', japanese: '化粧品コーナー' },
            { chinese: '日用品区', pinyin: 'rì yòng pǐn qū', english: 'daily necessities', japanese: '日用品コーナー' },
            { chinese: '电子秤', pinyin: 'diàn zǐ chèng', english: 'electronic scale', japanese: '電子天秤' },
            { chinese: '会员积分', pinyin: 'huì yuán jī fēn', english: 'loyalty points', japanese: '会員ポイント' },
            { chinese: '小票', pinyin: 'xiǎo piào', english: 'receipt', japanese: 'レシート' },
            { chinese: '塑料袋', pinyin: 'sù liào dài', english: 'plastic bag', japanese: 'ビニール袋' },
            { chinese: '环保袋', pinyin: 'huán bǎo dài', english: 'eco-friendly bag', japanese: 'エコバッグ' },
            { chinese: '自助结账', pinyin: 'zì zhù jié zhàng', english: 'self-checkout', japanese: 'セルフレジ' },
            { chinese: '热食区', pinyin: 'rè shí qū', english: 'hot food section', japanese: '惣菜コーナー' },
            { chinese: '烘焙区', pinyin: 'hōng bèi qū', english: 'bakery section', japanese: 'ベーカリーコーナー' },
            { chinese: '进口食品', pinyin: 'jìn kǒu shí pǐn', english: 'imported food', japanese: '輸入食品' }
        ]
    },
    '医院': {
        level1: [
            { chinese: '医生', pinyin: 'yī shēng', english: 'doctor', japanese: '医者' },
            { chinese: '护士', pinyin: 'hù shi', english: 'nurse', japanese: '看護師' },
            { chinese: '病人', pinyin: 'bìng rén', english: 'patient', japanese: '患者' },
            { chinese: '床', pinyin: 'chuáng', english: 'bed', japanese: 'ベッド' },
            { chinese: '药', pinyin: 'yào', english: 'medicine', japanese: '薬' },
            { chinese: '针', pinyin: 'zhēn', english: 'needle', japanese: '針' },
            { chinese: '体温计', pinyin: 'tǐ wēn jì', english: 'thermometer', japanese: '体温計' },
            { chinese: '口罩', pinyin: 'kǒu zhào', english: 'mask', japanese: 'マスク' },
            { chinese: '病历', pinyin: 'bìng lì', english: 'medical record', japanese: 'カルテ' },
            { chinese: '挂号', pinyin: 'guà hào', english: 'registration', japanese: '受付' },
            { chinese: '门诊', pinyin: 'mén zhěn', english: 'outpatient', japanese: '外来' },
            { chinese: '急诊', pinyin: 'jí zhěn', english: 'emergency', japanese: '救急' },
            { chinese: '病房', pinyin: 'bìng fáng', english: 'ward', japanese: '病室' },
            { chinese: '手术', pinyin: 'shǒu shù', english: 'surgery', japanese: '手術' },
            { chinese: '检查', pinyin: 'jiǎn chá', english: 'examination', japanese: '検査' }
        ],
        level2: [
            { chinese: '听诊器', pinyin: 'tīng zhěn qì', english: 'stethoscope', japanese: '聴診器' },
            { chinese: '血压计', pinyin: 'xuè yā jì', english: 'blood pressure monitor', japanese: '血圧計' },
            { chinese: '注射器', pinyin: 'zhù shè qì', english: 'syringe', japanese: '注射器' },
            { chinese: '输液瓶', pinyin: 'shū yè píng', english: 'IV bottle', japanese: '点滴ボトル' },
            { chinese: '药方', pinyin: 'yào fāng', english: 'prescription', japanese: '処方箋' },
            { chinese: '药房', pinyin: 'yào fáng', english: 'pharmacy', japanese: '薬局' },
            { chinese: '化验室', pinyin: 'huà yàn shì', english: 'laboratory', japanese: '検査室' },
            { chinese: 'X光机', pinyin: 'X guāng jī', english: 'X-ray machine', japanese: 'X線装置' },
            { chinese: '心电图', pinyin: 'xīn diàn tú', english: 'ECG', japanese: '心電図' },
            { chinese: 'B超', pinyin: 'B chāo', english: 'ultrasound', japanese: '超音波' },
            { chinese: 'CT室', pinyin: 'CT shì', english: 'CT room', japanese: 'CT室' },
            { chinese: '挂号处', pinyin: 'guà hào chù', english: 'registration desk', japanese: '受付' },
            { chinese: '候诊区', pinyin: 'hòu zhěn qū', english: 'waiting area', japanese: '待合室' },
            { chinese: '诊室', pinyin: 'zhěn shì', english: 'consultation room', japanese: '診察室' },
            { chinese: '手术室', pinyin: 'shǒu shù shì', english: 'operating room', japanese: '手術室' },
            { chinese: '康复科', pinyin: 'kāng fù kē', english: 'rehabilitation', japanese: 'リハビリ科' }
        ],
        level3: [
            { chinese: '核磁共振', pinyin: 'hé cí gòng zhèn', english: 'MRI', japanese: 'MRI' },
            { chinese: '脑电图', pinyin: 'nǎo diàn tú', english: 'EEG', japanese: '脳波' },
            { chinese: '呼吸机', pinyin: 'hū xī jī', english: 'ventilator', japanese: '人工呼吸器' },
            { chinese: '监护仪', pinyin: 'jiān hù yí', english: 'monitor', japanese: 'モニター' },
            { chinese: '除颤器', pinyin: 'chú chàn qì', english: 'defibrillator', japanese: '除細動器' },
            { chinese: '麻醉机', pinyin: 'má zuì jī', english: 'anesthesia machine', japanese: '麻酔器' },
            { chinese: '手术台', pinyin: 'shǒu shù tái', english: 'operating table', japanese: '手術台' },
            { chinese: '无影灯', pinyin: 'wú yǐng dēng', english: 'surgical light', japanese: '手術用照明' },
            { chinese: '消毒器', pinyin: 'xiāo dú qì', english: 'sterilizer', japanese: '消毒器' },
            { chinese: '病理科', pinyin: 'bìng lǐ kē', english: 'pathology', japanese: '病理科' },
            { chinese: '血液科', pinyin: 'xuè yè kē', english: 'hematology', japanese: '血液科' },
            { chinese: '肿瘤科', pinyin: 'zhǒng liú kē', english: 'oncology', japanese: '腫瘍科' },
            { chinese: '心脏科', pinyin: 'xīn zàng kē', english: 'cardiology', japanese: '循環器科' },
            { chinese: '神经科', pinyin: 'shén jīng kē', english: 'neurology', japanese: '神経科' },
            { chinese: '骨科', pinyin: 'gǔ kē', english: 'orthopedics', japanese: '整形外科' },
            { chinese: '眼科', pinyin: 'yǎn kē', english: 'ophthalmology', japanese: '眼科' },
            { chinese: '耳鼻喉科', pinyin: 'ěr bí hóu kē', english: 'ENT', japanese: '耳鼻咽喉科' },
            { chinese: '皮肤科', pinyin: 'pí fū kē', english: 'dermatology', japanese: '皮膚科' },
            { chinese: '妇产科', pinyin: 'fù chǎn kē', english: 'obstetrics', japanese: '産婦人科' },
            { chinese: '儿科', pinyin: 'ér kē', english: 'pediatrics', japanese: '小児科' }
        ]
    },
    '公园': {
        level1: [
            { chinese: '树', pinyin: 'shù', english: 'tree', japanese: '木' },
            { chinese: '花', pinyin: 'huā', english: 'flower', japanese: '花' },
            { chinese: '草', pinyin: 'cǎo', english: 'grass', japanese: '草' },
            { chinese: '鸟', pinyin: 'niǎo', english: 'bird', japanese: '鳥' },
            { chinese: '蝴蝶', pinyin: 'hú dié', english: 'butterfly', japanese: '蝶' },
            { chinese: '长椅', pinyin: 'cháng yǐ', english: 'bench', japanese: 'ベンチ' },
            { chinese: '小路', pinyin: 'xiǎo lù', english: 'path', japanese: '小道' },
            { chinese: '湖', pinyin: 'hú', english: 'lake', japanese: '湖' },
            { chinese: '桥', pinyin: 'qiáo', english: 'bridge', japanese: '橋' },
            { chinese: '喷泉', pinyin: 'pēn quán', english: 'fountain', japanese: '噴水' },
            { chinese: '秋千', pinyin: 'qiū qiān', english: 'swing', japanese: 'ブランコ' },
            { chinese: '滑梯', pinyin: 'huá tī', english: 'slide', japanese: '滑り台' },
            { chinese: '沙坑', pinyin: 'shā kēng', english: 'sandbox', japanese: '砂場' },
            { chinese: '垃圾桶', pinyin: 'lā jī tǒng', english: 'trash can', japanese: 'ゴミ箱' },
            { chinese: '路灯', pinyin: 'lù dēng', english: 'street light', japanese: '街灯' }
        ],
        level2: [
            { chinese: '健身器材', pinyin: 'jiàn shēn qì cái', english: 'fitness equipment', japanese: 'フィットネス器具' },
            { chinese: '篮球场', pinyin: 'lán qiú chǎng', english: 'basketball court', japanese: 'バスケットボールコート' },
            { chinese: '羽毛球场', pinyin: 'yǔ máo qiú chǎng', english: 'badminton court', japanese: 'バドミントンコート' },
            { chinese: '凉亭', pinyin: 'liáng tíng', english: 'pavilion', japanese: '東屋' },
            { chinese: '雕塑', pinyin: 'diāo sù', english: 'sculpture', japanese: '彫刻' },
            { chinese: '指示牌', pinyin: 'zhǐ shì pái', english: 'sign board', japanese: '案内板' },
            { chinese: '自行车道', pinyin: 'zì xíng chē dào', english: 'bike lane', japanese: '自転車道' },
            { chinese: '慢跑道', pinyin: 'màn pǎo dào', english: 'jogging track', japanese: 'ジョギングコース' },
            { chinese: '野餐区', pinyin: 'yě cān qū', english: 'picnic area', japanese: 'ピクニックエリア' },
            { chinese: '儿童游乐区', pinyin: 'ér tóng yóu lè qū', english: 'playground', japanese: '遊び場' },
            { chinese: '荷花池', pinyin: 'hé huā chí', english: 'lotus pond', japanese: '蓮池' },
            { chinese: '竹林', pinyin: 'zhú lín', english: 'bamboo forest', japanese: '竹林' },
            { chinese: '玫瑰花圃', pinyin: 'méi gui huā pǔ', english: 'rose garden', japanese: 'バラ園' },
            { chinese: '草坪', pinyin: 'cǎo píng', english: 'lawn', japanese: '芝生' },
            { chinese: '石子路', pinyin: 'shí zǐ lù', english: 'gravel path', japanese: '砂利道' },
            { chinese: '木栈道', pinyin: 'mù zhàn dào', english: 'wooden walkway', japanese: '木道' }
        ],
        level3: [
            { chinese: '生态湿地', pinyin: 'shēng tài shī dì', english: 'wetland', japanese: '湿地' },
            { chinese: '观鸟台', pinyin: 'guān niǎo tái', english: 'bird watching platform', japanese: 'バードウォッチング台' },
            { chinese: '植物园', pinyin: 'zhí wù yuán', english: 'botanical garden', japanese: '植物園' },
            { chinese: '温室', pinyin: 'wēn shì', english: 'greenhouse', japanese: '温室' },
            { chinese: '瀑布', pinyin: 'pù bù', english: 'waterfall', japanese: '滝' },
            { chinese: '假山', pinyin: 'jiǎ shān', english: 'rockery', japanese: '築山' },
            { chinese: '音乐喷泉', pinyin: 'yīn yuè pēn quán', english: 'musical fountain', japanese: '音楽噴水' },
            { chinese: '户外剧场', pinyin: 'hù wài jù chǎng', english: 'outdoor theater', japanese: '野外劇場' },
            { chinese: '风筝广场', pinyin: 'fēng zheng guǎng chǎng', english: 'kite flying area', japanese: '凧揚げ広場' },
            { chinese: '宠物公园', pinyin: 'chǒng wù gōng yuán', english: 'dog park', japanese: 'ドッグパーク' },
            { chinese: '老年人健身区', pinyin: 'lǎo nián rén jiàn shēn qū', english: 'senior fitness area', japanese: '高齢者フィットネスエリア' },
            { chinese: '滑板公园', pinyin: 'huá bǎn gōng yuán', english: 'skate park', japanese: 'スケートパーク' },
            { chinese: '攀岩墙', pinyin: 'pān yán qiáng', english: 'climbing wall', japanese: 'クライミングウォール' },
            { chinese: '太极广场', pinyin: 'tài jí guǎng chǎng', english: 'tai chi square', japanese: '太極拳広場' },
            { chinese: '书法碑林', pinyin: 'shū fǎ bēi lín', english: 'calligraphy stone forest', japanese: '書道碑林' },
            { chinese: '文化长廊', pinyin: 'wén huà cháng láng', english: 'culture corridor', japanese: '文化回廊' }
        ]
    },
    '学校': {
        level1: [
            { chinese: '老师', pinyin: 'lǎo shī', english: 'teacher', japanese: '先生' },
            { chinese: '学生', pinyin: 'xué shēng', english: 'student', japanese: '学生' },
            { chinese: '教室', pinyin: 'jiào shì', english: 'classroom', japanese: '教室' },
            { chinese: '黑板', pinyin: 'hēi bǎn', english: 'blackboard', japanese: '黒板' },
            { chinese: '课桌', pinyin: 'kè zhuō', english: 'desk', japanese: '机' },
            { chinese: '椅子', pinyin: 'yǐ zi', english: 'chair', japanese: '椅子' },
            { chinese: '书', pinyin: 'shū', english: 'book', japanese: '本' },
            { chinese: '铅笔', pinyin: 'qiān bǐ', english: 'pencil', japanese: '鉛筆' },
            { chinese: '橡皮', pinyin: 'xiàng pí', english: 'eraser', japanese: '消しゴム' },
            { chinese: '书包', pinyin: 'shū bāo', english: 'school bag', japanese: 'ランドセル' },
            { chinese: '操场', pinyin: 'cāo chǎng', english: 'playground', japanese: '校庭' },
            { chinese: '图书馆', pinyin: 'tú shū guǎn', english: 'library', japanese: '図書館' },
            { chinese: '食堂', pinyin: 'shí táng', english: 'cafeteria', japanese: '食堂' },
            { chinese: '校门', pinyin: 'xiào mén', english: 'school gate', japanese: '校門' },
            { chinese: '旗杆', pinyin: 'qí gān', english: 'flagpole', japanese: '旗竿' }
        ],
        level2: [
            { chinese: '校长', pinyin: 'xiào zhǎng', english: 'principal', japanese: '校長' },
            { chinese: '办公室', pinyin: 'bàn gōng shì', english: 'office', japanese: '事務室' },
            { chinese: '实验室', pinyin: 'shí yàn shì', english: 'laboratory', japanese: '実験室' },
            { chinese: '电脑室', pinyin: 'diàn nǎo shì', english: 'computer room', japanese: 'コンピュータ室' },
            { chinese: '音乐室', pinyin: 'yīn yuè shì', english: 'music room', japanese: '音楽室' },
            { chinese: '美术室', pinyin: 'měi shù shì', english: 'art room', japanese: '美術室' },
            { chinese: '体育馆', pinyin: 'tǐ yù guǎn', english: 'gymnasium', japanese: '体育館' },
            { chinese: '医务室', pinyin: 'yī wù shì', english: 'nurse office', japanese: '保健室' },
            { chinese: '操场器材', pinyin: 'cāo chǎng qì cái', english: 'playground equipment', japanese: '校庭器具' },
            { chinese: '篮球架', pinyin: 'lán qiú jià', english: 'basketball hoop', japanese: 'バスケットゴール' },
            { chinese: '足球门', pinyin: 'zú qiú mén', english: 'soccer goal', japanese: 'サッカーゴール' },
            { chinese: '跑道', pinyin: 'pǎo dào', english: 'track', japanese: 'トラック' },
            { chinese: '单杠', pinyin: 'dān gàng', english: 'horizontal bar', japanese: '鉄棒' },
            { chinese: '双杠', pinyin: 'shuāng gàng', english: 'parallel bars', japanese: '平行棒' },
            { chinese: '沙坑', pinyin: 'shā kēng', english: 'sand pit', japanese: '砂場' },
            { chinese: '跳箱', pinyin: 'tiào xiāng', english: 'vaulting box', japanese: '跳び箱' }
        ],
        level3: [
            { chinese: '投影仪', pinyin: 'tóu yǐng yí', english: 'projector', japanese: 'プロジェクター' },
            { chinese: '白板', pinyin: 'bái bǎn', english: 'whiteboard', japanese: 'ホワイトボード' },
            { chinese: '课桌椅', pinyin: 'kè zhuō yǐ', english: 'desk and chair set', japanese: '学習机セット' },
            { chinese: '储物柜', pinyin: 'chǔ wù guì', english: 'locker', japanese: 'ロッカー' },
            { chinese: '公告栏', pinyin: 'gōng gào lán', english: 'bulletin board', japanese: '掲示板' },
            { chinese: '成绩单', pinyin: 'chéng jī dān', english: 'report card', japanese: '成績表' },
            { chinese: '作业本', pinyin: 'zuò yè běn', english: 'homework notebook', japanese: '宿題ノート' },
            { chinese: '试卷', pinyin: 'shì juàn', english: 'exam paper', japanese: '試験問題' },
            { chinese: '奖状', pinyin: 'jiǎng zhuàng', english: 'award certificate', japanese: '賞状' },
            { chinese: '毕业证书', pinyin: 'bì yè zhèng shū', english: 'diploma', japanese: '卒業証書' },
            { chinese: '校徽', pinyin: 'xiào huī', english: 'school badge', japanese: '校章' },
            { chinese: '校服', pinyin: 'xiào fú', english: 'school uniform', japanese: '制服' },
            { chinese: '红领巾', pinyin: 'hóng lǐng jīn', english: 'red scarf', japanese: '赤いネクタイ' },
            { chinese: '值日生', pinyin: 'zhí rì shēng', english: 'student on duty', japanese: '当番' },
            { chinese: '班长', pinyin: 'bān zhǎng', english: 'class monitor', japanese: '学級委員' },
            { chinese: '学习委员', pinyin: 'xué xí wěi yuán', english: 'study committee member', japanese: '学習委員' },
            { chinese: '体育委员', pinyin: 'tǐ yù wěi yuán', english: 'sports committee member', japanese: '体育委員' }
        ]
    },
    '公交站': {
        level1: [
            { chinese: '公交车', pinyin: 'gōng jiāo chē', english: 'bus', japanese: 'バス' },
            { chinese: '站牌', pinyin: 'zhàn pái', english: 'bus stop sign', japanese: 'バス停' },
            { chinese: '座椅', pinyin: 'zuò yǐ', english: 'seat', japanese: '座席' },
            { chinese: '雨棚', pinyin: 'yǔ péng', english: 'shelter', japanese: '屋根' },
            { chinese: '路线图', pinyin: 'lù xiàn tú', english: 'route map', japanese: '路線図' },
            { chinese: '时刻表', pinyin: 'shí kè biǎo', english: 'schedule', japanese: '時刻表' },
            { chinese: '投币箱', pinyin: 'tóu bì xiāng', english: 'coin box', japanese: '料金箱' },
            { chinese: '司机', pinyin: 'sī jī', english: 'driver', japanese: '運転手' },
            { chinese: '乘客', pinyin: 'chéng kè', english: 'passenger', japanese: '乗客' },
            { chinese: '老人', pinyin: 'lǎo rén', english: 'elderly', japanese: '老人' },
            { chinese: '学生', pinyin: 'xué shēng', english: 'student', japanese: '学生' },
            { chinese: '孩子', pinyin: 'hái zi', english: 'child', japanese: '子供' },
            { chinese: '背包', pinyin: 'bèi bāo', english: 'backpack', japanese: 'リュック' },
            { chinese: '雨伞', pinyin: 'yǔ sǎn', english: 'umbrella', japanese: '傘' },
            { chinese: '报纸', pinyin: 'bào zhǐ', english: 'newspaper', japanese: '新聞' }
        ],
        level2: [
            { chinese: 'IC卡', pinyin: 'IC kǎ', english: 'IC card', japanese: 'ICカード' },
            { chinese: '站务员', pinyin: 'zhàn wù yuán', english: 'station staff', japanese: '駅員' },
            { chinese: '空调', pinyin: 'kōng tiáo', english: 'air conditioner', japanese: 'エアコン' },
            { chinese: '扶手', pinyin: 'fú shǒu', english: 'handrail', japanese: '手すり' },
            { chinese: '下车铃', pinyin: 'xià chē líng', english: 'stop button', japanese: '停車ボタン' },
            { chinese: '线路号', pinyin: 'xiàn lù hào', english: 'route number', japanese: '系統番号' },
            { chinese: '电子屏', pinyin: 'diàn zǐ píng', english: 'display screen', japanese: '電光掲示板' },
            { chinese: '广告牌', pinyin: 'guǎng gào pái', english: 'advertisement', japanese: '広告' },
            { chinese: '垃圾箱', pinyin: 'lā jī xiāng', english: 'trash can', japanese: 'ゴミ箱' },
            { chinese: '无障碍通道', pinyin: 'wú zhàng ài tōng dào', english: 'accessible path', japanese: 'バリアフリー通路' },
            { chinese: '自行车架', pinyin: 'zì xíng chē jià', english: 'bike rack', japanese: '自転車ラック' },
            { chinese: '候车亭', pinyin: 'hòu chē tíng', english: 'waiting shelter', japanese: '待合所' },
            { chinese: '路灯', pinyin: 'lù dēng', english: 'street light', japanese: '街灯' },
            { chinese: '交通灯', pinyin: 'jiāo tōng dēng', english: 'traffic light', japanese: '信号機' },
            { chinese: '人行道', pinyin: 'rén xíng dào', english: 'sidewalk', japanese: '歩道' },
            { chinese: '马路', pinyin: 'mǎ lù', english: 'road', japanese: '道路' }
        ],
        level3: [
            { chinese: 'GPS定位', pinyin: 'GPS dìng wèi', english: 'GPS positioning', japanese: 'GPS位置情報' },
            { chinese: '实时公交', pinyin: 'shí shí gōng jiāo', english: 'real-time bus', japanese: 'リアルタイムバス' },
            { chinese: '移动支付', pinyin: 'yí dòng zhī fù', english: 'mobile payment', japanese: 'モバイル決済' },
            { chinese: '残疾人设施', pinyin: 'cán jí rén shè shī', english: 'disability facilities', japanese: '障害者施設' },
            { chinese: '候车座位', pinyin: 'hòu chē zuò wèi', english: 'waiting seats', japanese: '待合座席' },
            { chinese: '遮阳帘', pinyin: 'zhē yáng lián', english: 'sunshade', japanese: '日除け' },
            { chinese: '监控系统', pinyin: 'jiān kòng xì tǒng', english: 'monitoring system', japanese: '監視システム' },
            { chinese: '紧急呼叫', pinyin: 'jǐn jí hū jiào', english: 'emergency call', japanese: '緊急呼び出し' },
            { chinese: '充电桩', pinyin: 'chōng diàn zhuāng', english: 'charging station', japanese: '充電ステーション' },
            { chinese: '智能站牌', pinyin: 'zhì néng zhàn pái', english: 'smart bus stop', japanese: 'スマートバス停' }
        ]
    },
    '游乐场': {
        level1: [
            { chinese: '秋千', pinyin: 'qiū qiān', english: 'swing', japanese: 'ブランコ' },
            { chinese: '滑梯', pinyin: 'huá tī', english: 'slide', japanese: '滑り台' },
            { chinese: '跷跷板', pinyin: 'qiāo qiāo bǎn', english: 'seesaw', japanese: 'シーソー' },
            { chinese: '旋转木马', pinyin: 'xuán zhuǎn mù mǎ', english: 'carousel', japanese: '回転木馬' },
            { chinese: '沙坑', pinyin: 'shā kēng', english: 'sandbox', japanese: '砂場' },
            { chinese: '小朋友', pinyin: 'xiǎo péng yǒu', english: 'children', japanese: '子供たち' },
            { chinese: '家长', pinyin: 'jiā zhǎng', english: 'parents', japanese: '親' },
            { chinese: '气球', pinyin: 'qì qiú', english: 'balloon', japanese: '風船' },
            { chinese: '冰淇淋', pinyin: 'bīng qí lín', english: 'ice cream', japanese: 'アイスクリーム' },
            { chinese: '爆米花', pinyin: 'bào mǐ huā', english: 'popcorn', japanese: 'ポップコーン' },
            { chinese: '棉花糖', pinyin: 'mián huā táng', english: 'cotton candy', japanese: 'わたがし' },
            { chinese: '小火车', pinyin: 'xiǎo huǒ chē', english: 'mini train', japanese: 'ミニ電車' },
            { chinese: '摩天轮', pinyin: 'mó tiān lún', english: 'ferris wheel', japanese: '観覧車' },
            { chinese: '碰碰车', pinyin: 'pèng pèng chē', english: 'bumper car', japanese: 'バッテリーカー' },
            { chinese: '充气城堡', pinyin: 'chōng qì chéng bǎo', english: 'bouncy castle', japanese: 'エア Castle' }
        ],
        level2: [
            { chinese: '安全网', pinyin: 'ān quán wǎng', english: 'safety net', japanese: '安全ネット' },
            { chinese: '护栏', pinyin: 'hù lán', english: 'guardrail', japanese: '手すり' },
            { chinese: '售票亭', pinyin: 'shòu piào tíng', english: 'ticket booth', japanese: 'チケット売り場' },
            { chinese: '游戏币', pinyin: 'yóu xì bì', english: 'game coins', japanese: 'ゲームコイン' },
            { chinese: '礼物店', pinyin: 'lǐ wù diàn', english: 'gift shop', japanese: '土産物屋' },
            { chinese: '休息区', pinyin: 'xiū xi qū', english: 'rest area', japanese: '休憩所' },
            { chinese: '饮料摊', pinyin: 'yǐn liào tān', english: 'drink stall', japanese: '飲料スタンド' },
            { chinese: '洗手间', pinyin: 'xǐ shǒu jiān', english: 'restroom', japanese: 'トイレ' },
            { chinese: '指示牌', pinyin: 'zhǐ shì pái', english: 'sign board', japanese: '案内板' },
            { chinese: '扩音器', pinyin: 'kuò yīn qì', english: 'loudspeaker', japanese: 'スピーカー' },
            { chinese: '急救箱', pinyin: 'jí jiù xiāng', english: 'first aid kit', japanese: '救急箱' },
            { chinese: '长椅', pinyin: 'cháng yǐ', english: 'bench', japanese: 'ベンチ' },
            { chinese: '垃圾桶', pinyin: 'lā jī tǒng', english: 'trash can', japanese: 'ゴミ箱' },
            { chinese: '饮水机', pinyin: 'yǐn shuǐ jī', english: 'water fountain', japanese: '飲料水設備' },
            { chinese: '储物柜', pinyin: 'chǔ wù guì', english: 'locker', japanese: 'ロッカー' }
        ],
        level3: [
            { chinese: '过山车', pinyin: 'guò shān chē', english: 'roller coaster', japanese: 'ジェットコースター' },
            { chinese: '海盗船', pinyin: 'hǎi dào chuán', english: 'pirate ship', japanese: '海賊船' },
            { chinese: '蹦极台', pinyin: 'bèng jí tái', english: 'bungee jump', japanese: 'バンジージャンプ' },
            { chinese: '卡丁车', pinyin: 'kǎ dīng chē', english: 'go-kart', japanese: 'カート' },
            { chinese: '攀岩墙', pinyin: 'pān yán qiáng', english: 'climbing wall', japanese: 'クライミングウォール' },
            { chinese: '鬼屋', pinyin: 'guǐ wū', english: 'haunted house', japanese: 'お化け屋敷' },
            { chinese: '镜宫', pinyin: 'jìng gōng', english: 'hall of mirrors', japanese: '鏡の宮殿' },
            { chinese: 'VR体验', pinyin: 'VR tǐ yàn', english: 'VR experience', japanese: 'VR体験' },
            { chinese: '4D影院', pinyin: '4D diàn yǐng', english: '4D cinema', japanese: '4Dシネマ' },
            { chinese: '主题餐厅', pinyin: 'zhǔ tí cān tīng', english: 'theme restaurant', japanese: 'テーマレストラン' }
        ]
    },
    '家里': {
        level1: [
            { chinese: '沙发', pinyin: 'shā fā', english: 'sofa', japanese: 'ソファ' },
            { chinese: '桌子', pinyin: 'zhuō zi', english: 'table', japanese: 'テーブル' },
            { chinese: '椅子', pinyin: 'yǐ zi', english: 'chair', japanese: '椅子' },
            { chinese: '床', pinyin: 'chuáng', english: 'bed', japanese: 'ベッド' },
            { chinese: '电视', pinyin: 'diàn shì', english: 'TV', japanese: 'テレビ' },
            { chinese: '冰箱', pinyin: 'bīng xiāng', english: 'refrigerator', japanese: '冷蔵庫' },
            { chinese: '洗衣机', pinyin: 'xǐ yī jī', english: 'washing machine', japanese: '洗濯機' },
            { chinese: '空调', pinyin: 'kōng tiáo', english: 'air conditioner', japanese: 'エアコン' },
            { chinese: '书架', pinyin: 'shū jià', english: 'bookshelf', japanese: '本棚' },
            { chinese: '衣柜', pinyin: 'yī guì', english: 'wardrobe', japanese: 'クローゼット' },
            { chinese: '台灯', pinyin: 'tái dēng', english: 'desk lamp', japanese: 'デスクライト' },
            { chinese: '窗帘', pinyin: 'chuāng lián', english: 'curtain', japanese: 'カーテン' },
            { chinese: '地毯', pinyin: 'dì tǎn', english: 'carpet', japanese: 'カーペット' },
            { chinese: '花瓶', pinyin: 'huā píng', english: 'vase', japanese: '花瓶' },
            { chinese: '时钟', pinyin: 'shí zhōng', english: 'clock', japanese: '時計' }
        ],
        level2: [
            { chinese: '微波炉', pinyin: 'wēi bō lú', english: 'microwave', japanese: '電子レンジ' },
            { chinese: '烤箱', pinyin: 'kǎo xiāng', english: 'oven', japanese: 'オーブン' },
            { chinese: '煤气灶', pinyin: 'méi qì zào', english: 'gas stove', japanese: 'ガスコンロ' },
            { chinese: '水槽', pinyin: 'shuǐ cáo', english: 'sink', japanese: '流し台' },
            { chinese: '橱柜', pinyin: 'chú guì', english: 'cabinet', japanese: '食器棚' },
            { chinese: '垃圾桶', pinyin: 'lā jī tǒng', english: 'trash can', japanese: 'ゴミ箱' },
            { chinese: '拖把', pinyin: 'tuō bǎ', english: 'mop', japanese: 'モップ' },
            { chinese: '扫帚', pinyin: 'sào zhou', english: 'broom', japanese: 'ほうき' },
            { chinese: '吸尘器', pinyin: 'xī chén qì', english: 'vacuum cleaner', japanese: '掃除機' },
            { chinese: '熨斗', pinyin: 'yùn dǒu', english: 'iron', japanese: 'アイロン' },
            { chinese: '衣架', pinyin: 'yī jià', english: 'clothes hanger', japanese: 'ハンガー' },
            { chinese: '镜子', pinyin: 'jìng zi', english: 'mirror', japanese: '鏡' },
            { chinese: '相框', pinyin: 'xiāng kuàng', english: 'photo frame', japanese: '写真立て' },
            { chinese: '遥控器', pinyin: 'yáo kòng qì', english: 'remote control', japanese: 'リモコン' },
            { chinese: '插座', pinyin: 'chā zuò', english: 'socket', japanese: 'コンセント' },
            { chinese: '门', pinyin: 'mén', english: 'door', japanese: 'ドア' }
        ],
        level3: [
            { chinese: '智能家居', pinyin: 'zhì néng jiā jū', english: 'smart home', japanese: 'スマートホーム' },
            { chinese: '空气净化器', pinyin: 'kōng qì jìng huà qì', english: 'air purifier', japanese: '空気清浄機' },
            { chinese: '加湿器', pinyin: 'jiā shī qì', english: 'humidifier', japanese: '加湿器' },
            { chinese: '洗碗机', pinyin: 'xǐ wǎn jī', english: 'dishwasher', japanese: '食洗機' },
            { chinese: '咖啡机', pinyin: 'kā fēi jī', english: 'coffee maker', japanese: 'コーヒーメーカー' },
            { chinese: '面包机', pinyin: 'miàn bāo jī', english: 'toaster', japanese: 'トースター' },
            { chinese: '榨汁机', pinyin: 'zhà zhī jī', english: 'juicer', japanese: 'ジューサー' },
            { chinese: '烘干机', pinyin: 'hōng gān jī', english: 'dryer', japanese: '乾燥機' },
            { chinese: '智能音箱', pinyin: 'zhì néng yīn xiāng', english: 'smart speaker', japanese: 'スマートスピーカー' },
            { chinese: '监控摄像头', pinyin: 'jiān kòng shè xiàng tóu', english: 'security camera', japanese: '防犯カメラ' }
        ]
    },
    '图书馆': {
        level1: [
            { chinese: '书', pinyin: 'shū', english: 'book', japanese: '本' },
            { chinese: '书架', pinyin: 'shū jià', english: 'bookshelf', japanese: '本棚' },
            { chinese: '桌子', pinyin: 'zhuō zi', english: 'desk', japanese: '机' },
            { chinese: '椅子', pinyin: 'yǐ zi', english: 'chair', japanese: '椅子' },
            { chinese: '读者', pinyin: 'dú zhě', english: 'reader', japanese: '読者' },
            { chinese: '图书管理员', pinyin: 'tú shū guǎn lǐ yuán', english: 'librarian', japanese: '図書館員' },
            { chinese: '借书证', pinyin: 'jiè shū zhèng', english: 'library card', japanese: '図書館カード' },
            { chinese: '电脑', pinyin: 'diàn nǎo', english: 'computer', japanese: 'パソコン' },
            { chinese: '打印机', pinyin: 'dǎ yìn jī', english: 'printer', japanese: 'プリンター' },
            { chinese: '杂志', pinyin: 'zá zhì', english: 'magazine', japanese: '雑誌' },
            { chinese: '报纸', pinyin: 'bào zhǐ', english: 'newspaper', japanese: '新聞' },
            { chinese: '字典', pinyin: 'zì diǎn', english: 'dictionary', japanese: '辞書' },
            { chinese: '笔', pinyin: 'bǐ', english: 'pen', japanese: 'ペン' },
            { chinese: '笔记本', pinyin: 'bǐ jì běn', english: 'notebook', japanese: 'ノート' },
            { chinese: '书包', pinyin: 'shū bāo', english: 'backpack', japanese: 'リュック' }
        ],
        level2: [
            { chinese: '自习区', pinyin: 'zì xí qū', english: 'study area', japanese: '自習スペース' },
            { chinese: '阅览室', pinyin: 'yuè lǎn shì', english: 'reading room', japanese: '閲覧室' },
            { chinese: '儿童区', pinyin: 'ér tóng qū', english: 'children section', japanese: '児童コーナー' },
            { chinese: '电子阅览', pinyin: 'diàn zǐ yuè lǎn', english: 'e-reading', japanese: '電子閲覧' },
            { chinese: '检索机', pinyin: 'jiǎn suǒ jī', english: 'search computer', japanese: '検索機' },
            { chinese: '还书箱', pinyin: 'huán shū xiāng', english: 'book return', japanese: '返却ボックス' },
            { chinese: '复印机', pinyin: 'fù yìn jī', english: 'photocopier', japanese: 'コピー機' },
            { chinese: '扫描仪', pinyin: 'sǎo miáo yí', english: 'scanner', japanese: 'スキャナー' },
            { chinese: '空调', pinyin: 'kōng tiáo', english: 'air conditioner', japanese: 'エアコン' },
            { chinese: '饮水机', pinyin: 'yǐn shuǐ jī', english: 'water dispenser', japanese: '飲料水設備' },
            { chinese: '垃圾桶', pinyin: 'lā jī tǒng', english: 'trash can', japanese: 'ゴミ箱' },
            { chinese: '灭火器', pinyin: 'miè huǒ qì', english: 'fire extinguisher', japanese: '消火器' },
            { chinese: '紧急出口', pinyin: 'jǐn jí chū kǒu', english: 'emergency exit', japanese: '非常口' },
            { chinese: '指示牌', pinyin: 'zhǐ shì pái', english: 'sign board', japanese: '案内板' },
            { chinese: '时钟', pinyin: 'shí zhōng', english: 'clock', japanese: '時計' }
        ],
        level3: [
            { chinese: '数字图书馆', pinyin: 'shù zì tú shū guǎn', english: 'digital library', japanese: '電子図書館' },
            { chinese: '有声读物', pinyin: 'yǒu shēng dú wù', english: 'audiobook', japanese: 'オーディオブック' },
            { chinese: '电子书', pinyin: 'diàn zǐ shū', english: 'e-book', japanese: '電子書籍' },
            { chinese: '自助借还', pinyin: 'zì zhù jiè huán', english: 'self-service', japanese: 'セルフサービス' },
            { chinese: '数据库', pinyin: 'shù jù kù', english: 'database', japanese: 'データベース' },
            { chinese: '文献检索', pinyin: 'wén xiàn jiǎn suǒ', english: 'document search', japanese: '文献検索' },
            { chinese: '学术期刊', pinyin: 'xué shù qī kān', english: 'academic journal', japanese: '学術雑誌' },
            { chinese: '多媒体室', pinyin: 'duō méi tǐ shì', english: 'multimedia room', japanese: 'マルチメディアルーム' },
            { chinese: '讨论室', pinyin: 'tǎo lùn shì', english: 'discussion room', japanese: '研究室' },
            { chinese: '展览区', pinyin: 'zhǎn lǎn qū', english: 'exhibition area', japanese: '展示エリア' }
        ]
    },
    '动物园': {
        level1: [
            { chinese: '猴子', pinyin: 'hóu zi', english: 'monkey', japanese: '猿' },
            { chinese: '大象', pinyin: 'dà xiàng', english: 'elephant', japanese: '象' },
            { chinese: '狮子', pinyin: 'shī zi', english: 'lion', japanese: 'ライオン' },
            { chinese: '老虎', pinyin: 'lǎo hǔ', english: 'tiger', japanese: '虎' },
            { chinese: '熊猫', pinyin: 'xióng māo', english: 'panda', japanese: 'パンダ' },
            { chinese: '长颈鹿', pinyin: 'cháng jǐng lù', english: 'giraffe', japanese: 'キリン' },
            { chinese: '斑马', pinyin: 'bān mǎ', english: 'zebra', japanese: 'シマウマ' },
            { chinese: '袋鼠', pinyin: 'dài shǔ', english: 'kangaroo', japanese: 'カンガルー' },
            { chinese: '企鹅', pinyin: 'qǐ é', english: 'penguin', japanese: 'ペンギン' },
            { chinese: '鹦鹉', pinyin: 'yīng wǔ', english: 'parrot', japanese: 'オウム' },
            { chinese: '游客', pinyin: 'yóu kè', english: 'visitor', japanese: '観光客' },
            { chinese: '饲养员', pinyin: 'sì yǎng yuán', english: 'zookeeper', japanese: '飼育員' },
            { chinese: '栅栏', pinyin: 'zhà lan', english: 'fence', japanese: '柵' },
            { chinese: '笼子', pinyin: 'lóng zi', english: 'cage', japanese: '檻' },
            { chinese: '水池', pinyin: 'shuǐ chí', english: 'pool', japanese: 'プール' }
        ],
        level2: [
            { chinese: '海豚', pinyin: 'hái tún', english: 'dolphin', japanese: 'イルカ' },
            { chinese: '海狮', pinyin: 'hái shī', english: 'sea lion', japanese: 'アシカ' },
            { chinese: '鳄鱼', pinyin: 'è yú', english: 'crocodile', japanese: 'ワニ' },
            { chinese: '蛇', pinyin: 'shé', english: 'snake', japanese: '蛇' },
            { chinese: '乌龟', pinyin: 'wū guī', english: 'turtle', japanese: '亀' },
            { chinese: '兔子', pinyin: 'tù zi', english: 'rabbit', japanese: 'ウサギ' },
            { chinese: '孔雀', pinyin: 'kǒng què', english: 'peacock', japanese: 'クジャク' },
            { chinese: '火烈鸟', pinyin: 'huǒ liè niǎo', english: 'flamingo', japanese: 'フラミンゴ' },
            { chinese: '鹿', pinyin: 'lù', english: 'deer', japanese: '鹿' },
            { chinese: '狐狸', pinyin: 'hú li', english: 'fox', japanese: 'キツネ' },
            { chinese: '熊', pinyin: 'xióng', english: 'bear', japanese: '熊' },
            { chinese: '狼', pinyin: 'láng', english: 'wolf', japanese: 'オオカミ' },
            { chinese: '骆驼', pinyin: 'luò tuo', english: 'camel', japanese: 'ラクダ' },
            { chinese: '犀牛', pinyin: 'xī niú', english: 'rhino', japanese: 'サイ' },
            { chinese: '河马', pinyin: 'hé mǎ', english: 'hippo', japanese: 'カバ' }
        ],
        level3: [
            { chinese: '爬行动物馆', pinyin: 'pá xíng dòng wù guǎn', english: 'reptile house', japanese: '爬虫類館' },
            { chinese: '海洋馆', pinyin: 'hǎi yáng guǎn', english: 'aquarium', japanese: '水族館' },
            { chinese: '鸟语林', pinyin: 'niǎo yǔ lín', english: 'aviary', japanese: 'バードハウス' },
            { chinese: '猛兽区', pinyin: 'měng shòu qū', english: 'carnivore section', japanese: '猛獣エリア' },
            { chinese: '灵长类', pinyin: 'líng zhǎng lèi', english: 'primate', japanese: '霊長類' },
            { chinese: '食草动物', pinyin: 'shí cǎo dòng wù', english: 'herbivore', japanese: '草食動物' },
            { chinese: '夜行动物', pinyin: 'yè xíng dòng wù', english: 'nocturnal animal', japanese: '夜行性動物' },
            { chinese: '表演场', pinyin: 'biǎo yǎn chǎng', english: 'performance arena', japanese: 'ショー会場' },
            { chinese: '科普教育', pinyin: 'kē pǔ jiào yù', english: 'science education', japanese: '科学教育' },
            { chinese: '生态保护', pinyin: 'shēng tài bǎo hù', english: 'conservation', japanese: '生態保護' }
        ]
    },
    '火车站': {
        level1: [
            { chinese: '火车', pinyin: 'huǒ chē', english: 'train', japanese: '電車' },
            { chinese: '站台', pinyin: 'zhàn tái', english: 'platform', japanese: 'ホーム' },
            { chinese: '铁轨', pinyin: 'tiě guǐ', english: 'railway', japanese: '線路' },
            { chinese: '候车室', pinyin: 'hòu chē shì', english: 'waiting room', japanese: '待合室' },
            { chinese: '售票员', pinyin: 'shòu piào yuán', english: 'ticket seller', japanese: '乗車券販売員' },
            { chinese: '检票员', pinyin: 'jiǎn piào yuán', english: 'ticket inspector', japanese: '改札係' },
            { chinese: '乘客', pinyin: 'chéng kè', english: 'passenger', japanese: '乗客' },
            { chinese: '行李', pinyin: 'xíng lǐ', english: 'luggage', japanese: '荷物' },
            { chinese: '行李箱', pinyin: 'xíng lǐ xiāng', english: 'suitcase', japanese: 'スーツケース' },
            { chinese: '时刻表', pinyin: 'shí kè biǎo', english: 'schedule', japanese: '時刻表' },
            { chinese: '电子屏', pinyin: 'diàn zǐ píng', english: 'display screen', japanese: '電光掲示板' },
            { chinese: '座椅', pinyin: 'zuò yǐ', english: 'seat', japanese: '座席' },
            { chinese: '搬运工', pinyin: 'bān yùn gōng', english: 'porter', japanese: 'ポーター' },
            { chinese: '警察', pinyin: 'jǐng chá', english: 'police', japanese: '警察' },
            { chinese: '志愿者', pinyin: 'zhì yuàn zhě', english: 'volunteer', japanese: 'ボランティア' }
        ],
        level2: [
            { chinese: '高铁', pinyin: 'gāo tiě', english: 'high-speed rail', japanese: '新幹線' },
            { chinese: '动车', pinyin: 'dòng chē', english: 'bullet train', japanese: '特急電車' },
            { chinese: '普快', pinyin: 'pǔ kuài', english: 'express train', japanese: '急行列車' },
            { chinese: '地铁', pinyin: 'dì tiě', english: 'subway', japanese: '地下鉄' },
            { chinese: '轻轨', pinyin: 'qīng guǐ', english: 'light rail', japanese: 'モノレール' },
            { chinese: '信号灯', pinyin: 'xìn hào dēng', english: 'signal light', japanese: '信号機' },
            { chinese: '天桥', pinyin: 'tiān qiáo', english: 'overpass', japanese: '跨線橋' },
            { chinese: '地道', pinyin: 'dì dào', english: 'underpass', japanese: '地下道' },
            { chinese: '便利店', pinyin: 'biàn lì diàn', english: 'convenience store', japanese: 'コンビニ' },
            { chinese: '餐厅', pinyin: 'cān tīng', english: 'restaurant', japanese: 'レストラン' },
            { chinese: '咖啡厅', pinyin: 'kā fēi tīng', english: 'cafe', japanese: 'カフェ' },
            { chinese: '书店', pinyin: 'shū diàn', english: 'bookstore', japanese: '書店' },
            { chinese: 'ATM机', pinyin: 'ATM jī', english: 'ATM', japanese: 'ATM' },
            { chinese: '储物柜', pinyin: 'chǔ wù guì', english: 'locker', japanese: 'ロッカー' },
            { chinese: '垃圾桶', pinyin: 'lā jī tǒng', english: 'trash can', japanese: 'ゴミ箱' },
            { chinese: '卫生间', pinyin: 'wèi shēng jiān', english: 'restroom', japanese: 'トイレ' }
        ],
        level3: [
            { chinese: '安检机', pinyin: 'ān jiǎn jī', english: 'security scanner', japanese: 'セキュリティスキャナー' },
            { chinese: '自动售票机', pinyin: 'zì dòng shòu piào jī', english: 'ticket vending machine', japanese: '自動券売機' },
            { chinese: '自动检票机', pinyin: 'zì dòng jiǎn piào jī', english: 'automatic ticket gate', japanese: '自動改札機' },
            { chinese: '电子显示屏', pinyin: 'diàn zǐ xiǎn shì píng', english: 'LED display', japanese: 'LED表示板' },
            { chinese: '广播系统', pinyin: 'guǎng bō xì tǒng', english: 'broadcast system', japanese: '放送システム' },
            { chinese: '行李推车', pinyin: 'xíng lǐ tuī chē', english: 'luggage cart', japanese: '手荷物カート' },
            { chinese: '站台安全门', pinyin: 'zhàn tái ān quán mén', english: 'platform screen doors', japanese: 'ホームドア' },
            { chinese: '列车员', pinyin: 'liè chē yuán', english: 'train conductor', japanese: '車掌' },
            { chinese: '司机室', pinyin: 'sī jī shì', english: 'driver cabin', japanese: '運転席' },
            { chinese: '紧急制动', pinyin: 'jǐn jí zhì dòng', english: 'emergency brake', japanese: '非常ブレーキ' }
        ]
    },
    '飞机场': {
        level1: [
            { chinese: '飞机', pinyin: 'fēi jī', english: 'airplane', japanese: '飛行機' },
            { chinese: '机场', pinyin: 'jī chǎng', english: 'airport', japanese: '空港' },
            { chinese: '航站楼', pinyin: 'háng zhàn lóu', english: 'terminal', japanese: 'ターミナル' },
            { chinese: '登机口', pinyin: 'dēng jī kǒu', english: 'boarding gate', japanese: '搭乗口' },
            { chinese: '安检', pinyin: 'ān jiǎn', english: 'security check', japanese: 'セキュリティチェック' },
            { chinese: '乘客', pinyin: 'chéng kè', english: 'passenger', japanese: '乗客' },
            { chinese: '行李', pinyin: 'xíng lǐ', english: 'luggage', japanese: '荷物' },
            { chinese: '行李箱', pinyin: 'xíng lǐ xiāng', english: 'suitcase', japanese: 'スーツケース' },
            { chinese: '机票', pinyin: 'jī piào', english: 'boarding pass', japanese: '搭乗券' },
            { chinese: '护照', pinyin: 'hù zhào', english: 'passport', japanese: 'パスポート' },
            { chinese: '空姐', pinyin: 'kōng jiě', english: 'flight attendant', japanese: '客室乗務員' },
            { chinese: '飞行员', pinyin: 'fēi xíng yuán', english: 'pilot', japanese: 'パイロット' },
            { chinese: '地勤', pinyin: 'dì qín', english: 'ground staff', japanese: '地上係員' },
            { chinese: '行李传送带', pinyin: 'xíng lǐ chuán sòng dài', english: 'conveyor belt', japanese: '荷物コンベア' },
            { chinese: '行李车', pinyin: 'xíng lǐ chē', english: 'luggage cart', japanese: '荷物カート' }
        ],
        level2: [
            { chinese: '值机柜台', pinyin: 'zhí jī guì tái', english: 'check-in counter', japanese: 'チェックインカウンター' },
            { chinese: '海关', pinyin: 'hǎi guān', english: 'customs', japanese: '税関' },
            { chinese: '免税店', pinyin: 'miǎn shuì diàn', english: 'duty-free shop', japanese: '免税店' },
            { chinese: '餐厅', pinyin: 'cān tīng', english: 'restaurant', japanese: 'レストラン' },
            { chinese: '咖啡厅', pinyin: 'kā fēi tīng', english: 'cafe', japanese: 'カフェ' },
            { chinese: '休息区', pinyin: 'xiū xi qū', english: 'lounge', japanese: 'ラウンジ' },
            { chinese: '洗手间', pinyin: 'xǐ shǒu jiān', english: 'restroom', japanese: 'トイレ' },
            { chinese: '母婴室', pinyin: 'mǔ yīng shì', english: 'nursery room', japanese: '授乳室' },
            { chinese: '吸烟室', pinyin: 'xī yān shì', english: 'smoking room', japanese: '喫煙室' },
            { chinese: '电话', pinyin: 'diàn huà', english: 'telephone', japanese: '電話' },
            { chinese: 'ATM机', pinyin: 'ATM jī', english: 'ATM', japanese: 'ATM' },
            { chinese: '货币兑换', pinyin: 'huò bì duì huàn', english: 'currency exchange', japanese: '両替' },
            { chinese: '停车位', pinyin: 'tíng chē wèi', english: 'parking space', japanese: '駐車場' },
            { chinese: '出租车', pinyin: 'chū zū chē', english: 'taxi', japanese: 'タクシー' },
            { chinese: '大巴', pinyin: 'dà bā', english: 'shuttle bus', japanese: 'シャトルバス' }
        ],
        level3: [
            { chinese: '跑道', pinyin: 'pǎo dào', english: 'runway', japanese: '滑走路' },
            { chinese: '停机坪', pinyin: 'tíng jī píng', english: 'apron', japanese: 'エプロン' },
            { chinese: '控制塔', pinyin: 'kòng zhì tǎ', english: 'control tower', japanese: '管制塔' },
            { chinese: '雷达', pinyin: 'léi dá', english: 'radar', japanese: 'レーダー' },
            { chinese: '气象站', pinyin: 'qì xiàng zhàn', english: 'weather station', japanese: '気象観測所' },
            { chinese: '消防车', pinyin: 'xiāo fáng chē', english: 'fire truck', japanese: '消防車' },
            { chinese: '救护车', pinyin: 'jiù hù chē', english: 'ambulance', japanese: '救急車' },
            { chinese: '行李扫描仪', pinyin: 'xíng lǐ sǎo miáo yí', english: 'luggage scanner', japanese: '手荷物スキャナー' },
            { chinese: '登机桥', pinyin: 'dēng jī qiáo', english: 'jet bridge', japanese: '搭乗橋' },
            { chinese: '行李搬运机器人', pinyin: 'xíng lǐ bān yùn jī qì rén', english: 'luggage robot', japanese: '荷物運搬ロボット' }
        ]
    },
    '博物馆': {
        level1: [
            { chinese: '展品', pinyin: 'zhǎn pǐn', english: 'exhibit', japanese: '展示品' },
            { chinese: '展柜', pinyin: 'zhǎn guì', english: 'display case', japanese: '展示ケース' },
            { chinese: '展厅', pinyin: 'zhǎn tīng', english: 'exhibition hall', japanese: '展示ホール' },
            { chinese: '讲解员', pinyin: 'jiǎng jiě yuán', english: 'guide', japanese: 'ガイド' },
            { chinese: '参观者', pinyin: 'cān guān zhě', english: 'visitor', japanese: '見学者' },
            { chinese: '门票', pinyin: 'mén piào', english: 'ticket', japanese: '入場券' },
            { chinese: '保安', pinyin: 'bǎo ān', english: 'security guard', japanese: '警備員' },
            { chinese: '学生', pinyin: 'xué shēng', english: 'student', japanese: '学生' },
            { chinese: '老师', pinyin: 'lǎo shī', english: 'teacher', japanese: '先生' },
            { chinese: '文物', pinyin: 'wén wù', english: 'cultural relic', japanese: '文化財' },
            { chinese: '艺术品', pinyin: 'yì shù pǐn', english: 'artwork', japanese: '芸術品' },
            { chinese: '雕塑', pinyin: 'diāo sù', english: 'sculpture', japanese: '彫刻' },
            { chinese: '绘画', pinyin: 'huì huà', english: 'painting', japanese: '絵画' },
            { chinese: '说明牌', pinyin: 'shuō míng pái', english: 'description sign', japanese: '説明板' },
            { chinese: '灯光', pinyin: 'dēng guāng', english: 'lighting', japanese: '照明' }
        ],
        level2: [
            { chinese: '古董', pinyin: 'gǔ dǒng', english: 'antique', japanese: '骨董品' },
            { chinese: '化石', pinyin: 'huà shí', english: 'fossil', japanese: '化石' },
            { chinese: '陶器', pinyin: 'táo qì', english: 'pottery', japanese: '陶器' },
            { chinese: '青铜器', pinyin: 'qīng tóng qì', english: 'bronze ware', japanese: '青銅器' },
            { chinese: '玉器', pinyin: 'yù qì', english: 'jade ware', japanese: '玉器' },
            { chinese: '瓷器', pinyin: 'cí qì', english: 'porcelain', japanese: '磁器' },
            { chinese: '书画', pinyin: 'shū huà', english: 'calligraphy', japanese: '書道' },
            { chinese: '家具', pinyin: 'jiā jù', english: 'furniture', japanese: '家具' },
            { chinese: '服装', pinyin: 'fú zhuāng', english: 'clothing', japanese: '衣類' },
            { chinese: '工具', pinyin: 'gōng jù', english: 'tools', japanese: '道具' },
            { chinese: '武器', pinyin: 'wǔ qì', english: 'weapons', japanese: '武器' },
            { chinese: '乐器', pinyin: 'yuè qì', english: 'musical instruments', japanese: '楽器' },
            { chinese: '相机', pinyin: 'xiàng jī', english: 'camera', japanese: 'カメラ' },
            { chinese: '纪念品店', pinyin: 'jì niàn pǐn diàn', english: 'gift shop', japanese: '土産物店' },
            { chinese: '咖啡厅', pinyin: 'kā fēi tīng', english: 'cafe', japanese: 'カフェ' }
        ],
        level3: [
            { chinese: '考古发现', pinyin: 'kǎo gǔ fā xiàn', english: 'archaeological discovery', japanese: '考古学的発見' },
            { chinese: '历史文献', pinyin: 'lì shǐ wén xiàn', english: 'historical documents', japanese: '歴史文書' },
            { chinese: '互动展览', pinyin: 'hù dòng zhǎn lǎn', english: 'interactive exhibition', japanese: 'インタラクティブ展示' },
            { chinese: '多媒体展示', pinyin: 'duō méi tǐ zhǎn shì', english: 'multimedia display', japanese: 'マルチメディア展示' },
            { chinese: '虚拟现实', pinyin: 'xū nǐ xiàn shí', english: 'virtual reality', japanese: '仮想現実' },
            { chinese: '修复工作室', pinyin: 'xiū fù gōng zuò shì', english: 'conservation workshop', japanese: '修復工房' },
            { chinese: '研究中心', pinyin: 'yán jiū zhōng xīn', english: 'research center', japanese: '研究センター' },
            { chinese: '教育项目', pinyin: 'jiào yù xiàng mù', english: 'education program', japanese: '教育プログラム' },
            { chinese: '临时展览', pinyin: 'lín shí zhǎn lǎn', english: 'temporary exhibition', japanese: '特別展' },
            { chinese: '永久收藏', pinyin: 'yǒng jiǔ shōu cáng', english: 'permanent collection', japanese: '恒常コレクション' }
        ]
    },
    '书店': {
        level1: [
            { chinese: '书架', pinyin: 'shū jià', english: 'bookshelf', japanese: '本棚' },
            { chinese: '书', pinyin: 'shū', english: 'book', japanese: '本' },
            { chinese: '读者', pinyin: 'dú zhě', english: 'reader', japanese: '読者' },
            { chinese: '店员', pinyin: 'diàn yuán', english: 'clerk', japanese: '店員' },
            { chinese: '收银台', pinyin: 'shōu yín tái', english: 'cashier', japanese: 'レジ' },
            { chinese: '杂志', pinyin: 'zá zhì', english: 'magazine', japanese: '雑誌' },
            { chinese: '报纸', pinyin: 'bào zhǐ', english: 'newspaper', japanese: '新聞' },
            { chinese: '文具', pinyin: 'wén jù', english: 'stationery', japanese: '文房具' },
            { chinese: '笔', pinyin: 'bǐ', english: 'pen', japanese: 'ペン' },
            { chinese: '笔记本', pinyin: 'bǐ jì běn', english: 'notebook', japanese: 'ノート' },
            { chinese: '书包', pinyin: 'shū bāo', english: 'backpack', japanese: 'ランドセル' },
            { chinese: '桌椅', pinyin: 'zhuō yǐ', english: 'table and chair', japanese: 'テーブルと椅子' },
            { chinese: '台灯', pinyin: 'tái dēng', english: 'desk lamp', japanese: 'デスクライト' },
            { chinese: '咖啡', pinyin: 'kā fēi', english: 'coffee', japanese: 'コーヒー' },
            { chinese: '沙发', pinyin: 'shā fā', english: 'sofa', japanese: 'ソファ' }
        ],
        level2: [
            { chinese: '儿童读物', pinyin: 'ér tóng dú wù', english: 'children books', japanese: '児童書' },
            { chinese: '教辅书', pinyin: 'jiào fǔ shū', english: 'textbooks', japanese: '教科書' },
            { chinese: '小说', pinyin: 'xiǎo shuō', english: 'novel', japanese: '小説' },
            { chinese: '漫画', pinyin: 'màn huà', english: 'comics', japanese: '漫画' },
            { chinese: '画册', pinyin: 'huà cè', english: 'picture book', japanese: '絵本' },
            { chinese: '词典', pinyin: 'cí diǎn', english: 'dictionary', japanese: '辞書' },
            { chinese: '地球仪', pinyin: 'dì qiú yí', english: 'globe', japanese: '地球儀' },
            { chinese: '地图', pinyin: 'dì tú', english: 'map', japanese: '地図' },
            { chinese: '卡片', pinyin: 'kǎ piàn', english: 'cards', japanese: 'カード' },
            { chinese: '书签', pinyin: 'shū qiān', english: 'bookmark', japanese: 'しおり' },
            { chinese: '包装纸', pinyin: 'bāo zhuāng zhǐ', english: 'wrapping paper', japanese: '包装紙' },
            { chinese: '贺卡', pinyin: 'hè kǎ', english: 'greeting card', japanese: 'グリーティングカード' },
            { chinese: '印章', pinyin: 'yìn zhāng', english: 'stamp', japanese: 'スタンプ' },
            { chinese: '墨水', pinyin: 'mò shuǐ', english: 'ink', japanese: 'インク' },
            { chinese: '尺子', pinyin: 'chǐ zi', english: 'ruler', japanese: '定規' }
        ],
        level3: [
            { chinese: '电子书', pinyin: 'diàn zǐ shū', english: 'e-book', japanese: '電子書籍' },
            { chinese: '阅读器', pinyin: 'yuè dú qì', english: 'e-reader', japanese: '電子リーダー' },
            { chinese: '有声书', pinyin: 'yǒu shēng shū', english: 'audiobook', japanese: 'オーディオブック' },
            { chinese: '会员卡', pinyin: 'huì yuán kǎ', english: 'membership card', japanese: '会員カード' },
            { chinese: '推荐书架', pinyin: 'tuī jiàn shū jià', english: 'recommendation shelf', japanese: 'おすすめ本棚' },
            { chinese: '新书区', pinyin: 'xīn shū qū', english: 'new arrivals', japanese: '新刊コーナー' },
            { chinese: '特价区', pinyin: 'tè jià qū', english: 'discount section', japanese: '割引コーナー' },
            { chinese: '阅读区', pinyin: 'yuè dú qū', english: 'reading area', japanese: '閲覧スペース' },
            { chinese: '咖啡角', pinyin: 'kā fēi jiǎo', english: 'coffee corner', japanese: 'カフェコーナー' },
            { chinese: '作家签名会', pinyin: 'zuò jiā qiān míng huì', english: 'author signing', japanese: '作家サイン会' }
        ]
    }
};

// 通用词汇库（用于自定义主题）
const generalVocabulary = {
    level1: [
        // 基础设施
        { chinese: '建筑', pinyin: 'jiàn zhù', english: 'building', japanese: '建物' },
        { chinese: '门', pinyin: 'mén', english: 'door', japanese: 'ドア' },
        { chinese: '窗户', pinyin: 'chuāng hu', english: 'window', japanese: '窓' },
        { chinese: '屋顶', pinyin: 'wū dǐng', english: 'roof', japanese: '屋根' },
        { chinese: '墙壁', pinyin: 'qiáng bì', english: 'wall', japanese: '壁' },

        // 家具和设备
        { chinese: '桌子', pinyin: 'zhuō zi', english: 'table', japanese: 'テーブル' },
        { chinese: '椅子', pinyin: 'yǐ zi', english: 'chair', japanese: '椅子' },
        { chinese: '床', pinyin: 'chuáng', english: 'bed', japanese: 'ベッド' },
        { chinese: '沙发', pinyin: 'shā fā', english: 'sofa', japanese: 'ソファ' },
        { chinese: '柜子', pinyin: 'guì zi', english: 'cabinet', japanese: 'キャビネット' },

        // 照明
        { chinese: '灯', pinyin: 'dēng', english: 'light', japanese: '電灯' },
        { chinese: '台灯', pinyin: 'tái dēng', english: 'desk lamp', japanese: 'デスクライト' },
        { chinese: '路灯', pinyin: 'lù dēng', english: 'street light', japanese: '街灯' },

        // 工具和用品
        { chinese: '工具', pinyin: 'gōng jù', english: 'tools', japanese: '道具' },
        { chinese: '箱子', pinyin: 'xiāng zi', english: 'box', japanese: '箱' },
        { chinese: '袋子', pinyin: 'dài zi', english: 'bag', japanese: '袋' },
        { chinese: '桶', pinyin: 'tǒng', english: 'bucket', japanese: 'バケツ' },

        // 自然元素
        { chinese: '花', pinyin: 'huā', english: 'flower', japanese: '花' },
        { chinese: '树', pinyin: 'shù', english: 'tree', japanese: '木' },
        { chinese: '草', pinyin: 'cǎo', english: 'grass', japanese: '草' },

        // 文具和学习用品
        { chinese: '笔', pinyin: 'bǐ', english: 'pen', japanese: 'ペン' },
        { chinese: '纸', pinyin: 'zhǐ', english: 'paper', japanese: '紙' },
        { chinese: '书本', pinyin: 'shū běn', english: 'book', japanese: '本' },
        { chinese: '黑板', pinyin: 'hēi bǎn', english: 'blackboard', japanese: '黒板' },

        // 餐饮用具
        { chinese: '杯子', pinyin: 'bēi zi', english: 'cup', japanese: 'カップ' },
        { chinese: '碗', pinyin: 'wǎn', english: 'bowl', japanese: '碗' },
        { chinese: '盘子', pinyin: 'pán zi', english: 'plate', japanese: '皿' },
        { chinese: '筷子', pinyin: 'kuài zi', english: 'chopsticks', japanese: '箸' },

        // 人物
        { chinese: '人', pinyin: 'rén', english: 'person', japanese: '人' },
        { chinese: '孩子', pinyin: 'hái zi', english: 'child', japanese: '子供' },
        { chinese: '大人', pinyin: 'dà ren', english: 'adult', japanese: '大人' },
        { chinese: '工作人员', pinyin: 'gōng zuò rén yuán', english: 'staff', japanese: 'スタッフ' },
        { chinese: '顾客', pinyin: 'gù kè', english: 'customer', japanese: 'お客様' }
    ],
    level2: [
        // 电子设备
        { chinese: '电脑', pinyin: 'diàn nǎo', english: 'computer', japanese: 'コンピューター' },
        { chinese: '电话', pinyin: 'diàn huà', english: 'phone', japanese: '電話' },
        { chinese: '手机', pinyin: 'shǒu jī', english: 'mobile phone', japanese: 'スマートフォン' },
        { chinese: '电视', pinyin: 'diàn shì', english: 'TV', japanese: 'テレビ' },
        { chinese: '空调', pinyin: 'kōng tiáo', english: 'air conditioner', japanese: 'エアコン' },

        // 商业相关
        { chinese: '收银台', pinyin: 'shōu yín tái', english: 'cashier', japanese: 'レジ' },
        { chinese: '货架', pinyin: 'huò jià', english: 'shelf', japanese: '棚' },
        { chinese: '价签', pinyin: 'jià qiān', english: 'price tag', japanese: '値札' },
        { chinese: '广告牌', pinyin: 'guǎng gào pái', english: 'sign board', japanese: '看板' },
        { chinese: '菜单', pinyin: 'cài dān', english: 'menu', japanese: 'メニュー' },

        // 交通工具
        { chinese: '汽车', pinyin: 'qì chē', english: 'car', japanese: '車' },
        { chinese: '自行车', pinyin: 'zì xíng chē', english: 'bicycle', japanese: '自転車' },
        { chinese: '公交车', pinyin: 'gōng jiāo chē', english: 'bus', japanese: 'バス' },
        { chinese: '出租车', pinyin: 'chū zū chē', english: 'taxi', japanese: 'タクシー' },
        { chinese: '火车', pinyin: 'huǒ chē', english: 'train', japanese: '電車' },
        { chinese: '地铁', pinyin: 'dì tiě', english: 'subway', japanese: '地下鉄' },

        // 设施建筑
        { chinese: '商店', pinyin: 'shāng diàn', english: 'shop', japanese: '店' },
        { chinese: '餐厅', pinyin: 'cān tīng', english: 'restaurant', japanese: 'レストラン' },
        { chinese: '银行', pinyin: 'yín háng', english: 'bank', japanese: '銀行' },
        { chinese: '医院', pinyin: 'yī yuàn', english: 'hospital', japanese: '病院' },
        { chinese: '学校', pinyin: 'xué xiào', english: 'school', japanese: '学校' },
        { chinese: '图书馆', pinyin: 'tú shū guǎn', english: 'library', japanese: '図書館' },
        { chinese: '邮局', pinyin: 'yóu jú', english: 'post office', japanese: '郵便局' },

        // 卫生和清洁
        { chinese: '洗手间', pinyin: 'xǐ shǒu jiān', english: 'restroom', japanese: 'トイレ' },
        { chinese: '垃圾桶', pinyin: 'lā jī tǒng', english: 'trash can', japanese: 'ゴミ箱' },
        { chinese: '扫帚', pinyin: 'sào zhou', english: 'broom', japanese: 'ほうき' },
        { chinese: '拖把', pinyin: 'tuō bǎ', english: 'mop', japanese: 'モップ' },

        // 安全设备
        { chinese: '消防器', pinyin: 'xiāo fáng qì', english: 'fire extinguisher', japanese: '消火器' },
        { chinese: '监控摄像头', pinyin: 'jiān kòng shè xiàng tóu', english: 'security camera', japanese: '防犯カメラ' },
        { chinese: '警报器', pinyin: 'jǐng bào qì', english: 'alarm', japanese: 'アラーム' },

        // 标识和信息
        { chinese: '指示牌', pinyin: 'zhǐ shì pái', english: 'sign board', japanese: '案内板' },
        { chinese: '时钟', pinyin: 'shí zhōng', english: 'clock', japanese: '時計' },
        { chinese: '日历', pinyin: 'rì lì', english: 'calendar', japanese: 'カレンダー' },
        { chinese: '地图', pinyin: 'dì tú', english: 'map', japanese: '地図' }
    ],
    level3: [
        // 智能科技
        { chinese: '智能设备', pinyin: 'zhì néng shè bèi', english: 'smart device', japanese: 'スマートデバイス' },
        { chinese: '二维码', pinyin: 'èr wéi mǎ', english: 'QR code', japanese: 'QRコード' },
        { chinese: '传感器', pinyin: 'chuán gǎn qì', english: 'sensor', japanese: 'センサー' },
        { chinese: '机器人', pinyin: 'jī qì rén', english: 'robot', japanese: 'ロボット' },
        { chinese: '无人机', pinyin: 'wú rén jī', english: 'drone', japanese: 'ドローン' },

        // 专业设备
        { chinese: '打印机', pinyin: 'dǎ yìn jī', english: 'printer', japanese: 'プリンター' },
        { chinese: '复印机', pinyin: 'fù yìn jī', english: 'photocopier', japanese: 'コピー機' },
        { chinese: '扫描仪', pinyin: 'sǎo miáo yí', english: 'scanner', japanese: 'スキャナー' },
        { chinese: '投影仪', pinyin: 'tóu yǐng yí', english: 'projector', japanese: 'プロジェクター' },
        { chinese: '音响', pinyin: 'yīn xiǎng', english: 'speaker', japanese: 'スピーカー' },

        // 自动化设备
        { chinese: '自动售货机', pinyin: 'zì dòng shòu huò jī', english: 'vending machine', japanese: '自販機' },
        { chinese: '电梯', pinyin: 'diàn tī', english: 'elevator', japanese: 'エレベーター' },
        { chinese: '扶梯', pinyin: 'fú tī', english: 'escalator', japanese: 'エスカレーター' },
        { chinese: '自动门', pinyin: 'zì dòng mén', english: 'automatic door', japanese: '自動ドア' },
        { chinese: '传送带', pinyin: 'chuán sòng dài', english: 'conveyor belt', japanese: 'コンベア' },

        // 现代化设施
        { chinese: 'LED屏', pinyin: 'LED píng', english: 'LED screen', japanese: 'LEDスクリーン' },
        { chinese: '充电桩', pinyin: 'chōng diàn zhuāng', english: 'charging station', japanese: '充電ステーション' },
        { chinese: 'WiFi路由器', pinyin: 'WiFi lù yóu qì', english: 'WiFi router', japanese: 'WiFiルーター' },
        { chinese: '空气净化器', pinyin: 'kōng qì jìng huà qì', english: 'air purifier', japanese: '空気清浄機' },
        { chinese: '加湿器', pinyin: 'jiā shī qì', english: 'humidifier', japanese: '加湿器' },

        // 环保设备
        { chinese: '太阳能板', pinyin: 'tài yáng néng bǎn', english: 'solar panel', japanese: '太陽光パネル' },
        { chinese: '风力发电机', pinyin: 'fēng lì fā diàn jī', english: 'wind turbine', japanese: '風力発電機' },
        { chinese: '垃圾分类箱', pinyin: 'lā jī fēn lèi xiāng', english: 'recycling bin', japanese: 'リサイクルボックス' },

        // 通信设备
        { chinese: '基站', pinyin: 'jī zhàn', english: 'base station', japanese: '基地局' },
        { chinese: '卫星天线', pinyin: 'wèi xīng tiān xiàn', english: 'satellite dish', japanese: '衛星アンテナ' },
        { chinese: '雷达', pinyin: 'léi dá', english: 'radar', japanese: 'レーダー' }
    ]
};

// 获取词汇库
function getVocabulary(theme, difficulty) {
    console.log('getVocabulary 被调用，主题:', theme, '难度:', difficulty);
    console.log('可用主题:', Object.keys(vocabularyDatabase));

    let themeData = vocabularyDatabase[theme];

    // 如果主题不存在，使用通用词汇库
    if (!themeData) {
        console.log('主题不存在，使用通用词汇库');
        themeData = generalVocabulary;
    } else {
        console.log('主题数据:', themeData ? '找到' : '未找到');
    }

    let levelData = [];
    if (difficulty === 'level1') {
        levelData = themeData.level1 || [];
    } else if (difficulty === 'level2') {
        levelData = [...(themeData.level1 || []), ...(themeData.level2 || [])];
    } else if (difficulty === 'level3') {
        levelData = [...(themeData.level1 || []), ...(themeData.level2 || []), ...(themeData.level3 || [])];
    }

    console.log('级别数据长度:', levelData.length);

    // 如果词汇数量不够，直接返回所有可用词汇
    if (levelData.length < 15) {
        console.log('词汇数量不足15个，返回所有可用词汇');
        return levelData;
    }

    // 随机选择15-20个词汇
    const targetCount = Math.min(Math.floor(Math.random() * 6) + 15, levelData.length);
    const shuffled = [...levelData].sort(() => 0.5 - Math.random());
    const result = shuffled.slice(0, targetCount);

    console.log('最终返回词汇数量:', result.length);
    return result;
}

// 生成标签文本
function generateTagText(vocabulary, languages) {
    console.log('generateTagText 被调用，选择的语言:', languages);
    console.log('词汇数量:', vocabulary.length);

    // 确保至少有一种语言
    if (languages.length === 0) {
        languages = ['chinese']; // 默认中文
        console.log('没有选择语言，使用默认中文');
    }

    const tags = [];

    vocabulary.forEach((word, index) => {
        let tagParts = [];
        console.log(`处理词汇 ${index + 1}:`, word);

        // 按照固定顺序添加语言
        if (languages.includes('chinese')) {
            tagParts.push(word.chinese);
            console.log('添加中文:', word.chinese);
        }

        if (languages.includes('pinyin')) {
            tagParts.push(`[${word.pinyin}]`);
            console.log('添加拼音:', `[${word.pinyin}]`);
        }

        if (languages.includes('english')) {
            tagParts.push(`(${word.english})`);
            console.log('添加英文:', `(${word.english})`);
        }

        if (languages.includes('japanese')) {
            tagParts.push(`{${word.japanese}}`);
            console.log('添加日文:', `{${word.japanese}}`);
        }

        // 用空格连接所有语言部分
        const tagText = tagParts.join(' ');
        console.log(`词汇 ${word.chinese} 的最终标签: [${tagText}]`);
        tags.push(tagText);
    });

    console.log('生成的所有标签:', tags);
    console.log('标签示例:', tags.slice(0, 3));
    return tags;
}