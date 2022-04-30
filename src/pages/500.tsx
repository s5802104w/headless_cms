import type { ReactElement } from 'react';
import { css } from '@emotion/react';

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const Custom500 = () => {
  return (
    <div css={s_wrap}>
      <h2 css={s_title2}>500</h2>
      <p css={s_subTitle}>Server-side error occurred</p>
    </div>
  );
};

Custom500.displayName = 'Custom500';
export default Custom500;

/**---------------------------------------------------------------------------
 * layout
 * --------------------------------------------------------------------------*/
Custom500.getLayout = ({ page }: { page: ReactElement }) => {
  return <>{page}</>;
};

/**---------------------------------------------------------------------------
 * style
 * --------------------------------------------------------------------------*/
const s_wrap = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;
const s_title2 = css`
  font-size: 180px;
  font-weight: bold;
  line-height: 1.1;
  text-align: center;
`;
const s_subTitle = css`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  line-height: 1.1;
  margin-bottom: 20px;
`;
