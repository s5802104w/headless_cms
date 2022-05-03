import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/libs/client';
import { PostProps } from '@/type/post';

/**---------------------------------------------------------------------------
 * data
 * --------------------------------------------------------------------------*/
const perPage = process.env.NEXT_PUBLIC_PER_PAGE;

/**---------------------------------------------------------------------------
 * connect
 * --------------------------------------------------------------------------*/
const getSearchPost = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.keyword == null) {
    return res.status(200).json({});
  }
  const data = await client.getList<PostProps>({
    endpoint: 'blog',
    queries: {
      limit: perPage,
      offset: req.query.page ? (Number(req.query.page) - 1) * perPage : 0,
      q: encodeURI(req.query.keyword as string),
    },
  });
  res.status(200).json(data);
};

export default getSearchPost;
