import React from "react";
import styled from "styled-components";
import {
  color,
  space,
  layout,
  border,
  boxShadow,
  textAlign,
  order,
  flexGrow,
  position,
  ColorProps,
  SpaceProps,
  LayoutProps,
  BoxShadowProps,
  TextAlignProps,
  OrderProps,
  FlexGrowProps,
  PositionProps,
  BorderProps,
  FlexboxProps
} from "styled-system";

export type BoxProps = ColorProps &
  SpaceProps &
  LayoutProps &
  BoxShadowProps &
  TextAlignProps &
  OrderProps &
  FlexGrowProps &
  PositionProps &
  BorderProps &
  FlexboxProps &
  React.ComponentPropsWithRef<"div"> & {
    as?: string;
  };

export const Box: React.FC<BoxProps> = styled.div`
  ${color}
  ${space}
  ${layout}
  ${border}
  ${boxShadow}
  ${textAlign}
  ${order}
  ${flexGrow}
  ${position}
`;

export default Box;
