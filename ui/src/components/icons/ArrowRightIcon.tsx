import { IconContext } from 'react-icons';
import { BsChevronRight } from 'react-icons/bs';
import type { IconProps } from './index';

export const ArrowRightIcon = ({ size = '24px', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsChevronRight />
      </div>
    </IconContext.Provider>
  );
};