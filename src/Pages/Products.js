/* eslint-disable no-unused-vars */
import Footer from "../Components/Footer";
import Promo from "../Components/Promo";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";
import { useReducer, useMemo, useContext } from "react";
import Card from "../Components/Card";
import random from "../pics/rand2.png";
import Filters from "../Components/Filters";
import { useAppContext } from "../AppContext";
import Details from "./Details";

//-------------------------------------------------------------------------------
export default function Products() {
  const { filteredProducts, state, dispatch } = useAppContext();

  return (
    <div className="mt-6">
      <Promo />
      <Nav font="brown" />
      <Filters state={state} dispatch={dispatch} />
      <div className="flex items-start justify-between">
        <div className=" hidden xl:block xl:sticky top-28 xl:bg-gray-500 text-white w-1/6 ">
          <details open>
            <summary>CATEGORY</summary>
            <div>
              <details open>
                <summary>Woman</summary>
                <div>
                  {["Dress", "Shirt", "Skirt"].map((item) => (
                    <div key={item}>
                      <label htmlFor={item.toLowerCase()}>
                        <input
                          type="checkbox"
                          checked={state.Woman[item]}
                          onChange={() =>
                            dispatch({
                              categories: "Woman",
                              subcategories: item,
                            })
                          }
                          id={item.toLowerCase()}
                        />
                        <span>{item}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </details>
              <details open>
                <summary>Man</summary>
                <div>
                  {["Shirt", "Pants", "Jacket"].map((item) => (
                    <div key={item}>
                      <label htmlFor={item.toLowerCase()}>
                        <input
                          type="checkbox"
                          checked={state.Man[item]}
                          onChange={() =>
                            dispatch({
                              categories: "Man",
                              subcategories: item,
                            })
                          }
                          id={item.toLowerCase()}
                        />
                        <span>{item}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </details>
              <details open>
                <summary>Unisex</summary>
                <div>
                  {["Tshirt", "Accessories", "Shoes"].map((item) => (
                    <div key={item}>
                      <label htmlFor={item.toLowerCase()}>
                        <input
                          type="checkbox"
                          checked={state.Unisex[item]}
                          onChange={() =>
                            dispatch({
                              categories: "Unisex",
                              subcategories: item,
                            })
                          }
                          id={item.toLowerCase()}
                        />
                        <span>{item}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </details>
          <div>
            <details>
              <summary>PRICE</summary>
              <div>Content for price goes here...</div>
            </details>
          </div>
          <div>
            <details>
              <summary>SIZE</summary>
              <div>
                {["S", "M", "L", "XL"].map((size) => (
                  <div key={size}>
                    <label htmlFor={`size-${size}`}>
                      <input
                        type="checkbox"
                        checked={state.Size[size]}
                        onChange={() =>
                          dispatch({
                            categories: "Size",
                            subcategories: size,
                          })
                        }
                        id={`size-${size}`}
                      />
                      <span>{size}</span>
                    </label>
                  </div>
                ))}
              </div>
            </details>
          </div>
          <div>
            <details>
              <summary>COLOR</summary>
              <div>
                {["Red", "Blue", "Black", "White", "Green", "Yellow"].map(
                  (color) => (
                    <div key={color}>
                      <label htmlFor={`color-${color}`}>
                        <input
                          type="checkbox"
                          checked={state.Color[color]}
                          onChange={() =>
                            dispatch({
                              categories: "Color",
                              subcategories: color,
                            })
                          }
                          id={`color-${color}`}
                        />
                        <span>{color}</span>
                      </label>
                    </div>
                  )
                )}
              </div>
            </details>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:w-5/6 !gap-4 m-auto xl:ml-4">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/details/${product.id}`}>
              <Card
                key={product.id}
                type="promo"
                category={product.category}
                subcategory={product.subcategory}
                price={product.price}
                size={product.size}
                color={product.color}
                name={product.name}
                image={product.image}
              />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
