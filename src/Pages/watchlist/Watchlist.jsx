import './watch.css'
import { FaCartPlus } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const Watchlist = ({watchList,addCart,removeWatchlist}) => {
  return (
   <>
   {
    // eslint-disable-next-line react/prop-types
    watchList.length == 0?<h2 className="Empty container">No There Any Product In The Watch List</h2>
    :
    <div className="container">
    <div className="wathes">
        {
            // eslint-disable-next-line react/prop-types
            watchList.map(items => {
                return(
                    // eslint-disable-next-line react/jsx-key
                    <div className='watch'> 
                    <img src={items.image ?items.image: items.thumbnail} alt="Product" />
                    <h1>{items.title.slice(0,12)}</h1>
                    <h2>Price : <span>${items.price}</span></h2>
                    <div className="btnwa">
                     <button onClick={() => addCart(items)}><FaCartPlus className='waicon waic'/></button>
                     <button onClick={() => removeWatchlist(items)}><FaTimes className='fawaicon waic'/></button>
                    </div>
                    


                    </div>
                )
            })
        }
    </div>
  
</div>
   }
   </>
  );
}

export default Watchlist;
