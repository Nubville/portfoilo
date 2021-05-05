import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system'
import { ThemeType } from "../../00-base/01-theme/theme.type";

export interface BaseHeadingProps {
  className?: string;
  size?: SizeType;
  theme?: ThemeType;
}

type SizeType = 1 | 2 | 3 | 4 | 5 | 6;

const getSize = (size: SizeType, theme: ThemeType) => {
  switch (size) {
    case 1:
      return {
        fontSize: theme.fontSizes.heading1
      }
    case 2:
      return {
        fontSize: theme.fontSizes.heading2
      }
    case 3:
      return {
        fontSize: theme.fontSizes.heading3
      }
    case 4:
      return {
        fontSize: theme.fontSizes.largest
      }
    case 5:
      return {
        fontSize: theme.fontSizes.larger
      }
    case 6:
      return {
        fontSize: theme.fontSizes.large
      }
    default:
      return {
        fontSize: theme.fontSizes.heading1
      }
  }
}

export type HeadingProps = BaseHeadingProps &
  SpaceProps &
  React.ComponentPropsWithRef<"h1"> & {
    as?: string;
  };

const StyledHeading: React.FC<HeadingProps> = styled.h1(
  ({ theme }) => ({
    fontFamily: theme.fonts.heading,
    lineHeight: theme.lineHeights.heading,
    marginTop: 0
  }),
  ({ size, theme }: any) => ({
    ...getSize(size, theme)
  }),
  space
)

export const Heading: React.FC<HeadingProps> = ({
  children,
  className,
  size,
  ...props
}) => {
  return (
    <StyledHeading as={size ? `h${size}` : `h1`} className={className} {...props}>
      {children}
    </StyledHeading>
  )
}

export default Heading;
