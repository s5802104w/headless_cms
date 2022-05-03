import { ChangeEvent, KeyboardEvent, useEffect, useState, VFC } from 'react';
import { useRouter } from 'next/router';
import { RiSearchLine } from 'react-icons/ri';
import { css } from '@emotion/react';

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const SearchInput: VFC = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (router.query.keyword) {
      setSearch(router.query.keyword as string);
    }
  }, [router.query.keyword]);

  const handleKeyDownSearch = (
    e: KeyboardEvent<HTMLInputElement | HTMLAnchorElement>
  ) => {
    if (e.key === 'Enter') {
      router.push(`/search/?keyword=${search}&page=1`);
    }
  };

  const handleClickSearchButton = () => {
    router.push(`/search/?keyword=${search}&page=1`);
  };

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setSearch(val);
  };

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
