import { createContext, RefObject } from 'react';

/**---------------------------------------------------------------------------
 * type
 * --------------------------------------------------------------------------*/
type SearchInputRefContextValue = {
  searchInputRef: RefObject<HTMLInputElement>;
};

/**---------------------------------------------------------------------------
 * initial context value
 * --------------------------------------------------------------------------*/
export const SearchFormContext = createContext<SearchInputRefContextValue>({
  searchInputRef: { current: null },
});
