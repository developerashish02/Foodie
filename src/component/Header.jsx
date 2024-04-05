import { RES_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useIsOnline from "../hooks/useIsOnline";

const Header = () => {
  const isOnline = useIsOnline();
  return (
    <header
      className={`bg-white text-black px-4 py-6 h-24 shadow-md bg-fixed ${
        !isOnline ? "pointer-events-none" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={RES_LOGO} alt="nav-logo" className="w-16" />
        </Link>

        <nav className="mr-4">
          <ul className="flex space-x-14 text-lg ">
            <Link to="/">
              <li className="space-x-2 hover:text-gray-300 font-[poppies]">
                <i className="fa-solid fa-house"></i>
                <a href="#">Home</a>
              </li>
            </Link>

            <li className="space-x-2 hover:text-gray-300 font-[poppies]">
              <i className="fa-solid fa-bars"></i>
              <a href="#"> signIn </a>
            </li>
            <li className="font-[poppies]">
              <a href="#" className="hover:text-gray-300">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </li>

            <Link to="/sign-in">
              <li className="space-x-2 hover:text-gray-300 font-[poppies]">
                <i className="fa-solid fa-address-book"></i>
                <a href="#">Sign In</a>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
