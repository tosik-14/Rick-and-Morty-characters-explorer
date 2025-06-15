/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#11181C';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    metaText: '#a1a1a1',
    background: '#f1f1f1',
    tintBackground: '#ffffff',
    upBackground: '#f8f8f8',
    borderColor: '#cccccc',
    tintBorderColor: '#cccccc',
    tint: tintColorLight,
    icon: '#2d2d31',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,

    unknownStatus: '#939393',
    aliveStatus: '#5CCF52',
    deathStatus: '#DE3D3D',

  },
  dark: {
    text: '#ECEDEE',
    metaText: '#7a7a7a',
    background: '#151718',
    tintBackground: '#151517',
    upBackground: '#262b2c',
    borderColor: '#424242',
    tintBorderColor: '#383737',
    tint: tintColorDark,
    icon: '#e7e8e8',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,

    unknownStatus: '#939393',
    aliveStatus: '#5CCF52',
    deathStatus: '#DE3D3D',

  },
};
