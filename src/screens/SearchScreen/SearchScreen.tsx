import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { fetchSearchResults } from '../../store/SearchResultsStore';

type SearchFormInputs = {
  searchQuery: string;
};

const SearchScreen: React.FC = () => {
  const { handleSubmit, register } = useForm<SearchFormInputs>();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(({ searchQuery }) => {
    fetchSearchResults(searchQuery);
    navigate('/search-results');
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" {...register('searchQuery')} />
        <button type="submit">Поиск</button>
      </form>
    </div>
  );
};

export default SearchScreen;