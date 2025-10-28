import Card from "./Card";
import { useAppContext } from "../AppContext";

export default function SideScroll(props) {
  const { products } = useAppContext();

  return (
    <div className="flex gap-5 overflow-x-auto whitespace-nowrap snap-x snap-mandatory justify-around">
      {Object.entries(products).map(([id, product]) => (
        <Card
          key={id}
          type={product.type || props.type}
          category={product.category || props.category || "Woman"}
          subcategory={product.subcategory || props.subcategory || "Dress"}
          price={product.price || props.price || 49.99}
          size={product.size || props.size || "M"}
          color={product.color || props.color || "Blue"}
          name={product.name || props.name || `Product ${id}`}
          image={product.image || props.image}
        />
      ))}
    </div>
  );
}
