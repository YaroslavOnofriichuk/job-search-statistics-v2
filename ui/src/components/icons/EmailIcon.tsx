import { IconContext } from 'react-icons';
import { MdOutlineAlternateEmail } from "react-icons/md";
import type { IconProps } from './index';

export const EmailIcon = ({ size = '18px', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <MdOutlineAlternateEmail />
      </div>
    </IconContext.Provider>
  );
};