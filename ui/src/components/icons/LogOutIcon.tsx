import { IconContext } from 'react-icons';
import { TbLogout2 } from "react-icons/tb";
import type { IconProps } from './index';

export const LogOutIcon = ({ size = '18px', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <TbLogout2 />
      </div>
    </IconContext.Provider>
  );
};