import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { ThemeType } from '../../../00-base/01-theme/theme.type';

export interface BasePlaceholderProps {
  theme?: ThemeType;
}

/* background-image: repeating-linear-gradient(
  45deg,
  transparent,
  transparent 10px,
  rgba(${(props) => props.theme.colors.primary}, 0.2) 10px,
  rgba(${(props) => props.theme.colors.primary}, 0.2) 12px
); */

export type PlaceholderProps = BasePlaceholderProps &
  SpaceProps &
  React.ComponentPropsWithRef<'section'>;

const StyledPlaceholder: React.FC<PlaceholderProps> = styled.div`
  background-color: ${(props) => props.theme.colors.shade1};
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(191, 192, 192, 0.2) 10px,
    rgba(191, 192, 192, 0.2) 12px
  );

  padding: ${(props) => props.theme.space.x2}px;
  aspect-ratio: 4/3;
  position: relative;
  width: 100%;
`;

const StyledDescription: React.FC = styled.span`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const Placeholder: React.FC<PlaceholderProps> = ({ ...props }) => {
  return (
    <StyledPlaceholder {...props}>
      <StyledDescription>Placeholder</StyledDescription>
    </StyledPlaceholder>
  );
};

export default Placeholder;
