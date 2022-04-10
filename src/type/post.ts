import { CategoryProps } from '@/type/category';
import { TagProps } from '@/type/tag';

export type PostProps = {
  id: string;
  time: string;
  title: string;
  text: string;
  img: {
    url: string;
    height: number;
    width: number;
  };
  category: CategoryProps;
  tag: TagProps[];
};
