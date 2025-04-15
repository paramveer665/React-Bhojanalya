import { useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";

const Header = function () {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  const mobiledNav = () => {};

  return (
    <nav className="w-full bg-amber-300  h-16 flex shadow-2xl shadow-white justify-between items-center p-4 md:p-4 sm:p-2">
      <a
        href="/"
        className=" flex items-center hover:opacity-90 hover:text-slate-600"
      >
        <div className="">
          <img
            className="h-12 md:h-[60px] drop-shadow-2xl  "
            alt="logo"
            src="https://i.imgur.com/KwkSpvy.png"
          />
        </div>
        <div>
          <div className="text-xl  sm:text-[25px] ml-2 sm:ml-2  font-bold">
            React Bhojanalya
          </div>
        </div>
      </a>

      <div className=" hidden md:block font-medium text-blue-600">
        <ul className="flex sm:text-[17px] md:text-m ">
          <li className="mr-2 md:mr-4 sm:mr-3.5 hover:scale-105   ">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-2 md:mr-4 sm:mr-3.5 hover:scale-105 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mr-2 md:mr-4 sm:mr-3.5 hover:scale-105  ">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mr-2 md:mr-4 sm:mr-3.5 hover:scale-105 ">
            <Link to="/cart">
              <div className="flex items-center">
                <FaCartShopping /> {(" ", cartItems.length)} Cart
              </div>
            </Link>
          </li>

          <li className=""></li>
        </ul>
      </div>
      <div className="hidden md:block">
        {" "}
        {isLoggedin ? <Link to="/about/profile">Profile</Link> : ""}
        {!isLoggedin ? (
          <button
            className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-700  hover:cursor-pointer"
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        ) : (
          <button
            className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-700 hover:cursor-pointer"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        )}
      </div>
      <div className="md:hidden flex items-center text-lg h-11 bg-amber-200 rounded-lg shadow-2xl ">
        {" "}
        <Link to="/cart">
          <div className="flex items-center pt-2 m-2 text-blue-600 shadow-2xl hover:text-blue-400 ">
            <FaCartShopping /> {(" ", cartItems.length)}
          </div>
        </Link>
        <div className="h-[44px] border-l-2 opacity-35"></div>
        <button
          className="font-bold text-3xl  mx-1 mr-3 cursor-pointer text-blue-600 hover:text-blue-400  border-slate-700  "
          onClick={() => {
            mobiledNav();
          }}
        >
          &#8801;
        </button>
      </div>
    </nav>
  );
};

export default Header;
