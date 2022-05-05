import { FC } from 'react';
import Navigation from '@/component/common/Navigation';
import ButtonSearch from '@/component/ButtonSearch';
import { css } from '@emotion/react';

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const Header: FC = () => {
  return (
    <header css={s_header}>
      <div css={s_headerHead}>
        <h1 css={s_title}>Headless CMS Blog</h1>
        <p css={s_text}>Next,TypeScript,emotion</p>
      </div>
      <div css={s_headerFoot}>
        <Navigation />
        <ButtonSearch />
      </div>
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
  width: 960px;
`;
const s_headerHead = css`
  border-bottom: 2px solid #020202;
  padding: 30px 0;
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
const s_headerFoot = css`
  position: relative;
`;
