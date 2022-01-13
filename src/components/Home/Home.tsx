import About from "../about/About";
import Contact from "../contact/Contact";
import Card from "../eventCard/Card";
import TopEvent from "../topEvent/TopEvent";
import './home.css'

const Home=()=> { 
  return (
    <div className="Home" id="home">
      <TopEvent />
      <Card />
      <About/>
      <Contact />
    </div>
  );
}

export default Home;
