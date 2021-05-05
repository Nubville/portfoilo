import { ResponsiveValue } from 'styled-system';
import { ThemeType, Borders, Breakpoints, Containers, Colors, FontSizes, LineHeights, MediaQueries, Radii, Space } from "./theme.type";

const theme = {} as ThemeType;

const borders: any = ['none', 'solid 1px', 'solid 2px'];
[
  borders.none,
  borders.small,
  borders.normal
] = borders as Borders;

const breakpoints: any = ['576px', '768px', '992px', '1200px', '1440px'];
[
  breakpoints.sm,
  breakpoints.md,
  breakpoints.lg,
  breakpoints.xl,
  breakpoints.xxl
] = breakpoints as Breakpoints;

const mediaQueries: MediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints['sm']})`,
  md: `@media screen and (min-width: ${breakpoints['md']})`,
  lg: `@media screen and (min-width: ${breakpoints['lg']})`,
  xl: `@media screen and (min-width: ${breakpoints['xl']})`,
  xxl: `@media screen and (min-width: ${breakpoints['xxl']})`,
}

const colors: Colors = {
  text: '#F2E5BD',
  primary: '#101010',
  secondary: '#403F35',
  cooltone1: '#9EE835',
  cooltone2: '#84C22D',
  cooltone3: '#6A9C24',
  cooltone4: '#3E5C15',
  cooltone5: '#2F4210',
  warmtone1: '#F2E5BD',
  warmtone2: '#BF8136',
  warmtone3: '#A67232',
  warmtone4: '#8C4227',
};

const containers: any = ['540px', '720px', '960px', '1140px', '1320px'];
[
  containers.sm,
  containers.md,
  containers.lg,
  containers.xl,
  containers.xxl,
] = containers as Containers;

const fonts = {
  body: '"Rubik", sans-serif',
  heading: '"Karla", sans-serif',
  monospace: 'Menlo, monospace',
};

const fontSizes: any = [12, 14, 16, 18, 24, 30, 36, 42, 48];
[
  fontSizes.smaller,
  fontSizes.small,
  fontSizes.medium,
  fontSizes.large,
  fontSizes.larger,
  fontSizes.largest,
  fontSizes.heading3,
  fontSizes.heading2,
  fontSizes.heading1,
] = fontSizes as FontSizes;

const fontWeights = {
  body: 400,
  heading: 700,
  bold: 700
};

const lineHeights: LineHeights = {
  body: 1.5,
  heading: 1.125,
}

const radii: any = [0, 2, 4, '50%'] ;
[
  radii.none,
  radii.small,
  radii.medium,
  radii.circle
] = radii as Radii;

const space: any = [0, 4, 8, 16, 32, 64, 128, 256];
[
  space.none,
  space.x1,
  space.x2,
  space.x3,
  space.x4,
  space.x5,
  space.x6,
  space.x7
] = space as Space;

theme.borders = borders;
theme.breakpoints = breakpoints;
theme.containers = containers;
theme.colors = colors;
theme.fonts = fonts;
theme.fontSizes = fontSizes;
theme.fontWeights = fontWeights;
theme.lineHeights = lineHeights;
theme.mediaQueries;
theme.radii = radii;
theme.space = space;

export default theme;
