import './cart.css'
// eslint-disable-next-line react/prop-types
const Cart = ({cartItems ,removeCart,addCart,descrease}) => {
    let total =0;
    let sum=0;
  return (
    <>
    {
        // eslint-disable-next-line react/prop-types
        cartItems.length ==  0 ? 
        <h2 className="Empty container">No There Any Product In The Cart</h2>

        :
        <div className=" cart container"> 
        <div className="products-carts">
            {
                // eslint-disable-next-line react/prop-types
                cartItems.map(function(item){
                    total += item.price * item.Quanty;
                    sum = item.price *item.Quanty;
                    return(
                        // eslint-disable-next-line react/jsx-key
                        <div className="product-carts">
                            <div className="img">
                            <img src={item.image ?item.image :item.thumbnail} alt="products" />
                            <h5>x{item.Quanty}</h5>
                            </div>
                            <h2>${sum.toString().slice(0,6)}</h2>
                            <div className="counter">
                              <button onClick={() => addCart(item)}>+</button>
                              <h2>{item.Quanty}</h2>
                              <button onClick={() => descrease(item)}>-</button>
                            </div>
                            <button onClick={() => {removeCart(item)}}>Remove From Cart</button>
                        </div>
                    )

                })
            }
        </div>
        <div className='total'>
                <h2>Total:</h2>
                <h2>${total.toString().slice(0,6)}</h2>
         </div>
     
    </div>
    }
    </>
    
  );
}

export default Cart;
