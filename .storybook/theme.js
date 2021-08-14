import { create } from "@storybook/theming";
import Cover from "../stories/assets/cover.png";

export default create({
  base: "light",

  // Typography
  fontBase: '"Libre Franklin", sans-serif',
  fontCode: "monospace",

  // Colours
  colorPrimary: "#F04C53", //primary
  colorSecondary: "#F04C53", //primary

  // UI
  appBg: "white", //inverse
  appContentBg: "white", //inverse
  appBorderColor: "#c6c6c6", //grey-border
  appBorderRadius: 0,

  // Text Colours
  textColor: "black", //text
  textInverseColor: "white", //inverse

  // Toolbar default and active colors
  barTextColor: "#525252", //grey
  barSelectedColor: "#F04C53", //primary
  barBg: "white", //inverse

  // Form colors
  inputBg: "white", //inverse
  inputBorder: "#c6c6c6", //grey-border
  inputTextColor: "black", //text

  //Brand
  brandTitle: "Miliband Components",
  brandUrl: "https://github.com/JacobWeinbren/miliband-components",
});
