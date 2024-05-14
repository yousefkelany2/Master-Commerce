import Feature from "../../components/feature/Feature";

// eslint-disable-next-line react/prop-types
const Shop = ({addCart ,addWatchlist}) => {
  return (
    <div >
        <Feature addCart = {addCart} addWatchlist={addWatchlist}/>
    </div>
  );
}

export default Shop;
