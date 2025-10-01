import random from "../pics/rand2.png"
import rating45 from "../pics/rating45.PNG"

export default function Card(props)
{
    return(
        <div className="h-full max-w-[33%]">
        {
            props.type==="promo" && (
        <div className="max-h-[60vh] outline-1 outline-gray-800 flex flex-col text-left m-2">
            <div className="relative">
                <img src={rating45} className="absolute text-2xl z-10 right-0 h-8 aspect-[146/46] w-24"/>
                <img src={random} className="object-cover max-h-[40vh]"/>
            </div>
            <p style={{ fontSize: `clamp(0.1rem, 2.5vw, 2rem)` }}>Product Category</p>
            <p style={{ fontSize: `clamp(0.5rem, 2.5vw, 2rem)` }} className="font-bold">Product name</p>
            <p>Id</p>
        </div>
            )
        }
        {
            props.type!="promo" && (
        <div className="bg-gray-400 outline-1 outline-gray-800 flex flex-col text-left m-2">
            
        </div>
            )
        }
        </div>
    );
}