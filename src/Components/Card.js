import random from "../pics/rand2.png"
import rating45 from "../pics/rating45.PNG"

export default function Card(props)
{
    return(
        <div className="h-full max-w-[33%] min-w-[20%]">
        {
            props.type==="promo" && (
        <div className="outline-1 outline-gray-800 flex flex-col text-left m-2">
            <div className="relative">
                <img src={rating45} className="absolute text-2xl z-10 right-0 h-8 aspect-[146/46] w-25"/>
                <img src={random} className="object-cover aspect-[1/2]"/>
            </div>
            <p>Product Category</p>
            <p className="font-bold">Product name</p>
            <p>Id</p>
        </div>
            )
        }
        </div>
    );
}