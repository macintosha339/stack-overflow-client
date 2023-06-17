import { createEffect, createStore } from 'effector';
import { Question } from '../interfaces/Question';

// Эффект для загрузки популярных вопросов автора
export const fetchAuthorQuestions = createEffect<string, Question[]>(async (author) => {
  const response = await fetch(`https://api.stackexchange.com/2.3/search/advanced?pagesize=3&order=desc&sort=activity&user=${author}&site=stackoverflow`);
  const data = await response.json();
  return data.items;
});

// Состояние для хранения популярных вопросов автора
export const authorQuestionsStore = createStore<Question[]>([]);

// Привязка эффектак состоянию
authorQuestionsStore.on(fetchAuthorQuestions.doneData, (_, data) => data);