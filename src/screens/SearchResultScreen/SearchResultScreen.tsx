import React, { useState } from "react";
import { ModalContent } from "../../components/ModalContent";
import { useNavigate } from "react-router";
import { useStore } from "effector-react";
import { searchResultsStore } from "../../store/SearchResultsStore";
import { fetchAuthorQuestions } from "../../store/AuthorQuestionsStore";
import { fetchTagQuestions, tagQuestionsStore } from "../../store/TagQestionsStore";
import { authorQuestionsStore } from "../../store/AuthorQuestionsStore";

const SearchResultScreen: React.FC = () => {
  const searchResults = useStore(searchResultsStore);
  const authorQuestions = useStore(authorQuestionsStore);
  const tagQuestions = useStore(tagQuestionsStore);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedTag, setSelectedTag] = useState("");
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleAuthorClick = (author: string, name: string) => {
    setSelectedAuthor(author);
    fetchAuthorQuestions(author);
    setShowModal(true);
  };

  const handleTagClick = (tag: string) => {
    setShowModal(true);
    fetchTagQuestions(tag);
  };

  const handleQuestionClick = (questionId: number) => {
    navigate("/question-info");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAuthor("");
    setSelectedTag("");
  };

  return (
    <div>
      <h2>Результаты поиска</h2>
      <div className="search-results">
        {searchResults.map((result: any, index: any) => (
          <div key={index} className="search-result">
            <div
              className="search-result-author"
              onClick={() => handleAuthorClick(result.owner.user_id, result.owner.display_name)}
            >
              {result.owner.display_name}
            </div>
            <div
              className="search-result-title"
              onClick={() => handleQuestionClick(0)}
            >
              {result.title}
            </div>
            <div
              className="search-result-answer-count"
              onClick={() => handleQuestionClick(0)}
            >
              {result.answer_count}
            </div>
            <ul className="search-result-tagsList">
              {result.tags.map((tag: string) => (
                <li
                  className="search-result-tag"
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <br></br>
          </div>
        ))}

        {showModal && (
          <div className="modal">
          <ModalContent questions={selectedAuthor ? authorQuestions : tagQuestions} />
          <button className="modal-close" onClick={handleCloseModal}>
            Закрыть
          </button>
        </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultScreen;
