import { FC, useContext } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { css } from '@emotion/react';
import { SearchFormContext } from '@/context/searchInputContext';
import { useSearchInput } from '@/hooks/search/useSearchInput';

/**---------------------------------------------------------------------------
 * component
 * ------------------------------------------------ --------------------------*/
const SearchInput: FC = () => {
  const { searchInputRef } = useContext(SearchFormContext);
  const {
    search,
    handleKeyDownSearch,
    handleClickSearchButton,
    handleChangeSearchInput,
  } = useSearchInput();

  return (
    <div css={s_wrap}>
      <div css={s_searchBox}>
        <input
          autoFocus={true}
          css={s_input}
          type="search"
          placeholder="Enter a keyword ..."
          tabIndex={1}
          value={search}
          onKeyDown={handleKeyDownSearch}
          onChange={handleChangeSearchInput}
          ref={searchInputRef}
        />
        <a
          css={s_button}
          tabIndex={2}
          onClick={handleClickSearchButton}
          onKeyDown={handleKeyDownSearch}
        >
          <RiSearchLine />
        </a>
      </div>
    </div>
  );
};

SearchInput.displayName = 'SearchInput';
export default SearchInput;

/**---------------------------------------------------------------------------
 * style
 * --------------------------------------------------------------------------*/
const s_wrap = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: auto;
  padding-bottom: 30px;
  width: 960px;
`;
const s_searchBox = css`
  position: relative;
  display: flex;
  width: 50%;
`;
const s_input = css`
  background-color: #f2f2f2;
  border: 2px solid transparent;
  border-radius: 25px;
  box-sizing: border-box;
  outline: none;
  padding: 14px 24px;
  width: 100%;
  transition: all 0.25s ease-out;
  &::placeholder {
    color: #888;
  }
  &:focus {
    background-color: #fff;
    border: 2px solid #005799;
    + a {
      color: #005799;
    }
  }
`;
const s_button = css`
  bottom: 0;
  color: #020202;
  font-size: 22px;
  margin: auto;
  padding: 4px;
  position: absolute;
  right: 14px;
  top: 0;
  transition: all 0.25s ease-out;
`;
