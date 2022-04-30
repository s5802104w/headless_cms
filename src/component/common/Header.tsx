import Navigation from '@/component/common/Navigation';
import { css } from '@emotion/react';

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const Header = () => {
  return (
    <header css={s_header}>
      <h1 css={s_title}>Headless CMS Blog</h1>
      <p css={s_text}>Next,TypeScript,emotion</p>
      <Navigation />
    </header>
  );
};

Header.displayName = 'Header';
export default Header;

/**---------------------------------------------------------------------------
 * style
 * --------------------------------------------------------------------------*/
const s_header = css`
  margin: auto;
  padding: 30px 0;
  width: 960px;
`;
const s_title = css`
  font-size: 44px;
  text-align: center;
`;
const s_text = css`
  color: #4d4d4d;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
