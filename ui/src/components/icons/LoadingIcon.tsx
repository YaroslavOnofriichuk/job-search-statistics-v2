import type { IconProps } from './index';
import styled from "styled-components";
import { round, mltShdSpin } from '../Loader/Loader';

interface LoaderProps {
    size: string,
    color?: string,
}

const Loader = styled.span<LoaderProps>`
    display: block;
    color: ${({ theme, color }) => (color ? color : theme.colors.text.primary)};
    font-size: 14px;
    overflow: hidden;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 50%;
    animation: ${mltShdSpin} 1.7s infinite ease, ${round} 1.7s infinite ease;
`;

export const LoadingIcon = ({ size = '14px', color }: IconProps) => {
  return (
      <div>
        <Loader size={size} color={color}/>
      </div>
  );
};