import React from 'react';
import { Question } from '../interfaces/Question';
import './Modal.css';

interface ModalContentProps {
  questions: Question[];
  handleCloseModal: () => void;
}

export const ModalContent: React.FC<ModalContentProps> = ({ questions, handleCloseModal }) => {
  return (
    <div className="modal-content">
      {questions.map((result, index) => (
        <div key={index} className="search-result">
          <div className="search-result-author modal-item">Author: {result.owner.display_name}</div>
          <div className="search-result-title modal-item">Title: {result.title}</div>
          <div className="search-result-answer-count modal-item">Answers: {result.answer_count}</div>
          <ul className="search-result-tagsList">
            Tags:
            {result.tags.map((tag: string, tagIndex: number) => (
              <li key={tagIndex} className="search-result-tag modal-item">
                {tag}
              </li>
            ))}
          </ul>
          <br />
        </div>
      ))}
      <button className="modal-close" onClick={handleCloseModal}>
        Закрыть
      </button>
    </div>
  );
};