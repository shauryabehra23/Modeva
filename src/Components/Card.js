/* eslint-disable jsx-a11y/alt-text */
import random from "../pics/rand2.png";
import rating45 from "../pics/rating45.PNG";

export default function Card(props) {
  return (
    <div>
      {props.type === "promo" && (
        <div className="outline-1 outline-gray-800 flex flex-col text-left !m-2 h-min w-[30vw] xl:w-[20vw]">
          <div className="relative w-full">
            <img
              src={rating45}
              className="absolute text-2xl right-0 aspect-[146/46] h-auto min-w-8 max-w-0"
            />
            <img
              src={props.image || random}
              className="object-cover max-h-[40vh] w-full aspect-[1/2]"
            />
          </div>

          <p
            style={{
              fontSize: `clamp(0.1rem, 2.5vw, 1.4rem)`,
              marginBottom: "0rem !important",
            }}
            className="!mb-0"
          >
            {props.category || "Product Category"} ›{" "}
            {props.subcategory || "Subcategory"}
          </p>
          <p
            style={{
              fontSize: `clamp(0.5rem, 2.5vw, 1.5rem)`,
              marginBottom: "0.1rem !important",
            }}
            className="font-bold !mb-0"
          >
            {props.name || "Product Name"}
          </p>
          <p
            className="!mb-0"
            style={{
              fontSize: `clamp(0.4rem, 2.5vw, 1.4rem)`,
              marginBottom: "0.1rem !important",
            }}
          >
            ${props.price || "0.00"}
          </p>
          <div className="flex gap-2 mt-1 bg-gray-100">
            <div
              style={{
                fontSize: `clamp(0.4rem, 2.5vw, 1.5rem)`,
                marginBottom: "0.1rem !important",
              }}
            >
              {props.size || "M"}
            </div>
            <div
              style={{
                fontSize: `clamp(0.4rem, 2.5vw, 1.5rem)`,
                marginBottom: "0.1rem !important",
              }}
            >
              {props.color || "Black"}
            </div>
          </div>
        </div>
      )}
      {props.type !== "promo" && (
        <div className="bg-white p-4 m-2 rounded-lg shadow-sm w-[30vw]">
          <img src={rating45} className="h-6 mb-3" />
          <div
            className="text-sm text-gray-700 mb-4 w-11/12"
            style={{ marginBottom: "0.1rem !important" }}
          >
            "Alice Borderland was a great series but dropped at the last"
          </div>
          <div className="flex items-center">
            <img
              src={props.image || random}
              className="w-8 h-8 rounded-full mr-3"
            />
            <p
              className="font-medium text-sm"
              style={{ marginBottom: "0.1rem !important" }}
            >
              {props.category || "Alice"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
