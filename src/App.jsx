import { useState } from 'react';
import './App.css';
import About from './Pages/about/About';
import Cart from './Pages/cart/Cart';
import Contaction from './Pages/contaction/Contaction';
import Dummy from './Pages/dummy/Dummy';
import Fake from './Pages/fake/Fake';
import Home from './Pages/home/Home';
import Shop from './Pages/shop/Shop';
import Singalfake from './Pages/signalFake/Singalfake';
import Singaldummy from './Pages/singalDummy/Singaldummy';
import Footer from './components/footer/Footer';
import Navbar from './components/nanbar/Navbar';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Watchlist from './Pages/watchlist/Watchlist';
import Swal from 'sweetalert2'



function App() {
  let [cartItems , setItems] = useState([])
  let[watchList , setWatchlist] = useState([])
  let [dark ,setDark]=useState(false);
  function isDark(){
    setDark(!dark)
  }



  function addCart(product){
    let SelectProduct = cartItems.find(items => items.id == product.id)
    if(SelectProduct){
      setItems(cartItems.map(item => item.id == product.id ?
        {...SelectProduct, Quanty : SelectProduct.Quanty + 1}
        :
        item
      ))
    }
    else{
      setItems([...cartItems,{...product , Quanty : 1}]);
      Swal.fire({
        title: "This Product Adding In Cart ",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      });
    }
   
  }

  function removeCart(product){
    setItems(cartItems.filter(items => items.id != product.id))
    Swal.fire({
      title: "This Product Already Removed In Cart ",
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
  }
  function addWatchlist(product){
    let SelectProduct = watchList.find(items => items.id == product.id)
    if(SelectProduct){
      Swal.fire({
        title: "This Product Added In Watch List Before!",
        icon: "warning",
        showConfirmButton: false,
        timer: 2000
      });
    }

  
    else{
      setWatchlist([...watchList,product]);
      Swal.fire({
        title: "This Product Adding In Watch List ",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      });
    }
    
  }
  function removeWatchlist(product){
    setWatchlist(watchList.filter(items => items.id != product.id));
    Swal.fire({
      title: "This Product Already Removed In Watch List ",
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
  }
  function descrease(product){
    let Descrease = cartItems.find(items => items.id == product.id);
    if(Descrease.Quanty == 1){
      setItems(cartItems.filter(items => items.id != product.id))
      Swal.fire({
        title: "This Product Already Removed In Cart ",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      });
    }
    else{
      setItems(cartItems.map(item => item.id == product.id ?
        {...Descrease, Quanty : Descrease.Quanty - 1}
        :
        item
      ))
    }
    


  }
 return(
<div className={dark && 'app-dark'}>
<BrowserRouter>
<Navbar cartItems ={cartItems} watchList={watchList} isDark={isDark} dark={dark}/>
<Routes>
  <Route path='/' element={<Home addCart = {addCart} addWatchlist={addWatchlist}/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/shop' element={<Shop addCart = {addCart} addWatchlist={addWatchlist}/>}></Route>
  <Route path='/contact' element={<Contaction/>}></Route>
  <Route path='/fake' element={<Fake addCart = {addCart} addWatchlist={addWatchlist}/>}></Route>
  <Route path='/dummy' element={<Dummy addCart = {addCart} addWatchlist={addWatchlist}/>}></Route>
  <Route path='/Singalfake/:id' element={<Singalfake addCart={addCart}/>}></Route>
  <Route path='/Singaldummy/:id' element={<Singaldummy addCart={addCart} />}></Route>
  <Route path='/cart' element={<Cart cartItems ={cartItems} removeCart={removeCart} addCart={addCart} descrease={descrease}/>}></Route>
  <Route path='/watchlist' element={<Watchlist watchList={watchList} addCart ={addCart} removeWatchlist={removeWatchlist} />}></Route>

</Routes>
 
  <Footer/>


  

</BrowserRouter>
</div>
 )
}

export default App
