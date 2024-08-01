import React from 'react';
import "./index.css"

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((sum, book) => sum + book.price, 0);

  return (
    <div className='cartContainer'>
      <h2 className='cart-head'>Cart</h2>
    <div className='cartsList'>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((book, index) => (
            <div key={index} className="cart-item">
              <p>{book.title} - Rs.{book.price}</p>
            </div>
          ))}
          <h3>Total Price: {totalPrice}</h3>
          <button className='checkButton' onClick={() => alert("Thanku! You are successfuly checkout")}>Checkout</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Cart;










// import React from 'react';

// const Cart = ({ cart }) => {
//   const totalPrice = cart.reduce((acc, book) => acc + book.price, 0);

//   return (
//     <div>
//       <h2>Cart</h2>
//       <ul>
//         {cart.map((book, index) => (
//           <li key={index}>{book.title} - ${book.price}</li>
//         ))}
//       </ul>
//       <h3>Total Price: ${totalPrice}</h3>
//     </div>
//   );
// };

// export default Cart;
