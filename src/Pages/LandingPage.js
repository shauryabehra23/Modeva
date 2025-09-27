import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Promo from "../Components/Promo";
import SideScroll from "../Components/SideScroll";

export default function LandingPage()
{
    return (
      <div className="mt-9 min-h-screen">
				<Promo/>
        <div className="flex flex-col">
            <Header/>
            <main>

              <section className="grid">
                pics
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