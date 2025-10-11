/* eslint-disable jsx-a11y/alt-text */
import random from "../pics/rand2.png";
import rating45 from "../pics/rating45.PNG";

export default function Card(props) {
  return (
    <div>
      {props.type === "promo" && (
        <div className="outline-1 outline-gray-800 flex flex-col text-left !m-2 h-min">
          <div className="relative w-full">
            <img
              src={rating45}
              className="absolute text-2xl z-10 right-0 aspect-[146/46] h-auto min-w-8 max-w-0"
            />
            <img src={random} className="object-cover max-h-[40vh] w-full" />
          </div>

          <p style={{ fontSize: `clamp(0.1rem, 2.5vw, 2rem)` }}>
            Product Category
          </p>
          <p
            style={{ fontSize: `clamp(0.5rem, 2.5vw, 2rem)` }}
            className="font-bold"
          >
            Product name
          </p>
          <p style={{ fontSize: `clamp(0.4rem, 2.5vw, 1.8rem)` }}>Id</p>
        </div>
      )}
      {props.type !== "promo" && (
        <div className="bg-white p-4 m-2 rounded-lg shadow-sm">
          <img src={rating45} className="h-6 mb-3" />
          <p className="text-sm text-gray-700 mb-4">
            Alice Borderland was a great series but dropped at the last
          </p>
          <div className="flex items-center">
            <img src={random} className="w-8 h-8 rounded-full mr-3" />
            <p className="font-medium text-sm">Alice</p>
          </div>
        </div>
      )}
    </div>
  );
}
