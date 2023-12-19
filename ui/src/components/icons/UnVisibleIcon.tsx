import { IconContext } from 'react-icons';
import { BsEyeSlash } from "react-icons/bs";
import type { IconProps } from './index';

export const UnVisibleIcon = ({ size = '18px', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsEyeSlash />
      </div>
    </IconContext.Provider>
  );
};