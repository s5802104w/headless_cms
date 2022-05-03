import Link from 'next/link';
import { useRouter } from 'next/router';
import { VFC } from 'react';
import { css } from '@emotion/react';
import { range } from '@/utils/range';

/**---------------------------------------------------------------------------
 * type
 * --------------------------------------------------------------------------*/
type Props = {
  totalCount: number;
};

/**---------------------------------------------------------------------------
 * data
 * --------------------------------------------------------------------------*/
const perPage = process.env.NEXT_PUBLIC_PER_PAGE;

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const Pager: VFC<Props> = ({ totalCount }) => {
  const router = useRouter();
  const pageNum = Number(router.query.id) || Number(router.query.page);
  const path = router.asPath.replace(/\d*$/, '');

  return (
    <ul css={s_list}>
      {range(1, Math.ceil(totalCount / perPage)).map((num, index) => (
        <li css={s_item} key={index}>
          {pageNum === index + 1 ? (
            <Link href={`javascript:void(0);`}>
              <a css={s_current}>{num}</a>
            </Link>
          ) : (
            <Link href={`${path}${num}`}>
              <a css={s_link}>{num}</a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

Pager.displayName = 'Pager';
export default Pager;

/**---------------------------------------------------------------------------
 * style
 * --------------------------------------------------------------------------*/
const s_list = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25px;
`;
const s_item = css`
  margin: 5px;
`;
const s_link = css`
  align-items: center;
  background-color: #020202;
  border-radius: 2px;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  height: 30px;
  justify-content: center;
  line-height: 1.1;
  transition: all 0.25s ease-out;
  width: 30px;
  &:hover {
    background-color: #005799;
  }
`;
const s_current = css`
  ${s_link}
  background-color: #005799;
  cursor: default;
`;
