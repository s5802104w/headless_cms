import { VFC, ReactElement } from 'react';

/**---------------------------------------------------------------------------
 * type
 * --------------------------------------------------------------------------*/
type Props = {
  children: ReactElement;
};

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const LayoutBase: VFC<Props> = ({ children }) => {
  return <>{children}</>;
};

LayoutBase.displayName = 'LayoutBase';
export default LayoutBase;
