var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "Wenqing Zhou",
    sex: "Man",
    age: "22",
    qq: "941454643",
    email: "bugmaker2002@gmail.com",
    address: "Anhui Province, China",
    log: "BugMaker",
    expect_work: "Java Backend or CV Algorithm",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "明天不一定会更好，但要坚信更好的明天一定会来。",
        "要做的事情总找得出时间和机会，不愿意做的事情也总能找得出借口。",
        "Gor For It!",
        "有智者立长志，无志者长立志。",
        "那些过去的眼泪终将风干在记忆里。",
        "真相，是为了剿灭幻想。",
        "我欲将心向明月，奈何明月照沟渠。",
        "春风得意马蹄疾，一日看尽长安花。",
        "天凉好个秋！",
        "老骥伏枥，志在千里。烈士暮年，壮心不已。",
        "老当益壮，宁移白首之心。穷且益坚，不坠青云之志。",
        "我们必须拿我们所有的， 去换我们所没有的",
        "蒹葭苍苍，白露为霜；所谓伊人，在水一方。",
        "数风流人物，还看今朝！"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "早生华发<br>" +
             "多情应笑我<br>" +
             "Wenqing Zhou<br>" +
             "Be Yourself!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "I am currently pursuing a Master's degree in Computer Science and Technology at the University of Science and Technology of China. My academic interests include artificial intelligence, data science, computer vision, and I am passionate about applying my knowledge to solve real-world problems.",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["Java", 80, "red"],
        ["GoLang", 20, "blue"],
        ["SQL", 80, "#1abc9c"],
        ["HTML5", 70, "rgba(0,0,0)"],
        ["CSS3", 70, "yellow"],
        ["JavaScript", 40, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>操作系统、计算机网络等编程基础知识良好。</li>" +
        "     <li>熟练掌握Java基础。</li>" +
        "     <li>熟悉JavaIO、多线程、集合等基础框架。</li>" +
        "     <li>了解JVM原理。</li>" +
        "     <li>熟悉Go语言开发基本知识。</li>" +
        "     <li>熟悉SQL语句编写以及调优。</li>" +
        "     <li>熟悉基本Linux命令操作。</li>" +
        "     <li>熟悉Spring、ibatis、struts等框架的使用，了解其原理与机制。</li>" +
        "     <li>熟悉缓存、消息等机制。</li>" +
        "     <li>了解分布式系统的设计与应用。</li>" +
        "     <li>熟悉HTML、CSS、JavaScript以及相应前端知识。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/project1.png", "https://github.com/BugMaker2002/MNJJXT", "智能家居模拟系统", "用QT实现了一个智能家居模拟系统"],
        ["./images/project2.png", "https://github.com/BugMaker2002/EPAS", "企业绩效考核系统", "采用JavaWeb实现"],
        ["./images/project3.png", "https://blog.csdn.net/m0_57317650/article/details/135286434?spm=1001.2014.3001.5501", "基于QT C++的大富翁游戏", "QT C++"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["2020/9 — 2024/6", "<br>华南理工大学",
            "<p><strong>华南理工大学软件学院</strong></p>" +
            "<p>Software Engineering Major</p>"
        ],

        ["2024/9 — 2027/6", "<br>中国科学技术大学",
            "<p><strong>中国科学技术大学信息科学与技术学院</strong></p>" +
            "<p>Electronic Information Major</p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2024-09", "华南理工大学毕业", "保研进入中国科学技术大学"],
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/github.svg", "https://github.com/BugMaker2002", "我的GitHub主页"],
        ["./svg/csdn.svg", "https://blog.csdn.net/m0_57317650", "我的CSDN主页"],
        ["./svg/推特.svg", "https://x.com/RoyChou22552034", "我的X主页"],
        ["./svg/instagram.svg", "https://www.instagram.com/koreyoshizhou", "我的instagram主页"],
        ["./svg/youtube.svg", "https://www.youtube.com/@wqZ-xe2zm", "我的youtube主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/index_background.jpg",
        "./images/avatar.jpg",
        "./images/work-bk.png",
        "./images/intro-bg.jpg"
    ]

}
