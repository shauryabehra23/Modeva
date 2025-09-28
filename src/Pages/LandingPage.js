import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Promo from "../Components/Promo";
import SideScroll from "../Components/SideScroll";
import grid1 from "../pics/grid1.avif";
import grid2 from "../pics/grid2.avif";
import grid3 from "../pics/grid3.avif";


export default function LandingPage()
{
    return (
      <div className="mt-9 min-h-screen">
				<Promo/>
        <div className="flex flex-col">
            <Header/>
            <main>

              <section className="grid grid-cols-2 grid-rows-2 w-5/6">
                <div className="bg-[url('../pics/grid1.avif')] ">Casual Women</div>
                <div className="bg-[url('../pics/grid2.avif')]">Formal Women</div>
                <div className="bg-[url('../pics/grid3.avif')]">Formall Men</div>
              </section>

              <section>
                <h1></h1>
                <SideScroll type="promo" />
                <button><a>See More</a></button>
              </section>
              
              <section>
                <h1></h1>
                <SideScroll type="promo" />
                <button><a>See More</a></button>
              </section>

              <section className="grid">
                features
              </section>

              <section>media</section>

              <section>
                <SideScroll type="reviews"/>
              </section>

            </main>
            <Footer/>
        </div>
			</div>
    );
}