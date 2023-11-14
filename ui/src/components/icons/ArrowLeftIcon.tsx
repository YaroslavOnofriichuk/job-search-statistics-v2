import { IconContext } from 'react-icons';
import { BsChevronLeft } from 'react-icons/bs';
import type { IconProps } from './index';

export const ArrowLeftIcon = ({ size = '24px', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsChevronLeft />
      </div>
    </IconContext.Provider>
  );
};