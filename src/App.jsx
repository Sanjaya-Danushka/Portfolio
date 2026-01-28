import React from "react";
import Navbar from "./layout/navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contacts from "./sections/Contacts.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
};

export default App;
