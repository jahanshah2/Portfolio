"use client";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

function Intro() {
  return (
    <section
      id="Home"
      className="mt-[100px] h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start"
    >
      <div>
        <Image
          src={"/jahan.jpg"}
          alt="image"
          width={230}
          height={0}
          className="rounded-full shadow-2xl shadow-slate-800"
        />
      </div>
      <div className="md:ml-20 sm:ml-12 md:w-1/2">
        <h1 className="text-7xl uppercase hidden md:block">Web Developer</h1>
        <h1 className="text-2xl mt-5 md:text-3xl">
          Hi, I&#39;m{" "}
          <span className="text-red-600 text-3xl md:text-4xl">Jahan Shah</span>
        </h1>
        <p className="mt-4 mb-4 text-[14px]">
          I&#39;m a passionate junior frontend web developer with a solid
          foundation in HTML, CSS, and JavaScript. Currently, I am expanding my
          skillset by mastering Next.js while pursuing a course in artificial
          intelligence. My goal is to build innovative and efficient solutions,
          combining my growing technical expertise with a creative approach to
          problem-solving.
        </p>
        <ScrollLink className="bg-zinc-400 w-20 h-7 px-3 py-1 rounded cursor-pointer" to={'Projects'} >Projects</ScrollLink>
      </div>
    </section>
  );
}

export default Intro;
