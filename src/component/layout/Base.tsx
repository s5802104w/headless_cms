import type { VFC, ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

const LayoutBase: VFC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

LayoutBase.displayName = 'LayoutBase';
export default LayoutBase;
