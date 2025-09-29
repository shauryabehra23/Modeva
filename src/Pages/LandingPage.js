import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Promo from "../Components/Promo";
import SideScroll from "../Components/SideScroll";
import grid1 from "../pics/grid1.avif";
import grid2 from "../pics/grid2.avif";
import grid3 from "../pics/grid3.avif";
import rand2 from "../pics/rand2.png";


export default function LandingPage()
{
    return (
      <div className="mt-9 min-h-screen">
				<Promo/>
        <div className="flex flex-col gap-4">
            <Header/>
            <main>

              <section className="grid grid-cols-2 grid-rows-2 w-5/6 m-auto">
                <div style={{ backgroundImage: `url(${grid1})`}} className="bg-cover bg-center text-white min-h-[200px] p-4 flex items-center font-extrabold text-lg row-span-1">Casual Women</div>
                <div style={{ backgroundImage: `url(${grid2})`}} className="bg-cover bg-center text-white min-h-[200px] p-4 flex items-center font-extrabold text-lg row-span-2">Formal Women</div>
                <div style={{ backgroundImage: `url(${grid3})`}} className="bg-cover bg-center text-white min-h-[200px] p-4 flex items-center font-extrabold text-lg row-span-1">Formal Men</div>
              </section>

              <section className="h-[clamp(70, 768px, 130)">
                <h1 className="text-6xl text-left m-2">Promo One</h1>
                <div><SideScroll type="promo" /></div>
                
              </section>
              
              <div>
                <button className="text-left"><a>See More</a></button>
              </div>

              <section className="h-130">
                <h1 className="text-6xl text-left m-2">Promo Two</h1>
                <div><SideScroll type="promo" /></div>
                
              </section>

              <div>
                <button><a>See More</a></button>
              </div>

              <section className="grid">
                features
              </section>

              <section>media</section>

              <section className="h-2/3">
                <SideScroll type="reviews"/>
              </section>

            </main>
            <Footer/>
        </div>
			</div>
    );
}