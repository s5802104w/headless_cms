import { MicroCMSContentId, MicroCMSImage } from 'microcms-js-sdk';
import { CategoryProps } from '@/type/category';
import { TagProps } from '@/type/tag';

export type PostContentsProps = {
  time: string;
  title: string;
  text: string;
  img: MicroCMSImage;
  category: CategoryProps;
  tag: TagProps[];
};

export type PostProps = PostContentsProps & MicroCMSContentId;
