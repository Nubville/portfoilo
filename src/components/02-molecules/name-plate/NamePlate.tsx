import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { ThemeType } from '../../00-base/01-theme/theme.type';

export interface BaseNamePlateProps {
  theme?: ThemeType;
}

export type NamePlateProps = BaseNamePlateProps &
  SpaceProps &
  React.ComponentPropsWithRef<'div'>;

const Details: React.FC = styled.p`
  margin: ${(props) => props.theme.space.none};
`;

const StyledNamePlate: React.FC<NamePlateProps> = styled.div`
  flex: 1 0 100%;
  margin-top: ${(props) => props.theme.space.x2}px;
  text-align: right;
  ${space}
`;

export const NamePlate: React.FC<NamePlateProps> = ({ children, ...props }) => {
  return (
    <StyledNamePlate {...props}>
      <Details>Andrew Garman</Details>
      <Details>Fort Wayne, IN</Details>
      <a href="mailto:garman.andrew@gmail.com">Email</a>
      {children}
    </StyledNamePlate>
  );
};

export default NamePlate;
