import { FC, ReactElement } from 'react';

/**---------------------------------------------------------------------------
 * type
 * --------------------------------------------------------------------------*/
type Props = {
  children: ReactElement;
};

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const LayoutBase: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

LayoutBase.displayName = 'LayoutBase';
export default LayoutBase;
