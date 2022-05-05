import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ReactElement, useState, useEffect } from 'react';
import { PostProps } from '@/type/post';
import { CategoryProps } from '@/type/category';
import { TagProps } from '@/type/tag';
import LayoutBase from '@/component/layouts/Base';
import LayoutStandard from '@/component/layouts/Standard';
import Card from '@/component/Card';
import Pager from '@/component/Pager';
import Loading from '@/component/Loading';
import axios, { AxiosResponse } from 'axios';
import { client } from '@/libs/client';
import { css } from '@emotion/react';
import { RiAlertLine } from 'react-icons/ri';
import { MicroCMSListResponse } from 'microcms-js-sdk';

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const SearchPage = () => {
  const [res, setRes] = useState<MicroCMSListResponse<PostProps> | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const keyword = router.query.keyword as string;
  const page = router.query.page as string;

  useEffect(() => {
    if (keyword === void 0) {
      setRes(undefined);
    } else {
      setIsLoading(true);
      const fetch = async (): Promise<void> => {
        try {
          const res: AxiosResponse<
            MicroCMSListResponse<PostProps>,
            unknown
          > = await axios.get('/api/search/', {
            params: {
              keyword,
              page,
            },
          });
          setRes(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetch().then(() => {
        setIsLoading(false);
      });
    }
  }, [keyword, page]);

  if (isLoading)
    return (
      <div css={s_loadingWrap}>
        <Loading />
      </div>
    );

  return (
    <>
      {res?.totalCount === 0 && (
        <div css={s_box}>
          <div css={s_boxInner}>
            <RiAlertLine css={s_iconCaution} />
            <p css={s_boxText}>
              No search results for{' '}
              <span css={s_textKeyword}>&quot;{keyword}&quot;</span> were found
            </p>
          </div>
        </div>
      )}
      {res?.contents &&
        res.contents.map(({ id, time, title, text, category, tag }) => {
          return (
            <Card
              id={id}
              time={time}
              title={title}
              text={text}
              category={category}
              tag={tag}
              key={id}
            />
          );
        })}
      {res?.contents && res.contents.length > 0 && (
        <Pager totalCount={res.totalCount} />
      )}
    </>
  );
};

SearchPage.displayName = 'SearchPage';
export default SearchPage;

/**---------------------------------------------------------------------------
 * layout
 * --------------------------------------------------------------------------*/
SearchPage.getLayout = ({
  page,
  categoryData,
  tagData,
}: {
  page: ReactElement;
  categoryData: CategoryProps[];
  tagData: TagProps[];
}) => {
  return (
    <LayoutBase>
      <LayoutStandard categoryData={categoryData} tagData={tagData}>
        {page}
      </LayoutStandard>
    </LayoutBase>
  );
};

/**---------------------------------------------------------------------------
 * connect
 * --------------------------------------------------------------------------*/
export const getStaticProps: GetStaticProps = async () => {
  const categoryData = await client.getList<CategoryProps>({
    endpoint: 'category',
  });
  const tagData = await client.getList<TagProps>({ endpoint: 'tag' });
  return {
    props: {
      categoryData: categoryData.contents,
      tagData: tagData.contents,
    },
  };
};

/**---------------------------------------------------------------------------
 * style
 * --------------------------------------------------------------------------*/
const s_loadingWrap = css`
  background-color: #fff;
  box-shadow: 0 1px 5px rgb(0 0 1 / 5%);
  display: flex;
  justify-content: center;
  padding: 30px;
  text-align: center;
`;

const s_box = css`
  background-color: #fff;
  box-shadow: 0 1px 5px rgb(0 0 1 / 5%);
  padding: 30px;
  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;
const s_boxInner = css`
  display: flex;
`;
const s_boxText = css`
  color: #3b3b3b;
  font-size: 28px;
  font-weight: bold;
  width: calc(100% - 62px);
`;
const s_iconCaution = css`
  color: #3b3b3b;
  font-size: 40px;
  margin-top: 3px;
  margin-right: 22px;
`;
const s_textKeyword = css`
  color: #3b3b3b;
  display: inline-block;
  margin: 0 5px;
`;
