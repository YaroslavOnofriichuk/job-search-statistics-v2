import { IconContext } from 'react-icons';
import { BsMoon } from 'react-icons/bs';
import type { IconProps } from './index';

export const MoonIcon = ({ size = '16px', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsMoon />
      </div>
    </IconContext.Provider>
  );
};