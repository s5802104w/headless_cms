import Link from 'next/link';
import { useContext } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { css } from '@emotion/react';
import { usePath } from '@/hooks/usePath';
import { SearchFormContext } from '@/context/searchInputContext';

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const ButtonSearch = () => {
  const [firstFloor] = usePath();
  const { searchInputRef } = useContext(SearchFormContext);

  const handleClick = () => {
    searchInputRef.current?.focus();
  };

  return (
    <Link href="/search">
      <a
        css={firstFloor === 'search' ? s_searchBtnActive : s_searchBtn}
        onClick={handleClick}
      >
        <RiSearchLine />
      </a>
    </Link>
  );
};

ButtonSearch.displayName = 'ButtonSearch';
export default ButtonSearch;

/**---------------------------------------------------------------------------
 * style
 * --------------------------------------------------------------------------*/
const s_searchBtn = css`
  align-items: center;
  background-color: #020202;
  border-radius: 20px;
  bottom: 0;
  color: #fff;
  display: flex;
  font-size: 16px;
  height: 36px;
  justify-content: center;
  margin: auto;
  position: absolute;
  right: 30px;
  top: 0;
  transition: all 0.25s ease-out;
  width: 36px;
  &:hover {
    background-color: #005799;
  }
`;
const s_searchBtnActive = css`
  ${s_searchBtn}
  background-color: #005799;
`;
