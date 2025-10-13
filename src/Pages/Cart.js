import Promo from "../Components/Promo";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import random from "../pics/rand2.png";

export default function Cart(props) {
  const inCart = props.inCart;
  const allProducts = props.products;
  const cardsToDisplay = allProducts.filter((product) => {
    return inCart[product.id] > 0;
  });

  return (
    <div>
      <Promo />;
      <Nav font="brown" />;
      <header className="text-5xl font-medium">Cart</header>
      <main className="flex">
        <div className="flex flex-col">
          {cardsToDisplay.map((product) => (
            <div className="flex">
              <div>
                <img src={random} alt="dress" />
              </div>
              <div>
                <h4>`${product.name}`</h4>
                <h5> `${product.price}` </h5>
                <div className="flex">
                  <button> + </button>
                  <p> `${inCart[product.id]}` </p>
                  <button> - </button>
                </div>
              </div>
              <div></div>
            </div>
          ))}
        </div>
        <div className="fixed right-2 top-20"></div>
      </main>
      <Footer />
    </div>
  );
}
