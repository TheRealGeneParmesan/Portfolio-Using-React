import React, { useRef } from "react";
import Header from "./Components/Header";
import Introduction from "./Components/Intro";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
// import Project from "./Components/Project";
import Footer from "./Components/Footer";
import "./App.css";

function App() {

    return (
        <main>
            <Header />
            <Introduction />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
