import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/card";
import "./styles.css"
import img1 from "./images/image 12.png"
function App() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Card
img={img1}
rating="5.0"
reviewCount={6}
country="USA"
title="Life lessons with Katie Zaferes"
price={136}
    />
   </div>
  );
}

export default App;
