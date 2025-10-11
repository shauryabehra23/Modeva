const products = (() => {
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
})();

const state = {
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

const filteredProducts = products.filter((product) => {
  const gender = Object.values(state[product.category]).includes(true);
  const genderssub = state[product.category][product.subcategory];
  const isGenderSubValid = gender && genderssub;

  const isSizeIncluded = state.Size[product.size];

  const isColourIncluded = state.Color[product.color];

  return isGenderSubValid && isSizeIncluded && isColourIncluded;
});
console.log("All products:", products);
console.log("Filtered products:", filteredProducts);
console.log(`Found ${filteredProducts.length} products matching filters`);
