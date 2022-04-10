import Link from 'next/link';
import { naviList } from '@/mock/gnav';
import { css } from '@emotion/react';

const Header = () => {
  return (
    <header css={s_header}>
      <h1 css={s_title}>Headless CMS Blog</h1>
      <p css={s_text}>Next,TypeScript,emotion</p>
      <nav css={s_nav}>
        <ul css={s_list}>
          {naviList.map(item => {
            return (
              <li key={item.id} css={s_item}>
                <Link href={item.href}>
                  <a css={s_link}>{item.text}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

Header.displayName = 'Header';
export default Header;

//=============================================
// style
//=============================================
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
const s_nav = css`
  border-top: 2px solid #020202;
  display: block;
  font-size: 15px;
  font-weight: bold;
  margin-top: 30px;
  padding-top: 30px;
`;
const s_list = css`
  display: flex;
  justify-content: center;
`;
const s_item = css``;
const s_link = css`
  color: #3d3d3d;
  padding: 0 15px;
`;
