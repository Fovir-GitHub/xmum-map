import { catppuccinMochaColors } from "./styles/materialUiTheme";

const xmumConfig = {
  announcement: {
    title: {
      zh: "公告",
      en: "Announcement",
    },
  },
  information: {
    tel: {
      zh: "联系电话：",
      en: "Contact: ",
      number: "+60 177376029",
    },
    email: {
      zh: "电子邮箱：",
      en: "Email: ",
      address: "a812354120@gmail.com",
    },
    lastUpdateTime: {
      zh: "上次更新时间：",
      en: "Last update time: ",
      time: "09 Sept 2025",
    },
  },
  language: {
    default: "zh",
  },
  map: {
    backgroundColor: catppuccinMochaColors.base,
    height: 1000,
    bellAvenueWidth: 5700,
    bellSuiteWidth: 1400,
  },
  storeBlock: {
    size: {
      width: 150,
      height: 200,
    },
    position: {
      firstRowY: 100,
      secondRowY: 700,
    },
    patches: {
      milliesVision: {
        name: "Millies Vision\n眼镜店",
        category: "daily_necessity",
        slug: "milliesvision",
      },
      encounteringNailArt: {
        name: "Encountering Nail Art\n邂逅美甲",
        category: "daily_necessity",
        slug: "nailart",
      },
    },
    path: {
      size: 100,
      fill: "#A0A1A6",
      stroke: "#66676B",
      strokeWidth: 3,
    },
    style: {
      stroke: "white",
      strokeWidth: 2,
    },
  },
  website: {
    title: "XMUM Map",
    logo: "/favicon.png",
  },
};

xmumConfig.storeBlock.path = {
  ...xmumConfig.storeBlock.path,
  gap:
    (xmumConfig.storeBlock.position.secondRowY -
      xmumConfig.storeBlock.position.firstRowY -
      xmumConfig.storeBlock.size.height -
      2 * xmumConfig.storeBlock.path.size) /
    2,
};

export default xmumConfig;
