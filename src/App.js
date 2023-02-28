import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/card";
import datas from "./data";
import "./styles.css"

function App() {
  const cards = datas.map(card=>{
   return(
    <Card
    img={card.coverImg}
    rating={card.stats.rating}
    reviewCount={card.stats.reviewCount}
    location={card.location}
    title={card.title}
    price={card.price}
   />
   )
  })

  return (
   <div>
    <Navbar/>
    <Hero/>
    <section className="card-list">
    {cards}
    </section>
   </div>
  );
}

export default App;
