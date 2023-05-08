import React from "react";
import Header from "./Components/Header";
import Introduction from "./Components/Intro";
import About from "./Components/About";
// import Portfolio from "./Components/Portfolio";
// import Project from "./Components/Project";
import Footer from "./Components/Footer";

function App() {
    return (
        <main>
            <Header />
            <Introduction />
            <About />
            {/* <Portfolio />  */}
            {/* <Project /> */}
            <Footer />
        </main>
    );
}

export default App;
