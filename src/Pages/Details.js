import { useAppContext } from "../AppContext";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export default function Details() {
  const { products, addToCart } = useAppContext();
  const { id } = useParams();
  const [add, setAdd] = useState(0);

  const product = products[id];

  const handleAdd = (e) => {
    setAdd((e) => e + 1);
  };

  const handleSubtract = (e) => {
    setAdd((ele) => {
      if (ele > 0) return ele - 1;
      else return 0;
    });
  };

  const handleCart = () => {
    addToCart(id, add);
  };

  return (
    <div>
      <Nav font="brown" />
      <div className="xl:flex gap-2 justify-evenly m-4">
        <div className="xl:w-[45%]">
          <img
            className="h-[75vh] m-auto object-cover aspect-square"
            alt="product"
            src={product.image}
          />
        </div>

        <div className=" flex flex-col justify-evenly xl:w-[45%] h-[75vh]">
          <h1>
            {" "}
            {product.color}, {product.category} {product.subcategory}{" "}
          </h1>
          <p className="p-3 h-[70%] text-xl overflow-scroll leading-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
          <div className="flex mb-3 justify-center gap-3">
            <div className="flex">
              <button
                onClick={handleAdd}
                className=" text-white bg-[#8B4513] !p-2 !pl-3 !pr-3"
              >
                +
              </button>
              <p className="!p-2 !pl-3 !pr-3 w-10 m-auto text-white bg-[#8B4513] ">
                {add}
              </p>
              <button
                onClick={handleSubtract}
                className=" text-white bg-[#8B4513] !p-2 !pl-3 !pr-3"
              >
                -
              </button>
            </div>

            <button
              onClick={handleCart}
              className="!p-2 !pl-3 !pr-3 text-white bg-[#8B4513] "
            >
              {" "}
              Add To Cart{" "}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
