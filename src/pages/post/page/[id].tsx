import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { PostProps } from '@/type/post';
import { CategoryProps } from '@/type/category';
import { TagProps } from '@/type/tag';
import LayoutBase from '@/component/layouts/Base';
import LayoutStandard from '@/component/layouts/Standard';
import Card from '@/component/Card';
import Pager from '@/component/Pager';
import { client } from '@/libs/client';
import { range } from '@/utils/range';

/**---------------------------------------------------------------------------
 * type
 * --------------------------------------------------------------------------*/
type Props = {
  blog: PostProps[];
  totalCount: number;
};

/**---------------------------------------------------------------------------
 * data
 * --------------------------------------------------------------------------*/
const perPage = process.env.NEXT_PUBLIC_PER_PAGE;

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const PostListPage = ({ blog, totalCount }: Props) => {
  return (
    <>
      {blog.map(props => {
        return <Card {...props} key={props.id} />;
      })}
      <Pager totalCount={totalCount} />
    </>
  );
};

PostListPage.displayName = 'PostListPage';
export default PostListPage;

/**---------------------------------------------------------------------------
 * layout
 * --------------------------------------------------------------------------*/
PostListPage.getLayout = ({
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
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.getList({ endpoint: 'blog' });
  const paths = range(1, Math.ceil(data.totalCount / perPage)).map(
    pagerNum => `/post/page/${pagerNum}`
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const pageId = Number(ctx.params?.id);
  const data = await client.getList<PostProps>({
    endpoint: 'blog',
    queries: { limit: perPage, offset: (pageId - 1) * perPage },
  });
  const categoryData = await client.getList<CategoryProps>({
    endpoint: 'category',
  });
  const tagData = await client.getList<TagProps>({ endpoint: 'tag' });
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      categoryData: categoryData.contents,
      tagData: tagData.contents,
    },
  };
};
