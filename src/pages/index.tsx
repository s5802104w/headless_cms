import type { ReactElement } from 'react';
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

const Home = ({ blog }: Props) => {
  return (
    <>
      {blog.map(props => {
        return <Card {...props} key={props.id} />;
      })}
    </>
  );
};

Home.displayName = 'Home';
export default Home;

Home.getLayout = function getLayout(
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
