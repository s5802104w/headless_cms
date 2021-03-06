import Link from 'next/link';
import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { css } from '@emotion/react';
import { PostProps } from '@/type/post';
import { CategoryProps } from '@/type/category';
import { TagProps } from '@/type/tag';
import LayoutBase from '@/component/layouts/Base';
import LayoutStandard from '@/component/layouts/Standard';
import Card from '@/component/Card';
import Button from '@/component/Button';
import { client } from '@/libs/client';

/**---------------------------------------------------------------------------
 * type
 * --------------------------------------------------------------------------*/
type Props = {
  blog: PostProps[];
  totalCount: number;
};

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const Home = ({ blog }: Props) => {
  return (
    <>
      {blog.map(props => {
        return <Card {...props} key={props.id} />;
      })}
      <Link href="/post/page/1" passHref>
        <Button css={s_button}>Show More...</Button>
      </Link>
    </>
  );
};

Home.displayName = 'Home';
export default Home;

/**---------------------------------------------------------------------------
 * layout
 * --------------------------------------------------------------------------*/
Home.getLayout = ({
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
  const data = await client.getList<PostProps>({
    endpoint: 'blog',
    queries: { limit: 3 },
  });
  const categoryData = await client.getList<CategoryProps>({
    endpoint: 'category',
  });
  const tagData = await client.getList<TagProps>({ endpoint: 'tag' });

  return {
    props: {
      blog: data.contents,
      categoryData: categoryData.contents,
      tagData: tagData.contents,
    },
  };
};

/**---------------------------------------------------------------------------
 * style
 * --------------------------------------------------------------------------*/
const s_button = css`
  margin: 40px auto 40px;
`;
