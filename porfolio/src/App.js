import React from "react";
import Header from "./Components/Header";
import About from "./Components/AboutMe";
// import Portfolio from "./Components/Portfolio";
// import Project from "./Components/Project";
import Footer from "./Components/Footer";
import { BsGithub } from "react-icons/bs";

function App() {
    return (
        <main>
            <Header />
            <About />
            {/* <Portfolio />  */}
            {/* <Project /> */}
            <Footer />
            <BsGithub />
        </main>
    );
}

export default App;
