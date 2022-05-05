import { FC, ReactElement } from 'react';
import Header from '@/component/common/Header';
import Footer from '@/component/common/Footer';
import { css } from '@emotion/react';

/**---------------------------------------------------------------------------
 * type
 * --------------------------------------------------------------------------*/
type Props = {
  children: ReactElement;
};

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const LayoutError: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div css={s_wrap}>
        <main css={s_main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

LayoutError.displayName = 'LayoutError';
export default LayoutError;

/**---------------------------------------------------------------------------
 * style
 * --------------------------------------------------------------------------*/
const s_wrap = css`
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;
const s_main = css`
  padding: 40px 0;
`;
