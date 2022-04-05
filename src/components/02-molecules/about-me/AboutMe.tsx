import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import theme from '../../00-base/01-theme/theme';
import { ThemeType } from '../../00-base/01-theme/theme.type';
import { Heading } from '../../01-atoms/headings';
import Placeholder from '../../01-atoms/images/placeholder/Placeholder';
import { Text } from '../../01-atoms/text';

export interface BaseAboutMeProps {
  theme?: ThemeType;
}

export type AboutMeProps = BaseAboutMeProps &
  SpaceProps &
  React.ComponentPropsWithRef<'section'>;

const StyledAboutMe: React.FC<AboutMeProps> = styled.section`
  border: dashed 2px ${(props) => props.theme.colors.accent1};
  padding: ${(props) => props.theme.space.x4}px;
  ${space}
`;

const StyledFlexRow: React.FC = styled.div`
  display: flex;
`;

const StyledContentContainer: React.FC = styled.div`
  flex: 0 0 65%;
  padding-right: ${(props) => props.theme.space.x4}px;
`;

const StyledMediaContainer: React.FC = styled.div`
  flex: 0 0 35%;
`;

export const AboutMe: React.FC<AboutMeProps> = ({ children, ...props }) => {
  return (
    <StyledAboutMe {...props}>
      <StyledFlexRow>
        <StyledContentContainer>
          <Heading size={2} mb={'x3'}>
            About Me
          </Heading>
          <Text mb={'x2'}>
            I am a front end developer and graphic designer from Fort Wayne,
            Indiana. I entered the industry as a Flash animator believe it or
            not. After that I cut my teeth developing themes for Wordpress and
            Drupal. From there I have been building front ends for all kinds of
            tools along the way.
          </Text>
          <Text mb={'x2'}>
            My goals are anchored in building front-ends that are component
            first, driven by atomic design, and backed by living style guides. I
            also pride myself on being able to take a design/prototype and being
            able to translate that into a reusable rule-driven design system
            that still feels pixel perfect.
          </Text>
        </StyledContentContainer>
        <StyledMediaContainer>
          <Placeholder />
        </StyledMediaContainer>
      </StyledFlexRow>
    </StyledAboutMe>
  );
};

export default AboutMe;
