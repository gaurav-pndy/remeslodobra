import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Programs from "../components/Home/Programs";
import Impact from "../components/Home/Impact";
import Donation from "../components/Home/Donation";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Programs />
      <Impact />
      {/* <Testimonials /> */}
      <Donation />
    </div>
  );
}

export default App;
