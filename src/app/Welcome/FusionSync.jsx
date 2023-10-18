import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-red.svg";
import mockup from "../../assets/images/homepage.svg";

function FusionSync() {
  return (
    <>
      <main className="relative lg:h-screen md:h-fit max-sm:h-fit bg-white dark:bg-gray-800">
        <header className="h-24 w-full items-center lg:h-0 max-sm:h-0"></header>

        <div className="container relative mx-auto grid px-6 py-16 lg:grid-cols-2">
          <div className="grid-col-2 relative z-20 flex flex-col sm:w-2/3 lg:w-3/5">
            <span className="mb-10 h-2 w-20 bg-gray-800 dark:bg-white"></span>
            <Link to="/" className="w-full">
              <img src={logo} alt="fusionsync logo" className="w-30" />
            </Link>
            <h1 className="font-bebas-neue flex flex-col text-6xl font-black uppercase leading-none text-gray-800 dark:text-white sm:text-8xl">
              Empower
              <span className="text-5xl sm:text-7xl">Your Workforce</span>
            </h1>
            <p className="mt-4 text-sm text-gray-700 dark:text-white sm:text-base">
              Elevate your team's potential with our Workforce Management Software. Streamline operations,
              empower employees, and drive success.
            </p>
            <div className="mt-8 flex">
              <Link
                to="/login"
                className="text-md mr-4 rounded-lg border-2 border-transparent bg-pink-500 px-4 py-2 uppercase text-white hover:bg-pink-400">
                Login Here
              </Link>
              <Link
                to="/"
                className="text-md rounded-lg border-2 border-pink-500 bg-transparent px-4 py-2 uppercase text-pink-500 hover:bg-pink-500 hover:text-white dark:text-white">
                Read more
              </Link>
            </div>
          </div>
          <div className="grid-col-2 ml-16 mt-20 max-sm:ml-0">
            <img src={mockup}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default FusionSync;
