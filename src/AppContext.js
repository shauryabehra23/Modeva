import {
  createContext,
  useContext,
  useState,
  useReducer,
  useMemo,
} from "react";
import random from "./pics/rand2.png";

// Create context
const AppContext = createContext();

// Initial filter state
const initialFilters = {
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

// Product generator (pure function)
const generateProducts = () => {
  const categories = [
    { category: "Woman", subcategories: ["Dress", "Shirt", "Skirt"] },
    { category: "Man", subcategories: ["Shirt", "Pants", "Jacket"] },
    { category: "Unisex", subcategories: ["Tshirt", "Accessories", "Shoes"] },
  ];
  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Red", "Blue", "Black", "White", "Green", "Yellow"];

  return Array.from({ length: 30 }, (_, index) => {
    const selectedCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const selectedSubcategory =
      selectedCategory.subcategories[
        Math.floor(Math.random() * selectedCategory.subcategories.length)
      ];

    return {
      id: index + 1, // Ensure ID is a string for routing
      name: `${selectedCategory.category}'s ${selectedSubcategory} ${
        index + 1
      }`,
      category: selectedCategory.category,
      subcategory: selectedSubcategory,
      price: parseFloat((Math.random() * 100 + 10).toFixed(2)),
      size: sizes[Math.floor(Math.random() * sizes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      image: random,
    };
  });
};

// Reducer for filter toggling
const reducer = (state, action) => {
  return {
    ...state,
    [action.categories]: {
      ...state[action.categories],
      [action.subcategories]: !state[action.categories][action.subcategories],
    },
  };
};

// Provider component
export const CartProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialFilters);

  // Memoize products once
  const products = useMemo(() => generateProducts(), []);

  // Filter products based on state
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const hasGenderFilters =
        Object.values(state.Woman).includes(true) ||
        Object.values(state.Man).includes(true) ||
        Object.values(state.Unisex).includes(true);

      const genderMatch =
        state[product.category][product.subcategory] &&
        Object.values(state[product.category]).includes(true);

      const showAllGenders = !hasGenderFilters;

      const sizeMatch = state.Size[product.size];
      const showAllSizes = !Object.values(state.Size).includes(true);

      const colorMatch = state.Color[product.color];
      const showAllColors = !Object.values(state.Color).includes(true);

      return (
        (showAllGenders || genderMatch) &&
        (showAllSizes || sizeMatch) &&
        (showAllColors || colorMatch)
      );
    });
  }, [state, products]);

  // Cart state
  const [cart, setCart] = useState({});

  const addToCart = (productId, add) => {
    if (add > 0) {
      setCart((prev) => ({
        ...prev,
        [productId]: prev[productId] ? prev[productId] + add : add,
      }));
    }
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[productId] > 1) {
        updated[productId] -= 1;
      } else {
        delete updated[productId];
      }
      return updated;
    });
  };

  // Context value
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

// Custom hook
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within CartProductProvider");
  }
  return context;
};
