/**
 * @file src/config.js
 * @description Configuration file of the website.
 * @author Fovir
 * @since 2025-09-18
 */

import { catppuccinMochaColors } from "./styles/materialUiTheme";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import IcecreamRoundedIcon from "@mui/icons-material/IcecreamRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";

// Basic options.
const xmumConfig = {
  announcement: {
    title: {
      zh: "公告",
      en: "Announcement",
    },
  },
  footer: {
    links: {
      oui: "https://palevioletred-pigeon-368192.hostingersite.com/",
      fovir: "https://www.fovir.fyi",
    },
    repository: {
      zh: "🌟 仓库：",
      en: "🌟 Repository: ",
      link: "https://github.com/Fovir-GitHub/xmum-map/",
    },
    tel: {
      zh: "☎️ 联系电话：",
      en: "☎️ Contact: ",
      number: "+60 177376029",
    },
    email: {
      zh: "📧 电子邮箱：",
      en: "📧 Email: ",
      address: "a812354120@gmail.com",
    },
    lastUpdateTime: {
      zh: "⏰ 上次更新时间：",
      en: "⏰ Last update time: ",
      time: "08 Oct 2025",
    },
  },
  language: {
    default: "zh",
  },
  map: {
    backgroundColor: catppuccinMochaColors.base,
    height: 1000,
    bellAvenueWidth: 6000,
    bellSuiteWidth: 1400,
    backgroundMapWidth: 10000,
    backgroundMapHeight: 10000,
  },
  seo: {
    description:
      "XMUM Map 提供校园周边全攻略，涵盖美食、娱乐、生活等信息，帮学生快速找到好去处，大学生活更轻松！",
    url: "https://xmummap.com",
    logo: "https://img.xmummap.com/11_map_favicon.webp",
    image: "https://img.xmummap.com/11_map_logo.webp",
    keywords: "厦门大学马来西亚分校, 厦大马校, Bell",
    siteName: "XMUM Map",
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
      position: {
        x: 16,
      },
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
      fontSize: "1.6rem",
    },
  },
  website: {
    title: "XMUM Map",
    logo: "/favicon.png",
    seperatorBetweenSlugAndLocale: "::",
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

// Category information which includes display name, color, and icon.
const opacity = "E2";
const iconSize = "inherit";
export const categoryInformation = {
  restaurant: {
    displayName: {
      en: "Restaurant",
      zh: "餐厅",
    },
    color: `${catppuccinMochaColors.pink}${opacity}`,
    icon: <RestaurantRoundedIcon fontSize={iconSize} />,
  },
  daily_necessity: {
    displayName: {
      en: "Daily Necessity",
      zh: "日用品",
    },
    color: `${catppuccinMochaColors.blue}${opacity}`,
    icon: <LocalGroceryStoreRoundedIcon fontSize={iconSize} />,
  },
  entertainment: {
    displayName: {
      en: "Entertainment",
      zh: "娱乐",
    },
    color: `${catppuccinMochaColors.sky}${opacity}`,
    icon: <SportsEsportsRoundedIcon fontSize={iconSize} />,
  },
  snack: {
    displayName: {
      en: "Snack",
      zh: "甜品",
    },
    color: `${catppuccinMochaColors.green}${opacity}`,
    icon: <IcecreamRoundedIcon fontSize={iconSize} />,
  },
  other: {
    displayName: {
      en: "Other",
      zh: "其它",
    },
    color: `${catppuccinMochaColors.flamingo}${opacity}`,
    icon: <CategoryRoundedIcon fontSize={iconSize} />,
  },
};

// Other icons specified in `.xlsx` files.
export const extraIcons = {
  DirectionsCarFilledRoundedIcon: (
    <DirectionsCarFilledRoundedIcon fontSize={iconSize} />
  ),
};
