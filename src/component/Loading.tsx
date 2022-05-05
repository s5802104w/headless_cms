import { FC } from 'react';
import { Preloader, Oval } from 'react-preloader-icon';

const Loading: FC = () => (
  <Preloader
    use={Oval}
    size={60}
    strokeWidth={6}
    strokeColor="#262626"
    duration={2000}
  />
);

Loading.displayName = 'Loading';
export default Loading;
