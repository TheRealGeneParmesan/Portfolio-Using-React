import React, { useRef } from "react";
import Header from "./Components/Header";
import Introduction from "./Components/Intro";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
// import Portfolio from "./Components/Portfolio";
// import Project from "./Components/Project";
import Footer from "./Components/Footer";

function App() {
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);

    function scrollTo(ref) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <main>
            <Header scrollTo={scrollTo} aboutRef={aboutRef} portfolioRef={portfolioRef} />
            <Introduction />
            <About aboutRef={aboutRef} />
            <Portfolio portfolioRef={portfolioRef} />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
