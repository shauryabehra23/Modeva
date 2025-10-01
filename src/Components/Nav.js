import modeva from "../pics/Modeva.png"
import { useState } from "react";

export default function Nav(props)
{
    return(
            <div className=" Nav flex w-full items-center justify-between" style={{gridArea:"nav"}}>
            <div className="logo">
                <a>
                    <img src={modeva} />
                </a>
            </div>

            <div className="text-white flex text-xl nav items-center justify-evenly gap-4">
                <a>Catalog</a>
                <a>Sale</a>
                <a>New Arrival</a>
                <a>About</a>
            </div>

            <div className="flex items-center">
                <form className="flex items-center ">
                    <span className="material-symbols-outlined h-1/3 text-gray-500"  style={{backgroundColor:"white"}}>
                        search
                    </span>
                    <input placeholder="Search" className="h-1/3"></input>
                </form>
                <a>
                    <span class="material-symbols-outlined">
                        person
                    </span>
                </a>
                <a>
                    <span class="material-symbols-outlined">
                        shopping_cart
                    </span>
                </a>
                <button onClick={props.toggle} className="sidebar">
                    <span class="material-symbols-outlined">
                        arrow_menu_close
                    </span>
                </button>
                
            </div>
        </div>
    );
}

