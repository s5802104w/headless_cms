import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { css } from '@emotion/react';

/**---------------------------------------------------------------------------
 * data
 * --------------------------------------------------------------------------*/
const naviList = [
  {
    id: 1,
    href: '/',
    text: 'HOME',
  },
  {
    id: 2,
    href: '/about',
    text: 'ABOUT',
  },
];

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const Navigation: FC = () => {
  const router = useRouter();
  return (
    <nav css={s_nav}>
      <ul css={s_list}>
        {naviList.map(item => {
          return (
            <li key={item.id} css={s_item}>
              <Link href={item.href}>
                <a
                  css={
                    router.pathname === item.href
                      ? [s_link, s_isActive]
                      : [s_link]
                  }
                >
                  {item.text}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Navigation.displayName = 'Navigation';
export default Navigation;

/**---------------------------------------------------------------------------
 * style
 * --------------------------------------------------------------------------*/
const s_nav = css`
  display: block;
  font-size: 15px;
  font-weight: bold;
  padding: 30px 0;
`;
const s_list = css`
  display: flex;
  justify-content: center;
`;
const s_item = css``;
const s_link = css`
  color: #3d3d3d;
  display: block;
  margin: 0 15px;
  &:hover {
    color: #005799;
  }
`;
const s_isActive = css`
  color: #005799;
  position: relative;
  &::after {
    background-color: #005799;
    bottom: -11px;
    content: '';
    display: block;
    height: 5px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;
