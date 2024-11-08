import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";

export const App = () => {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <div className="mx-auto w-full max-w-[47rem] space-y-8">
        <section className="space-y-8">
          <div className="flex">
            <div className="flex-1 space-y-2">
              <h1 className="text-2xl font-bold text-slate-800">
                Diego Millan
              </h1>
              <p className="max-w-md text-pretty font-mono text-sm text-slate-600">
                Frontend developer specializing in React, dedicated to crafting
                products with meticulous attention to detail.
              </p>
              <a
                href="https://maps.app.goo.gl/skxVDDjqnbxU8hSH8"
                target="_blank"
                className="inline-flex gap-x-1 align-baseline leading-none hover:underline text-xs text-slate-500"
              >
                <RiGlobalFill className="text-pretty" />
                <span>Bucaramanga, Colombia, South America</span>
              </a>

              <div className="flex gap-x-1.5">
                <button
                  className="border p-1.5 rounded text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  onClick={() =>
                    (window.location.href = "mailto:tuemail@example.com")
                  }
                >
                  <MdOutlineMailOutline size={22} />
                </button>
                <button
                  className="border p-1.5 rounded text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  onClick={() => (window.location.href = "tel:+123456789")}
                >
                  <FiPhone size={22} />
                </button>
                <button
                  className="border p-1.5 rounded text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  onClick={() =>
                    window.open("https://github.com/diegomillandev", "_blank")
                  }
                >
                  <FaGithub size={22} />
                </button>
                <button
                  className="border p-1.5 rounded text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/diegomillandev",
                      "_blank"
                    )
                  }
                >
                  <FaLinkedin size={22} />
                </button>
                <button
                  className="border p-1.5 rounded text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  onClick={() =>
                    window.open("https://x.com/Diegomillandev", "_blank")
                  }
                >
                  <FaSquareXTwitter size={22} />
                </button>
              </div>
            </div>

            <div className="w-36 h-36 rounded overflow-hidden bg-slate-800">
              <img
                src="https://avatars.githubusercontent.com/u/121193438?v=4"
                alt={`avatar of Diego Millan`}
                className=""
              />
            </div>
          </div>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold text-slate-800">About</h2>
          <p className="text-pretty font-mono text-sm font-thin text-slate-500">
            {`As a Web Developer, I bring ideas to life from concept to
            deployment, with a focus on both frontend and backend development. I
            work primarily with HTML, CSS, JavaScript, React, Next.js, Node.js,
            and Mongoose. I'm a collaborative team player, always eager to learn
            and stay updated with the latest technologies.`}
          </p>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold text-slate-800">Work Experience</h2>
          <div className="flex flex-col space-y-1.5">
            <header className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                <a
                  className="hover:underline uppercase tracking text-slate-900/90"
                  href={`#`}
                >
                  Indra
                </a>
                <span className="inline-flex gap-x-1">
                  <span className="text-xs font-extralight bg-gray-200 py-0.5 px-1.5 rounded">
                    Remote
                  </span>
                </span>
              </h3>
              <div className="text-sm tabular-nums text-slate-400">
                {2023} - <span className="capitalize">{`current`}</span>
              </div>
            </header>

            <h4 className="font-mono leading-none text-slate-900">{`Systems Engineer`}</h4>

            <p className="text-pretty font-mono text-sm text-slate-500 font-thin">
              I’m currently a Systems Engineer at INDRA, a multinational tech
              solutions and services company, where I contribute to the
              development and maintenance of internal applications as part of
              the engineering team.
            </p>
          </div>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold text-slate-800">Education</h2>
          <div className="flex flex-col space-y-1.5">
            <header className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="uppercase tracking text-slate-900/80 font-bold leading-none">
                Servicio Nacional de Aprendizaje
              </h3>
              <div className="text-sm tabular-nums text-slate-400">
                {2012} - <span className="capitalize">{2014}</span>
              </div>
            </header>
            <h4 className="font-mono leading-none text-slate-900">{`Technologist`}</h4>
            <p className="text-pretty font-mono text-sm text-slate-500 font-thin">
              I hold a Technology degree in Computer Equipment Maintenance,
              Structured Cabling Design, and Installation.
            </p>
          </div>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold text-slate-800">Skills</h2>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-slate-800/90 text-white text-xs py-1 px-2 rounded">
              JavaScript
            </span>
            <span className="bg-slate-800/90 text-white text-xs py-1 px-2 rounded">
              React
            </span>
            <span className="bg-slate-800/90 text-white text-xs py-1 px-2 rounded">
              Node.js
            </span>
            <span className="bg-slate-800/90 text-white text-xs py-1 px-2 rounded">
              HTML
            </span>
            <span className="bg-slate-800/90 text-white text-xs py-1 px-2 rounded">
              CSS
            </span>
            <span className="bg-slate-800/90 text-white text-xs py-1 px-2 rounded">
              TailwindCSS
            </span>
            <span className="bg-slate-800/90 text-white text-xs py-1 px-2 rounded">
              TypeScript
            </span>
            <span className="bg-slate-800/90 text-white text-xs py-1 px-2 rounded">
              MongoDB
            </span>
          </div>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold text-slate-800">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border p-3 flex flex-col gap-y-2 rounded">
              <h3 className="text-slate-900 font-bold">
                <a
                  href="https://2048-gameclone.netlify.app"
                  className="hover:underline"
                  target="_blank"
                >
                  2048 Game
                </a>
                <span className="bg-gray-200 font-light text-xs py-0.5 px-1 rounded ml-2">
                  Clone
                </span>
              </h3>
              <p className="text-slate-500/90 font-mono text-xs flex-1 ">
                A clone of the 2048 game in vanilla JavaScript.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-slate-200 text-slate-900 text-xs py-1 px-2 rounded">
                  HTML
                </span>
                <span className="bg-slate-200 text-slate-900 text-xs py-1 px-2 rounded">
                  CSS
                </span>
                <span className="bg-slate-200 text-slate-900 text-xs py-1 px-2 rounded">
                  JavaScript
                </span>
              </div>
            </div>
            <div className="border p-3 flex flex-col gap-y-2 rounded">
              <h3 className="text-slate-900 font-bold">
                <a
                  href="https://phenomenal-elf-843636.netlify.app"
                  target="_blank"
                  className="hover:underline"
                >
                  Nike.com
                </a>
                <span className="bg-gray-200 font-light text-xs py-0.5 px-1 rounded ml-2">
                  Clone
                </span>
              </h3>
              <p className="text-slate-500/90 font-mono text-xs flex-1">
                A clone of the Nike.com website.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-slate-200 text-slate-900 text-xs py-1 px-2 rounded">
                  JavaScript
                </span>
                <span className="bg-slate-200 text-slate-900 text-xs py-1 px-2 rounded">
                  ReactJs
                </span>
                <span className="bg-slate-200 text-slate-900 text-xs py-1 px-2 rounded">
                  HTML
                </span>
                <span className="bg-slate-200 text-slate-900 text-xs py-1 px-2 rounded">
                  TailwindCSS
                </span>
              </div>
            </div>
            <div className="border p-3 flex flex-col gap-y-2 rounded">
              <h3 className="text-slate-900 font-bold">
                <a
                  href="https://fakestore-millandev.netlify.app/store"
                  target="_blank"
                  className="hover:underline"
                >
                  Store App
                </a>
              </h3>
              <p className="text-slate-500/90 font-mono text-xs">
                A store app using a fake store API.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-slate-200 text-slate-900 text-xs py-1 px-2 rounded">
                  TypeScript
                </span>
                <span className="bg-slate-200 text-slate-900 text-xs py-1 px-2 rounded">
                  ReactJs
                </span>
                <span className="bg-slate-200 text-slate-900 text-xs py-1 px-2 rounded">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
