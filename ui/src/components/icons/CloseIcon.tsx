import { IconContext } from 'react-icons';
import { BsXLg } from 'react-icons/bs';
import type { IconProps } from './index';

export const CloseIcon = ({ size = '2em', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsXLg />
      </div>
    </IconContext.Provider>
  );
};