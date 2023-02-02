import { FC } from 'react';
import { PropsLayoutDefault } from '../../../interfaces';

const MainLayout: FC<PropsLayoutDefault> = ({ children, title }) => {
  return (
    <div>
      <div>{title}</div>
      {children}
    </div>
  );
};

export default MainLayout;
