import {
  StrikethroughOutlined,
  FontColorsOutlined,
  MediumOutlined,
} from '@ant-design/icons';
import cookie from 'react-cookies'
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

let menuList = []
menuList.push(cookie.load('menuListOne'),cookie.load('menuListTwo'),cookie.load('menuListThree'))
const listJson = {
    "menuItem": [
      getItem('Midjourney', 'sub1', <MediumOutlined />, [
        getItem('新手指南', '1'),
        getItem('进阶教程', '2'),
        getItem('Prompt词库', '3'),
        getItem('常用工具', '4'),
        getItem('技巧提升', '5'),
      ]),
      getItem('Stable Diffusion', 'sub2', <StrikethroughOutlined />, [
        getItem('新手指南', '6'),
        getItem('进阶教程', '7'),
        getItem('Prompt词库', '8'),
        getItem('常用模型', '9'),
        getItem('常用工具', '10'),
        getItem('技巧提升', '11'),
      ]),
      getItem('ChatGPT', 'sub3', <FontColorsOutlined />, [
        getItem('新手指南', '12'),
        getItem('资讯新知', '13'),
        getItem('办公', '14'),
        getItem('体育', '15'),
        getItem('游戏', '16'),
        getItem('编程', '17'),
        getItem('营销', '18'),
        getItem('小工具', '19'),
      ]),
    ],
    "menuList": menuList,
    "menuList":[
      {
        title:'Midjourney',
        label:'Midjourney',
        value:'Midjourney',
        subTitle:'sub1',
        icon:<MediumOutlined />,
        children:[
          {
            value:'新手指南',
            label:'新手指南',
            title:'新手指南',
            id:'1',
            key:'1',
            "children": "",
          },
          {
            value:'进阶教程',
            label:'进阶教程',
            title:'进阶教程',
            id:'2',
            key:'2',
            "children": "",
          },
          {
            value:'Prompt词库',
            label:'Prompt词库',
            title:'Prompt词库',
            id:'3',
            key:'3',
            "children": "",
          },
          {
            value:'常用工具',
            label:'常用工具',
            title:'常用工具',
            id:'4',
            key:'4',
            "children": "",
          },
          {
            value:'技巧提升',
            label:'技巧提升',
            title:'技巧提升',
            id:'5',
            key:'5',
            "children": "",
          },
        ]
      },
      {
        title:'Stable Diffusion',
        label:'Stable Diffusion',
        value:'Stable Diffusion',
        subTitle:'sub2',
        icon:<StrikethroughOutlined />,
        children:[
          {
            value:'新手指南',
            label:'新手指南',
            title:'新手指南',
            id:'6',
            key:'6',
            "children": "",
          },
          {
            value:'进阶教程',
            label:'进阶教程',
            title:'进阶教程',
            id:'7',
            key:'7',
            "children": "",
          },
          {
            value:'Prompt词库',
            label:'Prompt词库',
            title:'Prompt词库',
            id:'8',
            key:'8',
            "children": "",
          },
          {
            value:'常用模型',
            label:'常用模型',
            title:'常用模型',
            id:'9',
            key:'9',
            "children": "",
          },
          {
            value:'常用工具',
            label:'常用工具',
            title:'常用工具',
            id:'10',
            key:'10',
            "children": "",
          },
          {
            value:'技巧提升',
            label:'技巧提升',
            title:'技巧提升',
            id:'11',
            key:'11',
            "children": "",
          },
        ]
      },
      {
        title:'ChatGPT',
        label:'ChatGPT',
        value:'ChatGPT',
        subTitle:'sub3',
        icon:<FontColorsOutlined />,
        children:[
          {
            value:'新手指南',
            label:'新手指南',
            title:'新手指南',
            id:'12',
            key:'12',
            "children": "",
          },
          {
            value:'资讯新知',
            label:'资讯新知',
            title:'资讯新知',
            id:'13',
            key:'13',
            "children": "",
          },
          {
            value:'办公',
            label:'办公',
            title:'办公',
            id:'14',
            key:'14',
            "children": "",
          },
          {
            value:'体育',
            label:'体育',
            title:'体育',
            id:'15',
            key:'15',
            "children": "",
          },
          {
            value:'游戏',
            label:'游戏',
            title:'游戏',
            id:'16',
            key:'16',
            "children": "",
          },
          {
            value:'编程',
            label:'编程',
            title:'编程',
            id:'17',
            key:'17',
            "children": "",
          },
          {
            value:'营销',
            label:'营销',
            title:'营销',
            id:'18',
            key:'18',
            "children": "",
          },
          {
            value:'小工具',
            label:'小工具',
            title:'小工具',
            id:'19',
            key:'19',
            "children": "",
          },
        ]
      },
    ],
    "item": [{
        "key": "1",
        "label": "站内",
        "children": "",
        "inputHolder": "站内搜索",
        "list": []
    },
    {
        "key": "2",
        "label": "搜索",
        "children": "",
        "inputHolder": "AI智能检索（英文结果）",
        "list": [{
                "key": "1",
                "label": "AI",
                "children": "",
                "inputHolder": "AI智能检索（英文结果）"
            },
            {
                "key": "2",
                "label": "百度",
                "children": "",
                "inputHolder": "百度一下"
            },
            {
                "key": "3",
                "label": "GooGle",
                "children": "",
                "inputHolder": "谷歌两下"
            },
            {
                "key": "4",
                "label": "360",
                "children": "",
                "inputHolder": "360好搜"
            },
            {
                "key": "5",
                "label": "搜狗",
                "children": "",
                "inputHolder": "搜狗搜索"
            },
            {
                "key": "6",
                "label": "Bing",
                "children": "",
                "inputHolder": "微软Bing搜索"
            },
            {
                "key": "7",
                "label": "神马",
                "children": "",
                "inputHolder": "UC移动端搜索"
            }
        ]
    },
    {
        "key": "3",
        "label": "常用",
        "children": "",
        "inputHolder": "百度一下",
        "list": [{
                "key": "1",
                "label": "百度",
                "children": "",
                "inputHolder": "百度一下"
            },
            {
                "key": "2",
                "label": "GooGle",
                "children": "",
                "inputHolder": "谷歌两下"
            },
            {
                "key": "3",
                "label": "站内",
                "children": "",
                "inputHolder": "站内搜索"
            },
            {
                "key": "4",
                "label": "淘宝",
                "children": "",
                "inputHolder": "淘宝"
            },
            {
                "key": "5",
                "label": "Bing",
                "children": "",
                "inputHolder": "微软Bing搜索"
            },
            {
                "key": "6",
                "label": "Web3搜索",
                "children": "",
                "inputHolder": "Web3搜索"
            }
        ]
    },
    {
        "key": "4",
        "label": "工具",
        "children": "",
        "inputHolder": "请输入网址(不带https://)",
        "list": [{
                "key": "1",
                "label": "权重查询",
                "children": "",
                "inputHolder": "请输入网址(不带https://)"
            },
            {
                "key": "2",
                "label": "友链检测",
                "children": "",
                "inputHolder": "请输入网址(不带https://)"
            },
            {
                "key": "3",
                "label": "备案查询",
                "children": "",
                "inputHolder": "请输入网址(不带https://)"
            },
            {
                "key": "4",
                "label": "Ping检测",
                "children": "",
                "inputHolder": "请输入网址(不带https://)"
            },
            {
                "key": "5",
                "label": "死链检测",
                "children": "",
                "inputHolder": "请输入网址(不带https://)"
            },
            {
                "key": "6",
                "label": "关键词挖掘",
                "children": "",
                "inputHolder": "请输入关键词"
            }
        ]
    },
    {
        "key": "5",
        "label": "社区",
        "children": "",
        "inputHolder": "知乎",
        "list": [{
                "key": "1",
                "label": "知乎",
                "children": "",
                "inputHolder": "知乎"
            },
            {
                "key": "2",
                "label": "微信",
                "children": "",
                "inputHolder": "微信"
            },
            {
                "key": "3",
                "label": "微博",
                "children": "",
                "inputHolder": "微博"
            },
            {
                "key": "4",
                "label": "豆瓣",
                "children": "",
                "inputHolder": "豆瓣"
            },
            {
                "key": "5",
                "label": "搜外问答",
                "children": "",
                "inputHolder": "SEO问答社区"
            }
        ]
    }
],
"rollList": [
    {
        "title":"【更新通知】02/27 ~ 03/05 更新说明 (03/05)",
        "id": "1"
    },
    {
        "title":"【站点介绍】我们是谁，在做什么？ (03/05)",
        "id": "2"
    }
],
"swiperList":[
    {
      "src": "../../assets/swiper1.png",
      "title": "ChatGPT爆火的冷思考",
      "id":1
    },
    {
      "src": "../../assets/swiper1.png",
      "title": "鼓励工业大省勇挑大梁！支持企业从事科创活动，用梅西解释ChatGPT....两会首场“部长通道”信息量很大",
      "id":2
    },
    {
      "src": "../../assets/swiper1.png",
      "title": "OpenAI的聊天机器人ChatGPT是什么？有什么用？",
      "id":3
    },
    {
      "src": "../../assets/swiper1.png",
      "title": "人工智能绘画：计算机想象力的天花板？",
      "id":4
    },
    {
      "src": "../../assets/swiper1.png",
      "title": "科技早报｜香港科技大学允许学生使用ChatGPT 拼多多将在3月25日上线英国站点",
      "id":5
    }
  ],
  "exampleList": [
    {
      "src": "require('../../assets/example1.png')",
      "title": "【SD教程】教你如何用AI做人物设计！",
      "id":1
    },
    {
      "src": "require('../../assets/example2.png')",
      "title": "AI快速绘制Logo",
      "id":2
    }
  ],
  timeLineList: [
    {
      color: 'gray',
      children: (
        <>
          <p className='timeLineTitle'>ChatGPT爆火的冷思考</p>
          <p className='timeLineP'><span>ChatGPT办公</span><span>3月 14, 2023</span></p>
        </>
      ),
    },
    {
      color: 'gray',
      children: (
        <>
          <p className='timeLineTitle'>鼓励工业大省勇挑大梁！支持企业从事科创活动，用梅西解释ChatGPT....两会首场“部长通道”信息量很大</p>
          <p className='timeLineP'><span>ChatGPT市场营销</span><span>3月 14, 2023</span></p>
        </>
      ),
    },{
      color: 'gray',
      children: (
        <>
          <p className='timeLineTitle'>OpenAI的聊天机器人ChatGPT是什么？有什么用？</p>
          <p className='timeLineP'><span>ChatGPT市场营销</span><span>3月 14, 2023</span></p>
        </>
      ),
    },
    {
      color: 'gray',
      children: (
        <>
          <p className='timeLineTitle'>人工智能绘画：计算机想象力的天花板？</p>
          <p className='timeLineP'><span>MJ指南</span><span>3月 14, 2023</span></p>
        </>
      ),
    },

    {
      color: 'gray',
      children: (
        <>
          <p className='timeLineTitle'>科技早报｜香港科技大学允许学生使用ChatGPT 拼多多将在3月25日上线英国站点</p>
          <p className='timeLineP'><span>ChatGPT教育</span><span>3月 14, 2023</span></p>
        </>
      ),
    },
    {
      color: 'gray',
      children: (
        <>
          <p className='timeLineTitle'>ChatGPT「闯荡」2023年全国两会</p>
          <p className='timeLineP'><span>ChatGPT办公</span><span>3月 14, 2023</span></p>
        </>
      ),
    },
    {
      color: 'gray',
      children: (
        <>
          <p className='timeLineTitle'>原创 ChatGPT应用爆火，安全的大数据底座难寻 | 中国数度笔记</p>
          <p className='timeLineP'><span>ChatGPT编程</span><span>3月 14, 2023</span></p>
        </>
      ),
    },
    {
      color: 'gray',
      children: (
        <>
          <p className='timeLineTitle'>如何使用ChatGPT批量写软文？</p>
          <p className='timeLineP'><span>ChatGPT市场营销</span><span>3月 14, 2023</span></p>
        </>
      ),
    },
    {
      color: 'gray',
      children: (
        <>
          <p className='timeLineTitle'>行业专访｜ChatGPT是在“用人类喜欢的方式回答”，AIGC商业化应用前景光明</p>
          <p className='timeLineP'><span>ChatGPT编程</span><span>3月 14, 2023</span></p>
        </>
      ),
    },
    {
      color: 'gray',
      children: (
        <>
          <p className='timeLineTitle'>对话 ChatGPT：现象级 AI 应用，将如何阐释「研发效能管理」？</p>
          <p className='timeLineP'><span>ChatGPT办公</span><span>3月 14, 2023</span></p>
        </>
      ),
    },
  ],
  tabOneList:{
    list1:[
      {
        title: 'Midjourney新手必读',
        content: 'Midjourney新手指南',
        time: '3周前',
        id: 1,
      },
      {
        title: '如何注册使用Midjourney',
        content: 'Midjourney新手指南',
        time: '3周前',
        id: 2,
      },
      {
        title: 'Midjourney基本指令',
        content: 'Midjourney新手指南',
        time: '3周前',
        id: 3,
      },
      {
        title: 'Midjourney常用技巧',
        content: 'Midjourney新手指南',
        time: '3周前',
        id: 4,
      },
      {
        title: 'Midjourney会员充值',
        content: 'Midjourney新手指南',
        time: '3周前',
        id: 5,
      }
    ],
    list2:[
      {
        title: '莱森系列课教学配套资料库',
        content: '莱森系列课教学配套资料库',
        time: '',
        id: 1,
      },
      {
        title: '生成皮克斯风格or迪士尼风格头像',
        content: '如何使用midjourney快速生成自己的皮克斯风格or迪士尼风格头像？',
        time: '',
        id: 2,
      },
      {
        title: 'MJ创作有特色多形象系列',
        content: '利用midjourney创作具有特色的多个系列形象',
        time: '',
        id: 3,
      },
      {
        title: '刘飞老师MJ进阶创意库',
        content: '刘飞老师在小报童的MJ付费专栏，带你从小白进阶到高手！',
        time: '',
        id: 4,
      },
      {
        title: 'MJ最佳新手入门视频教程',
        content: 'B站UP主莱森LysonOber非常细致的适合新手入门MJ的视频教程👍🏻',
        time: '',
        id: 5,
      },
      {
        title: 'MJ高手进阶指南',
        content: '和叶师傅学习MJ绘图中的美学与关键词！',
        time: '',
        id: 6,
      },
      {
        title: 'MJ图文入门教程',
        content: '来自女性 AI 艺术学习小组的图文入门教程',
        time: '',
        id: 7,
      },
      {
        title: '用MJ生成UI平面插画',
        content: '来自B站UP主发呆的工具人的教学~',
        time: '',
        id: 8,
      },
      {
        title: '如何使用MJ做漫画',
        content: '来自B站UP主人工治障的教学',
        time: '',
        id: 9,
      },
      {
        title: '用MJ生成同一系列虚拟IP',
        content: '来自B站UP主故障工作室的教程~',
        time: '',
        id: 10,
      },
      {
        title: '使用关键词过滤画面多余元素',
        content: '如何使用关键词来过滤画面多余的元素？来自B站UP主葡萄蓝莓酒丶的教学~',
        time: '',
        id: 11,
      },
      {
        title: 'Midjourney创建unity2d资产',
        content: '搬运自油管教程',
        time: '',
        id: 12,
      },
      {
        title: '使用ChatGPT生成关键词',
        content: '教你训练ChatGPT帮你输出你想要的MJ关键词',
        time: '',
        id: 13,
      }
    ],
    list3:[
      {
        title: 'ckovalev',
        content: '艺术家词库集合',
        time: '',
        id: 1,
      },
      {
        title: 'MJ关键词词库小程序',
        content: 'Midjourney关键词词库小程序',
        time: '',
        id: 2,
      },
      {
        title: 'KALOS',
        content: 'AIGC 艺术家样式库',
        time: '',
        id: 3,
      },
      {
        title: '通用提示词',
        content: '通用提示生成器',
        time: '',
        id: 4,
      },
      {
        title: '图片关键词词库',
        content: '黎巴嫩医学生搭建的一个图文对照的关键词词库~',
        time: '',
        id: 5,
      },
      {
        title: 'MJ共建prompt关键词词库',
        content: '向阳乔木搭建的MJ关键词飞书共建库',
        time: '',
        id: 6,
      },
      {
        title: '必看Prompt关键词入门指南！',
        content: 'github的MJ风格关键词对照词库（最全！！！），需要科学上网',
        time: '',
        id: 7,
      },
      {
        title: '最全艺术家关键词词库',
        content: '谷歌表格维护的艺术家词库，有词对照的示例风格图片，超全！~',
        time: '',
        id: 8,
      },
      {
        title: 'MJ基础关键词入门指南',
        content: '可以简单入门学习一下基本的关键词！',
        time: '',
        id: 9,
      },
      {
        title: 'MJ魔导书',
        content: '关于人物、涩涩图制作的Prompt词库~',
        time: '',
        id: 10,
      },
      {
        title: 'MJ关键词词库',
        content: '来自互联网群众共创~',
        time: '',
        id: 11,
      }
    ],
    list4:[
      {
        title: 'waifu2x',
        content: '保证品质的情况下放大图片',
        time: '',
        id: 1,
      },
      {
        title: 'PromptBase',
        content: '基于MJ,SD,DALL-E,GPT3的关键词交易市场',
        time: '',
        id: 2,
      },
      {
        title: 'Replicate',
        content: 'AI分析图片，给出相对接近的Prompt',
        time: '',
        id: 3,
      },
      {
        title: 'MidJourney资源懒人包',
        content: '台湾同学整理的MJ相关资源集合（需科学上网）',
        time: '',
        id: 4,
      },
      {
        title: 'prompter',
        content: '一个可视化prompt编辑器客户端，可以快速找到你想要的风格并生成对应MJ的prompt~',
        time: '',
        id: 5,
      },
      {
        title: 'PromptHelper生成器',
        content: '快速选择关键词，生成prompt',
        time: '',
        id: 6,
      },
      {
        title: 'PEZ Dispenser',
        content: '上传图片反向获得关键词，并可以简化缩短Prompt!',
        time: '',
        id: 7,
      },
      {
        title: 'BLIP',
        content: '上传你想询问关键词的图片，通过AI反向获取到关键词！',
        time: '',
        id: 8,
      },
      {
        title: 'MJ可视化关键词风格对照器',
        content: '有对应的Prompt和图片风格，方便挑选！',
        time: '',
        id: 9,
      },
      {
        title: 'Prompthero',
        content: '关键词交易市场',
        time: '',
        id: 10,
      },
      {
        title: '魔咒百科词典',
        content: '简单易用的AI绘画tag生成器 -- By bilibili 波西BrackRat',
        time: '',
        id: 11,
      },
      {
        title: 'Bigjpg',
        content: 'AI精细化放大图片',
        time: '',
        id: 12,
      },
      {
        title: 'Topaz',
        content: 'AI自动化处理图片细节',
        time: '',
        id: 13,
      },
      {
        title: 'prompt关键词生成器',
        content: '可视化生成Midjourney关键词',
        time: '',
        id: 14,
      }
    ],
    list5:[
      {
        title: 'AI打赢真人画家拿下艺术大赛第一，人类被气破防了',
        content: 'MJ指南',
        time: '7小时前',
        id: 1,
      },
      {
        title: 'AI不止会说话',
        content: 'MJ指南',
        time: '8小时前',
        id: 2,
      },
      {
        title: 'midjourney Al创作工具怎么玩？这里有一份Midjourney Prompts大全（内含644个创意案例）',
        content: 'MJ指南',
        time: '9小时前',
        id: 3,
      },
      {
        title: 'midjourney v5版本即将发布  支持图片上传解析prompt功能',
        content: 'MJ指南',
        time: '10小时前',
        id: 4,
      },
      {
        title: '几天学完上亿张图，1分钟赚200块，AI作画为何吵翻天？',
        content: 'MJ指南',
        time: '11小时前',
        id: 5,
      },
      {
        title: 'ChatGPT Midjourney可量产“宫崎骏”！AI将会让多少设计师失业？',
        content: 'MJ指南',
        time: '3小时前',
        id: 6,
      },
      {
        title: '上线一个月成为准独角兽、上万人排队注册，AI Art是下一个NFT？| 全球行业mapping',
        content: 'MJ指南',
        time: '12小时前',
        id: 7,
      },
      {
        title: '我chatGPT写故事，用Midjourney生产图片，一本故事书就完成了。',
        content: 'MJ指南',
        time: '4小时前',
        id: 8,
      }
    ],
  },
  tabTwoList:{
    list1:[
      {
        title: 'Stable Diffusion新手必读',
        content: 'SD新手指南',
        time: '3周前',
        id: 1,
      },
      {
        title: 'Windows系统下载安装StableDiffusion入门教程',
        content: 'SD新手指南',
        time: '3周前',
        id: 2,
      },
      {
        title: 'Mac系统Stable Diffusion安装指南',
        content: 'SD新手指南',
        time: '3周前',
        id: 3,
      },
      {
        title: '秋叶大佬Stable Diffusion使用安装视频教程',
        content: 'SD新手指南',
        time: '3周前',
        id: 4,
      },
      {
        title: 'Stable Diffusion基础技巧',
        content: 'SD新手指南',
        time: '3周前',
        id: 5,
      },
      {
        title: 'Stable Diffusion指令指南',
        content: 'SD新手指南',
        time: '1周前',
        id: 6,
      },
      {
        title: '教你如何安装Stable Diffusion插件',
        content: 'SD新手指南',
        time: '1周前',
        id: 7,
      }
    ],
    list2:[
      {
        title: '【必会】ContorlNet进行颜色控制和背景替换',
        content: 'ContorlNet进行颜色控制和背...',
        time: '',
        id: 1,
      },
      {
        title: 'SD生成人像写真时的光影处理',
        content: '用SD生成人像写真的方法，以及过程中用到的光影处理',
        time: '',
        id: 2,
      },
      {
        title: '重绘AI图片，修复错乱文字',
        content: '利用controlNet重绘AI图片的文字',
        time: '',
        id: 3,
      },
      {
        title: '利用inpainting修复手部',
        content: '如何针对SD绘图作品，精准修复手部',
        time: '',
        id: 4,
      },
      {
        title: 'StableDiffusion机甲线稿自动上色',
        content: 'StableDiffusion机甲线稿自动上色',
        time: '',
        id: 5,
      },
      {
        title: 'Stable Diffusion官方网站',
        content: '强大的制图AI，简称SD',
        time: '',
        id: 6,
      },
      {
        title: 'SD 的文转图功能全介绍',
        content: '来自B站UP主FGO萌新社-剑的SD教程',
        time: '',
        id: 7,
      },
      {
        title: 'SDwebUI',
        content: 'SD的用户界面~',
        time: '',
        id: 8,
      },
      {
        title: 'Stable Diffusion详细教程',
        content: '来自B班UP主可动程序CGexe的Stable Diffusion详细教程',
        time: '',
        id: 9,
      },
      {
        title: 'SD安装教程',
        content: 'B站UP主人工智障的SD安装教程~',
        time: '',
        id: 10,
      }
    ],
    list3:[
      {
        title: 'AIGODLIKE社区',
        content: '国内二次元图库社区，学习他人的作品Prompt',
        time: '',
        id: 1,
      },
      {
        title: 'SD艺术风格汇总',
        content: '不同艺术家风格的汇总',
        time: '',
        id: 2,
      },
      {
        title: '通用提示词',
        content: '通用提示生成器',
        time: '',
        id: 3,
      },
      {
        title: 'SD词库',
        content: 'SD词库',
        time: '',
        id: 4,
      },
      {
        title: 'SD生成艺术关键词词库',
        content: '探索 AI 生成的设计、图像、艺术，来自顶级社区艺术家和设计师的提示。~',
        time: '',
        id: 5,
      }
    ],
    list4:[
      {
        title: 'Offset Noise',
        content: '基于lora生成明暗对比更强，饱和度更高的图像',
        time: '',
        id: 1,
      },
      {
        title: 'pretty 2.5D',
        content: '超可爱画风的2.5D模型库',
        time: '',
        id: 2,
      },
      {
        title: 'CuteScrap - 0.5v',
        content: '制作很可爱的简笔画涂鸦风的图片',
        time: '',
        id: 3,
      },
      {
        title: 'CharTurnerBeta - Lora',
        content: '游戏人物三视图绘制的模型',
        time: '',
        id: 4,
      },
      {
        title: 'Cinematic Diffusion',
        content: '用于生成极具电影感的镜头画面',
        time: '',
        id: 5,
      },
      {
        title: 'pixel art 像素风',
        content: '适合游戏人创作像素复古风格的图片绘制',
        time: '',
        id: 6,
      },
      {
        title: '[Toru8P] Waven Chibi Style',
        content: '适合游戏行业生成chibi矮人玩偶风的人物IP',
        time: '',
        id: 7,
      },
      {
        title: 'Inkpunk768',
        content: '适合生成极具特色的描边朋克风的动漫绘图',
        time: '',
        id: 8,
      },
      {
        title: 'Torino Aqua Style LoRA',
        content: '适合生成二次元游戏立绘的模型~',
        time: '',
        id: 9,
      },
      {
        title: "Cheese Daddy's Landscapes mix",
        content: '适合生成风景壁纸和风景场景',
        time: '',
        id: 10,
      },
      {
        title: 'Protogen V2.2(Anime)模型下载',
        content: '更适合游戏动画风格的风格图片塑造',
        time: '',
        id: 11,
      },
      {
        title: 'Realistic Vision模型下载',
        content: '更好支持极具真实感的人物和环境塑造的模型',
        time: '',
        id: 12,
      },
      {
        title: 'Deliberate模型下载',
        content: '基于关键词的万能类型图片生成模型',
        time: '',
        id: 13,
      },
      {
        title: 'chilloutmix模型下载',
        content: 'civitAI下载最多的模型，制作真人图片',
        time: '',
        id: 14,
      },
      {
        title: 'Civitai',
        content: 'SD模型库',
        time: '',
        id: 15,
      },
      {
        title: 'Textual Inversion 模型库',
        content: 'Textual Inversion 模型',
        time: '',
        id: 16,
      },
      {
        title: 'DreamBooth 模型库',
        content: 'DreamBooth 模型',
        time: '',
        id: 17,
      },
      {
        title: 'SD模型合集',
        content: 'SD AI模型合集',
        time: '',
        id: 18,
      },
      {
        title: 'WebUI Docker安装工具',
        content: '使用UI 在机器上运行 Stable Diffusion',
        time: '',
        id: 19,
      },
      {
        title: "Docker 容器中安装SD",
        content: '在Docker中提供SD的稳定安装版本',
        time: '',
        id: 20,
      },
    ],
    list5:[
      {
        title: 'Magic Poser',
        content: '快速生成人物动作，搭配ContorlNet在SD中生成你想要的形态',
        time: '',
        id: 1,
      },
      {
        title: '阿里达摩院-魔搭',
        content: '阿里达摩院对标Huggingface的产品，现注册赠送100小时GPU算力云！',
        time: '',
        id: 2,
      },
      {
        title: 'Ucloud云服务租赁',
        content: 'ucloud AI绘画算力云',
        time: '',
        id: 3,
      },
      {
        title: 'autoDL云服务租用',
        content: '按量计费的SD算力云服务，在线租用显卡算力服务生成SD图片',
        time: '',
        id: 4,
      }
    ],
    list6:[
      {
        title: '大佬在苹果MacBook上跑LLaMA，130亿参数大模型仅占8GB',
        content: 'SD指南',
        time: '22小时前',
        id: 1,
      },
      {
        title: '大型语言模型走入消费级硬件，现在可以在电脑和手机上运行了',
        content: 'SD指南',
        time: '23小时前',
        id: 2,
      },
      {
        title: '人工智能神笔马良——stable diffusion',
        content: 'SD指南',
        time: '24小时前',
        id: 3,
      },
      {
        title: '【SD教程】教你如何用AI做人物设计！',
        content: 'SD指南',
        time: '2天前',
        id: 4,
      },
      {
        title: 'Stable Diffusion加chilloutmixni真人图片生成模型，AI绘图杀疯了',
        content: 'SD指南',
        time: '3天前',
        id: 5,
      },
      {
        title: '一文看尽SOTA生成式模型：9大类别21个模型全回顾！',
        content: 'SD指南',
        time: '3天前',
        id: 6,
      },
      {
        title: 'AI绘画中两种模型的比较！作图真的细腻，堪比真人！',
        content: 'SD指南',
        time: '4天前',
        id: 7,
      },
      {
        title: '当AI学会了自己写游戏，当我们可以同时和所有大模型对话',
        content: 'SD指南',
        time: '4天前',
        id: 8,
      }
    ],
  },
  tabThreeList:{
    list1:[
      {
        title: 'Chatgpt新手必读',
        content: 'ChatGPT',
        time: '2周前',
        id: 1,
      },
      {
        title: 'Chatgpt如何注册',
        content: 'ChatGPT',
        time: '2周前',
        id: 2,
      },
      {
        title: '搭建属于你的私人ChatGPT!',
        content: 'ChatGPT',
        time: '2周前',
        id: 3,
      },
      {
        title: '搭建属于你的私人ChatGPT!',
        content: 'ChatGPT',
        time: '1周前',
        id: 4,
      }
    ],
    list2:[
      {
        title: '有点儿意思！开学还能跟着火遍全网的机器人ChatGPT买装备',
        content: 'ChatGPT教育',
        time: '2小时前',
        id: 1,
      },
      {
        title: '香港科技大学副教授：鼓励学生在期中报告中使用ChatGPT',
        content: 'ChatGPT教育',
        time: '4小时前',
        id: 2,
      },
      {
        title: 'ChatGPT再升级，10秒就可做出一个网站，还能看图说话',
        content: 'ChatGPT教育',
        time: '5小时前',
        id: 3,
      },
      {
        title: '利用chatgpt高质量原创文章',
        content: 'ChatGPT办公',
        time: '9小时前',
        id: 4,
      },
      {
        title: '数字经济“上海模式”：从智慧之城到中国ChatGPT',
        content: 'ChatGPT办公',
        time: '10小时前',
        id: 5,
      },
      {
        title: '从火爆的ChatGPT到AI（人工智能）前景的展望',
        content: 'ChatGPT办公',
        time: '11小时前',
        id: 6,
      },
      {
        title: '我们和ChatGPT聊了聊中国足球......',
        content: 'ChatGPT办公',
        time: '12小时前',
        id: 7,
      },
      {
        title: 'ChatGPT：增程式不落后，超越比亚迪的车企可能是这三家',
        content: 'ChatGPT市场营销',
        time: '12小时前',
        id: 8,
      }
    ],
    list3:[
      {
        title: '利用chatgpt高质量原创文章',
        content: 'ChatGPT办公',
        time: '9小时前',
        id: 1,
      },
      {
        title: '数字经济“上海模式”：从智慧之城到中国ChatGPT',
        content: 'ChatGPT办公',
        time: '10小时前',
        id: 2,
      },
      {
        title: '从火爆的ChatGPT到AI（人工智能）前景的展望',
        content: 'ChatGPT办公',
        time: '11小时前',
        id: 3,
      },
      {
        title: '我们和ChatGPT聊了聊中国足球......',
        content: 'ChatGPT办公',
        time: '12小时前',
        id: 4,
      },
      {
        title: 'ChatGPT算力消耗惊人，能烧得起的中国公司寥寥无几',
        content: 'ChatGPT办公',
        time: '13小时前',
        id: 5,
      },
      {
        title: 'ChatGPT商业应用来了！微软旗下多款工具率先“吃螃蟹”',
        content: 'ChatGPT办公',
        time: '13小时前',
        id: 6,
      },
      {
        title: '代表委员“高言值”丨拥抱“ChatGPT热潮” 代表委员亮出“冷思考”',
        content: 'ChatGPT办公',
        time: '6小时前',
        id: 7,
      },
      {
        title: '苹果限制ChatGPT相关应用更新！',
        content: 'ChatGPT办公',
        time: '14小时前',
        id: 8,
      }
    ],
    list4:[
      {
        title: '有点儿意思！开学还能跟着火遍全网的机器人ChatGPT买装备',
        content: 'ChatGPT教育',
        time: '2小时前',
        id: 1,
      },
      {
        title: '香港科技大学副教授：鼓励学生在期中报告中使用ChatGPT',
        content: 'ChatGPT教育',
        time: '4小时前',
        id: 2,
      },
      {
        title: 'ChatGPT再升级，10秒就可做出一个网站，还能看图说话',
        content: 'ChatGPT教育',
        time: '5小时前',
        id: 3,
      },
      {
        title: '纽约市公立学校禁止使用ChatGPT，教育如何应对人工智能挑战？',
        content: 'ChatGPT教育',
        time: '15小时前',
        id: 4,
      },
      {
        title: '爆火的ChatGPT究竟是什么？会取代人工吗？',
        content: 'ChatGPT教育',
        time: '16小时前',
        id: 5,
      },
      {
        title: '原创 ChatGPT教育行业是禁止还是利用？',
        content: 'ChatGPT教育',
        time: '16小时前',
        id: 6,
      },
      {
        title: '科技早报｜香港科技大学允许学生使用ChatGPT 拼多多将在3月25日上线英国站点',
        content: 'ChatGPT教育',
        time: '1天前',
        id: 7,
      },
      {
        title: '香港科技大学：期中报告使用ChatGPT可加分',
        content: 'ChatGPT教育',
        time: '2天前',
        id: 8,
      }
    ],
    list5:[
      {
        title: '下篇：4万字告诉你ChatGPT到底是什么《星船知造ChatGPT技术架构及中国人工智能未来发展趋势报告》发布',
        content: 'ChatGPT游戏',
        time: '1天前',
        id: 1,
      },
      {
        title: '降价90%！OpenAI开放ChatGPT模型API，开发人员可将其集成到自己的产品中',
        content: 'ChatGPT游戏',
        time: '2天前',
        id: 2,
      },
      {
        title: 'ChatGPT热的冷思考',
        content: 'ChatGPT游戏',
        time: '2天前',
        id: 3,
      },
      {
        title: '用ChatGPT生成openAI全景报告',
        content: 'ChatGPT游戏',
        time: '2天前',
        id: 4,
      },
      {
        title: '【ChatGPT原理解读】A Closer Look at ChatGPT',
        content: 'ChatGPT游戏',
        time: '3天前',
        id: 5,
      },
      {
        title: '【ChatGPT原理解读】A Closer Look at ChatGPT',
        content: 'ChatGPT游戏',
        time: '3天前',
        id: 6,
      },
      {
        title: 'ChatGPT 关于围棋的回答',
        content: 'ChatGPT游戏',
        time: '3天前',
        id: 7,
      },
      {
        title: 'Take-Two首席执行官：ChatGPT令人兴奋，但不会颠覆游戏行业',
        content: 'ChatGPT游戏',
        time: '4天前',
        id: 8,
      }
    ],
    list6:[
      {
        title: '关于ChatGPT',
        content: 'ChatGPT编程',
        time: '13小时前',
        id: 1,
      },
      {
        title: '《知新大讲堂》第41期：漫谈ChatGPT 人工智能引发的“创新革命”',
        content: 'ChatGPT编程',
        time: '13小时前',
        id: 2,
      },
      {
        title: 'ChatGPT引来全球热议，且看大咖们怎么说',
        content: 'ChatGPT编程',
        time: '13小时前',
        id: 3,
      },
      {
        title: 'ChatGPT引领突破！人工智能加速度，中国企业紧紧跟住',
        content: 'ChatGPT编程',
        time: '14小时前',
        id: 4,
      },
      {
        title: '关于建筑企业数字化转型，ChatGPT都说了啥',
        content: 'ChatGPT编程',
        time: '15小时前',
        id: 5,
      },
      {
        title: 'ChatGPT专题报告合辑(精选七篇) 附下载',
        content: 'ChatGPT编程',
        time: '15小时前',
        id: 6,
      },
      {
        title: '让chatGPT写一篇竞选美国总统的演讲稿',
        content: 'ChatGPT编程',
        time: '16小时前',
        id: 7,
      },
      {
        title: 'ChatGPT、数字经济、数据安全……两会科技之声聚焦这些热点',
        content: 'ChatGPT编程',
        time: '16小时前',
        id: 8,
      }
    ],
    list7:[
      {
        title: 'ChatGPT：增程式不落后，超越比亚迪的车企可能是这三家',
        content: 'ChatGPT市场营销',
        time: '12小时前',
        id: 1,
      },
      {
        title: '国产ChatGPT争分夺秒 四大类型22家企业全梳理（名单）',
        content: 'ChatGPT市场营销',
        time: '13小时前',
        id: 2,
      },
      {
        title: 'ChatGPT取代广告人？现在还为时尚早',
        content: 'ChatGPT市场营销',
        time: '13小时前',
        id: 3,
      },
      {
        title: 'ChatGPT效率甩运营几条街！大卖低调研发应用',
        content: 'ChatGPT市场营销',
        time: '14小时前',
        id: 4,
      },
      {
        title: '颠覆传媒？火爆全球的ChatGPT将如何影响广电和网络视听行业',
        content: 'ChatGPT市场营销',
        time: '15小时前',
        id: 5,
      },
      {
        title: '(ChatGPT为什么那么火？？？)能写李白式诗句的ChatGPT，用来写亚马逊listing可以赚多少钱?',
        content: 'ChatGPT市场营销',
        time: '16小时前',
        id: 6,
      },
      {
        title: '金融界科技主题沙龙成功举行 ChatGPT狂飙 资本市场春潮涌动',
        content: 'ChatGPT市场营销',
        time: '16小时前',
        id: 7,
      },
      {
        title: '我们和ChatGPT聊了这些……看AI能为品牌营销做什么？',
        content: 'ChatGPT市场营销',
        time: '17小时前',
        id: 8,
      }
    ],
    list8:[
      {
        title: 'ChatYoutube',
        content: '贴Youtube视频地址，就可以针对视频进行ChatGPT聊天讨论了',
        time: '',
        id: 1,
      },
      {
        title: 'OpenGTP',
        content: '给AI不同提示词，立即创建属于自己的应用',
        time: '',
        id: 2,
      },
      {
        title: 'SQL-GPT',
        content: '基于GPT搭建的用大白话生成SQL数据分析小应用',
        time: '',
        id: 3,
      },
      {
        title: 'chatMind',
        content: '用chatGPT生成思维导图大纲，帮你捋清思路',
        time: '',
        id: 4,
      },
      {
        title: 'PnadaGPT',
        content: '上传文档，用对话的反说个事让AI总结文档重点并询问细节',
        time: '',
        id: 5,
      },
      {
        title: 'ChatGPT 代入不同模型的提示',
        content: '用于 ChatGPT 模型的提示示例集合，让ChatGPT代入某个角色，回答更加专业，更符合你的预期',
        time: '',
        id: 6,
      },
      {
        title: 'Chat&AI',
        content: '多端私人助理聊天机器人，可以在微信、QQ、网页等平台上使用',
        time: '',
        id: 7,
      },
      {
        title: 'OpenL',
        content: '基于ChatGPT的在线翻译应用',
        time: '',
        id: 8,
      },
      {
        title: 'Learning Prompt',
        content: '免费的 Prompt Engineering 教程',
        time: '',
        id: 9,
      },
      {
        title: 'ChatGPT shortcut',
        content: '快速查找ChatGPT指令',
        time: '',
        id: 10,
      },
      {
        title: 'Jina AI',
        content: '帮你生成prompt',
        time: '',
        id: 11,
      },
      {
        title: 'AI口语 Online',
        content: '基于Open AI的多语言口语练习平台，采用深度神经网络（DNN）实现高质量的语音交互。在微信公众号使用~',
        time: '',
        id: 12,
      },
      {
        title: 'ChatExcel',
        content: '北大团队出品！输入中文，按照要求自动处理Excel表格',
        time: '',
        id: 13,
      },
      {
        title: 'ChatGPT小工具汇总',
        content: '请科学访问',
        time: '',
        id: 14,
      },
      {
        title: 'ChatPDF',
        content: '上传PDF文件，并提问关于该PDF的任何问题',
        time: '',
        id: 15,
      },
      {
        title: 'PLAUD AI',
        content: '利用GPT3.5和Whisper实现语音转文本，并通过GPT3.5生成内容总结',
        time: '',
        id: 16,
      }
    ],
  }
}
export default listJson;