import Image from "next/image";

function About() {
  return (
    <section
      id="About"
      className="mt-[250px] h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start"
    >
      <div className="m-6 md:ml-20 sm:ml-12 md:w-1/2">
        <h1 className="text-6xl my-6">About</h1>
        <h2 className="text-2xl mt-5 md:text-3xl">Get to know me!</h2>
        <p className="mt-4 mb-4 text-[14px]">
          I am a dedicated junior frontend web developer with a year of
          experience in an artificial intelligence course.
        </p>
        <p className="mt-4 mb-4 text-[14px]">
          I have a strong command of HTML, CSS, and JavaScript, and I am
          currently diving deeper into advanced frameworks like Next.js.
        </p>
        <p className="mt-4 mb-4 text-[14px]">
          My journey in AI and web development reflects my passion for learning
          and my commitment to building responsive and dynamic web applications.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <Image
          src={"/jahan.jpg"}
          alt="image"
          width={230}
          height={0}
          className="rounded shadow-2xl shadow-slate-800"
        />
        <h3 className="mt-4 text-2xl "> Skills</h3>
        <span className="mt-3 flex gap-2">
          <span className="bg-gray-300 pl-[5px] pr-[5px] rounded-md">HTML</span>
          <span className="bg-gray-300 pl-[5px] pr-[5px] rounded-md">CSS</span>
          <span className="bg-gray-300 pl-[5px] pr-[5px] rounded-md">
            Javascript
          </span>
          <span className="bg-gray-300 pl-[5px] pr-[5px] rounded-md">
            Next.js
          </span>
          <span className="bg-gray-300 pl-[5px] pr-[5px] rounded-md">
            Tailwind
          </span>
        </span>
      </div>
    </section>
  );
}

export default About;
