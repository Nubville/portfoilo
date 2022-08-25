import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { ThemeType } from '../../00-base/01-theme/theme.type';
import { Container } from '../../01-atoms/container';
import NamePlate from '../../02-molecules/name-plate/NamePlate';

export interface BaseHeaderProps {
  theme?: ThemeType;
}

export type HeaderProps = BaseHeaderProps &
  SpaceProps &
  React.ComponentPropsWithRef<'header'> & {
    children?: React.ReactNode;
  };

const StyledHeader: React.FC<HeaderProps> = styled.header`
  background: ${(props) => props.theme.colors.white};
  border-bottom: 2px solid ${(props) => props.theme.colors.layoutHorizontal};
  display: flex;
  flex-direction: column;
  min-height: 100px;
  ${space}
`;

const StyledContainer: React.FC = styled(Container)`
  height: 100%;
`;

const FlexHeightRow: React.FC = styled.div`
  flex: 1 0 100%;
`;

const FlexRow: React.FC = styled.div`
  align-items: flex-end;
  display: flex;
  flex-flow: column wrap;
`;

export const Header: React.FC<HeaderProps> = ({ children, ...props }) => {
  return (
    <StyledHeader {...props}>
      <FlexHeightRow>
        <StyledContainer>
          <FlexRow>
            <NamePlate></NamePlate>
          </FlexRow>
        </StyledContainer>
        {children}
      </FlexHeightRow>
    </StyledHeader>
  );
};

export default Header;
