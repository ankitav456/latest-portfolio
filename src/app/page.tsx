import { FunctionComponent } from "react";
import "./page.module.css"
import Navbar from "@/components/navbar/navbar";

interface HomeProps {
  
}
 
const Home: FunctionComponent<HomeProps> = () => {
  return ( 
    <div className="main-container">
    <Navbar/>
    </div>
    );
}
 
export default Home;