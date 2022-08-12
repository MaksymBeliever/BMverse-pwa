const colorRed = '#D2042D';
const tintColorLight = '#2f95dc';
const colorBLue = '#1E75FF';
const colorWhite = '#FFFFFF';
const colorDarkWhite = '#CCCCCC';
const colorGrey = '#92929D';
const colorDarkGrey = '#1C1C24';
const colorBlack = '#000000';

export default {
  // Colors
  light: {
    text: colorBlack,
    backgroundColor: colorWhite,
    tint: tintColorLight,
    tabIconDefault: colorDarkWhite,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: colorWhite,
    backgroundColor: colorBlack,
    tint: colorWhite,
    tabIconDefault: colorDarkWhite,
    tabIconSelected: colorWhite,
  },
  backgrounds: {
    backgroundWhite: colorWhite,
    lightGrey: '#3B3B46',
    grey: '#26262D',
    dark: colorDarkGrey,
    darkGrey: '#13131A',
    blue: '#0062FF',
    lightBlue: colorBLue,
  },
  colors: {
    textWhite: colorWhite,
    textGrey: colorGrey,
    colorRed,
  },
  // Font settings
  fontFamilies: {
    RobotoLight: 'Roboto-Light',
    RobotoRegular: 'Roboto-Regular',
    WorkSansLight: 'WorkSans-Light',
    WorkSansRegular: 'WorkSans-Regular',
  },
  fontSizes: {
    fz14: 14,
    fz35: 35,
  },
  // Indents
  margins: {
    mt15: 15,
    mt20: 20,
    mb20: 20,
    mb30: 30,
    mr10: 10,
    mr20: 20,
    mr25: 25,
    ml25: 25,
  },
  paddings: {
    p15: 15,
    pl15: 15,
    pb20: 20,
  },
  // Border settings
  borderRadiuses: {
    br5: 5,
    br10: 10,
  },
};
