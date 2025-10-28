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
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="mt-9 ">
      <Promo />
      <div className="flex flex-col items-center gap-4">
        <Header />
        <main className="w-11/12">
          <section className="grid grid-cols-2 grid-rows-2 w-5/6 m-auto">
            <div
              style={{ backgroundImage: `url(${grid1})` }}
              className="bg-cover bg-center text-white min-h-[200px] p-4 flex items-center font-extrabold text-3xl row-span-1"
            >
              Casual Women
            </div>
            <div
              style={{ backgroundImage: `url(${grid2})` }}
              className="bg-cover bg-center text-white min-h-[200px] p-4 flex items-center font-extrabold text-3xl row-span-2"
            >
              Formal Women
            </div>
            <div
              style={{ backgroundImage: `url(${grid3})` }}
              className="bg-cover bg-center text-white min-h-[200px] p-4 flex items-center font-extrabold text-3xl row-span-1"
            >
              Formal Men
            </div>
          </section>

          <section className="w-full h-[clamp(70, 768px, 130)]">
            <h1 className="text-6xl text-left m-2">Promo One</h1>
            <div>
              <SideScroll type="promo" />
            </div>
          </section>

          <div>
            <button className="text-left bg-[#8B4513]">
              <Link to="/products" className="p-1">
                See More
              </Link>
            </button>
          </div>

          <section className="h-130">
            <h1 className="text-6xl text-left m-2">Promo Two</h1>
            <div>
              <SideScroll type="promo" />
            </div>
          </section>

          <div>
            <button className="text-left bg-[#8B4513]">
              <Link to="/products" className="p-1">
                See More
              </Link>
            </button>
          </div>

          <section className="grid">
            <Features />
          </section>

          <section className="min-h-[1/6] max-h-[1/2] w-auto">
            <ReactPlayer
              src="https://www.youtube.com/watch?v=UYDrMA16248&t=7s"
              className="w-11/12 h-auto m-auto"
            />
          </section>

          <section className="h-2/3 bg-gray-400 mt-5">
            <SideScroll type="reviews" />
          </section>
        </main>
        {<Footer />}
      </div>
    </div>
  );
}
