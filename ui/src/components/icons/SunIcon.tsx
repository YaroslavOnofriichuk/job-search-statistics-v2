import { IconContext } from 'react-icons';
import { BsSun } from 'react-icons/bs';
import type { IconProps } from './index';

export const SunIcon = ({ size = '16px', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsSun />
      </div>
    </IconContext.Provider>
  );
};