import * as types from './actionTypes';

import { PLAY_MODE_TYPES } from '../common/js/config';

// 给一个初始的 state
const defaultState = {
  // 当前展示的歌单列表
  musicList: null,

  // 控制歌单列表的显示
  showMusicList: false,

  // 控制歌曲详情的显示
  showMusicDetail: false,

  // 控制歌手详情的显示
  showSingerInfo: false,

  // 歌手详情
  singerInfo: {
    'code': 200,
    'artist': {
      'img1v1Id': 5980243743970997,
      'topicPerson': 0,
      'alias': ['Winnie Lau'],
      'albumSize': 13,
      'img1v1Url': 'http://p4.music.126.net/twwrBJ6-wDGWnmaH6RrI0w==/5980243743970997.jpg',
      'picUrl': 'http://p4.music.126.net/nd4UYhSNFSi6AOHjKdUiAQ==/5925268162508391.jpg',
      'picId': 5925268162508391,
      'trans': '',
      'briefDesc': '香港著名女艺人，歌手，九十年代香港乐坛红极一时的天后，1985年接拍第一个电视广告，瞬即成为广告红人，主演多部电影，发行多张专辑，最熟悉的歌是香港粤语真经典的《初恋情人》，1996年拓展海外市场，成为首位与台湾巨石公司合作的BMG歌手。曾获香港十大金曲最有前途女新人奖。与草蜢成员苏志威结婚，婚后生活幸福。现已退出娱乐圈。',
      'followed': false,
      'musicSize': 204,
      'name': '刘小慧',
      'id': 8391,
      'publishTime': 1499927201717,
      'mvSize': 1
    },
    'more': true,
    'hotSongs': [{
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26183,
        'name': 'In Your Dreams',
        'picUrl': 'http://p4.music.126.net/tUpc-ZMYx1WPYfdU7X0qxA==/18631224534157924.jpg',
        'pic_str': '18631224534157924',
        'pic': 18631224534157924
      },
      'st': 3,
      'v': 13,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1163283302194961,
        'size': 3404721,
        'vd': -2.76
      },
      'cf': '',
      'dt': 280816,
      'h': {
        'br': 320000,
        'fid': 1169880371961430,
        'size': 11260681,
        'vd': -3.11
      },
      'alia': [],
      'pop': 100,
      'rt': '600902000001128485',
      'mst': 9,
      'cp': 7003,
      'no': 5,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 5364939,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1225955464977891,
        'size': 5649580,
        'vd': -2.72
      },
      'name': '初恋情人',
      'id': 263720,
      'privilege': {
        'id': 263720,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 4,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26173,
        'name': '改改',
        'picUrl': 'http://p3.music.126.net/oIR_fevsc6Pta-RAvPIG4w==/102254581399154.jpg',
        'pic_str': '102254581399154',
        'pic': 102254581399154
      },
      'st': 3,
      'v': 10,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1132496976617064,
        'size': 3026303,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 249783,
      'h': {
        'br': 320000,
        'fid': 1197368162655945,
        'size': 10014057,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 100,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 7,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1079720418483914,
        'size': 5023103,
        'vd': -0.000265076
      },
      'name': '加减乘除',
      'id': 263609,
      'privilege': {
        'id': 263609,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26178,
        'name': '依恋',
        'picUrl': 'http://p4.music.126.net/4RKu1Gu7j7Eh6Oeq_YHorw==/102254581399199.jpg',
        'pic_str': '102254581399199',
        'pic': 102254581399199
      },
      'st': 3,
      'v': 6,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1041237511511364,
        'size': 3117760,
        'vd': 0.0398533
      },
      'cf': '',
      'dt': 257959,
      'h': {
        'br': 320000,
        'fid': 1041237511511362,
        'size': 10334452,
        'vd': 0.213066
      },
      'alia': [],
      'pop': 100,
      'rt': '',
      'mst': 9,
      'cp': 7001,
      'no': 5,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1041237511511363,
        'size': 5179971,
        'vd': 0.291111
      },
      'name': '谁人能这么刻意假到底',
      'id': 263661,
      'privilege': {
        'id': 263661,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 0,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 3073,
        'name': '黄凯芹',
        'alia': ['Christopher Wong']
      }, {
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }, {
        'id': 6460,
        'name': '张学友',
        'alia': ['Jacky Cheung']
      }, {
        'id': 7768,
        'name': '关淑怡',
        'alia': ['Shirley Kwan']
      }, {
        'id': 3701,
        'name': '黎明',
        'alia': ['Leon Lai']
      }, {
        'id': 5205,
        'name': '谭咏麟',
        'alia': ['Alan Tam']
      }, {
        'id': 11265,
        'name': '草蜢',
        'alia': ['Grasshopper']
      }, {
        'id': 5197,
        'name': '童安格'
      }, {
        'id': 10617,
        'name': '周影'
      }, {
        'id': 3699,
        'name': '李克勤'
      }, {
        'id': 2130,
        'name': '蔡国权'
      }, {
        'id': 9968,
        'name': '徐小凤',
        'alia': ['Paula Tsui']
      }],
      'al': {
        'id': 511122,
        'name': '环球/宝丽金40周年经典101',
        'picUrl': 'http://p3.music.126.net/d5ryd0uwq29KWk3bRZ1wsA==/45079976751142.jpg',
        'pic_str': '45079976751142',
        'pic': 45079976751142
      },
      'st': 3,
      'v': 696,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 128000,
        'fid': 0,
        'size': 5677252,
        'vd': 1150
      },
      'cf': '',
      'dt': 354000,
      'h': {
        'br': 320000,
        'fid': 0,
        'size': 14192962,
        'vd': 0
      },
      'alia': [],
      'pop': 100,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 8,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '3',
      'a': null,
      'm': {
        'br': 192000,
        'fid': 0,
        'size': 8515822,
        'vd': 5778
      },
      'name': '星光灿烂',
      'id': 5238677,
      'privilege': {
        'id': 5238677,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26176,
        'name': '一天四十八小时刘小慧新曲精选',
        'picUrl': 'http://p4.music.126.net/-3U7Ip_OIZv4U4lGK0_j6A==/36283883732379.jpg',
        'pic_str': '36283883732379',
        'pic': 36283883732379
      },
      'st': 3,
      'v': 7,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1141293069637478,
        'size': 3318634,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 274129,
      'h': {
        'br': 320000,
        'fid': 1141293069637476,
        'size': 10987348,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 95,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 6,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1141293069637477,
        'size': 5509994,
        'vd': 0
      },
      'name': '惊梦',
      'id': 263636,
      'privilege': {
        'id': 263636,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 4,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26183,
        'name': 'In Your Dreams',
        'picUrl': 'http://p3.music.126.net/tUpc-ZMYx1WPYfdU7X0qxA==/18631224534157924.jpg',
        'pic_str': '18631224534157924',
        'pic': 18631224534157924
      },
      'st': 3,
      'v': 8,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 997257046400466,
        'size': 3020723,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 248790,
      'h': {
        'br': 320000,
        'fid': 1201766209166898,
        'size': 9980683,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 95,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 9,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1080819930111540,
        'size': 5009582,
        'vd': -0.000265076
      },
      'name': '留住这一刻',
      'id': 263727,
      'privilege': {
        'id': 263727,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26182,
        'name': '隔世感觉',
        'picUrl': 'http://p4.music.126.net/d8wGBFxMJ0nxBAQ_x2hKOA==/60473139543738.jpg',
        'pic_str': '60473139543738',
        'pic': 60473139543738
      },
      'st': 3,
      'v': 7,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1129198441733384,
        'size': 2876285,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 237558,
      'h': {
        'br': 320000,
        'fid': 1154487209172499,
        'size': 9522462,
        'vd': 0.0108751
      },
      'alia': [],
      'pop': 90,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 1,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1154487209172500,
        'size': 4775492,
        'vd': 0.393408
      },
      'name': '隔世感觉',
      'id': 263691,
      'privilege': {
        'id': 263691,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 11265,
        'name': '草蜢',
        'alia': ['Grasshopper']
      }, {
        'id': 9504,
        'name': '汤宝如'
      }, {
        'id': 7768,
        'name': '关淑怡',
        'alia': ['Shirley Kwan']
      }, {
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 34407,
        'name': '我们的草蜢',
        'picUrl': 'http://p4.music.126.net/fXNOlC8FZTL2qpOdt_lHfg==/109951163023777432.jpg',
        'pic_str': '109951163023777432',
        'pic': 109951163023777440
      },
      'st': 3,
      'v': 12,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1063227744067357,
        'size': 3586988,
        'vd': -1.01
      },
      'cf': '',
      'dt': 296072,
      'h': {
        'br': 320000,
        'fid': 1222656930094699,
        'size': 11871280,
        'vd': -1.3
      },
      'alia': [],
      'pop': 85,
      'rt': '600902000009547213',
      'mst': 9,
      'cp': 7003,
      'no': 12,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '2',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1230353511489247,
        'size': 5953891,
        'vd': -0.94
      },
      'name': '热力节拍 WOU BOM BA',
      'id': 349115,
      'privilege': {
        'id': 349115,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 4,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8358,
        'name': '黎瑞恩',
        'alia': ['Vivian Lai']
      }, {
        'id': 10617,
        'name': '周影'
      }, {
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 25784,
        'name': '理想的日子(精选47首)',
        'picUrl': 'http://p4.music.126.net/TSfuKsyaiiN1ZOgFL1cMhg==/79164837215164.jpg',
        'pic_str': '79164837215164',
        'pic': 79164837215164
      },
      'st': 3,
      'v': 12,
      'crbt': 'f19d61838088a52e7fe2526b93690091',
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1014849232443794,
        'size': 2316255,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 191242,
      'h': {
        'br': 320000,
        'fid': 1014849232443792,
        'size': 7666340,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 80,
      'rt': '600902000005615934',
      'mst': 9,
      'cp': 7003,
      'no': 16,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1014849232443793,
        'size': 3845149,
        'vd': -0.000265076
      },
      'name': '学生哥',
      'id': 258729,
      'privilege': {
        'id': 258729,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 5205,
        'name': '谭咏麟',
        'alia': ['Alan Tam']
      }, {
        'id': 4728,
        'name': '彭健新'
      }, {
        'id': 4711,
        'name': '区瑞强',
        'alia': ['Albert Au']
      }, {
        'id': 6495,
        'name': '钟镇涛',
        'alia': ['阿B']
      }, {
        'id': 7768,
        'name': '关淑怡',
        'alia': ['Shirley Kwan']
      }, {
        'id': 3699,
        'name': '李克勤'
      }, {
        'id': 5207,
        'name': '泰迪罗宾',
        'alia': ['Teddy Robin']
      }, {
        'id': 7225,
        'name': '陈慧娴',
        'alia': ['Priscilla Chan']
      }, {
        'id': 9504,
        'name': '汤宝如'
      }, {
        'id': 9633,
        'name': '王馨平',
        'alia': ['Linda Wong']
      }, {
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 2532278,
        'name': '宝记正传',
        'picUrl': 'http://p3.music.126.net/S8UYQloRd-6y4vAshcHZ_w==/18281579835579921.jpg',
        'pic_str': '18281579835579921',
        'pic': 18281579835579920
      },
      'st': 3,
      'v': 668,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 5743848743582142,
        'size': 4331936,
        'vd': -1.33
      },
      'cf': '',
      'dt': 357720,
      'h': {
        'br': 224000,
        'fid': 2049489674202334,
        'size': 9031387,
        'vd': -1.72
      },
      'alia': [],
      'pop': 75,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 2,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 3179787627609456,
        'size': 7194121,
        'vd': -1.29
      },
      'name': '宝记正传 part-Ⅰ',
      'id': 26609395,
      'privilege': {
        'id': 26609395,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 192000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26183,
        'name': 'In Your Dreams',
        'picUrl': 'http://p4.music.126.net/tUpc-ZMYx1WPYfdU7X0qxA==/18631224534157924.jpg',
        'pic_str': '18631224534157924',
        'pic': 18631224534157924
      },
      'st': 3,
      'v': 8,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1097312604528259,
        'size': 2890317,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 237897,
      'h': {
        'br': 320000,
        'fid': 1163283302194960,
        'size': 9546003,
        'vd': -0.32
      },
      'alia': [],
      'pop': 75,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 3,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1055531162672565,
        'size': 4792241,
        'vd': -0.000265076
      },
      'name': '满分情人',
      'id': 263718,
      'privilege': {
        'id': 263718,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26180,
        'name': '今宵不想告别',
        'picUrl': 'http://p3.music.126.net/MpYYoMb4b-YlgofOa0o35w==/825733232461793.jpg',
        'pic_str': '825733232461793',
        'pic': 825733232461793
      },
      'st': 1,
      'v': 3,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1002754604537637,
        'size': 2921742,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 241789,
      'h': {
        'br': 320000,
        'fid': 1095113581271014,
        'size': 9685679,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 75,
      'rt': '',
      'mst': 9,
      'cp': 5003,
      'no': 1,
      'fee': 0,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1179775976609820,
        'size': 4854594,
        'vd': -0.000265076
      },
      'name': '今宵不想告别',
      'id': 263673,
      'privilege': {
        'id': 263673,
        'fee': 0,
        'payed': 0,
        'st': 0,
        'pl': 320000,
        'dl': 320000,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 320000,
        'toast': false,
        'flag': 0,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26166,
        'name': '寂寞都有罪',
        'picUrl': 'http://p4.music.126.net/yiHnwDf_IRjVYuabYzYRKw==/75866302332939.jpg',
        'pic_str': '75866302332939',
        'pic': 75866302332939
      },
      'st': 1,
      'v': 3,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1029142883605927,
        'size': 2818167,
        'vd': 0.0122023
      },
      'cf': '',
      'dt': 232934,
      'h': {
        'br': 320000,
        'fid': 1029142883605925,
        'size': 9334882,
        'vd': 0.180257
      },
      'alia': [],
      'pop': 70,
      'rt': '',
      'mst': 9,
      'cp': 5003,
      'no': 2,
      'fee': 0,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1029142883605926,
        'size': 4680384,
        'vd': 0.359635
      },
      'name': '刻骨铭心',
      'id': 263509,
      'privilege': {
        'id': 263509,
        'fee': 0,
        'payed': 0,
        'st': 0,
        'pl': 320000,
        'dl': 320000,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 320000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26178,
        'name': '依恋',
        'picUrl': 'http://p4.music.126.net/4RKu1Gu7j7Eh6Oeq_YHorw==/102254581399199.jpg',
        'pic_str': '102254581399199',
        'pic': 102254581399199
      },
      'st': 3,
      'v': 6,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1007152651050486,
        'size': 3069788,
        'vd': 0.164574
      },
      'cf': '',
      'dt': 253962,
      'h': {
        'br': 320000,
        'fid': 1135795511500273,
        'size': 10174570,
        'vd': 0.237278
      },
      'alia': [],
      'pop': 60,
      'rt': '',
      'mst': 9,
      'cp': 7001,
      'no': 3,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1150089162661565,
        'size': 5100024,
        'vd': 0.458275
      },
      'name': '口不对心',
      'id': 263657,
      'privilege': {
        'id': 263657,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 6460,
        'name': '张学友',
        'alia': ['Jacky Cheung']
      }, {
        'id': 9621,
        'name': '王菲',
        'alia': ['王靖雯', 'Faye Wong']
      }, {
        'id': 11265,
        'name': '草蜢',
        'alia': ['Grasshopper']
      }, {
        'id': 9504,
        'name': '汤宝如'
      }, {
        'id': 8358,
        'name': '黎瑞恩',
        'alia': ['Vivian Lai']
      }, {
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 3092130,
        'name': '鼓舞飞扬 \'95',
        'picUrl': 'http://p4.music.126.net/krcLbtN779vOVL9geXz0eA==/7853811557286974.jpg',
        'pic_str': '7853811557286974',
        'pic': 7853811557286974
      },
      'st': 3,
      'v': 667,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 7747158929392359,
        'size': 3292483,
        'vd': 1.00613
      },
      'cf': '',
      'dt': 274181,
      'h': {
        'br': 320000,
        'fid': 7846114975887809,
        'size': 10972482,
        'vd': 1.09559
      },
      'alia': [],
      'pop': 55,
      'rt': null,
      'mst': 9,
      'cp': 7003,
      'no': 2,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 7853811557282374,
        'size': 5486769,
        'vd': 1.46981
      },
      'name': '将心照亮',
      'id': 30053964,
      'privilege': {
        'id': 30053964,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26176,
        'name': '一天四十八小时刘小慧新曲精选',
        'picUrl': 'http://p4.music.126.net/-3U7Ip_OIZv4U4lGK0_j6A==/36283883732379.jpg',
        'pic_str': '36283883732379',
        'pic': 36283883732379
      },
      'st': 3,
      'v': 6,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1058829697554360,
        'size': 3273500,
        'vd': 0
      },
      'cf': '',
      'dt': 270367,
      'h': {
        'br': 320000,
        'fid': 1108307720804783,
        'size': 10836888,
        'vd': 0.664415
      },
      'alia': [],
      'pop': 50,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 3,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1059929209182549,
        'size': 5434767,
        'vd': 0.673863
      },
      'name': '永远的心痛',
      'id': 263626,
      'privilege': {
        'id': 263626,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26180,
        'name': '今宵不想告别',
        'picUrl': 'http://p3.music.126.net/MpYYoMb4b-YlgofOa0o35w==/825733232461793.jpg',
        'pic_str': '825733232461793',
        'pic': 825733232461793
      },
      'st': 1,
      'v': 3,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1095113581271015,
        'size': 2167846,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 178913,
      'h': {
        'br': 320000,
        'fid': 1162183790565498,
        'size': 7172697,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 50,
      'rt': '',
      'mst': 9,
      'cp': 5003,
      'no': 3,
      'fee': 0,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1156686232426569,
        'size': 3598102,
        'vd': -0.000265076
      },
      'name': '听风的诗篇',
      'id': 263677,
      'privilege': {
        'id': 263677,
        'fee': 0,
        'payed': 0,
        'st': 0,
        'pl': 320000,
        'dl': 320000,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 320000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }, {
        'id': 3073,
        'name': '黄凯芹',
        'alia': ['Christopher Wong']
      }],
      'al': {
        'id': 511122,
        'name': '环球/宝丽金40周年经典101',
        'picUrl': 'http://p3.music.126.net/d5ryd0uwq29KWk3bRZ1wsA==/45079976751142.jpg',
        'pic_str': '45079976751142',
        'pic': 45079976751142
      },
      'st': 3,
      'v': 673,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1058829697557065,
        'size': 2415635,
        'vd': 1.11907
      },
      'cf': '',
      'dt': 198087,
      'h': {
        'br': 320000,
        'fid': 1212761325445650,
        'size': 7957355,
        'vd': 1.10582
      },
      'alia': [],
      'pop': 45,
      'rt': '600902000005397210',
      'mst': 9,
      'cp': 7003,
      'no': 14,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '3',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1197368162656788,
        'size': 3999282,
        'vd': 1.35286
      },
      'name': '望星星',
      'id': 5238683,
      'privilege': {
        'id': 5238683,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 4,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26176,
        'name': '一天四十八小时刘小慧新曲精选',
        'picUrl': 'http://p4.music.126.net/-3U7Ip_OIZv4U4lGK0_j6A==/36283883732379.jpg',
        'pic_str': '36283883732379',
        'pic': 36283883732379
      },
      'st': 3,
      'v': 6,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1134695999871402,
        'size': 3114256,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 257071,
      'h': {
        'br': 320000,
        'fid': 1123700883593633,
        'size': 10306078,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 40,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 2,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1112705767315924,
        'size': 5169361,
        'vd': -0.000265076
      },
      'name': '风中的梦',
      'id': 263623,
      'privilege': {
        'id': 263623,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 4,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 4711,
        'name': '区瑞强',
        'alia': ['Albert Au']
      }, {
        'id': 5207,
        'name': '泰迪罗宾',
        'alia': ['Teddy Robin']
      }, {
        'id': 9633,
        'name': '王馨平',
        'alia': ['Linda Wong']
      }, {
        'id': 5205,
        'name': '谭咏麟',
        'alia': ['Alan Tam']
      }, {
        'id': 7225,
        'name': '陈慧娴',
        'alia': ['Priscilla Chan']
      }, {
        'id': 4728,
        'name': '彭健新'
      }, {
        'id': 3699,
        'name': '李克勤'
      }, {
        'id': 9504,
        'name': '汤宝如'
      }, {
        'id': 7768,
        'name': '关淑怡',
        'alia': ['Shirley Kwan']
      }, {
        'id': 6495,
        'name': '钟镇涛',
        'alia': ['阿B']
      }, {
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 35415186,
        'name': '宝记正传Part I (Classic Music)',
        'picUrl': 'http://p4.music.126.net/xg4yiluwoyfR7bft08XvCg==/18260689114646596.jpg',
        'pic_str': '18260689114646596',
        'pic': 18260689114646596
      },
      'st': 3,
      'v': 10,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 128000,
        'fid': 0,
        'size': 5723159,
        'vd': 0
      },
      'cf': '',
      'dt': 357642,
      'h': {
        'br': 320000,
        'fid': 0,
        'size': 14307831,
        'vd': -1
      },
      'alia': [],
      'pop': 35,
      'rt': null,
      'mst': 9,
      'cp': 7003,
      'no': 1,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 192000,
        'fid': 0,
        'size': 8584716,
        'vd': 0
      },
      'name': '宝记正传 Part I (Classic Mix) - Classic Music',
      'id': 473335579,
      'privilege': {
        'id': 473335579,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }, {
        'id': 236852,
        'name': '小柏林'
      }, {
        'id': 8358,
        'name': '黎瑞恩',
        'alia': ['Vivian Lai']
      }],
      'al': {
        'id': 513749,
        'name': '宝丽金未来的天才',
        'picUrl': 'http://p4.music.126.net/_fZA0EkZWEXi5kLYXyQWug==/126443837212177.jpg',
        'pic_str': '126443837212177',
        'pic': 126443837212177
      },
      'st': 1,
      'v': 665,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1297423720833667,
        'size': 2275012,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 186697,
      'h': {
        'br': 320000,
        'fid': 1232552534780175,
        'size': 7498561,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 35,
      'rt': '',
      'mst': 9,
      'cp': 5003,
      'no': 11,
      'fee': 0,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1333707604534918,
        'size': 3767754,
        'vd': -0.000265076
      },
      'name': '学生歌',
      'id': 5282329,
      'privilege': {
        'id': 5282329,
        'fee': 0,
        'payed': 0,
        'st': 0,
        'pl': 320000,
        'dl': 320000,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 320000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26180,
        'name': '今宵不想告别',
        'picUrl': 'http://p4.music.126.net/MpYYoMb4b-YlgofOa0o35w==/825733232461793.jpg',
        'pic_str': '825733232461793',
        'pic': 825733232461793
      },
      'st': 3,
      'v': 9,
      'crbt': '4216036ec2a4cd7dcead6271126516e6',
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1030242395232178,
        'size': 2819866,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 233273,
      'h': {
        'br': 320000,
        'fid': 998356558026961,
        'size': 9346089,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 35,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 8,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1148989651032429,
        'size': 4684800,
        'vd': -0.000265076
      },
      'name': '离别太阳西沉时',
      'id': 263687,
      'privilege': {
        'id': 263687,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8358,
        'name': '黎瑞恩',
        'alia': ['Vivian Lai']
      }, {
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 25784,
        'name': '理想的日子(精选47首)',
        'picUrl': 'http://p3.music.126.net/TSfuKsyaiiN1ZOgFL1cMhg==/79164837215164.jpg',
        'pic_str': '79164837215164',
        'pic': 79164837215164
      },
      'st': 3,
      'v': 12,
      'crbt': 'f19d61838088a52efb3f34eec7963ab3',
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1100611139410324,
        'size': 2814046,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 232751,
      'h': {
        'br': 320000,
        'fid': 1100611139410322,
        'size': 9325640,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 35,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 27,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1100611139410323,
        'size': 4674800,
        'vd': -0.000265076
      },
      'name': '说爱谈情',
      'id': 258770,
      'privilege': {
        'id': 258770,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 4,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26183,
        'name': 'In Your Dreams',
        'picUrl': 'http://p3.music.126.net/tUpc-ZMYx1WPYfdU7X0qxA==/18631224534157924.jpg',
        'pic_str': '18631224534157924',
        'pic': 18631224534157924
      },
      'st': 3,
      'v': 10,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1029142883605969,
        'size': 2597541,
        'vd': 0
      },
      'cf': '',
      'dt': 213499,
      'h': {
        'br': 320000,
        'fid': 1080819930111537,
        'size': 8570072,
        'vd': 0
      },
      'alia': ['电影《带子洪郎》主题曲'],
      'pop': 30,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 2,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 997257046400463,
        'size': 4304277,
        'vd': 0.0521118
      },
      'name': '两心依然走近',
      'id': 263717,
      'privilege': {
        'id': 263717,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 4,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26173,
        'name': '改改',
        'picUrl': 'http://p3.music.126.net/oIR_fevsc6Pta-RAvPIG4w==/102254581399154.jpg',
        'pic_str': '102254581399154',
        'pic': 102254581399154
      },
      'st': 3,
      'v': 8,
      'crbt': '4216036ec2a4cd7d7f34cee776fff951',
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1205064744050394,
        'size': 2707195,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 223164,
      'h': {
        'br': 320000,
        'fid': 1205064744050392,
        'size': 8950355,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 25,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 4,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1205064744050393,
        'size': 4491254,
        'vd': -0.000265076
      },
      'name': '一起走到明天',
      'id': 263601,
      'privilege': {
        'id': 263601,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26183,
        'name': 'In Your Dreams',
        'picUrl': 'http://p3.music.126.net/tUpc-ZMYx1WPYfdU7X0qxA==/18631224534157924.jpg',
        'pic_str': '18631224534157924',
        'pic': 18631224534157924
      },
      'st': 3,
      'v': 10,
      'crbt': '4216036ec2a4cd7d5619a4f82adb6ecb',
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1194069627772460,
        'size': 2674964,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 219951,
      'h': {
        'br': 320000,
        'fid': 1055531162672564,
        'size': 8828158,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 25,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 1,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1097312604528258,
        'size': 4433318,
        'vd': -0.000265076
      },
      'name': '一世情缘',
      'id': 263715,
      'privilege': {
        'id': 263715,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }, {
        'id': 3699,
        'name': '李克勤'
      }],
      'al': {
        'id': 26183,
        'name': 'In Your Dreams',
        'picUrl': 'http://p3.music.126.net/tUpc-ZMYx1WPYfdU7X0qxA==/18631224534157924.jpg',
        'pic_str': '18631224534157924',
        'pic': 18631224534157924
      },
      'st': 3,
      'v': 9,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 997257046400464,
        'size': 2415098,
        'vd': 1.3411
      },
      'cf': '',
      'dt': 198269,
      'h': {
        'br': 320000,
        'fid': 1201766209166896,
        'size': 7961938,
        'vd': 1.20453
      },
      'alia': [],
      'pop': 25,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 4,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1080819930111538,
        'size': 4000208,
        'vd': 1.57562
      },
      'name': '如果这生',
      'id': 263719,
      'privilege': {
        'id': 263719,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26173,
        'name': '改改',
        'picUrl': 'http://p3.music.126.net/oIR_fevsc6Pta-RAvPIG4w==/102254581399154.jpg',
        'pic_str': '102254581399154',
        'pic': 102254581399154
      },
      'st': 1,
      'v': 3,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1178676464983876,
        'size': 2781481,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 229355,
      'h': {
        'br': 320000,
        'fid': 1132496976617065,
        'size': 9197989,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 25,
      'rt': '',
      'mst': 9,
      'cp': 5003,
      'no': 10,
      'fee': 0,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1068725302206224,
        'size': 4615068,
        'vd': -0.000265076
      },
      'name': '忘记我',
      'id': 263615,
      'privilege': {
        'id': 263615,
        'fee': 0,
        'payed': 0,
        'st': 0,
        'pl': 320000,
        'dl': 320000,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 320000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 6533,
        'name': '郑嘉颖',
        'alia': ['KC']
      }, {
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 19836,
        'name': '新曲+精选',
        'picUrl': 'http://p4.music.126.net/Vq756vSQJ_O9gJWVCjKyuA==/64871186055817.jpg',
        'pic_str': '64871186055817',
        'pic': 64871186055817
      },
      'st': 3,
      'v': 8,
      'crbt': '6480620889f80cd0d64225ca5b463e31',
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1228154488232978,
        'size': 2910886,
        'vd': -0.08
      },
      'cf': '',
      'dt': 240248,
      'h': {
        'br': 320000,
        'fid': 1039038488255450,
        'size': 9631669,
        'vd': -0.5
      },
      'alia': [],
      'pop': 25,
      'rt': '600902000005601677',
      'mst': 9,
      'cp': 7003,
      'no': 14,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1024744837094463,
        'size': 4831409,
        'vd': -0.06
      },
      'name': 'Till The End Of Time',
      'id': 197323,
      'privilege': {
        'id': 197323,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 3170209,
        'name': '宝丽金真开心精选 Vol.2',
        'picUrl': 'http://p4.music.126.net/GUnkmhDng1HQ6P3tYc1p3w==/7962663209006266.jpg',
        'pic_str': '7962663209006266',
        'pic': 7962663209006266
      },
      'st': 3,
      'v': 665,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 7937374441704140,
        'size': 3004155,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 250000,
      'h': {
        'br': 320000,
        'fid': 7937374441704138,
        'size': 10013434,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 25,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 5,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 7937374441704139,
        'size': 5006806,
        'vd': -0.000265076
      },
      'name': '留住這一刻',
      'id': 32705307,
      'privilege': {
        'id': 32705307,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 999000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26178,
        'name': '依恋',
        'picUrl': 'http://p3.music.126.net/4RKu1Gu7j7Eh6Oeq_YHorw==/102254581399199.jpg',
        'pic_str': '102254581399199',
        'pic': 102254581399199
      },
      'st': 3,
      'v': 6,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1041237511511360,
        'size': 3293607,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 272640,
      'h': {
        'br': 320000,
        'fid': 1161084278939332,
        'size': 10920630,
        'vd': 0.0281441
      },
      'alia': [],
      'pop': 25,
      'rt': '',
      'mst': 9,
      'cp': 7001,
      'no': 4,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1183074511494754,
        'size': 5473055,
        'vd': -0.000265076
      },
      'name': '爱似风消逝',
      'id': 263659,
      'privilege': {
        'id': 263659,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }, {
        'id': 9504,
        'name': '汤宝如'
      }, {
        'id': 7768,
        'name': '关淑怡',
        'alia': ['Shirley Kwan']
      }, {
        'id': 11265,
        'name': '草蜢',
        'alia': ['Grasshopper']
      }],
      'al': {
        'id': 511122,
        'name': '环球/宝丽金40周年经典101',
        'picUrl': 'http://p4.music.126.net/d5ryd0uwq29KWk3bRZ1wsA==/45079976751142.jpg',
        'pic_str': '45079976751142',
        'pic': 45079976751142
      },
      'st': 3,
      'v': 672,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1058829697557079,
        'size': 3584586,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 295576,
      'h': {
        'br': 320000,
        'fid': 1058829697557077,
        'size': 11853803,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 25,
      'rt': '600902000009547213',
      'mst': 9,
      'cp': 7003,
      'no': 8,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '4',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1058829697557078,
        'size': 5947518,
        'vd': -0.000265076
      },
      'name': '热力节拍 Wou Bom Ba',
      'id': 5238694,
      'privilege': {
        'id': 5238694,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 4,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26166,
        'name': '寂寞都有罪',
        'picUrl': 'http://p4.music.126.net/yiHnwDf_IRjVYuabYzYRKw==/75866302332939.jpg',
        'pic_str': '75866302332939',
        'pic': 75866302332939
      },
      'st': 1,
      'v': 3,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1029142883605931,
        'size': 2989952,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 247275,
      'h': {
        'br': 320000,
        'fid': 1029142883605929,
        'size': 9907490,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 25,
      'rt': '',
      'mst': 9,
      'cp': 5003,
      'no': 3,
      'fee': 0,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1029142883605930,
        'size': 4966690,
        'vd': 0.00106039
      },
      'name': '你不变的冷傲',
      'id': 263512,
      'privilege': {
        'id': 263512,
        'fee': 0,
        'payed': 0,
        'st': 0,
        'pl': 320000,
        'dl': 320000,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 320000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26170,
        'name': '谢谢你爱过我',
        'picUrl': 'http://p3.music.126.net/YtlKQ3cuaFQRO25E8mbCHw==/91259465121380.jpg',
        'pic_str': '91259465121380',
        'pic': 91259465121380
      },
      'st': 3,
      'v': 5,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1108307720805709,
        'size': 2721833,
        'vd': 0.12549
      },
      'cf': '',
      'dt': 224601,
      'h': {
        'br': 320000,
        'fid': 1119302837083432,
        'size': 9005221,
        'vd': 0.00397712
      },
      'alia': [],
      'pop': 25,
      'rt': '',
      'mst': 9,
      'cp': 754011,
      'no': 10,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1081919441739200,
        'size': 4517385,
        'vd': 0.151886
      },
      'name': '爱你一万年',
      'id': 263581,
      'privilege': {
        'id': 263581,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26180,
        'name': '今宵不想告别',
        'picUrl': 'http://p4.music.126.net/MpYYoMb4b-YlgofOa0o35w==/825733232461793.jpg',
        'pic_str': '825733232461793',
        'pic': 825733232461793
      },
      'st': 3,
      'v': 6,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1059929209182056,
        'size': 2617679,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 216425,
      'h': {
        'br': 320000,
        'fid': 1059929209182054,
        'size': 8672130,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 25,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 5,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1059929209182055,
        'size': 4347821,
        'vd': -0.000265076
      },
      'name': '急色鬼.爱出位',
      'id': 263681,
      'privilege': {
        'id': 263681,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26173,
        'name': '改改',
        'picUrl': 'http://p3.music.126.net/oIR_fevsc6Pta-RAvPIG4w==/102254581399154.jpg',
        'pic_str': '102254581399154',
        'pic': 102254581399154
      },
      'st': 1,
      'v': 3,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1178676464983874,
        'size': 2914081,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 240431,
      'h': {
        'br': 320000,
        'fid': 1205064744050396,
        'size': 9639983,
        'vd': 0
      },
      'alia': [],
      'pop': 25,
      'rt': '',
      'mst': 9,
      'cp': 5003,
      'no': 5,
      'fee': 0,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1132496976617063,
        'size': 4836066,
        'vd': 0
      },
      'name': '多看一眼',
      'id': 263604,
      'privilege': {
        'id': 263604,
        'fee': 0,
        'payed': 0,
        'st': 0,
        'pl': 320000,
        'dl': 320000,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 320000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8402,
        'name': '刘嘉玲'
      }, {
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }, {
        'id': 3763,
        'name': '李国祥'
      }, {
        'id': 10226,
        'name': '叶蕴仪'
      }],
      'al': {
        'id': 513548,
        'name': '心经',
        'picUrl': 'http://p3.music.126.net/TadX4VrGUsDBGP6GymLB4Q==/36283883732403.jpg',
        'pic_str': '36283883732403',
        'pic': 36283883732403
      },
      'st': 1,
      'v': 668,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 2767470767115444,
        'size': 3102709,
        'vd': -1.94
      },
      'cf': '',
      'dt': 258220,
      'h': {
        'br': 320000,
        'fid': 2813650255482105,
        'size': 10326715,
        'vd': -2.35
      },
      'alia': [],
      'pop': 25,
      'rt': '',
      'mst': 9,
      'cp': 5003,
      'no': 13,
      'fee': 0,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 2847735115942967,
        'size': 5167010,
        'vd': -1.92
      },
      'name': '心经',
      'id': 5279564,
      'privilege': {
        'id': 5279564,
        'fee': 0,
        'payed': 0,
        'st': 0,
        'pl': 320000,
        'dl': 320000,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 320000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 3073,
        'name': '黄凯芹',
        'alia': ['Christopher Wong']
      }, {
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 9226,
        'name': 'Long Time No See 2002 Live',
        'picUrl': 'http://p3.music.126.net/5GxQ-zYzCd3X32zGK0GMVw==/107752139539216.jpg',
        'pic_str': '107752139539216',
        'pic': 107752139539216
      },
      'st': 1,
      'v': 6,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1145691116151323,
        'size': 3440198,
        'vd': 0.255003
      },
      'cf': '',
      'dt': 282880,
      'h': {
        'br': 320000,
        'fid': 1146790627779130,
        'size': 11353941,
        'vd': 0.0625184
      },
      'alia': [],
      'pop': 25,
      'rt': '',
      'mst': 9,
      'cp': 5003,
      'no': 11,
      'fee': 0,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1070924325462441,
        'size': 5701566,
        'vd': 0
      },
      'name': '教我如何不爱他(Live) - live',
      'id': 94088,
      'privilege': {
        'id': 94088,
        'fee': 0,
        'payed': 0,
        'st': 0,
        'pl': 320000,
        'dl': 320000,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 320000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26170,
        'name': '谢谢你爱过我',
        'picUrl': 'http://p4.music.126.net/YtlKQ3cuaFQRO25E8mbCHw==/91259465121380.jpg',
        'pic_str': '91259465121380',
        'pic': 91259465121380
      },
      'st': 3,
      'v': 5,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1168780860333500,
        'size': 3365701,
        'vd': 0
      },
      'cf': '',
      'dt': 278309,
      'h': {
        'br': 320000,
        'fid': 1227054976605476,
        'size': 11151443,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 20,
      'rt': '',
      'mst': 9,
      'cp': 754011,
      'no': 1,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1072023837089211,
        'size': 5590497,
        'vd': 0.329572
      },
      'name': '谢谢你爱过我',
      'id': 263560,
      'privilege': {
        'id': 263560,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 0,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26178,
        'name': '依恋',
        'picUrl': 'http://p4.music.126.net/4RKu1Gu7j7Eh6Oeq_YHorw==/102254581399199.jpg',
        'pic_str': '102254581399199',
        'pic': 102254581399199
      },
      'st': 3,
      'v': 8,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1102810162666765,
        'size': 3009608,
        'vd': 0.554091
      },
      'cf': '',
      'dt': 248947,
      'h': {
        'br': 320000,
        'fid': 1183074511494753,
        'size': 9973956,
        'vd': 0.229381
      },
      'alia': [],
      'pop': 25,
      'rt': '',
      'mst': 9,
      'cp': 7001,
      'no': 2,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1041237511511359,
        'size': 4999720,
        'vd': 0.448779
      },
      'name': '分手不须再流泪',
      'id': 263655,
      'privilege': {
        'id': 263655,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26178,
        'name': '依恋',
        'picUrl': 'http://p3.music.126.net/4RKu1Gu7j7Eh6Oeq_YHorw==/102254581399199.jpg',
        'pic_str': '102254581399199',
        'pic': 102254581399199
      },
      'st': 3,
      'v': 6,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1011550697561590,
        'size': 2717758,
        'vd': 0.554091
      },
      'cf': '',
      'dt': 224601,
      'h': {
        'br': 320000,
        'fid': 1150089162661564,
        'size': 9001146,
        'vd': 0.342247
      },
      'alia': [],
      'pop': 20,
      'rt': '',
      'mst': 9,
      'cp': 7001,
      'no': 1,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1007152651050485,
        'size': 4513310,
        'vd': 0.693652
      },
      'name': '依恋',
      'id': 263653,
      'privilege': {
        'id': 263653,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26170,
        'name': '谢谢你爱过我',
        'picUrl': 'http://p3.music.126.net/YtlKQ3cuaFQRO25E8mbCHw==/91259465121380.jpg',
        'pic_str': '91259465121380',
        'pic': 91259465121380
      },
      'st': 3,
      'v': 4,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1054431651044635,
        'size': 3087649,
        'vd': 0.0406523
      },
      'cf': '',
      'dt': 255112,
      'h': {
        'br': 320000,
        'fid': 1081919441739197,
        'size': 10224615,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 20,
      'rt': '',
      'mst': 9,
      'cp': 7001,
      'no': 2,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1102810162666715,
        'size': 5127081,
        'vd': 0.241365
      },
      'name': '情深似海',
      'id': 263563,
      'privilege': {
        'id': 263563,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 0,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26182,
        'name': '隔世感觉',
        'picUrl': 'http://p4.music.126.net/d8wGBFxMJ0nxBAQ_x2hKOA==/60473139543738.jpg',
        'pic_str': '60473139543738',
        'pic': 60473139543738
      },
      'st': 3,
      'v': 6,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1222656930094414,
        'size': 3173462,
        'vd': 0
      },
      'cf': '',
      'dt': 262348,
      'h': {
        'br': 320000,
        'fid': 1029142883605816,
        'size': 10513034,
        'vd': 0.135716
      },
      'alia': [],
      'pop': 20,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 6,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1129198441733386,
        'size': 5270782,
        'vd': 0.380382
      },
      'name': '我怀念着一片云彩',
      'id': 263701,
      'privilege': {
        'id': 263701,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 132,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26166,
        'name': '寂寞都有罪',
        'picUrl': 'http://p4.music.126.net/yiHnwDf_IRjVYuabYzYRKw==/75866302332939.jpg',
        'pic_str': '75866302332939',
        'pic': 75866302332939
      },
      'st': 1,
      'v': 3,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1169880371961393,
        'size': 2932276,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 242469,
      'h': {
        'br': 320000,
        'fid': 1091815046389334,
        'size': 9715230,
        'vd': 0.211979
      },
      'alia': [],
      'pop': 20,
      'rt': '',
      'mst': 9,
      'cp': 5003,
      'no': 6,
      'fee': 0,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1145691116150420,
        'size': 4870562,
        'vd': 0.286452
      },
      'name': '错了一次又一次',
      'id': 263521,
      'privilege': {
        'id': 263521,
        'fee': 0,
        'payed': 0,
        'st': 0,
        'pl': 320000,
        'dl': 320000,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 320000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26173,
        'name': '改改',
        'picUrl': 'http://p3.music.126.net/oIR_fevsc6Pta-RAvPIG4w==/102254581399154.jpg',
        'pic_str': '102254581399154',
        'pic': 102254581399154
      },
      'st': 1,
      'v': 3,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1079720418483913,
        'size': 2744506,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 226273,
      'h': {
        'br': 320000,
        'fid': 1052232627789358,
        'size': 9074706,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 20,
      'rt': '',
      'mst': 9,
      'cp': 5003,
      'no': 1,
      'fee': 0,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1197368162655944,
        'size': 4553433,
        'vd': -0.000265076
      },
      'name': '改！改！(爱恋革命)',
      'id': 263592,
      'privilege': {
        'id': 263592,
        'fee': 0,
        'payed': 0,
        'st': 0,
        'pl': 320000,
        'dl': 320000,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 320000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 674014,
        'name': '黎端恩'
      }, {
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 2286006,
        'name': '宝丽金双声情歌合唱精选',
        'picUrl': 'http://p4.music.126.net/Owoo92ak1O4KqU6aMvkvAw==/557452395330309.jpg',
        'pic_str': '557452395330309',
        'pic': 557452395330309
      },
      'st': 3,
      'v': 668,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1881264395174623,
        'size': 2856288,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 234083,
      'h': {
        'br': 320000,
        'fid': 1357896860337229,
        'size': 9405185,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 20,
      'rt': '',
      'mst': 9,
      'cp': 7003,
      'no': 10,
      'fee': 8,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1254542767325900,
        'size': 4727700,
        'vd': -0.000265076
      },
      'name': '説爱谈情',
      'id': 25707086,
      'privilege': {
        'id': 25707086,
        'fee': 8,
        'payed': 0,
        'st': 0,
        'pl': 128000,
        'dl': 0,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 128000,
        'toast': false,
        'flag': 4,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26182,
        'name': '隔世感觉',
        'picUrl': 'http://p3.music.126.net/d8wGBFxMJ0nxBAQ_x2hKOA==/60473139543738.jpg',
        'pic_str': '60473139543738',
        'pic': 60473139543738
      },
      'st': 1,
      'v': 3,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1198467674283415,
        'size': 2812653,
        'vd': 0.168357
      },
      'cf': '',
      'dt': 232255,
      'h': {
        'br': 320000,
        'fid': 1219358395211006,
        'size': 9310350,
        'vd': 0.215239
      },
      'alia': [],
      'pop': 20,
      'rt': '',
      'mst': 9,
      'cp': 5003,
      'no': 10,
      'fee': 0,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1192970116144533,
        'size': 4669437,
        'vd': 0.327095
      },
      'name': '分手的藉口',
      'id': 263709,
      'privilege': {
        'id': 263709,
        'fee': 0,
        'payed': 0,
        'st': 0,
        'pl': 320000,
        'dl': 320000,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 320000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26166,
        'name': '寂寞都有罪',
        'picUrl': 'http://p4.music.126.net/yiHnwDf_IRjVYuabYzYRKw==/75866302332939.jpg',
        'pic_str': '75866302332939',
        'pic': 75866302332939
      },
      'st': 1,
      'v': 3,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1161084278939292,
        'size': 2986189,
        'vd': 0
      },
      'cf': '',
      'dt': 246962,
      'h': {
        'br': 320000,
        'fid': 1015948744072603,
        'size': 9894949,
        'vd': 0.0710664
      },
      'alia': [],
      'pop': 20,
      'rt': '',
      'mst': 9,
      'cp': 5003,
      'no': 1,
      'fee': 0,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1117103813827998,
        'size': 4960419,
        'vd': 0.282892
      },
      'name': '寂寞都有罪',
      'id': 263506,
      'privilege': {
        'id': 263506,
        'fee': 0,
        'payed': 0,
        'st': 0,
        'pl': 320000,
        'dl': 320000,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 320000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26163,
        'name': '爱飞了',
        'picUrl': 'http://p4.music.126.net/J9YU9zDY2Nnm8hd3DfYjsg==/106652627910540.jpg',
        'pic_str': '106652627910540',
        'pic': 106652627910540
      },
      'st': 1,
      'v': 3,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1130297953360062,
        'size': 2665846,
        'vd': 0.237005
      },
      'cf': '',
      'dt': 219272,
      'h': {
        'br': 320000,
        'fid': 1069824813832466,
        'size': 8800023,
        'vd': 0.303455
      },
      'alia': [],
      'pop': 20,
      'rt': '',
      'mst': 9,
      'cp': 5003,
      'no': 8,
      'fee': 0,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1183074511493506,
        'size': 4418767,
        'vd': 0.570211
      },
      'name': '住在我心里',
      'id': 263494,
      'privilege': {
        'id': 263494,
        'fee': 0,
        'payed': 0,
        'st': 0,
        'pl': 320000,
        'dl': 320000,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 320000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }, {
      'rtUrls': [],
      'ar': [{
        'id': 8391,
        'name': '刘小慧',
        'alia': ['Winnie Lau']
      }],
      'al': {
        'id': 26157,
        'name': '精选套装',
        'picUrl': 'http://p4.music.126.net/FuEYRKEmkJKyblI9Ti983w==/24189255826667.jpg',
        'pic_str': '24189255826667',
        'pic': 24189255826667
      },
      'st': 1,
      'v': 3,
      'crbt': null,
      'rtUrl': null,
      'pst': 0,
      'l': {
        'br': 96000,
        'fid': 1201766209167671,
        'size': 2833147,
        'vd': -0.000265076
      },
      'cf': '',
      'dt': 234527,
      'h': {
        'br': 320000,
        'fid': 1205064744050955,
        'size': 9394478,
        'vd': -0.000265076
      },
      'alia': [],
      'pop': 20,
      'rt': '',
      'mst': 9,
      'cp': 5003,
      'no': 12,
      'fee': 0,
      'ftype': 0,
      'rtype': 0,
      'rurl': null,
      'djId': 0,
      't': 0,
      'mv': 0,
      'cd': '1',
      'a': null,
      'm': {
        'br': 160000,
        'fid': 1145691116151294,
        'size': 4708112,
        'vd': -0.000265076
      },
      'name': '分手的籍口',
      'id': 263402,
      'privilege': {
        'id': 263402,
        'fee': 0,
        'payed': 0,
        'st': 0,
        'pl': 320000,
        'dl': 320000,
        'sp': 7,
        'cp': 1,
        'subp': 1,
        'cs': false,
        'maxbr': 320000,
        'fl': 320000,
        'toast': false,
        'flag': 128,
        'preSell': false
      }
    }]
  },

  // 当前播放的歌曲
  currentMusic: {
    id: 442009238,
    singer: [
      {
        id: 12195169,
        name: 'Atta Girl',
        tns: [],
        alias: []
      }
    ],
    musicName: '上野公园',
    albumName: 'Everyone Loves You When You Were Still A Kid',
    albumImgUrl:
      'http://p2.music.126.net/64JozXeLm7ErtXpwGrwwEw==/109951162811190850.jpg',
    musicUrl: ''
  },

  currentMusicLyric: null,

  // 播放状态
  playing: false,

  // 播放列表
  playList: [],

  // 当前播放索引
  currentIndex: 0,

  // 播放模式
  playMode: PLAY_MODE_TYPES.SEQUENCE_PLAY
};

