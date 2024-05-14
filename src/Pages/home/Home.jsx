import Catagouries from "../../components/Categouries/Catagouries";
import Doemload from "../../components/download/Doemload";
import Feature from "../../components/feature/Feature";
import Hero from "../../components/hero/Hero";
import Order from "../../components/order/Order";

// eslint-disable-next-line react/prop-types
const Home = ({addCart ,addWatchlist}) => {
  return (
    <div>
      <Hero/>
  <Order/>
  <Catagouries/>
  <Feature addCart = {addCart} addWatchlist={addWatchlist}/>
  <Doemload/>
    </div>
  );
}

export default Home;
