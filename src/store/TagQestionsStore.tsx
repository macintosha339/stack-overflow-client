import { createEffect, createStore } from 'effector';
import { Question } from '../interfaces/Question';

// Эффект для загрузки популярных вопросов по тегу
export const fetchTagQuestions = createEffect<string, Question[]>(async (tag) => {
  const response = await fetch(`https://api.stackexchange.com/2.3/search/advanced?pagesize=5&order=desc&sort=activity&tagged=${tag}&site=stackoverflow`);
  const data = await response.json();
  return data.items;
});

// Состояние для хранения популярных вопросов по тегу
export const tagQuestionsStore = createStore<Question[]>([]);

// Привязка эффекта к состоянию
tagQuestionsStore.on(fetchTagQuestions.doneData, (_, data) => data);