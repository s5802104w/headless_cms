import type { VFC } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import {
  RiCalendarTodoFill,
  RiFolder2Line,
  RiPriceTag3Line,
} from 'react-icons/ri';
import { PostProps } from '@/type/post';

const Card: VFC<PostProps> = ({ id, time, title, text, category, tag }) => {
  return (
    <article css={s_article}>
      <div css={s_articleHead}>
        <div css={s_articleHeadWrap}>
          <p css={s_time}>
            <Link href={`/detail/${id}`}>
              <a css={s_timeLink}>
                <RiCalendarTodoFill css={s_timeIcon} />
                <time>{time}</time>
              </a>
            </Link>
          </p>
          <p css={s_category}>
            <Link href={`/category/${category.id}`}>
              <a css={s_categoryLink}>
                <RiFolder2Line css={s_categoryIcon} />
                {category.name}
              </a>
            </Link>
          </p>
        </div>
        <h2 css={s_title2}>
          <Link href={`/detail/${id}`}>
            <a css={s_title2Link}>{title}</a>
          </Link>
        </h2>
        <ul css={s_tagList}>
          {tag.map(props => {
            return (
              <li css={s_tagItem} key={props.id}>
                <Link href={`/tag/${props.id}`}>
                  <a css={s_tagLink}>
                    <RiPriceTag3Line css={s_tagIcon} />
                    {props.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div css={s_articleMain}>
        <p css={s_articleMainText}>{text}</p>
        <p css={s_btnWrap}>
          <Link href={`/detail/${id}`}>
            <a css={s_btn}>Read More</a>
          </Link>
        </p>
      </div>
    </article>
  );
};

Card.displayName = 'Card';
export default Card;

//=============================================
// style
//=============================================
const s_article = css`
  background-color: #fff;
  box-shadow: 0 1px 5px rgb(0 0 1 / 5%);
  padding: 30px;
  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;
const s_articleHead = css`
  margin-bottom: 15px;
`;
const s_articleHeadWrap = css`
  align-items: center;
  display: flex;
  margin-bottom: 10px;
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
  font-size: 28px;
  margin-bottom: 10px;
`;
const s_title2Link = css`
  &:hover {
    color: #005799;
  }
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
const s_articleMain = css``;
const s_articleMainText = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
const s_btnWrap = css`
  margin-top: 20px;
`;
const s_btn = css`
  background-color: #020202;
  border-radius: 25px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 15px;
  text-decoration: none;
  transition: all 0.25s ease-out;
  &:hover {
    background-color: #005799;
  }
`;
