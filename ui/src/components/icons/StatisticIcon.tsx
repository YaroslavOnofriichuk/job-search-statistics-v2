import { IconContext } from 'react-icons';
import { BsBarChartLine } from 'react-icons/bs';
import type { IconProps } from './index';

export const StatisticIcon = ({ size = '2em', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsBarChartLine />
      </div>
    </IconContext.Provider>
  );
};