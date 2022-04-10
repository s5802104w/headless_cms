import type { VFC, ReactElement } from 'react';
import { useRouter } from 'next/router';
import Header from '@/component/common/Header';
import Sidenavi from '@/component/common/Sidenavi';
import Footer from '@/component/common/Footer';
import { css } from '@emotion/react';
import { CategoryProps } from '@/type/category';
import { TagProps } from '@/type/tag';

type Props = {
  children: ReactElement;
  categoryData: CategoryProps[];
  tagData: TagProps[];
};

const LayoutStandard: VFC<Props> = ({ children, categoryData, tagData }) => {
  const router = useRouter();
  const firstFloor = router.asPath.split('/')[1];
  const id = router.query[firstFloor];

  return (
    <>
      <Header />
      {router.query[firstFloor] && (
        <p css={s_text}>
          {`${firstFloor}` === 'category' &&
            categoryData.map(item => {
              return item.id === id && item.name;
            })}
          {`${firstFloor}` === 'tag' &&
            tagData.map(item => {
              return item.id === id && item.name;
            })}
        </p>
      )}
      <div css={s_wrap}>
        <main css={s_main}>{children}</main>
        <div css={s_side}>
          <Sidenavi title={'category'} list={categoryData} />
          <Sidenavi title={'tag'} list={tagData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

LayoutStandard.displayName = 'LayoutStandard';
export default LayoutStandard;

//=============================================
// style
//=============================================
const s_wrap = css`
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;
const s_main = css`
  margin-right: 30px;
  width: 660px;
`;
const s_side = css`
  width: 270px;
`;
const s_text = css`
  background-color: #fff;
  border-top: 1px solid #ccc;
  font-size: 28px;
  font-weight: bold;
  padding: 25px;
  text-align: center;
`;
