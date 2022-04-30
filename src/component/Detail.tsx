import { VFC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { css } from '@emotion/react';
import {
  RiCalendarTodoFill,
  RiFolder2Line,
  RiPriceTag3Line,
} from 'react-icons/ri';
import { PostProps } from '@/type/post';

dayjs.extend(utc);
dayjs.extend(timezone);

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const Detail: VFC<PostProps> = ({
  id,
  time,
  title,
  text,
  img,
  category,
  tag,
}) => {
  const formatedTime = dayjs.utc(time).tz('Asia/Tokyo').format('YYYY.MM.DD');
  return (
    <article css={s_article}>
      <h2 css={s_title2}>{title}</h2>
      <div css={s_articleHead}>
        <div css={s_articleHeadWrap}>
          <p css={s_time}>
            <Link href={`/post/${id}`}>
              <a css={s_timeLink}>
                <RiCalendarTodoFill css={s_timeIcon} />
                <time>{formatedTime}</time>
              </a>
            </Link>
          </p>
          <p css={s_category}>
            <Link href={`/category/${category.id}/1`}>
              <a css={s_categoryLink}>
                <RiFolder2Line css={s_categoryIcon} />
                {category.name}
              </a>
            </Link>
          </p>
        </div>
      </div>
      <div css={s_articleMain}>
        {img.url && (
          <div css={s_articleMainImgWrap}>
            <Image
              src={img.url}
              alt={''}
              width="600px"
              height="338px"
              objectFit="contain"
            />
          </div>
        )}
        <p css={s_articleMainText}>{text}</p>
      </div>
      <ul css={s_tagList}>
        {tag.map(props => {
          return (
            <li css={s_tagItem} key={props.id}>
              <Link href={`/tag/${props.id}/1`}>
                <a css={s_tagLink}>
                  <RiPriceTag3Line css={s_tagIcon} />
                  {props.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

Detail.displayName = 'Detail';
export default Detail;

/**---------------------------------------------------------------------------
 * style
 * --------------------------------------------------------------------------*/
const s_article = css`
  background-color: #fff;
  box-shadow: 0 1px 5px rgb(0 0 1 / 5%);
  display: block;
  padding: 30px;
  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;
const s_articleHead = css`
  margin-bottom: 30px;
`;
const s_articleHeadWrap = css`
  align-items: center;
  display: flex;
  justify-content: center;
`;
const s_time = css`
  align-items: center;
  display: flex;
  font-size: 14px;
  margin-right: 16px;
`;
const s_timeLink = css`
  align-items: center;
  display: flex;
  &:hover {
    opacity: 0.7;
  }
`;
const s_timeIcon = css`
  color: #208de5;
  margin-right: 5px;
`;
const s_category = css`
  font-size: 14px;
`;
const s_categoryIcon = css`
  color: #208de5;
  margin-right: 5px;
`;
const s_categoryLink = css`
  align-items: center;
  display: flex;
  &:hover {
    opacity: 0.7;
  }
`;
const s_title2 = css`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
`;
const s_tagList = css`
  align-items: center;
  display: flex;
`;
const s_tagItem = css`
  font-size: 14px;
  &:not(:last-of-type) {
    margin-right: 16px;
  }
`;
const s_tagIcon = css`
  color: #208de5;
  margin-right: 5px;
`;
const s_tagLink = css`
  align-items: center;
  display: flex;
  font-size: 14px;
  &:hover {
    opacity: 0.7;
  }
`;
const s_articleMain = css`
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
  padding-bottom: 50px;
`;
const s_articleMainImgWrap = css`
  margin: 20px 0;
`;
const s_articleMainText = css``;
