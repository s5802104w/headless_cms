import type { ReactElement } from 'react';
import LayoutBase from '@/component/layout/Base';
import LayoutStandard from '@/component/layout/Standard';
import Detail from '@/component/Detail';
import { client } from '@/lib/client';
import { PostProps } from '@/type/post';
import { CategoryProps } from '@/type/category';
import { TagProps } from '@/type/tag';

type Props = {
  blog: PostProps;
};

const DetailPage = ({ blog }: Props) => {
  return (
    <div>
      <Detail {...blog} key={blog.id} />
    </div>
  );
};

DetailPage.displayName = 'DetailPage';
export default DetailPage;

DetailPage.getLayout = function getLayout(
  page: ReactElement,
  categoryData: CategoryProps[],
  tagData: TagProps[]
) {
  return (
    <LayoutBase>
      <LayoutStandard categoryData={categoryData} tagData={tagData}>
        {page}
      </LayoutStandard>
    </LayoutBase>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const paths = data.contents.map(
    (content: PostProps) => `/detail/${content.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx: { params: { post: string } }) => {
  const id = ctx.params.post;
  const data = await client.get({ endpoint: 'blog', contentId: id });
  const categoryData = await client.get({ endpoint: 'category' });
  const tagData = await client.get({ endpoint: 'tag' });
  return {
    props: {
      blog: data,
      categoryData: categoryData.contents,
      tagData: tagData.contents,
    },
  };
};
