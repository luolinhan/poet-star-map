// 诗人数据 - 中小学课内诗人全集
const poetsData = [
    // 唐代诗人
    {
        id: 1,
        name: "李白",
        dynasty: "tang",
        dynastyName: "唐",
        birth: "701",
        death: "762",
        style: "浪漫主义",
        title: "诗仙",
        grade: "elementary",
        bio: "李白，字太白，号青莲居士，唐代伟大的浪漫主义诗人，被后人誉为'诗仙'。其诗风豪放飘逸，想象丰富，语言流转自然，音律和谐多变。",
        poems: [
            { title: "静夜思", content: "床前明月光，疑是地上霜。\n举头望明月，低头思故乡。", grade: "小学" },
            { title: "望庐山瀑布", content: "日照香炉生紫烟，遥看瀑布挂前川。\n飞流直下三千尺，疑是银河落九天。", grade: "小学" },
            { title: "早发白帝城", content: "朝辞白帝彩云间，千里江陵一日还。\n两岸猿声啼不住，轻舟已过万重山。", grade: "小学" },
            { title: "赠汪伦", content: "李白乘舟将欲行，忽闻岸上踏歌声。\n桃花潭水深千尺，不及汪伦送我情。", grade: "小学" },
            { title: "将进酒", content: "君不见黄河之水天上来，奔流到海不复回...\n天生我材必有用，千金散尽还复来。", grade: "高中" }
        ]
    },
    {
        id: 2,
        name: "杜甫",
        dynasty: "tang",
        dynastyName: "唐",
        birth: "712",
        death: "770",
        style: "现实主义",
        title: "诗圣",
        grade: "elementary",
        bio: "杜甫，字子美，自号少陵野老，唐代伟大的现实主义诗人，与李白合称'李杜'。其诗风沉郁顿挫，关心民生疾苦，被誉为'诗史'。",
        poems: [
            { title: "春望", content: "国破山河在，城春草木深。\n感时花溅泪，恨别鸟惊心。\n烽火连三月，家书抵万金。\n白头搔更短，浑欲不胜簪。", grade: "初中" },
            { title: "绝句", content: "两个黄鹂鸣翠柳，一行白鹭上青天。\n窗含西岭千秋雪，门泊东吴万里船。", grade: "小学" },
            { title: "登高", content: "风急天高猿啸哀，渚清沙白鸟飞回。\n无边落木萧萧下，不尽长江滚滚来。", grade: "高中" },
            { title: "茅屋为秋风所破歌", content: "八月秋高风怒号，卷我屋上三重茅...\n安得广厦千万间，大庇天下寒士俱欢颜！", grade: "初中" }
        ]
    },
    {
        id: 3,
        name: "白居易",
        dynasty: "tang",
        dynastyName: "唐",
        birth: "772",
        death: "846",
        style: "现实主义",
        title: "诗魔",
        grade: "elementary",
        bio: "白居易，字乐天，号香山居士，唐代伟大的现实主义诗人。其诗语言通俗易懂，老妪能解，代表作有《长恨歌》《琵琶行》等。",
        poems: [
            { title: "赋得古原草送别", content: "离离原上草，一岁一枯荣。\n野火烧不尽，春风吹又生。", grade: "小学" },
            { title: "钱塘湖春行", content: "孤山寺北贾亭西，水面初平云脚低。\n几处早莺争暖树，谁家新燕啄春泥。", grade: "初中" },
            { title: "琵琶行", content: "浔阳江头夜送客，枫叶荻花秋瑟瑟...\n同是天涯沦落人，相逢何必曾相识！", grade: "高中" }
        ]
    },
    {
        id: 4,
        name: "王维",
        dynasty: "tang",
        dynastyName: "唐",
        birth: "701",
        death: "761",
        style: "山水田园",
        title: "诗佛",
        grade: "elementary",
        bio: "王维，字摩诘，号摩诘居士，唐代著名诗人、画家。其诗多咏山水田园，与孟浩然合称'王孟'，苏轼评价其'诗中有画，画中有诗'。",
        poems: [
            { title: "九月九日忆山东兄弟", content: "独在异乡为异客，每逢佳节倍思亲。\n遥知兄弟登高处，遍插茱萸少一人。", grade: "小学" },
            { title: "送元二使安西", content: "渭城朝雨浥轻尘，客舍青青柳色新。\n劝君更尽一杯酒，西出阳关无故人。", grade: "小学" },
            { title: "山居秋暝", content: "空山新雨后，天气晚来秋。\n明月松间照，清泉石上流。", grade: "高中" }
        ]
    },
    {
        id: 5,
        name: "孟浩然",
        dynasty: "tang",
        dynastyName: "唐",
        birth: "689",
        death: "740",
        style: "山水田园",
        title: "孟襄阳",
        grade: "elementary",
        bio: "孟浩然，名浩，字浩然，号孟山人，唐代著名的山水田园派诗人。其诗风清淡自然，多写山水田园和隐居生活。",
        poems: [
            { title: "春晓", content: "春眠不觉晓，处处闻啼鸟。\n夜来风雨声，花落知多少。", grade: "小学" },
            { title: "宿建德江", content: "移舟泊烟渚，日暮客愁新。\n野旷天低树，江清月近人。", grade: "小学" },
            { title: "过故人庄", content: "故人具鸡黍，邀我至田家。\n绿树村边合，青山郭外斜。", grade: "初中" }
        ]
    },
    {
        id: 6,
        name: "王勃",
        dynasty: "tang",
        dynastyName: "唐",
        birth: "650",
        death: "676",
        style: "初唐四杰",
        title: "诗杰",
        grade: "middle",
        bio: "王勃，字子安，绛州龙门人，唐代文学家，'初唐四杰'之首。其诗气势磅礴，代表作《滕王阁序》千古传诵。",
        poems: [
            { title: "送杜少府之任蜀州", content: "城阙辅三秦，风烟望五津。\n与君离别意，同是宦游人。\n海内存知己，天涯若比邻。", grade: "初中" }
        ]
    },
    {
        id: 7,
        name: "李商隐",
        dynasty: "tang",
        dynastyName: "唐",
        birth: "813",
        death: "858",
        style: "婉约",
        title: "玉溪生",
        grade: "middle",
        bio: "李商隐，字义山，号玉溪生，晚唐著名诗人。其诗构思新奇，风格秾丽，尤其爱情诗和无题诗写得缠绵悱恻，优美动人。",
        poems: [
            { title: "锦瑟", content: "锦瑟无端五十弦，一弦一柱思华年。\n庄生晓梦迷蝴蝶，望帝春心托杜鹃。", grade: "高中" },
            { title: "夜雨寄北", content: "君问归期未有期，巴山夜雨涨秋池。\n何当共剪西窗烛，却话巴山夜雨时。", grade: "初中" },
            { title: "无题", content: "相见时难别亦难，东风无力百花残。\n春蚕到死丝方尽，蜡炬成灰泪始干。", grade: "初中" }
        ]
    },
    {
        id: 8,
        name: "杜牧",
        dynasty: "tang",
        dynastyName: "唐",
        birth: "803",
        death: "852",
        style: "豪放",
        title: "小杜",
        grade: "middle",
        bio: "杜牧，字牧之，号樊川居士，唐代杰出诗人，与李商隐并称'小李杜'。其诗风清丽豪健，尤以七言绝句著称。",
        poems: [
            { title: "清明", content: "清明时节雨纷纷，路上行人欲断魂。\n借问酒家何处有？牧童遥指杏花村。", grade: "小学" },
            { title: "山行", content: "远上寒山石径斜，白云生处有人家。\n停车坐爱枫林晚，霜叶红于二月花。", grade: "小学" },
            { title: "泊秦淮", content: "烟笼寒水月笼沙，夜泊秦淮近酒家。\n商女不知亡国恨，隔江犹唱后庭花。", grade: "初中" }
        ]
    },
    {
        id: 9,
        name: "王之涣",
        dynasty: "tang",
        dynastyName: "唐",
        birth: "688",
        death: "742",
        style: "边塞",
        title: "边塞诗人",
        grade: "elementary",
        bio: "王之涣，字季凌，唐代边塞诗人。其诗以描写边塞风光著称，气势磅礴，意境开阔。",
        poems: [
            { title: "登鹳雀楼", content: "白日依山尽，黄河入海流。\n欲穷千里目，更上一层楼。", grade: "小学" },
            { title: "凉州词", content: "黄河远上白云间，一片孤城万仞山。\n羌笛何须怨杨柳，春风不度玉门关。", grade: "小学" }
        ]
    },
    {
        id: 10,
        name: "岑参",
        dynasty: "tang",
        dynastyName: "唐",
        birth: "715",
        death: "770",
        style: "边塞",
        title: "边塞诗人",
        grade: "middle",
        bio: "岑参，唐代边塞诗人，与高适并称'高岑'。其诗气势豪迈，情辞慷慨，多描写边塞风光和军旅生活。",
        poems: [
            { title: "白雪歌送武判官归京", content: "北风卷地白草折，胡天八月即飞雪。\n忽如一夜春风来，千树万树梨花开。", grade: "初中" }
        ]
    },
    
    // 宋代诗人
    {
        id: 11,
        name: "苏轼",
        dynasty: "song",
        dynastyName: "宋",
        birth: "1037",
        death: "1101",
        style: "豪放派",
        title: "东坡居士",
        grade: "elementary",
        bio: "苏轼，字子瞻，号东坡居士，北宋文学家、书画家。其词开豪放一派，与辛弃疾并称'苏辛'，为'唐宋八大家'之一。",
        poems: [
            { title: "题西林壁", content: "横看成岭侧成峰，远近高低各不同。\n不识庐山真面目，只缘身在此山中。", grade: "小学" },
            { title: "饮湖上初晴后雨", content: "水光潋滟晴方好，山色空蒙雨亦奇。\n欲把西湖比西子，淡妆浓抹总相宜。", grade: "小学" },
            { title: "水调歌头", content: "明月几时有？把酒问青天...\n但愿人长久，千里共婵娟。", grade: "初中" },
            { title: "念奴娇·赤壁怀古", content: "大江东去，浪淘尽，千古风流人物...", grade: "高中" }
        ]
    },
    {
        id: 12,
        name: "李清照",
        dynasty: "song",
        dynastyName: "宋",
        birth: "1084",
        death: "1155",
        style: "婉约派",
        title: "易安居士",
        grade: "middle",
        bio: "李清照，号易安居士，宋代女词人，婉约词派代表。其词前期多写悠闲生活，后期多悲叹身世，情调感伤。",
        poems: [
            { title: "如梦令", content: "常记溪亭日暮，沉醉不知归路。\n兴尽晚回舟，误入藕花深处。", grade: "初中" },
            { title: "声声慢", content: "寻寻觅觅，冷冷清清，凄凄惨惨戚戚...\n这次第，怎一个愁字了得！", grade: "高中" },
            { title: "夏日绝句", content: "生当作人杰，死亦为鬼雄。\n至今思项羽，不肯过江东。", grade: "小学" }
        ]
    },
    {
        id: 13,
        name: "陆游",
        dynasty: "song",
        dynastyName: "宋",
        birth: "1125",
        death: "1210",
        style: "爱国",
        title: "放翁",
        grade: "middle",
        bio: "陆游，字务观，号放翁，南宋爱国诗人。其诗充满爱国热情，代表作有《示儿》《书愤》等，存诗九千多首。",
        poems: [
            { title: "示儿", content: "死去元知万事空，但悲不见九州同。\n王师北定中原日，家祭无忘告乃翁。", grade: "小学" },
            { title: "游山西村", content: "莫笑农家腊酒浑，丰年留客足鸡豚。\n山重水复疑无路，柳暗花明又一村。", grade: "初中" },
            { title: "书愤", content: "早岁那知世事艰，中原北望气如山...", grade: "高中" }
        ]
    },
    {
        id: 14,
        name: "杨万里",
        dynasty: "song",
        dynastyName: "宋",
        birth: "1127",
        death: "1206",
        style: "自然",
        title: "诚斋先生",
        grade: "elementary",
        bio: "杨万里，字廷秀，号诚斋，南宋诗人。其诗语言浅近明白，清新自然，多描写自然景物，创'诚斋体'。",
        poems: [
            { title: "小池", content: "泉眼无声惜细流，树阴照水爱晴柔。\n小荷才露尖尖角，早有蜻蜓立上头。", grade: "小学" },
            { title: "晓出净慈寺送林子方", content: "毕竟西湖六月中，风光不与四时同。\n接天莲叶无穷碧，映日荷花别样红。", grade: "小学" }
        ]
    },
    {
        id: 15,
        name: "王安石",
        dynasty: "song",
        dynastyName: "宋",
        birth: "1021",
        death: "1086",
        style: "政治",
        title: "临川先生",
        grade: "middle",
        bio: "王安石，字介甫，号半山，北宋政治家、文学家、思想家。'唐宋八大家'之一，主持熙宁变法。",
        poems: [
            { title: "元日", content: "爆竹声中一岁除，春风送暖入屠苏。\n千门万户曈曈日，总把新桃换旧符。", grade: "小学" },
            { title: "泊船瓜洲", content: "京口瓜洲一水间，钟山只隔数重山。\n春风又绿江南岸，明月何时照我还。", grade: "小学" },
            { title: "登飞来峰", content: "飞来山上千寻塔，闻说鸡鸣见日升。\n不畏浮云遮望眼，自缘身在最高层。", grade: "初中" }
        ]
    },
    {
        id: 16,
        name: "范仲淹",
        dynasty: "song",
        dynastyName: "宋",
        birth: "989",
        death: "1052",
        style: "爱国",
        title: "文正",
        grade: "middle",
        bio: "范仲淹，字希文，北宋政治家、文学家。其词风格明健，代表作《岳阳楼记》中'先天下之忧而忧'千古传诵。",
        poems: [
            { title: "江上渔者", content: "江上往来人，但爱鲈鱼美。\n君看一叶舟，出没风波里。", grade: "小学" },
            { title: "渔家傲·秋思", content: "塞下秋来风景异，衡阳雁去无留意...\n浊酒一杯家万里，燕然未勒归无计。", grade: "初中" }
        ]
    },
    {
        id: 17,
        name: "辛弃疾",
        dynasty: "song",
        dynastyName: "宋",
        birth: "1140",
        death: "1207",
        style: "豪放派",
        title: "稼轩居士",
        grade: "middle",
        bio: "辛弃疾，字幼安，号稼轩，南宋豪放派词人，与苏轼合称'苏辛'。其词气势磅礴，充满爱国热情。",
        poems: [
            { title: "清平乐·村居", content: "茅檐低小，溪上青青草。\n醉里吴音相媚好，白发谁家翁媪？", grade: "小学" },
            { title: "青玉案·元夕", content: "东风夜放花千树，更吹落、星如雨...\n众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。", grade: "初中" },
            { title: "破阵子", content: "醉里挑灯看剑，梦回吹角连营...", grade: "初中" }
        ]
    },
    {
        id: 18,
        name: "柳永",
        dynasty: "song",
        dynastyName: "宋",
        birth: "984",
        death: "1053",
        style: "婉约派",
        title: "柳七",
        grade: "high",
        bio: "柳永，原名三变，字景庄，后改名永，字耆卿，北宋词人，婉约派代表人物。其词多写都市繁华和羁旅行役。",
        poems: [
            { title: "雨霖铃", content: "寒蝉凄切，对长亭晚，骤雨初歇...\n多情自古伤离别，更那堪，冷落清秋节！", grade: "高中" }
        ]
    },
    
    // 其他朝代
    {
        id: 19,
        name: "曹操",
        dynasty: "other",
        dynastyName: "东汉",
        birth: "155",
        death: "220",
        style: "建安风骨",
        title: "魏武帝",
        grade: "middle",
        bio: "曹操，字孟德，东汉末年政治家、军事家、诗人。其诗气势磅礴，慷慨悲壮，开创建安文学新风。",
        poems: [
            { title: "观沧海", content: "东临碣石，以观沧海。\n水何澹澹，山岛竦峙。\n日月之行，若出其中。", grade: "初中" },
            { title: "短歌行", content: "对酒当歌，人生几何！\n譬如朝露，去日苦多...\n周公吐哺，天下归心。", grade: "高中" }
        ]
    },
    {
        id: 20,
        name: "陶渊明",
        dynasty: "other",
        dynastyName: "东晋",
        birth: "365",
        death: "427",
        style: "田园",
        title: "五柳先生",
        grade: "middle",
        bio: "陶渊明，字元亮，号五柳先生，东晋诗人。中国第一位田园诗人，被称为'古今隐逸诗人之宗'。",
        poems: [
            { title: "饮酒·其五", content: "结庐在人境，而无车马喧。\n问君何能尔？心远地自偏。\n采菊东篱下，悠然见南山。", grade: "初中" },
            { title: "归园田居", content: "种豆南山下，草盛豆苗稀...\n衣沾不足惜，但使愿无违。", grade: "初中" }
        ]
    },
    {
        id: 21,
        name: "马致远",
        dynasty: "yuan",
        dynastyName: "元",
        birth: "1250",
        death: "1321",
        style: "散曲",
        title: "曲状元",
        grade: "middle",
        bio: "马致远，字千里，号东篱，元代戏曲作家、散曲家。其散曲成就最高，代表作《天净沙·秋思》被誉为'秋思之祖'。",
        poems: [
            { title: "天净沙·秋思", content: "枯藤老树昏鸦，小桥流水人家，古道西风瘦马。\n夕阳西下，断肠人在天涯。", grade: "初中" }
        ]
    },
    {
        id: 22,
        name: "于谦",
        dynasty: "ming",
        dynastyName: "明",
        birth: "1398",
        death: "1457",
        style: "爱国",
        title: "忠肃",
        grade: "middle",
        bio: "于谦，字廷益，号节庵，明代政治家、诗人。其诗多表达爱国情怀和坚贞品格，代表作《石灰吟》。",
        poems: [
            { title: "石灰吟", content: "千锤万凿出深山，烈火焚烧若等闲。\n粉骨碎身浑不怕，要留清白在人间。", grade: "小学" }
        ]
    },
    {
        id: 23,
        name: "龚自珍",
        dynasty: "qing",
        dynastyName: "清",
        birth: "1792",
        death: "1841",
        style: "启蒙",
        title: "定庵",
        grade: "middle",
        bio: "龚自珍，字璱人，号定庵，清代思想家、诗人、文学改良运动的先驱。其诗充满批判精神和改革意识。",
        poems: [
            { title: "己亥杂诗", content: "九州生气恃风雷，万马齐喑究可哀。\n我劝天公重抖擞，不拘一格降人材。", grade: "小学" }
        ]
    },
    {
        id: 24,
        name: "纳兰性德",
        dynasty: "qing",
        dynastyName: "清",
        birth: "1655",
        death: "1685",
        style: "婉约",
        title: "容若",
        grade: "high",
        bio: "纳兰性德，字容若，号楞伽山人，清代词人。其词清新婉丽，哀感顽艳，有'清代第一词人'之称。",
        poems: [
            { title: "长相思", content: "山一程，水一程，身向榆关那畔行，夜深千帐灯。\n风一更，雪一更，聒碎乡心梦不成，故园无此声。", grade: "初中" }
        ]
    },
    {
        id: 25,
        name: "高适",
        dynasty: "tang",
        dynastyName: "唐",
        birth: "704",
        death: "765",
        style: "边塞",
        title: "边塞诗人",
        grade: "middle",
        bio: "高适，字达夫，唐代边塞诗人，与岑参并称'高岑'。其诗笔力雄健，气势奔放，多写边塞生活。",
        poems: [
            { title: "别董大", content: "千里黄云白日曛，北风吹雁雪纷纷。\n莫愁前路无知己，天下谁人不识君。", grade: "小学" }
        ]
    }
];

// 朝代数据
const dynastiesData = [
    { id: "other", name: "汉魏晋", period: "前 206-420 年", color: "#94a3b8", poets: [] },
    { id: "tang", name: "唐", period: "618-907 年", color: "#ef4444", poets: [] },
    { id: "song", name: "宋", period: "960-1279 年", color: "#3b82f6", poets: [] },
    { id: "yuan", name: "元", period: "1271-1368 年", color: "#a855f7", poets: [] },
    { id: "ming", name: "明", period: "1368-1644 年", color: "#f59e0b", poets: [] },
    { id: "qing", name: "清", period: "1644-1912 年", color: "#22c55e", poets: [] }
];

// 初始化诗人到朝代
dynastiesData.forEach(dynasty => {
    dynasty.poets = poetsData.filter(p => p.dynasty === dynasty.id);
});

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { poetsData, dynastiesData };
}
