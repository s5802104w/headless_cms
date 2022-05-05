import { FC } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { RiFolder2Line, RiPriceTag3Line } from 'react-icons/ri';

/**---------------------------------------------------------------------------
 * type
 * --------------------------------------------------------------------------*/
type Props = {
  title: string;
  list: {
    id: string;
    name: string;
  }[];
};

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const Sidenavi: FC<Props> = ({ title, list }) => {
  return (
    <aside css={s_aside}>
      <h2 css={s_title2}>{title}</h2>
      <ul css={s_list}>
        {list.map(item => {
          return (
            <li css={s_item} key={item.id}>
              <Link href={`/${title}/${item.id}/1`}>
                <a css={s_itemLink}>
                  {title === 'category' && <RiFolder2Line css={s_itemIcon} />}
                  {title === 'tag' && <RiPriceTag3Line css={s_itemIcon} />}
                  {item.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

Sidenavi.displayName = 'Sidenavi';
export default Sidenavi;

/**---------------------------------------------------------------------------
 * style
 * --------------------------------------------------------------------------*/
const s_aside = css`
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 1, 0.05);
  display: block;
  padding: 30px;
  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;
const s_title2 = css`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;
const s_list = css``;
const s_itemIcon = css`
  color: #208de5;
  margin-right: 5px;
`;
const s_item = css`
  font-size: 14px;
  &:not(:last-of-type) {
    padding-bottom: 15px;
  }
`;
const s_itemLink = css`
  align-items: center;
  display: flex;
  &:hover {
    opacity: 0.7;
  }
`;
