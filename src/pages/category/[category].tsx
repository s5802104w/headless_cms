import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import LayoutBase from '@/component/layout/Base';
import LayoutStandard from '@/component/layout/Standard';
import Card from '@/component/Card';
import { client } from '@/lib/client';
import { PostProps } from '@/type/post';
import { CategoryProps } from '@/type/category';
import { TagProps } from '@/type/tag';

type Props = {
  blog: PostProps[];
};

const CategoryPage = ({ blog }: Props) => {
  const router = useRouter();
  const categoryType = router.asPath.split('/')[2];
  return (
    <div>
      {blog.map(props => {
        return (
          props.category.id === categoryType && (
            <Card {...props} key={props.id} />
          )
        );
      })}
    </div>
  );
};

CategoryPage.displayName = 'CategoryPage';
export default CategoryPage;

CategoryPage.getLayout = function getLayout(
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
    (content: PostProps) => `/category/${content.category.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const categoryData = await client.get({ endpoint: 'category' });
  const tagData = await client.get({ endpoint: 'tag' });
  return {
    props: {
      blog: data.contents,
      categoryData: categoryData.contents,
      tagData: tagData.contents,
    },
  };
};
