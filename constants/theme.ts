/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

// Dark Neon Pink UI Color Scheme
export const DarkNeonPinkColors = {
  background: "#000000",
  surface: "#1E1E1E",
  inactive: "#535353",
  subtext: "#B3B3B3",
  accent: "#FF10F0",
  text: "#F5F5F5",
};

const tintColorLight = DarkNeonPinkColors.accent;
const tintColorDark = DarkNeonPinkColors.accent;

export const Colors = {
  light: {
    text: DarkNeonPinkColors.text,
    background: DarkNeonPinkColors.background,
    tint: tintColorLight,
    icon: DarkNeonPinkColors.subtext,
    tabIconDefault: DarkNeonPinkColors.inactive,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: DarkNeonPinkColors.text,
    background: DarkNeonPinkColors.background,
    tint: tintColorDark,
    icon: DarkNeonPinkColors.subtext,
    tabIconDefault: DarkNeonPinkColors.inactive,
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
