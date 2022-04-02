import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import theme from '../../00-base/01-theme/theme';
import { ThemeType } from '../../00-base/01-theme/theme.type';
import { Heading } from '../../01-atoms/headings';

export interface BaseAboutMeProps {
  theme?: ThemeType;
}

export type AboutMeProps = BaseAboutMeProps &
  SpaceProps &
  React.ComponentPropsWithRef<'div'>;

const StyledAboutMe: React.FC<AboutMeProps> = styled.div`
  border: dashed 2px ${(props) => props.theme.colors.accent1};
  padding: ${(props) => props.theme.space.x4}px;
  ${space}
`;

export const AboutMe: React.FC<AboutMeProps> = ({ children, ...props }) => {
  return (
    <StyledAboutMe {...props}>
      <Heading size={2} mb={'0'}>
        About Me
      </Heading>
    </StyledAboutMe>
  );
};

export default AboutMe;
