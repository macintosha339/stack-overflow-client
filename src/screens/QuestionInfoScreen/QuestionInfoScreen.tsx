import React from 'react';
import { useStore } from 'effector-react';
import { questionInfoStore } from '../../store/QuestionInfoStore';
import './QuestionInfoScreen.css';

const QuestionInfoScreen: React.FC = () => {
  const questionInfo = useStore(questionInfoStore);

  return (
    <div className="question-info-screen">
      <h2 className="question-info-title">Ссылки на ответы по вопросу</h2>
      <div className="answer-links">
        {questionInfo.map(({ answer_id }) => (
          <div key={answer_id} className="answer-link">
            <a href={`https://stackoverflow.com/a/${answer_id}/`} target="_blank" rel="noopener noreferrer">
              {`https://stackoverflow.com/a/${answer_id}/`}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionInfoScreen;