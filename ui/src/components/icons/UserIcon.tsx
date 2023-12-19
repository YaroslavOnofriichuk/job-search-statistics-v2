import { IconContext } from 'react-icons';
import { BsPerson } from 'react-icons/bs';
import type { IconProps } from './index';

export const UserIcon = ({ size = '24px', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsPerson />
      </div>
    </IconContext.Provider>
  );
};