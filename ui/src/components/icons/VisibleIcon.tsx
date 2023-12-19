import { IconContext } from 'react-icons';
import { BsEye } from "react-icons/bs";
import type { IconProps } from './index';

export const VisibleIcon = ({ size = '18px', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsEye />
      </div>
    </IconContext.Provider>
  );
};