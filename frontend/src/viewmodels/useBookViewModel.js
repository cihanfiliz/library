import { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../models/book';

const useBookViewModel = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const booksPerPage = 10;

  const fetchBooks = async (start, limit) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:8741/api/books?start=${start}&limit=${limit}`);
      console.log("responsee: ", response);
      const bookData = response.data.map(book => new Book(book.id, book.title, book.author, book.publish_year));
      // If start is 0, it means we are fetching new books, so we replace the current books state
      if (start === 0) {
        setBooks(bookData);
        setFilteredBooks(bookData);
      } else {
        // Otherwise, we append to the existing books state
        setBooks(prevBooks => [...prevBooks, ...bookData]);
        setFilteredBooks(prevBooks => [...prevBooks, ...bookData]);
      }
    } catch (error) {
      console.error('Failed to fetch books:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(0, booksPerPage);
  }, []);

  useEffect(() => {
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
    setCurrentPage(1);
  }, [searchQuery, books]);

  const loadMoreBooks = () => {
    const start = currentPage * booksPerPage;
    fetchBooks(start, booksPerPage);
    setCurrentPage(prevPage => prevPage + 1);
  };

  return {
    filteredBooks: filteredBooks.slice(0, currentPage * booksPerPage),
    searchQuery,
    setSearchQuery,
    loadMoreBooks,
    isLoading,
  };
};

export default useBookViewModel;
