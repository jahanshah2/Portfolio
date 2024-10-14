import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <div className="lg:mx-32 md:mx-4">
        <Intro />
        <About />
        <Projects />
      </div>
    </>
  );
}
