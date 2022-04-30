import { ReactElement } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import LayoutBase from '@/component/layouts/Base';
import LayoutStandard from '@/component/layouts/Standard';
import Detail from '@/component/Detail';
import { client } from '@/libs/client';
import { PostProps } from '@/type/post';
import { CategoryProps } from '@/type/category';
import { TagProps } from '@/type/tag';

/**---------------------------------------------------------------------------
 * type
 * --------------------------------------------------------------------------*/
type Props = {
  blog: PostProps;
};

/**---------------------------------------------------------------------------
 * data
 * --------------------------------------------------------------------------*/
const limitPage = process.env.NEXT_PUBLIC_LIMIT_PAGE;

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const PostPage = ({ blog }: Props) => {
  return (
    <>
      <Head>
        <title>{blog.title} | Headless CMS Blog</title>
      </Head>
      <Detail key={blog.id} {...blog} />
    </>
  );
};

PostPage.displayName = 'PostPage';
export default PostPage;

/**---------------------------------------------------------------------------
 * layout
 * --------------------------------------------------------------------------*/
PostPage.getLayout = ({
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
  const data = await client.getList({
    endpoint: 'blog',
    queries: { limit: limitPage },
  });
  const paths = data.contents.map(
    (content: PostProps) => `/post/${content.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const postId = `${ctx.params?.post}`;
  const data = await client.getListDetail<PostProps>({
    endpoint: 'blog',
    contentId: postId,
  });
  const categoryData = await client.getList<CategoryProps>({
    endpoint: 'category',
  });
  const tagData = await client.getList<TagProps>({ endpoint: 'tag' });
  return {
    props: {
      blog: data,
      categoryData: categoryData.contents,
      tagData: tagData.contents,
    },
  };
};
