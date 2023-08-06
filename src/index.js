import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotesState from './context/NotesState';

ReactDOM.render(
  <React.StrictMode>
    <NotesState>
      <App />
    </NotesState>
  </React.StrictMode>,
  document.getElementById('root')
);
