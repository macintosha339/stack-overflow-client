import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchScreen from './screens/SearchScreen/SearchScreen';
import SearchResultScreen from './screens/SearchResultScreen/SearchResultScreen';
import QuestionInfoScreen from './screens/QuestionInfoScreen/QuestionInfoScreen';
import './App.css'

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<SearchScreen />} />
        <Route path="/search-results" element={<SearchResultScreen />} />
        <Route path="/question-info" element={<QuestionInfoScreen />} />
      </Routes>
    </Router>
  );
};

export default App;