// state 里面存放了所有的数据
// reducer 可以接收 state，但是绝对不可以修改 state
export default (state = defaultState, action) => {
  if (action.type === types.CHANGE_CURRENT_MUSIC_LIST) {
    const newState = deepCopy(state);
    newState.musicList = action.value;
    newState.showMusicList = true;
    return newState;
  }
  if (action.type === types.HIDE_MUSIC_LIST) {
    const newState = deepCopy(state);
    newState.showMusicList = false;
    return newState;
  }
  if (action.type === types.CHANGE_CURRENT_MUSIC) {
    const newState = deepCopy(state);
    newState.currentMusic = action.value;
    newState.playing = true;
    return newState;
  }
  if (action.type === types.CHANGE_PLAYING_STATUS) {
    const newState = deepCopy(state);
    newState.playing = action.status;
    return newState;
  }
  if (action.type === types.CHANGE_PLAY_LIST) {
    const newState = deepCopy(state);
    newState.playList = action.value;
    return newState;
  }
  if (action.type === types.CHANGE_CURRENT_INDEX) {
    const newState = deepCopy(state);
    newState.currentIndex = action.index;
    return newState;
  }
  if (action.type === types.CHANGE_PLAY_MODE) {
    const newState = deepCopy(state);
    newState.playMode = action.value;
    return newState;
  }
  if (action.type === types.TOGGLE_SHOW_MUSIC_DETAIL) {
    const newState = deepCopy(state);
    newState.showMusicDetail = !newState.showMusicDetail;
    return newState;
  }
  if (action.type === types.CHANGE_CURRENT_MUSIC_LYRIC) {
    const newState = deepCopy(state);
    newState.currentMusicLyric = action.value;
    return newState;
  }
  if (action.type === types.CHANGE_SINGER_INFO) {
    const newState = deepCopy(state);
    newState.singerInfo = action.value;
    newState.showSingerInfo = true;
    return newState;
  }
  if (action.type === types.HIDE_SINGER_INFO) {
    const newState = deepCopy(state);
    newState.showSingerInfo = false;
    return newState;
  }
  return state;
};

function deepCopy(val) {
  return JSON.parse(JSON.stringify(val));
}
