import Card from "./Card";

export default function SideScroll(props) {
  return (
    <div className="flex gap-5 overflow-x-auto whitespace-nowrap snap-x snap-mandatory justify-around">
      {Array.from({ length: 15 }, (_, index) => (
        <Card
          key={index}
          type={props.type}
          category={props.category || "Woman"}
          subcategory={props.subcategory || "Dress"}
          price={props.price || 49.99}
          size={props.size || "M"}
          color={props.color || "Blue"}
          name={props.name || `Product ${index + 1}`}
          image={props.image}
        />
      ))}
    </div>
  );
}
