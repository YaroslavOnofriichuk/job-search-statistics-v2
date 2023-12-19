import { IconContext } from 'react-icons';
import { BsArrowDownUp } from 'react-icons/bs';
import type { IconProps } from './index';

export const SortIcon = ({ size = '15px', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsArrowDownUp />
      </div>
    </IconContext.Provider>
  );
};