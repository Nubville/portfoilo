import { ResponsiveValue } from 'styled-system';
import {
  ThemeType,
  Borders,
  Breakpoints,
  Containers,
  Colors,
  FontSizes,
  LineHeights,
  MediaQueries,
  Radii,
  Space,
} from './theme.type';

const theme = {} as ThemeType;

const borders: any = ['none', 'solid 2px', 'solid 5px'];
[borders.none, borders.small, borders.normal] = borders as Borders;

const breakpoints: any = ['576px', '768px', '992px', '1200px'];
[
  breakpoints.sm,
  breakpoints.md,
  breakpoints.lg,
  breakpoints.xl,
] = breakpoints as Breakpoints;

const mediaQueries: MediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints['sm']})`,
  md: `@media screen and (min-width: ${breakpoints['md']})`,
  lg: `@media screen and (min-width: ${breakpoints['lg']})`,
  xl: `@media screen and (min-width: ${breakpoints['xl']})`,
};

const colors: Colors = {
  black: '#000',
  accent1: '#2d4059',
  accent2: '#ff5722',
  accent3: '#eeeeee',
  shade1: '#f2f2f2',
  layoutHorizontal: '#a3c2f0',
  layoutVertical: '#ffb8c8',
  primary: '#222831',
  white: '#FFF',
};

const containers: any = ['540px', '720px', '960px', '1140px'];
[
  containers.sm,
  containers.md,
  containers.lg,
  containers.xl,
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
  bold: 700,
};

const lineHeights: LineHeights = {
  body: 1.5,
  heading: 1.125,
};

const radii: any = [0, 2, '255px 15px 225px 15px/15px 225px 15px 255px', '50%'];
[radii.none, radii.small, radii.medium, radii.circle] = radii as Radii;

const space: any = [0, 4, 8, 16, 32, 64, 128, 256];
[
  space.none,
  space.x1,
  space.x2,
  space.x3,
  space.x4,
  space.x5,
  space.x6,
  space.x7,
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
