import Footer from "../Components/Footer";
import Promo from "../Components/Promo";
import Nav from "../Components/Nav";
import { useReducer, useMemo } from "react";
import Card from "../Components/Card";

const present = {
  Woman: { Dress: false, Shirt: false, Skirt: false },
  Man: { Shirt: false, Pants: false, Jacket: false },
  Unisex: { Tshirt: false, Accessories: false, Shoes: false },
  Size: { S: false, M: false, L: false, XL: false },
  Color: {
    Red: false,
    Blue: false,
    Black: false,
    White: false,
    Green: false,
    Yellow: false,
  },
};

const generateProducts = () => {
  return Array.from({ length: 30 }, (_, index) => {
    const categories = [
      { category: "Woman", subcategories: ["Dress", "Shirt", "Skirt"] },
      { category: "Man", subcategories: ["Shirt", "Pants", "Jacket"] },
      { category: "Unisex", subcategories: ["Tshirt", "Accessories", "Shoes"] },
    ];

    const selectedCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const selectedsubcategory =
      selectedCategory.subcategories[
        Math.floor(Math.random() * selectedCategory.subcategories.length)
      ];

    const sizes = ["S", "M", "L", "XL"];
    const colors = ["Red", "Blue", "Black", "White", "Green", "Yellow"];

    return {
      id: index + 1,
      name: `${selectedCategory.category}'s ${selectedsubcategory} ${
        index + 1
      }`,
      category: selectedCategory.category,
      subcategory: selectedsubcategory,
      price: parseFloat((Math.random() * 100 + 10).toFixed(2)),
      size: sizes[Math.floor(Math.random() * sizes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      image: `path/to/image${Math.floor(Math.random() * 5) + 1}.avif`,
    };
  });
};
const reducer = (state, action) => {
  return {
    ...state,
    [action.categories]: {
      ...state[action.categories],
      [action.subcategories]: !state[action.categories][action.subcategories],
    },
  };
};
//-------------------------------------------------------------------------------
export default function Products() {
  const [state, dispatch] = useReducer(reducer, present);
  const products = useMemo(() => generateProducts(), []);

  const filteredProducts = products.filter((product) => {
    const gender = Object.values(state[product.category]).includes(true);
    const genderssub = state[product.category][product.subcategory];
    const isGenderSubValid = gender && genderssub;
    const showAllgenders = !Object.values(state[product.category]).includes(
      true
    );

    const isSizeIncluded = state.Size[product.size];
    const showAllSizes = !Object.values(state.Size).includes(true);

    const isColourIncluded = state.Color[product.color];
    const showAllColors = !Object.values(state.Color).includes(true);

    return (
      (showAllgenders || isGenderSubValid) &&
      (showAllSizes || isSizeIncluded) &&
      (showAllColors || isColourIncluded)
    );
  });

  return (
    <div className="mt-6">
      <Promo />
      <Nav font="brown" />
      <div className="flex items-start justify-between">
        <div className="sticky top-28 bg-gray-500 text-white w-1/6 ">
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

        <div className="grid grid-cols-2 xl:grid-cols-3 w-5/6 gap-4 ml-4">
          {filteredProducts.map((product) => (
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
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
