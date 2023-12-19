import { IconContext } from 'react-icons';
import { TbLogout } from "react-icons/tb";
import type { IconProps } from './index';

export const LogInIcon = ({ size = '18px', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <TbLogout />
      </div>
    </IconContext.Provider>
  );
};