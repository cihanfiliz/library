// src/App.js
import React from 'react';
import BookList from './components/bookList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book List</h1>
      </header>
      <main>
        <BookList />
      </main>
    </div>
  );
}

export default App;
