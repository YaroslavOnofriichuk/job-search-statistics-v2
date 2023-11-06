import { IconContext } from 'react-icons';
import { BsCardText } from 'react-icons/bs';
import type { IconProps } from './index';

export const ListIcon = ({ size = '2em', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsCardText />
      </div>
    </IconContext.Provider>
  );
};