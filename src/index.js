import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './components/StarRating';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Average', 'Good', 'Amazing']} defaultRating={3} />
    <StarRating maxRating={5} /> */}
  </React.StrictMode>
);