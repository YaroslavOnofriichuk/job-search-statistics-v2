import { IconContext } from 'react-icons';
import { BsGearWide } from 'react-icons/bs';
import type { IconProps } from './index';

export const SettingIcon = ({ size = '2em', color = '#ffffff' }: IconProps) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsGearWide />
      </div>
    </IconContext.Provider>
  );
};