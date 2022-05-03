import Link from 'next/link';
import Navigation from '@/component/common/Navigation';
import { RiSearchLine } from 'react-icons/ri';
import { css } from '@emotion/react';
import { usePath } from '@/hooks/usePath';

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const Header = () => {
  const [firstFloor] = usePath();
  return (
    <header css={s_header}>
      <div css={s_headerHead}>
        <h1 css={s_title}>Headless CMS Blog</h1>
        <p css={s_text}>Next,TypeScript,emotion</p>
      </div>
      <div css={s_headerFoot}>
        <Navigation />
        <Link href="/search">
          <a css={firstFloor === 'search' ? s_searchBtnActive : s_searchBtn}>
            <RiSearchLine />
          </a>
        </Link>
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
const s_searchBtn = css`
  align-items: center;
  background-color: #020202;
  border-radius: 20px;
  bottom: 0;
  color: #fff;
  display: flex;
  font-size: 16px;
  height: 36px;
  justify-content: center;
  margin: auto;
  position: absolute;
  right: 30px;
  top: 0;
  transition: all 0.25s ease-out;
  width: 36px;
  &:hover {
    background-color: #005799;
  }
`;
const s_searchBtnActive = css`
  ${s_searchBtn}
  background-color: #005799;
`;
