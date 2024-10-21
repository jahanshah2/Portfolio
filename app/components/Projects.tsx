import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <section
      id="Projects"
      className="mt-[300px] flex flex-col text-center justify-center items-center my-40"
    >
      <h1 className="text-6xl my-6">Projects</h1>

      <div className="flex flex-col justify-center items-center md:flex-row">
        <Link target="_blank" href={"https://github.com/jahanshah2/Advance_Calculator"}>
          <Image
            src={"/simple-calculator.jpg"}
            alt="image"
            height={0}
            width={290}
            className="mt-4 p-2 border"
          />
        </Link>
        <Link target="_blank" href={"https://github.com/jahanshah2/Digital-Clock"}>
          <Image
            src={"/digital-clock.png"}
            alt="image"
            height={0}
            width={290}
            className="mt-4 p-2 border"
          />
        </Link>
        <Link target="_blank" href={"https://github.com/jahanshah2/Student_Management_System"}>
          <Image
            src={"/student-management-system.png"}
            alt="image"
            height={0}
            width={267.8}
            className="mt-4 p-2 border"
          />
        </Link>
        <Link target="_blank"  href={"https://github.com/jahanshah2/Weather_App"}>
          <Image
            src={"/weather-app.jpg"}
            alt="image"
            height={0}
            width={290}
            className="mt-4 p-2 border"
          />
        </Link>
      </div>
    </section>
  );
}

export default Projects;
