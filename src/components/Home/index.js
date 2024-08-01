import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css"
import Navbar from '../Navbar';

const Home = () => {
  const navigate = useNavigate();

  const handleGetAllBooks = () => {
    navigate('/store');
  };

  return (
    <div className='homes'>
      <div className='navbar'>
      <Navbar />
      </div>
        
      <div className='home-container'>
      <h1 className='head'>Welcome to the bookstore,</h1>
      <button onClick={handleGetAllBooks} className='getAllbookbuton'>Get All Book List</button>
      
    </div>
    </div>
  );
};

export default Home;
