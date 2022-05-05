import { VFC } from 'react';
import { Preloader, Oval } from 'react-preloader-icon';

const Loading: VFC = () => (
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
