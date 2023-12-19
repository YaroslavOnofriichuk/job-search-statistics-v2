import { IconContext } from 'react-icons';
import { BsSearch } from "react-icons/bs";
import type { IconProps } from './index';

export const SearchIcon = ({ size = '18px', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsSearch />
      </div>
    </IconContext.Provider>
  );
};