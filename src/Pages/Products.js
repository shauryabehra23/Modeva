import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Promo from "../Components/Promo";
import SideScroll from "../Components/SideScroll";
import grid1 from "../pics/grid1.avif";
import grid2 from "../pics/grid2.avif";
import grid3 from "../pics/grid3.avif";
import rand2 from "../pics/rand2.png";
import Features from "../Components/Features";
import ReactPlayer from "react-player";
import Nav from "../Components/Nav"
import Hbg from "../pics/Header.jpg"
import random from "../pics/rand2.png"
import { useReducer, useState } from "react";
import Card from "../Components/Card";

const present = {};
const reducer = e=>{};

export default function Products()
{
    const [state, dispatch] = useReducer(present, reducer);
    const [nav, setNav] = useState(false);
    function toggle()
    {
        setNav(e => !e);
    }
    const products = Array.from({ length: 30 }, (_, index) => {
    const categories = [
      { category: 'Woman', subcategories: ['Dress', 'Shirt', 'Skirt'] },
      { category: 'Man', subcategories: ['Shirt', 'Pants', 'Jacket'] },
      { category: 'Unisex', subcategories: ['T-Shirt', 'Accessories', 'Shoes'] }
    ];
    
    const selectedCategory = categories[Math.floor(Math.random() * categories.length)];
    const subcategory = selectedCategory.subcategories[Math.floor(Math.random() * selectedCategory.subcategories.length)];
    
    const sizes = ['S', 'M', 'L', 'XL'];
    const colors = ['Red', 'Blue', 'Black', 'White', 'Green', 'Yellow'];
    
    return {
      id: index + 1,
      name: `${selectedCategory.category}'s ${subcategory} ${index + 1}`,
      category: selectedCategory.category,
      subcategory: subcategory,
      price: parseFloat((Math.random() * 100 + 10).toFixed(2)),
      size: sizes[Math.floor(Math.random() * sizes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      image: `path/to/image${Math.floor(Math.random() * 5) + 1}.avif`
    };
  });



    return(
        <div className="mt-6">
            <Promo/>
            <Nav toggle = {toggle} font="brown"/>
            <div>

                <div className="fixed top-32 bg-gray-500 text-white w-1/6" style={{fontSize:"clamp(1rem, 2.5vw, 1.5rem)"}}>
                <details open>
                    <summary>CATEGORY</summary>
                    <div>
                        <details open>
                            <summary>Woman</summary>
                            <div>
                                <div>
                                    <label htmlFor="dress">
                                        <input type="checkbox" id="dress" />
                                        <span>Dress</span>
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="shirt">
                                        <input type="checkbox" id="shirt" />
                                        <span>Shirt</span>
                                    </label>
                                </div>
                            </div>
                        </details>
                        <details>
                            <summary>Man</summary>
                            <div>
                                {/* You can add checkboxes here like in the "Woman" section */}
                                <div>Content for Man goes here...</div>
                            </div>
                        </details>
                        <details>
                            <summary>Unisex</summary>
                            <div>
                                {/* You can add checkboxes here like in the "Woman" section */}
                                <div>Content for Unisex goes here...</div>
                            </div>
                        </details>
                    </div>
                </details>
                <div>
                    <details>
                        <summary>PRICE</summary>
                        <div>Content for price goes here...</div>
                    </details>
                </div>
                <div>
                    <details>
                        <summary>SIZE</summary>
                        <div>Content for size goes here...</div>
                    </details>
                </div>
                <div>
                    <details>
                        <summary>COLOR</summary>
                        <div>Content for color goes here...</div>
                    </details>
                </div>
                </div>

                <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 ml-[17%] mt-20">
                    {products.map(product => (
                        <Card 
                        key={product.id}
                        type="promo"
                        category={product.category}
                        subcategory={product.subcategory}
                        price={product.price}
                        size={product.size}
                        color={product.color}
                        name={product.name}
                        image={product.image}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}