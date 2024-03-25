import { useState } from "react";
import { RES_LOGO } from "../utils/constants";

const Header = () => {
  const [signIn, setSignIn] = useState("Login");
  const handleLogin = () => {
    if (signIn === "Login") {
      setSignIn("Logout");
    } else {
      setSignIn("Login");
    }
  };
  return (
    <header className="bg-white text-black px-4 py-6 h-24 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img src={RES_LOGO} alt="nav-logo" className="w-16" />

        <nav className="mr-4">
          <ul className="flex space-x-14 text-lg ">
            <li className="space-x-2 hover:text-gray-300">
              <i className="fa-solid fa-house"></i>
              <a href="#">Home</a>
            </li>
            <li className="space-x-2 hover:text-gray-300" onClick={handleLogin}>
              <i className="fa-solid fa-bars"></i>
              <a href="#"> {signIn} </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </li>
            <li className="space-x-2 hover:text-gray-300">
              <i className="fa-solid fa-address-book"></i>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
