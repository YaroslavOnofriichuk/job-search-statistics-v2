import { IconContext } from 'react-icons';
import { BsHouseDoor } from 'react-icons/bs';
import type { IconProps } from './index';

export const HomeIcon = ({ size = '2em', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsHouseDoor />
      </div>
    </IconContext.Provider>
  );
};

