import React from 'react';
import { Question } from '../interfaces/Question';

export const ModalContent: React.FC<{ questions: Question[] }> = ({ questions }) => {
    return (
      <div className="modal-content">
        {questions.map((result, index) => (
          <div key={index} className="search-result">
            <div className="search-result-author">{result.owner.display_name}</div>
            <div className="search-result-title">{result.title}</div>
            <div className="search-result-answer-count">{result.answer_count}</div>
            <ul className="search-result-tagsList">
              {result.tags.map((tag: string, tagIndex: number) => (
                <li key={tagIndex} className="search-result-tag">
                  {tag}
                </li>
              ))}
            </ul>
            <br />
          </div>
        ))}
      </div>
    );
  };