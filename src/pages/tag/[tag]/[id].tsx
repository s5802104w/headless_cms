import { ReactElement } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { usePath } from '@/hooks/usePath';
import Head from 'next/head';
import LayoutBase from '@/component/layouts/Base';
import LayoutStandard from '@/component/layouts/Standard';
import Card from '@/component/Card';
import Pager from '@/component/Pager';
import { client } from '@/libs/client';
import { range } from '@/utils/range';
import { PostProps } from '@/type/post';
import { CategoryProps } from '@/type/category';
import { TagProps } from '@/type/tag';

/**---------------------------------------------------------------------------
 * type
 * --------------------------------------------------------------------------*/
type Props = {
  blog: PostProps[];
  tagData: TagProps[];
  totalCount: number;
};

/**---------------------------------------------------------------------------
 * data
 * --------------------------------------------------------------------------*/
const perPage = process.env.NEXT_PUBLIC_PER_PAGE;

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const TagPage = ({ blog, tagData, totalCount }: Props) => {
  const [firstFloor, firstFloorId] = usePath();
  const getTagName = () => {
    let name = '';
    tagData.forEach(item => {
      if (item.id === firstFloorId) {
        name = item.name;
      }
    });
    return name;
  };

  return (
    <>
      <Head>
        <title>
          {getTagName()} | {firstFloor} list page
        </title>
      </Head>
      {blog.map(props => (
        <Card key={props.id} {...props} />
      ))}
      <Pager totalCount={totalCount} />
    </>
  );
};

TagPage.displayName = 'TagPage';
export default TagPage;

/**---------------------------------------------------------------------------
 * layout
 * --------------------------------------------------------------------------*/
TagPage.getLayout = ({
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
  const data = await client.getList<TagProps>({ endpoint: 'tag' });
  const filterDataForTag = await Promise.all(
    data.contents.map(async content => {
      const data = await client.getList({
        endpoint: 'blog',
        queries: {
          limit: 1,
          filters: `tag[contains]${content.id}`,
        },
      });
      const dataMargeTagId = { ...data, tagId: `${content.id}` };
      return dataMargeTagId;
    })
  );
  const paths = filterDataForTag.flatMap(content => {
    return range(1, Math.ceil(content.totalCount / perPage)).map(range => {
      return {
        params: {
          tag: content.tagId,
          id: range.toString(),
        },
      };
    });
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const id = Number(ctx.params?.id);
  const tagId = ctx.params?.tag;
  const data = await client.getList<PostProps>({
    endpoint: 'blog',
    queries: {
      limit: perPage,
      offset: (id - 1) * perPage,
      filters: `tag[contains]${tagId}`,
    },
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
