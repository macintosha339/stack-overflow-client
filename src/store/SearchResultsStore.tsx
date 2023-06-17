import { createEffect, createEvent, createStore } from 'effector';

type SearchResult = {
  author: string;
  title: string;
  answerCount: number;
  tags: string[];
};

// Создаем эффект для выполнения запроса и загрузки результатов поиска
const fetchSearchResults = createEffect<string, SearchResult[]>(async (searchQuery) => {
  try {
    const response = await fetch(
      `https://api.stackexchange.com/2.3/search/advanced?pagesize=5&order=desc&sort=relevance&body=${searchQuery}&site=stackoverflow`
    );
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Ошибка при загрузке результатов поиска', error);
    throw error;
  }
});

// Создаем событие для обновления стора с результатами поиска
const updateSearchResults = createEvent<SearchResult[]>();

// Создаем стор для хранения результатов поиска
const searchResultsStore = createStore<SearchResult[]>([])
  .on(updateSearchResults, (_, searchResults) => searchResults);

// Связываем эффект с обновлением стора
fetchSearchResults.doneData.watch(updateSearchResults);

export { searchResultsStore, fetchSearchResults };