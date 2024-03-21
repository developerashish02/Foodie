import { RES_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <header className="bg-white text-black px-4 py-6 h-24 border-2 ">
      <div className="container mx-auto flex justify-between items-center ">
        <img src={RES_LOGO} alt="nav-logo" className="w-16" />

        <nav className="mr-4">
          <ul className="flex space-x-14 text-lg ">
            <li className="space-x-2 hover:text-gray-300">
              <i className="fa-solid fa-house"></i>
              <a href="#">Home</a>
            </li>
            <li className="space-x-2 hover:text-gray-300">
              <i className="fa-solid fa-bars"></i>
              <a href="#">Menu</a>
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
