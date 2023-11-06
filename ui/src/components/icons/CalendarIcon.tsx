import { IconContext } from 'react-icons';
import { BsCalendarWeek } from 'react-icons/bs';
import type { IconProps } from './index';

export const CalendarIcon = ({ size = '2em', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsCalendarWeek />
      </div>
    </IconContext.Provider>
  );
};