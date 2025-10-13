import {
  createContext,
  useContext,
  useState,
  useReducer,
  useMemo,
} from "react";
import random from "./pics/rand2.png";

const AppContext = createContext();

export const CartProductProvider = ({ children }) => {
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
        {
          category: "Unisex",
          subcategories: ["Tshirt", "Accessories", "Shoes"],
        },
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
        image: random,
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

  const [state, dispatch] = useReducer(reducer, present);
  const products = useMemo(() => generateProducts(), []);

  const filteredProducts = products.filter((product) => {
    const hasAnyGenderFilters =
      Object.values(state.Woman).includes(true) ||
      Object.values(state.Man).includes(true) ||
      Object.values(state.Unisex).includes(true);

    const gender = Object.values(state[product.category]).includes(true);
    const genderssub = state[product.category][product.subcategory];
    const isGenderSubValid = gender && genderssub;

    const showAllgenders = !hasAnyGenderFilters;

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

  // Fixed: Proper cart state management
  const [cart, setCart] = useState({});

  const addToCart = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  // Value object to be provided to consumers
  const value = {
    state,
    dispatch,
    products,
    filteredProducts,
    cart,
    addToCart,
    removeFromCart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a CartProductProvider");
  }
  return context;
};
