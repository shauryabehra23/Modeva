import Nav from "./Nav";
import Hbg from "../pics/Header.jpg";
import random from "../pics/rand2.png";
import { useState } from "react";

export default function Header() {
  return (
    <div
      className="grid Header w-full bg-cover text-white"
      style={{ backgroundImage: `url(${Hbg})` }}
    >
      <Nav font="white" />
      <div style={{ gridArea: "head" }}>
        <h6 className="text-3xl">made in Indonesia, dedicated to Indonesia</h6>
        <h1 className="text-7xl">Discover the Art of Dressing Up</h1>
      </div>

      <div
        className="promo flex overflow-x-hidden justify-end items-end"
        style={{ gridArea: "promo1" }}
      >
        <img className="h-3/5" src={random} />
        <div className="flex h-3/5 w-2/5 flex-col text-gray-500 justify-evenly items-center bg-white ">
          <span class="material-symbols-outlined text-4xl">
            percent_discount
          </span>
          <h4 className="line-through text-gray-800">$2000</h4>
          <h2 className="text-red-500">$1500</h2>
        </div>
      </div>
      <div
        className="promo flex overflow-x-hidden justify-end items-start text-4xl"
        style={{ gridArea: "promo2" }}
      >
        <img className="h-3/5" src={random} />
        <div className="flex h-3/5 w-2/5 flex-col text-gray-500 justify-evenly items-center bg-white ">
          <span class="material-symbols-outlined text-4xl">
            percent_discount
          </span>
          <h4 className="line-through text-gray-800">$2000</h4>
          <h2 className="text-red-500">$1500</h2>
        </div>
      </div>
    </div>
  );
}
