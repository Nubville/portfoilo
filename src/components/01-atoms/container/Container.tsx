import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { ThemeType } from '../../00-base/01-theme/theme.type';

export interface BaseContainerProps {
  className?: string;
  fullWidth?: boolean;
  theme?: ThemeType;
}

export type ContainerProps = BaseContainerProps &
  SpaceProps &
  React.ComponentPropsWithRef<'div'>;

const StyledContainer: React.FC<ContainerProps> = styled.div`
  padding-left: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    max-width: ${(props) => props.theme.containers.sm};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: ${(props) => props.theme.containers.md};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: ${(props) => props.theme.containers.lg};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
    max-width: ${(props) => props.theme.containers.xl};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    max-width: ${(props) => props.theme.containers.xxl};
  }

  ${space}
`;

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  fullWidth,
  ...props
}) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
