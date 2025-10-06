import modeva from "../pics/Modeva.png"
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';

export default function Nav(props)
{
    const styles = props.font === "brown" ? {color : "#8B4513"} : {color : "white"}
    return(
        <div className=" Nav flex w-full items-center justify-between max-h-20" style={{gridArea:"nav"}}>
            <div className="logo">
                <a>
                    <img src={modeva} />
                </a>
            </div>

            <div className="!hidden xl:!flex text-xl nav items-center justify-evenly gap-4" style={styles}>
                <a>Catalog</a>
                <a>Sale</a>
                <a>New Arrival</a>
                <a>About</a>
            </div>

            <div className="flex items-center justify-end max-h-12">
                <form className="flex items-center justify-end max-w-[40%]">
                    <span className="material-symbols-outlined h-1/3 text-gray-500"  style={{backgroundColor:"white"}}>
                        search
                    </span>
                    <input placeholder="Search" className="h-1/3 w-4/5"></input>
                </form>
                <a>
                    <span className="material-symbols-outlined">
                        person
                    </span>
                </a>
                <a>
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                </a>
                <Dropdown className="sidebar">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <span className="material-symbols-outlined">
                            arrow_menu_close
                        </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Catalog</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Sale</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">New Arrival</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">About</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
            </div>
        </div>
    );
}

/* 
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <span class="material-symbols-outlined">
            arrow_menu_close
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Catalog</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Sale</Dropdown.Item>
        <Dropdown.Item href="#/action-3">New Arrival</Dropdown.Item>
        <Dropdown.Item href="#/action-3">About</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */