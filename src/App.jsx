import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import Donation from "./components/Donation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Impact />
      {/* <Testimonials /> */}
      <Donation />
      <Footer />
    </div>
  );
}

export default App;
