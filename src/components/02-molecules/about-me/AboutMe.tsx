import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { ThemeType } from '../../00-base/01-theme/theme.type';
import Placeholder from '../../01-atoms/images/placeholder/Placeholder';

export interface BaseAboutMeProps {
  theme?: ThemeType;
}

export type AboutMeProps = BaseAboutMeProps &
  SpaceProps &
  React.ComponentPropsWithRef<'section'>;

const StyledAboutMe: React.FC<AboutMeProps> = styled.div`
  border: dashed 2px ${(props) => props.theme.colors.accent1};
  padding: ${(props) => props.theme.space.x2}px;
`;

const AboutMe: React.FC<AboutMeProps> = ({ ...props }) => {
  return (
    <StyledAboutMe {...props}>
      <Placeholder />
    </StyledAboutMe>
  );
};

export default AboutMe;
