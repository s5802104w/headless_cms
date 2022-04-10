import type { ReactElement } from 'react';
import LayoutBase from '@/component/layout/Base';
import LayoutStandard from '@/component/layout/Standard';
import { css } from '@emotion/react';
import { client } from '@/lib/client';
import { CategoryProps } from '@/type/category';
import { TagProps } from '@/type/tag';

const About = () => {
  return (
    <>
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

About.getLayout = function getLayout(
  page: ReactElement,
  categoryData: CategoryProps,
  tagData: TagProps
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
