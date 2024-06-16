import React from 'react';
import PropTypes from 'prop-types';
import useBookViewModel from '../viewmodels/useBookViewModel';
import './bookList.css';

const BookList = () => {
  const { filteredBooks, searchQuery, setSearchQuery, loadMoreBooks, isLoading } = useBookViewModel();

  return (
    <div className="book-list-container">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="book-list">
        {filteredBooks.map((book, index) => (
          <div key={index} className="book-item">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.publish_year}</p>
          </div>
        ))}
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        filteredBooks.length > 0 && (
          <button onClick={loadMoreBooks} className="load-more-button">
            Load More
          </button>
        )
      )}
    </div>
  );
};

BookList.propTypes = {
  filteredBooks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publish_year: PropTypes.number.isRequired,
    })
  ),
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
  loadMoreBooks: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default BookList;
