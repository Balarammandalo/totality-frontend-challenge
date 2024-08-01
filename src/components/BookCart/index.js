import React from 'react';
import "./index.css"

const BookCart = ({ book, addToCart }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className='Book-image'/>
      <h3 className='book-title'>{book.title}</h3>
      <p className='book-descriptin'>{book.description}</p>
      <p className='book-price'>Rs.{book.price}</p>
      <button className='addButon' onClick={() => addToCart(book)}>Add Now</button>
    </div>
  );
};

export default BookCart;
