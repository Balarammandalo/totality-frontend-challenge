
import React, { useState, useEffect } from 'react';
import BookCart from '../BookCart';
import "./index.css"

const demoBooks = [
  { id: 1, title: 'Book One', price: 199, imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Book Two', price: 249, imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Book Three', price: 349, imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Book Four', price: 299, imageUrl: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Book five', price: 149, imageUrl: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Book Six', price: 399, imageUrl: 'https://via.placeholder.com/150' },
  { id: 7, title: 'Book Seven', price: 389, imageUrl: 'https://via.placeholder.com/150' },
  { id: 8, title: 'Book Eight', price: 599, imageUrl: 'https://via.placeholder.com/150' },
  { id: 9, title: 'Book Nine', price: 949, imageUrl: 'https://via.placeholder.com/150' },
  { id: 10, title: 'Book Ten', price: 499, imageUrl: 'https://via.placeholder.com/150' },
];

const BookStore = ({ addToCart }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(demoBooks);
  }, []);

  return (
    <div className='bookstoreContainer'>
      <h2 className='bookhead'>Book Store</h2>
      <div className="book-list">
        {books.map((book) => (
          <BookCart key={book.id} book={book} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default BookStore;
