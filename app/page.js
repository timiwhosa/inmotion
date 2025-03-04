import HomeHero from "./components/home/hero";
import Services from "./components/home/services";
import Nav from "./components/nav";

export default function Home() {
  return (
    <div className="md:px-20" >
      <Nav /> 
      <HomeHero/>
      <Services/> 
    </div>
  );
}
