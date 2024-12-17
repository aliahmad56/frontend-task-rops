import { ThemeConfig } from 'antd';
import { COLORS } from './color';

const tertiary = 'white';
const fontFamily = 'Arial';
export const customTheme: ThemeConfig = {
  token: {
    colorPrimary: COLORS.PRIMARY,
    colorBgContainer: tertiary,
    fontFamily: fontFamily,
    // borderRadius: 0,
  },
  // Wants to change the styling of any specific component, then use method mentioned below
  components: {
    Input: {
      colorTextPlaceholder: COLORS.INPUT_PLACEHOLDER_TEXT,
      colorText: COLORS.BLACK,
    },
    Card: {
      colorBorder: COLORS.LIGHT_BLACK,
      boxShadow: COLORS.LIGHT_BLACK,
    },
    Typography: {
      colorText: COLORS.TYPOGRAPHY,
    },
    Space: {},
    Tag: {
      colorText: COLORS.GEEK_BLUE,
    },
    Layout: {
      colorBgHeader: COLORS.WHITE,
      colorBgBody: COLORS.WHITE,
    },
  },
};
