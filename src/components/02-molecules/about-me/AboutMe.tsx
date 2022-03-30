import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { ThemeType } from '../../00-base/01-theme/theme.type';
import Placeholder from '../../01-atoms/images/placeholder/Placeholder';
import Image from '../../image';
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

const StyledAboutMe: React.FC<AboutMeProps> = styled.div`
  border: dashed 2px ${(props) => props.theme.colors.accent1};
  padding: ${(props) => props.theme.space.x4}px;
`;

const StyledImage = styled.img`
  height: auto;
  width: 100%;
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.accent1};
`;

const FlexContainer: React.FC = styled.div`
  display: flex;
`;

const FlexImageContainer: React.FC = styled.div`
  flex: 0 0 25%;
`;

const FlexContentContainer: React.FC = styled.div`
  flex: 0 0 75%;
`;

const StyledPlaceholder = styled(Placeholder)``;

const AboutMe: React.FC<AboutMeProps> = ({ ...props }) => {
  return (
    <StyledSection>
      <StyledAboutMe {...props}>
        <FlexContainer>
          <FlexImageContainer>
            <StyledImage
              src="https://s.gravatar.com/avatar/a04fa7dd0447a866cc02717636ea73b4?s=275"
              alt="Andrew Garman"
            />
          </FlexImageContainer>
          <FlexContentContainer>
            <Heading size={1} ml={'x4'} mb={'0'}>
              I'm Andrew Garman, a front end tech lead at{' '}
              <StyledLink href="https://www.geekhive.com">Geekhive</StyledLink>,
              graphic designer, two time nominated "Greatest Dad", and builder
              of things.
            </Heading>
          </FlexContentContainer>
        </FlexContainer>
      </StyledAboutMe>
    </StyledSection>
  );
};

export default AboutMe;
