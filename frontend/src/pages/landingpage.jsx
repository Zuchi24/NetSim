import Navbar from "../components/navbar";
import useReveal from "../hooks/useReveal";
import Hero from "../components/Hero";

export default function LandingPage() {
    useReveal(); 
    return(
       <>
        <Hero/>
       </> 
    );
}