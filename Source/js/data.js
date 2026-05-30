/**
 * 李龙馥 - 网站数据
 */
window.SiteData = {
  site: {
    name: '李龙馥',
    subtitle: 'Lee Felix · Stray Kids',
    navItems: [
      { name: '首页', path: '/', icon: '' },
      { name: '偶像档案', path: '/profile', icon: '', children: [
        { name: '个人简介', path: '/profile' }, { name: '成长经历', path: '/profile/timeline' },
        { name: '性格魅力', path: '/profile/personality' }, { name: '获奖荣誉', path: '/profile/awards' },
        { name: '舞蹈风格', path: '/profile/dance' }, { name: '语言天赋', path: '/profile/language' },
        { name: '时尚穿搭', path: '/profile/fashion' }
      ]},
      { name: '音乐作品', path: '/music', icon: '', children: [
        { name: '专辑总览', path: '/music' }, { name: 'SKZ专辑', path: '/music/skz' },
        { name: '个人单曲', path: '/music/solo' },
        { name: '舞台直拍', path: '/music/fancams' }, { name: '音乐奖项', path: '/music/awards' }
      ]},
      { name: '影视综艺', path: '/variety', icon: '', children: [
        { name: '综艺节目', path: '/variety' }, { name: '电台节目', path: '/variety/radio' },
        { name: '影视作品', path: '/variety/filmtv' }, { name: '纪录片', path: '/variety/documentary' },
        { name: '代言广告', path: '/variety/commercials' }, { name: '幕后花絮', path: '/variety/behind' }
      ]},
      { name: '图影世界', path: '/gallery', icon: '', children: [
        { name: '官方写真', path: '/gallery' }, { name: '舞台图集', path: '/gallery/stage' },
        { name: '日常随拍', path: '/gallery/daily' }, { name: 'MV专区', path: '/gallery/mv' },
        { name: '舞蹈视频', path: '/gallery/dance' }, { name: '动态壁纸', path: '/gallery/wallpapers' }
      ]},
      { name: '粉丝乐园', path: '/fanzone', icon: '', children: [
        { name: '最新资讯', path: '/fanzone' }, { name: '官方公告', path: '/fanzone/announcements' },
        { name: '趣味测验', path: '/fanzone/quiz' },
        { name: '壁纸下载', path: '/fanzone/downloads' }
      ]},
      { name: '关于本站', path: '/about', icon: '', children: [
        { name: '网站介绍', path: '/about' }, { name: '联系我们', path: '/about/contact' },
        { name: '友情链接', path: '/about/links' }
      ]}
    ],
    stats: [
      { number: '2018', label: '出道年份' }, { number: '#1', label: 'Billboard单曲榜' },
      { number: '9800万+', label: 'Spotify流媒' }, { number: '全球', label: '粉丝遍布' }
    ]
  },

  profile: {
    basic: {
      name: '李龙馥', englishName: 'Lee Felix', koreanName: '이용복 (Lee Yong-bok)',
      birthDate: '2000年9月15日', birthPlace: '澳大利亚悉尼', nationality: '韩裔澳大利亚人',
      height: '171cm', bloodType: 'AB型', 星座: '处女座',
      position: '主舞 · Rapper · 门面', group: 'Stray Kids', agency: 'JYP Entertainment',
      debutDate: '2018年3月25日', debutAlbum: 'I AM NOT',
      family: '父母、姐姐Rachel', mbti: 'INFP',
      nickname: ['龙馥', '菲力克斯', '李费尔', 'felicia', '凤馥']
    },
    bio: '李龙馥（Lee Felix），2000年9月15日出生于澳大利亚悉尼，韩裔澳大利亚人，韩国男子演唱组合Stray Kids成员，担任主舞、Rapper和门面。2017年通过Mnet选秀节目《Stray Kids》出道，2018年3月25日以正式专辑《I AM NOT》出道。以其深沉独特的嗓音、标志性的雀斑、精湛的舞蹈实力和阳光温暖的笑容而闻名。',
    timeline: [
      { year: '2000', date: '9月15日', title: '出生于澳大利亚悉尼', content: '李龙馥出生于澳大利亚悉尼的一个韩裔家庭，从小就展现出对音乐和舞蹈的热爱。', tag: '人生起点' },
      { year: '2017', date: '10月', title: '参加JYP选秀', content: '通过JYP Entertainment的全球选秀被发掘，从澳大利亚远赴韩国追逐音乐梦想。', tag: '出道历程' },
      { year: '2017', date: '10月-12月', title: '出演生存节目《Stray Kids》', content: '在Mnet生存节目中展现出色的舞蹈和说唱实力，成功通过选拔。', tag: '出道历程' },
      { year: '2018', date: '3月25日', title: '正式出道', content: '以首张迷你专辑《I AM NOT》正式出道，主打曲《District 9》震撼乐坛。', tag: '出道历程' },
      { year: '2019', date: '全年', title: '持续成长', content: '随组合发行《Clé》系列专辑，在综艺、时尚领域逐渐崭露头角。', tag: '发展历程' },
      { year: '2020', date: '6月', title: '《GO LIVE》大获成功', content: '首张正规专辑发行，God\'s Menu成为现象级热曲。', tag: '发展历程' },
      { year: '2021', date: '9月', title: '《NOEASY》发行', content: '第二张正规专辑展现更成熟的音乐风格，全球影响力持续提升。', tag: '发展历程' },
      { year: '2022', date: '10月', title: '《MAXIDENT》登顶Billboard', content: '专辑获得Billboard 200冠军，成为K-pop历史重要里程碑。', tag: '高光时刻' },
      { year: '2023', date: '6月', title: '《5-STAR》再创纪录', content: '再次登顶Billboard 200，世界巡回演唱会足迹遍布全球。', tag: '高光时刻' },
      { year: '2024', date: '7月', title: '《ATE》最新专辑', content: '最新专辑发行，持续突破与创新，在多个领域展现成熟魅力。', tag: '最新动态' },
      { year: '2025', date: '3月', title: '《ReawakeR》发布', content: '与LiSA、泽野弘之合作的动画《我独自升级S2》OP发布，个人首支Billboard世界数字单曲榜第1位，Spotify流媒破9800万。', tag: '里程碑' },
      { year: '2025', date: '全年', title: '综艺与时尚全面开花', content: '《Felix的冰箱采访》油管热度登顶，《You Quiz on the Block》获刘在石高度评价。巴黎时装周、LV品牌活动。', tag: '多元发展' },
      { year: '2026', date: '全年', title: '荣誉与影响力', content: '首位登上VOGUE Korea闭年刊的五代男偶像。阿迪达斯全球代言人。韩法建交140周年名誉大使（与全智贤共同担任）。', tag: '荣誉时刻' },
      { year: '2024', date: '1月', title: '向UNICEF捐赠1亿韩元', content: '向联合国儿童基金会捐赠1亿韩元，用于老挝儿童营养与净水项目。', tag: '公益行动' },
      { year: '2024', date: '2月', title: '亲赴老挝参与UNICEF公益', content: '亲自前往老挝参与UNICEF现场公益支援，探访受助儿童。', tag: '公益行动' },
      { year: '2024', date: '9月', title: 'UNICEF亲善大使正式任命', content: '2024年9月23日被正式任命为联合国儿童基金会韩国委员会亲善大使，成为UNICEF荣誉俱乐部（Honors Club）最年轻会员。生日之际再捐1亿韩元，持续助力弱势儿童项目。', tag: '公益里程碑', url: 'https://www.sohu.com/a/858544261_121924583' },
      { year: '2025-2026', date: '持续', title: 'UNICEF全球宣传与公益行动', content: '作为亲善大使参与UNICEF全球宣传、公益活动、LV×UNICEF联名项目，致力于保护儿童权益、传递温暖与希望，以实际行动践行社会责任。', tag: '公益行动' }
    ],
    personality: {
      title: '双面魅力——阳光与深邃的完美融合',
      description: 'Felix拥有令人着迷的双面魅力：舞台上是充满力量的表演者，台下是温暖治愈的大男孩，同时也是热心公益的UNICEF亲善大使。',
      traits: [
        { title: '温暖阳光', icon: '', description: '在综艺和日常中总是展现出灿烂的笑容，用温暖感染身边的每一个人。' },
        { title: '深邃低沉', icon: '', description: '拥有与外表形成反差的深沉嗓音，说唱时的声音魅力令人震撼。' },
        { title: '认真专注', icon: '', description: '对音乐和舞蹈有着极高的追求，经常在练习室里反复练习到深夜。' },
        { title: '搞怪可爱', icon: '', description: '在综艺和日常中常常展现出搞笑的一面，是团队中的气氛制造者。' },
        { title: '善良温柔', icon: '', description: '对粉丝和身边的人总是温柔以待，经常在社交媒体上发文鼓励粉丝。' },
        { title: '热心公益', icon: '', description: 'UNICEF韩国委员会亲善大使，多次捐赠并亲赴老挝参与公益支援，以实际行动践行社会责任。' }
      ],
      quotes: [
        { text: 'Even when the world turns cold, I stand my ground.', source: 'Felix《Unfair》' },
        { text: '粉丝们是我最大的动力，我会一直努力成为让大家骄傲的人。', source: '演唱会感言' },
        { text: '音乐是没有国界的，我希望能用音乐连接全世界的人。', source: '杂志采访' },
        { text: '每一次站在舞台上，我都想把最好的表演献给支持我的人。', source: '2025采访' }
      ]
    },
    awards: [
      { year: '2022', title: 'MAMA Awards', category: '最佳男子组合', result: '获奖', work: 'Stray Kids' },
      { year: '2022', title: 'MMA', category: '年度专辑', result: '获奖', work: 'MAXIDENT' },
      { year: '2023', title: 'Golden Disc Awards', category: '数字音源本赏', result: '获奖', work: 'Stray Kids' },
      { year: '2023', title: 'Seoul Music Awards', category: '本赏', result: '获奖', work: 'Stray Kids' },
      { year: '2023', title: 'Billboard Music Awards', category: 'Top K-pop Album', result: '提名', work: '5-STAR' },
      { year: '2024', title: 'MAMA Awards', category: '最佳MV', result: '获奖', work: 'LALALALA' },
      { year: '2024', title: 'Grammy Awards', category: 'Best Pop Duo/Group', result: '提名', work: 'Stray Kids' },
      { year: '2024', title: 'AAA', category: '年度歌曲', result: '获奖', work: 'Stray Kids' }
    ],
    dance: {
      title: '舞蹈风格与实力', description: 'Felix是一位极具天赋的舞者，舞蹈风格融合了力量与优雅。',
      styles: [
        { name: '力量型舞蹈', description: '展现出强大的爆发力和控制力，每个动作都干净利落。' },
        { name: '抒情舞蹈', description: '在慢节奏表演中展现出柔和与优雅，肢体语言细腻。' },
        { name: '街头舞蹈', description: '吸收Hip-hop和街头舞蹈元素，动作自然流畅。' },
        { name: '概念表演', description: '擅长用舞蹈讲述故事，准确传达歌曲的情感。' }
      ],
      highlightStages: ['God\'s Menu', 'Back Door', 'Thunderous', 'MANIAC', 'S-Class', 'LALALALA']
    },
    language: {
      title: '语言天赋', description: '作为韩裔澳大利亚人，Felix精通多种语言。',
      languages: [
        { name: '英语', level: '母语', description: '在澳大利亚出生长大，英语表达流利自然。' },
        { name: '韩语', level: '流利', description: '在韩国发展多年，韩语非常流利。' },
        { name: '日语', level: '基础', description: '由于组合在日本的活动，掌握基础日语。' },
        { name: '中文', level: '学习中', description: '对中文有一定了解，曾学习简单的中文表达。' }
      ]
    },
    fashion: {
      title: '时尚风格', description: 'Felix以其独特的时尚品味受到各大品牌青睐，是首位登上VOGUE Korea闭年刊的五代男偶像。',
      styles: [
        { name: '街头潮流', description: '宽松卫衣、牛仔裤、球鞋，简约而不失个性。' },
        { name: '高端时装', description: '在品牌活动中展现优雅与前卫并存的时尚感。' },
        { name: '舞台造型', description: '根据歌曲概念打造出令人惊艳的造型。' },
        { name: '日常休闲', description: '私下穿搭以舒适为主，在细节处展现品味。' }
      ],
      brands: ['Louis Vuitton（全球品牌大使）', '阿迪达斯（全球代言人）', 'Calvin Klein（全球代言人）', 'VOGUE Korea（闭年刊封面）']
    },
    // ===== 大量照片数据 =====
    photos: {
      hero: [
        { title: '舞台光芒', img: 'Images/舞台1.jpg', desc: '演唱会舞台照', span: 'wide' },
        { title: '杂志写真', img: 'Images/杂志1.jpg', desc: '时尚杂志', span: '' },
        { title: 'F1活动', img: 'Images/F1.jpg', desc: 'F1上海站活动', span: '' },
        { title: '公益时刻', img: 'Images/儿童.jpg', desc: 'UNICEF公益支援', span: '' },
        { title: '舞台风采', img: 'Images/舞台2.jpg', desc: '舞台表演', span: 'wide' },
        { title: '杂志写真', img: 'Images/杂志3.jpg', desc: '时尚杂志', span: '' },
      ],
      profile: [
        { title: 'Felix', img: 'Images/fliex2.jpg', desc: '个人写真' },
        { title: '杂志写真', img: 'Images/杂志2.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志3.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志4.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志6.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志7.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志8.jpg', desc: '时尚杂志' },
        { title: 'LV品牌', img: 'Images/LV1.jpg', desc: 'Louis Vuitton品牌活动' },
        { title: 'LV品牌', img: 'Images/LV2.jpg', desc: 'Louis Vuitton品牌活动' },
        { title: '杂志写真', img: 'Images/杂志9.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志10.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志11.jpg', desc: '时尚杂志' },
      ],
      stage: [
        { title: '舞台表演', img: 'Images/舞台5.jpg', desc: '演唱会舞台照' },
        { title: '舞台风采', img: 'Images/舞台6.jpg', desc: '舞台表演' },
        { title: '舞台风采', img: 'Images/舞台7.jpg', desc: '舞台表演' },
        { title: '舞台风采', img: 'Images/舞台8.jpg', desc: '舞台表演' },
        { title: 'Felix', img: 'Images/fliex2.jpg', desc: '个人写真' },
        { title: '杂志写真', img: 'Images/杂志2.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志3.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志4.jpg', desc: '时尚杂志' },
        { title: 'LV品牌', img: 'Images/LV1.jpg', desc: 'Louis Vuitton品牌活动' },
        { title: 'LV品牌', img: 'Images/LV2.jpg', desc: 'Louis Vuitton品牌活动' },
        { title: '杂志写真', img: 'Images/杂志6.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志7.jpg', desc: '时尚杂志' },
      ],
      daily: [
        { title: 'Felix', img: 'Images/fliex2.jpg', desc: '个人写真' },
        { title: '杂志写真', img: 'Images/杂志6.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志7.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志8.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志9.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志10.jpg', desc: '时尚杂志' },
        { title: '杂志写真', img: 'Images/杂志11.jpg', desc: '时尚杂志' },
        { title: 'LV品牌', img: 'Images/LV1.jpg', desc: 'Louis Vuitton品牌活动' },
        { title: 'LV品牌', img: 'Images/LV2.jpg', desc: 'Louis Vuitton品牌活动' },
        { title: '舞台风采', img: 'Images/舞台5.jpg', desc: '舞台表演' },
        { title: '舞台风采', img: 'Images/舞台6.jpg', desc: '舞台表演' },
        { title: '公益时刻', img: 'Images/儿童2.jpg', desc: 'UNICEF公益支援' },
      ],
      wallpapers: [
        { title: 'Felix写真壁纸', img: 'Images/fliex2.jpg', category: 'photo' },
        { title: '杂志壁纸', img: 'Images/杂志2.jpg', category: 'photo' },
        { title: '杂志壁纸2', img: 'Images/杂志3.jpg', category: 'photo' },
        { title: '杂志壁纸3', img: 'Images/杂志4.jpg', category: 'photo' },
        { title: '杂志壁纸4', img: 'Images/杂志6.jpg', category: 'photo' },
        { title: '杂志壁纸5', img: 'Images/杂志7.jpg', category: 'photo' },
        { title: '舞台壁纸', img: 'Images/舞台3.jpg', category: 'stage' },
        { title: '舞台壁纸2', img: 'Images/舞台4.jpg', category: 'stage' },
        { title: '舞台壁纸3', img: 'Images/舞台5.jpg', category: 'stage' },
        { title: '舞台壁纸4', img: 'Images/舞台6.jpg', category: 'stage' },
        { title: '舞台壁纸5', img: 'Images/舞台7.jpg', category: 'stage' },
        { title: '舞台壁纸6', img: 'Images/舞台8.jpg', category: 'stage' },
        { title: 'LV品牌壁纸', img: 'Images/LV1.jpg', category: 'daily' },
        { title: 'LV品牌壁纸2', img: 'Images/LV2.jpg', category: 'daily' },
        { title: '杂志壁纸6', img: 'Images/杂志8.jpg', category: 'daily' },
      ]
    }
  },

  music: {
    albums: [
      { title: 'ATE', artist: 'Stray Kids', date: '2024.07.19', type: '迷你专辑', tracks: ['LALALALA','Chk Chk Boom','Runners','Twilight','Stray Kids'], description: '最新专辑，延续辉煌', cover: 'Images/ATE.png' },
      { title: 'KARMA', artist: 'Stray Kids', date: '2025.08.22', type: '正规4辑', tracks: ['多首收录曲'], description: 'Stray Kids正规专辑，Felix参与全专录制', cover: 'Images/KRAMA.png' },
      { title: 'SKZ IT TAPE《DO IT》', artist: 'Stray Kids', date: '2025.11.21', type: '特别专辑', tracks: ['Do It','DIVINE'], description: '双主打《Do It》《DIVINE》，Felix核心参与', cover: 'Images/IT.png' },
      { title: 'I AM NOT', artist: 'Stray Kids', date: '2018.03.25', type: '迷你专辑', tracks: ['DISTRICT 9','Grow Up','Mirror','Matryoshka','Hellevator','Mixtape #1'], description: '出道专辑，以强烈的音乐风格震撼乐坛' },
      { title: 'GO LIVE', artist: 'Stray Kids', date: '2020.06.17', type: '正规专辑', tracks: ['God\'s Menu','Easy','Pacemaker','Airplane','Another Day','Phobia','Wow'], description: '首张正规专辑，God\'s Menu大获成功' },
      { title: 'MAXIDENT', artist: 'Stray Kids', date: '2022.10.07', type: '迷你专辑', tracks: ['CASE 143','Chill','Give Me Your TMI','Super Board','3RACHA','Taste','Waiting For Us'], description: 'Billboard 200冠军专辑' },
      { title: '5-STAR', artist: 'Stray Kids', date: '2023.06.02', type: '正规专辑', tracks: ['S-Class','Topline','Item','Super Bowl','FNF','Youtiful'], description: '再次登顶Billboard 200' },
      { title: 'Mixtape : dominATE', artist: 'Stray Kids', date: '2025.03.21', type: '企划专辑', tracks: ['Truman'], description: '企划专辑，收录与韩知城双人曲《Truman》' },
      { title: 'ReawakeR (feat. Felix)', artist: 'LiSA × 泽野弘之', date: '2025.03.05', type: '合作单曲辑', tracks: ['ReawakeR'], description: 'LiSA × 泽野弘之合作单曲辑，Felix参与feat' },
      { title: 'REPLAY : STAY WITH YOUR WINGS', artist: 'Stray Kids', date: '2026.03.25', type: '纪念专辑', tracks: ['REV IT UP'], description: '特别纪念数字专辑，收录Felix个人SOLO曲《REV IT UP》' },
      { title: '별, 빛 (STAY)', artist: 'Stray Kids', date: '2026.03.25', type: '纪念单曲', tracks: ['별 빛 (STAY)'], description: '八周年纪念数字单曲，Felix参与演唱' }
    ],
    solo: [
      { title: 'ReawakeR (feat. Felix of Stray Kids)', artist: 'LiSA / 泽野弘之 / Felix', date: '2025-03-05', type: '动画OST', description: '动画《我独自升级S2》OP。个人首支Billboard世界数字单曲榜第1位，Spotify流媒破9800万。与LiSA、泽野弘之合作。' },
      { title: 'Truman', artist: 'Felix / 韩知城', date: '2025-03-21', type: '双人合作曲', description: '与韩知城双人合作曲，收录于企划专辑《Mixtape : dominATE》。' },
      { title: 'Felix《Unfair》', artist: 'Felix', date: '2025', type: '个人SOLO曲', description: '低音炮代表作，流媒持续走高。' },
      { title: 'BANGALANG', artist: 'Felix（合作曲）', date: '2026-05', type: '合作曲', description: '新合作曲预告公开，展现全新声线。' },
      { title: 'Because', artist: 'Felix', date: '2023', type: '特别单曲', description: '温柔细腻的音乐风格，以轻柔旋律表达对粉丝的感谢。' },
      { title: 'Deep End', artist: 'Felix', date: '2024', type: '个人单曲', description: '展现深沉嗓音魅力，融合R&B和电子音乐元素。' },
      { title: 'REV IT UP', artist: 'Felix', date: '2026-03-25', type: '个人SOLO曲', description: '收录于八周年纪念专辑《REPLAY : STAY WITH YOUR WINGS》。' }
    ],
    fancams: [
      { title: 'God\'s Menu 直拍', date: '2020', views: '2000万+', description: '展现强大舞蹈实力和个人魅力。' },
      { title: 'Thunderous 直拍', date: '2021', views: '1500万+', description: '力量感十足的舞蹈令人印象深刻。' },
      { title: 'MANIAC 直拍', date: '2022', views: '1800万+', description: '展现出的舞台控制力和个人魅力。' },
      { title: 'S-Class 直拍', date: '2023', views: '1200万+', description: '舞蹈与概念的完美融合。' },
      { title: 'LALALALA 直拍', date: '2024', views: '1000万+', description: '展现不断进化的舞台实力。' },
      { title: 'ReawakeR 舞台', date: '2025', views: '800万+', description: '动画OP舞台表演，展现全新风格。' }
    ],
    musicAwards: [
      { year: '2020', award: 'MMA 年度歌曲', work: 'God\'s Menu', result: '获奖' },
      { year: '2022', award: 'MMA 年度专辑', work: 'MAXIDENT', result: '获奖' },
      { year: '2023', award: 'Golden Disc 专辑本赏', work: '5-STAR', result: '获奖' },
      { year: '2024', award: 'MAMA 最佳MV', work: 'LALALALA', result: '获奖' },
      { year: '2025', award: 'MAMA Worldwide Fan\'s Choice', work: 'Stray Kids', result: '获奖' },
      { year: '2026', award: 'MUSIC AWARDS JAPAN 提名（3项）', work: 'ReawakeR', result: '提名' },
      { year: '2026', award: 'Billboard 世界数字单曲榜', work: 'ReawakeR 第1位', result: '获奖' }
    ]
  },

  variety: {
    shows: [
      { title: 'Stray Kids', type: '生存节目', date: '2017', network: 'Mnet', description: 'JYP Entertainment出道生存节目，记录了Stray Kids成员选拔和出道准备的过程。', episodes: '10期' },
      { title: 'SKZ-TALKER', type: '自制综艺', date: '2018-至今', network: 'YouTube', description: 'Stray Kids的自制综艺节目，记录成员们的日常趣事和幕后花絮。', episodes: '持续更新' },
      { title: 'Felix的冰箱采访', type: '个人MC', date: '2025', network: 'YouTube', description: '个人MC节目，韩国油管热度登顶。Felix以独特的主持风格和温暖的对话方式，邀请多位嘉宾分享生活故事。', episodes: '持续更新' },
      { title: 'You Quiz on the Block 圣诞特辑', type: '谈话综艺', date: '2025', network: 'tvN', description: '个人出演，刘在石高度评价。展现了Felix的智慧和幽默感。', episodes: '1期' },
      { title: '就讨厌可怕的东西', type: '综艺嘉宾', date: '2025', network: 'YouTube', description: '综艺嘉宾出演，展现真实可爱的反应。', episodes: '1期' },
      { title: '正花 and_ing', type: '综艺嘉宾', date: '2025', network: 'YouTube', description: '综艺嘉宾出演，与嘉宾互动自然有趣。', episodes: '1期' },
      { title: '沙龙梗', type: '综艺嘉宾', date: '2025', network: 'YouTube', description: '综艺嘉宾出演，展现谈话才华。', episodes: '1期' },
      { title: 'KBS 2026 农历新年特辑 Seolbim', type: '新年特辑', date: '2026', network: 'KBS', description: '组合全员出演KBS农历新年特辑。', episodes: '1期' },
      { title: 'Felix\'s Special Naengterview', type: '特别MC', date: '2026', network: 'YouTube', description: '特别MC节目，对话李奈映。展现Felix作为主持人的成长。', episodes: '1期' },
      { title: 'Running Man', type: '综艺', date: '2022', network: 'SBS', description: '在Running Man中展现了运动能力和综艺感。', episodes: '1期' },
      { title: 'ISAC', type: '运动会', date: '2019-2023', network: 'MBC', description: '多次参加偶像运动会，在舞蹈和体能项目中表现出色。', episodes: '多期' }
    ],
    radio: [
      { title: 'Kiss the Radio', host: 'Felix (特别DJ)', date: '2023', description: '担任特别DJ主持节目，展现了出色的主持能力。' }
    ],
    filmTV: [
      { title: 'Stray Kids: The Movie', type: '纪录片电影', date: '2020', description: '记录Stray Kids出道以来的成长历程。' }
    ],
    documentaries: [
      { title: 'Stray Kids: The Movie', date: '2020', description: '记录组合从出道到走红的完整历程。' },
      { title: 'World Tour Documentary', date: '2023', description: '世界巡演幕后纪实。' }
    ],
    commercials: [
      { brand: 'Louis Vuitton', role: '全球品牌大使', year: '2023-至今', description: 'Louis Vuitton全球品牌大使，多次出席巴黎时装周等品牌活动。' },
      { brand: '阿迪达斯', role: '全球代言人', year: '2026-至今', description: '阿迪达斯全球代言人，2026年全球广告官宣。' },
      { brand: 'Calvin Klein', role: '全球代言人', year: '2023-至今', description: '成为Calvin Klein全球代言人，拍摄多组广告大片。' },
      { brand: 'Tommy Hilfiger', role: '品牌大使', year: '2022-至今', description: '担任Tommy Hilfiger品牌大使，展现年轻活力。' }
    ],
    behind: [
      { title: '练习室日常', description: '记录Felix在练习室刻苦训练的日常。' },
      { title: '录音室花絮', description: '在录音室工作的幕后花絮。' },
      { title: '巴黎时装周', description: '2025年巴黎时装周，Louis Vuitton品牌活动。' },
      { title: 'F1上海站', description: '2026年F1上海站活动，展现时尚与运动的结合。' }
    ]
  },

  fanzone: {
    news: [
      { title: '《ReawakeR》Billboard世界数字单曲榜第1位', date: '2025-03-15', source: '官方', summary: '与LiSA、泽野弘之合作的动画OST创下Billboard纪录，Spotify流媒破9800万。' },
      { title: 'Felix获MAMA Worldwide Fan\'s Choice奖', date: '2025-11-20', source: '官方', summary: '随组合获得2025 MAMA Worldwide Fan\'s Choice奖。' },
      { title: '首位登上VOGUE Korea闭年刊的五代男偶像', date: '2026-01-05', source: '媒体报道', summary: 'Felix成为首位登上VOGUE Korea闭年刊的五代男偶像，创造历史。', url: 'https://seoulsunday.com/details/99357-%E6%9D%B1%E5%8A%89%E5%BE%A9%E5%B0%8D%E7%89%88Vogue-Korea2025%E5%B9%B412%E6%9C%88%E8%99%9F%E4%B8%89%E7%89%88%E5%80%8B%E4%BA%BA%E5%B0%81%E9%9D%A2' },
      { title: '阿迪达斯全球代言人官宣', date: '2026-03-10', source: '品牌官方', summary: '阿迪达斯官宣Felix为全球代言人，全球广告同步发布。' },
      { title: '韩法建交140周年名誉大使', date: '2026-04-15', source: '官方', summary: 'Felix与全智贤共同担任韩法建交140周年名誉大使。' },
      { title: 'UNICEF亲善大使', date: '2024-09-23', source: '公益', summary: 'Felix被正式任命为联合国儿童基金会韩国委员会亲善大使，成为UNICEF荣誉俱乐部最年轻会员。2024年累计捐赠2亿韩元用于儿童公益项目。', url: 'https://www.sohu.com/a/858544261_121924583' },
      { title: '《Felix的冰箱采访》油管热度登顶', date: '2025-06-10', source: '社交媒体', summary: '个人MC节目在韩国油管热度登顶，展现主持才华。' }
    ],
    announcements: [
      { title: '网站正式上线公告', date: '2026-05-30', content: '欢迎大家！这是李龙馥的个人宣传网站。' },
      { title: '内容更新说明', date: '2026-05-30', content: '本站内容持续更新中，感谢支持。' },
      { title: '投稿通道开启', date: '2026-05-30', content: '粉丝创作投稿通道正式开启。' }
    ],
    quiz: {
      title: '你有多了解Felix？',
      questions: [
        { q: 'Felix的出生日期是？', options: ['2000年9月15日','2000年8月15日','2001年9月15日','1999年9月15日'], answer: 0 },
        { q: 'Felix的出生地是？', options: ['韩国首尔','澳大利亚悉尼','美国洛杉矶','日本东京'], answer: 1 },
        { q: 'Felix在Stray Kids中的主要定位是？', options: ['主唱','主舞/Rapper/门面','Rapper','主唱/主舞'], answer: 1 },
        { q: 'Stray Kids的出道日期是？', options: ['2017年10月','2018年3月25日','2018年8月','2019年3月'], answer: 1 },
        { q: '以下哪首是代表作？', options: ['DNA','God\'s Menu','Dynamite','Butter'], answer: 1 },
        { q: 'Felix的MBTI类型是？', options: ['ENFP','INTJ','INFP','ISFJ'], answer: 2 },
        { q: 'Felix精通哪些语言？', options: ['仅韩语','韩语和日语','英语和韩语','英语、韩语和中文'], answer: 2 },
        { q: 'Stray Kids首张正规专辑是？', options: ['I AM NOT','GO LIVE','NOEASY','MAXIDENT'], answer: 1 }
      ]
    },
    downloads: [
      { title: 'Felix写真壁纸', resolution: '1920×1080', size: '2.1MB', category: 'desktop', img: 'Images/fliex2.jpg' },
      { title: 'Felix写真壁纸2', resolution: '1920×1080', size: '1.8MB', category: 'desktop', img: 'Images/杂志2.jpg' },
      { title: '杂志壁纸', resolution: '1920×1080', size: '1.5MB', category: 'desktop', img: 'Images/杂志3.jpg' },
      { title: 'LV品牌壁纸', resolution: '1920×1080', size: '1.6MB', category: 'desktop', img: 'Images/LV1.jpg' },
      { title: 'Felix手机壁纸 — 舞台', resolution: '1080×1920', size: '1.2MB', category: 'mobile', img: 'Images/舞台3.jpg' },
      { title: 'Felix手机壁纸 — 日常', resolution: '1080×1920', size: '0.9MB', category: 'mobile', img: 'Images/杂志4.jpg' },
      { title: '杂志手机壁纸', resolution: '1080×1920', size: '1.1MB', category: 'mobile', img: 'Images/杂志6.jpg' },
      { title: 'Felix平板壁纸', resolution: '2048×1536', size: '2.5MB', category: 'tablet', img: 'Images/舞台4.jpg' },
      { title: 'Felix头像合集', resolution: '800×800', size: '0.5MB', category: 'avatar', img: 'Images/fliex2.jpg' }
    ]
  },

  about: {
    siteInfo: {
      title: '关于本站',
      description: '本站由粉丝自发创建，旨在记录和分享李龙馥（Felix）的精彩瞬间。本站所有内容均来源于公开渠道，版权归原作者所有。',
      purpose: ['记录Felix的音乐作品、综艺表现和舞台精彩瞬间','分享最新资讯和动态','为粉丝提供交流互动平台','传播正能量，展现Felix的多面魅力'],
      disclaimer: '本站为粉丝个人宣传作品，旨在记录和分享李龙馥（Felix）的精彩瞬间。本站所有内容均来源于公开渠道，版权归原作者所有。本站与JYP Entertainment、Stray Kids官方无任何关联。如有侵权，请联系作者删除。',
      credits: [
        { name: '网站设计与开发', role: '粉丝志愿者团队' },
        { name: '内容编辑', role: '编辑组' },
        { name: '特别感谢', role: '所有支持Felix的粉丝们' }
      ]
    },
    contact: {
      email: '3665267611@qq.com',
      notice: '本站为粉丝宣传网站，内容来源于公开渠道。如需联系网站作者，请发送邮件至 3665267611@qq.com。'
    },
    links: [
      { name: 'Stray Kids官方网站', url: 'https://straykids.jype.com', description: 'Stray Kids官方网站' },
      { name: 'JYP Entertainment', url: 'https://www.jype.com', description: 'JYP娱乐官网' },
      { name: 'Stray Kids YouTube', url: 'https://www.youtube.com/@StrayKids', description: '官方YouTube频道' },
      { name: 'Felix Instagram', url: 'https://www.instagram.com/yongbokk', description: 'Felix个人Instagram @yongbokk' },
      { name: 'Stray Kids Twitter', url: 'https://twitter.com/Stray_Kids', description: '官方Twitter账号' },
      { name: 'Stray Kids Weverse', url: 'https://weverse.io/straykids', description: '官方粉丝社区' }
    ]
  }
};
