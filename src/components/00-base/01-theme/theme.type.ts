export type Borders = string[] & {
  none: string;
  small: string;
  normal: string;
};

export type Breakpoints = string[] & {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type Colors = {
  black: string;
  accent1: string;
  accent2: string;
  accent3: string;
  shade1: string;
  layoutVertical: string;
  layoutHorizontal: string;
  primary: string;
  white: string;
};

export type ColorOptions = keyof Colors;

export type Containers = string[] & {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type FontSizes = number[] & {
  smaller: string;
  small: string;
  medium: string;
  large: string;
  larger: string;
  largest: string;
  heading3: string;
  heading2: string;
  heading1: string;
};

export type Radii =
  | number[]
  | (string[] & {
      none: string;
      small: string;
      medium: string;
      circle: string;
    });

export type Space = string[] & {
  none: string;
  x1: string;
  x2: string;
  x3: string;
  x4: string;
  x5: string;
  x6: string;
  x7: string;
};

export type Fonts = {
  body: string;
  heading: string;
  monospace: string;
};

export type FontWeights = {
  body: number;
  heading: number;
  bold: number;
};

export type LineHeights = {
  body: number;
  heading: number;
};

export type MediaQueries = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type ThemeType = {
  borders: Borders;
  breakpoints: Breakpoints;
  colors: Colors;
  containers: Containers;
  fonts: Fonts;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  mediaQueries: MediaQueries;
  radii: Radii;
  space: Space;
};
