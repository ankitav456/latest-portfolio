import { FunctionComponent } from "react";
import "./page.module.css"
import Navbar from "@/components/navbar";
import HomeSection from "@/components/home";

interface HomeProps {
  
}
 
const Home: FunctionComponent<HomeProps> = () => {
  return ( 
    <div className="main-container">
    <Navbar/>
    <HomeSection/>
    </div>
    );
}
 
export default Home;