import { createStore, createEffect, createEvent, sample } from 'effector';

// Структура данных для хранения информации о вопросе
type QuestionInfo = {
  title: string;
  body: string;
  score: number;
  view_count: number;
  answer_id: number;
};


const fetchQuestionInfo = createEffect<string, QuestionInfo[]>(async (questionId) => {
  try {
    // Выполняем запрос к серверу
    const response = await fetch(`https://api.stackexchange.com/2.3/questions/${questionId}/answers?pagesize=5&order=desc&sort=activity&site=stackoverflow`);
    const data = await response.json();

    // Возвращаем полученные данные
    return data.items;
  } catch (error) {
    // В случае ошибки возвращаем null
    console.error('Ошибка при получении информации:', error);
    return null;
  }
});

const updateInfoResults = createEvent<QuestionInfo[]>();

const questionInfoStore = createStore<QuestionInfo[]>([]);

questionInfoStore.on(updateInfoResults, (_, questionInfo) => questionInfo);

sample({
  source: fetchQuestionInfo.doneData,
  target: updateInfoResults,
});

export { questionInfoStore, fetchQuestionInfo };