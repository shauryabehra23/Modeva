import Promo from "../Components/Promo";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { useAppContext } from "../AppContext";

export default function Cart() {
  const { cart, products, addToCart, removeFromCart } = useAppContext();

  // Calculate subtotal
  const subtotal = Object.entries(cart).reduce((acc, [id, quantity]) => {
    const product = products[id];
    return acc + product.price * quantity;
  }, 0);

  // You can modify this if you want to include tax, shipping, etc.
  const total = subtotal;

  return (
    <div>
      <Promo />
      <Nav font="brown" />
      <header className="text-3xl font-medium">Cart</header>
      <div className="flex">
        <main className="flex flex-col w-1/2 m-auto">
          {Object.entries(cart).map(([id, quantity]) => {
            const product = products[id];
            return (
              <div className="flex m-auto" key={id}>
                <img
                  className="h-[30vh]"
                  src={product.image}
                  alt={product.name}
                />
                <div>
                  <h2>{product.name}</h2>
                  <p>Price: ${product.price}</p>
                  <p>Quantity: {quantity}</p>
                  <div>
                    <button onClick={() => addToCart(id, 1)}>+</button>
                    <button onClick={() => removeFromCart(id)}>-</button>
                  </div>
                </div>
              </div>
            );
          })}
        </main>

        <div className="flex flex-col justify-start gap-4 p-4 w-1/3">
          <header className="text-3xl font-medium">Shopping Info</header>
          <div className="flex justify-between text-xl">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
