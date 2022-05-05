import {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useState,
  useContext,
} from 'react';
import { useRouter } from 'next/router';
import { SearchFormContext } from '@/context/searchInputContext';

export const useSearchInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  const { searchInputRef } = useContext(SearchFormContext);

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
      searchInputRef.current?.blur();
    }
  };

  const handleClickSearchButton = () => {
    router.push(`/search/?keyword=${search}&page=1`);
  };

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setSearch(val);
  };

  return {
    search,
    handleKeyDownSearch,
    handleClickSearchButton,
    handleChangeSearchInput,
  };
};
