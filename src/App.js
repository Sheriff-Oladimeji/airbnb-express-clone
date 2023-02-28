import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/card";
import datas from "./data";
import "./styles.css"

function App() {
  const cards = datas.map(card=>{
   return(
    <Card
    img={card.img}
    rating="5.0"
    reviewCount={6}
    location="USA"
    title="Life lessons with Katie Zaferes"
    price={136}
   />
   )
  })

  return (
   <div>
    <Navbar/>
    <Hero/>
    {cards}
   </div>
  );
}

export default App;
