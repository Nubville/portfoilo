import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import theme from '../../00-base/01-theme/theme';
import { ThemeType } from '../../00-base/01-theme/theme.type';
import Placeholder from '../../01-atoms/images/placeholder/Placeholder';
import LogoSVG from '../../../images/svg/rw-logo.svg';
import { Heading } from '../../01-atoms/headings';

export interface BaseAboutMeProps {
  theme?: ThemeType;
}

export type AboutMeProps = BaseAboutMeProps &
  SpaceProps &
  React.ComponentPropsWithRef<'section'>;

const StyledSection: React.FC = styled.section`
  padding: ${(props) => props.theme.space.x4}px 0;
`;

const StyledHeading = styled(Heading)`
  color: ${(props) => props.theme.colors.primary};
`;

const StyledAboutMe: React.FC<AboutMeProps> = styled.div`
  overflow: hidden;
  border: dashed 2px ${(props) => props.theme.colors.accent1};
  padding: ${(props) => props.theme.space.x4}px;
  position: relative;
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.colors.accent4};
`;

const StyledSpan = styled.span`
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.accent2} 0%,
    ${(props) => props.theme.colors.accent3} 35%,
    ${(props) => props.theme.colors.accent4} 100%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FlexContainer: React.FC = styled.div`
  display: flex;
  justify-content: center;
`;

const FlexContentContainer: React.FC = styled.div`
  flex: 0 0 75%;
`;

const StyledLogo = styled(LogoSVG)`
  height: 100%;
  left: ${theme.space.x1}px;
  position: absolute;
  transform: translate3d(-50%, 0, 0);
  top: ${theme.space.x1}px;
  width: 25%;
`;

const AboutMe: React.FC<AboutMeProps> = ({ ...props }) => {
  return (
    <StyledSection>
      <StyledAboutMe {...props}>
        <StyledLogo />
        <FlexContainer>
          <FlexContentContainer>
            <StyledHeading size={1} mb={'0'}>
              I'm <StyledSpan>Andrew Garman</StyledSpan>, a front end tech lead
              at{' '}
              <StyledLink href="https://www.geekhive.com">Geekhive</StyledLink>,
              designer, two time nominee for "Greatest Dad" and builder of
              things.
            </StyledHeading>
          </FlexContentContainer>
        </FlexContainer>
      </StyledAboutMe>
    </StyledSection>
  );
};

export default AboutMe;
