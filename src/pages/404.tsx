import type { ReactElement } from 'react';
import LayoutBase from '@/component/layouts/Base';
import LayoutError from '@/component/layouts/Error';
import { css } from '@emotion/react';

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const Custom404 = () => {
  return (
    <>
      <h2 css={s_title2}>404</h2>
      <p css={s_subTitle}>Page Not Found</p>
      <p css={s_text}>The resource could not be found on this server!</p>
    </>
  );
};

Custom404.displayName = 'Custom404';
export default Custom404;

/**---------------------------------------------------------------------------
 * layout
 * --------------------------------------------------------------------------*/
Custom404.getLayout = ({ page }: { page: ReactElement }) => {
  return (
    <LayoutBase>
      <LayoutError>{page}</LayoutError>
    </LayoutBase>
  );
};

/**---------------------------------------------------------------------------
 * style
 * --------------------------------------------------------------------------*/
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
const s_text = css`
  text-align: center;
  font-weight: bold;
`;
