import React from 'react';
import { useStore } from 'effector-react';
import { searchResultsStore } from '../../store/SearchResultsStore';

const SearchResultScreen: React.FC = () => {
  const searchResults = useStore(searchResultsStore);
  console.log(searchResults);

  return (
    <div>
      SeacrchResultScreen
    </div>
  );
};

export default SearchResultScreen;