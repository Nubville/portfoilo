
type Colors = {
  text: string,
  background: string,
  primary: string,
  secondary: string,
  accent1: string,
  accent2: string,
  accent3: string,
};

type ColorOptions = keyof Colors;

type FontSizes = {
  'smaller': string,
  'small': string,
  'medium': string,
  'large': string,
  'larger': string,
  'largest': string,
  'heading1': string,
  'heading2': string,
  'heading3': string
};

type BreakPoints = {
  'sm': string,
  'md': string,
  'lg': string,
  'xl': string
};

type Space = {
  'none': string,
  'x1': string,
  'x2': string,
  'x3': string,
  'x4': string,
  'x5': string,
  'x6': string,
  'x7': string
};

type Fonts = {
  body: string,
  heading: string,
  monospace: string,
};

type FontWeights = {
  body: number,
  heading: number,
  bold: number
};

type LineHeights = {
  body: number,
  heading: number,
};

type Radii = {
  'small': string,
  'medium': string,
  'circle': string
}

type ZIndex = {

}

export type ThemeType =  {
  breakPoints: BreakPoints,
  colors: Colors,
  fonts: Fonts,
  fontSizes: FontSizes,
  fontWeights: FontWeights,
  lineHeights: LineHeights,
  space: Space,
  radii: Radii,
  zIndex: ZIndex
};
