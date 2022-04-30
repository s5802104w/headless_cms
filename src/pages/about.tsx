import { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import LayoutBase from '@/component/layouts/Base';
import LayoutStandard from '@/component/layouts/Standard';
import { css } from '@emotion/react';
import { client } from '@/libs/client';
import { CategoryProps } from '@/type/category';
import { TagProps } from '@/type/tag';
import { PostProps } from '@/type/post';

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const About = () => {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      <div css={s_wrap}>
        <h2 css={s_title2}>About page</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          rhoncus tortor in tellus vehicula efficitur dictum eget erat. Vivamus
          vel semper purus. Cras pellentesque massa non egestas malesuada.
          Vestibulum sit amet nulla mollis, rutrum risus a, viverra urna.
          Quisque facilisis ligula sem, blandit varius ligula rhoncus ac.
          Integer bibendum facilisis massa, a tincidunt tellus aliquet eu. Etiam
          vulputate nisi velit, pellentesque varius mauris ornare nec. Aenean
          euismod, metus vel porta maximus, nisi elit auctor justo, id suscipit
          elit nulla ut ex. Aliquam tempor semper lectus non ultrices. In erat
          urna, finibus tempor consequat id, tristique quis ante. Aenean
          imperdiet sagittis tortor, at gravida mi ullamcorper in. Pellentesque
          nisi nisi, pellentesque nec ornare ut, sagittis in velit. Sed congue
          viverra bibendum. Aenean et lorem et lorem blandit vehicula ac non
          velit. Aliquam luctus sodales molestie.
        </p>
      </div>
    </>
  );
};

About.displayName = 'About';
export default About;

/**---------------------------------------------------------------------------
 * layout
 * --------------------------------------------------------------------------*/
About.getLayout = ({
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
  const data = await client.getList<PostProps>({ endpoint: 'blog' });
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
const s_wrap = css`
  background-color: #fff;
  box-shadow: 0 1px 5px rgb(0, 0, 1, 0.05);
  padding: 30px;
`;
const s_title2 = css`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
`;
