// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const antdTheme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#56BCFD",
    colorBgBase: "#FFFF",
    //   colorFillSecondary: "#efefef",
    colorFillSecondary: "#efefef",
  },
  components: {
    Menu: {
      itemSelectedBg: "#56BCFD",
      itemBg: "#efefef",
      itemSelectedColor: "#fff",
    },
  },
};

export default antdTheme;
