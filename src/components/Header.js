import { useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { FaCartShopping, FaCross, FaGit, FaGithub } from "react-icons/fa6";
import { FaCut } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Header = function () {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const cartSize = cartItems.reduce((total, item) => total + item.quantity, 0);
  console.log(cartSize);

  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <nav className="w-full bg-amber-300  h-16 flex shadow-2xl shadow-white justify-between items-center px-12 md:px-12 sm:px-28 lg:px-36">
      <a
        href="/"
        className=" flex items-center hover:opacity-90 hover:text-slate-600"
      >
        <div className="">
          <img
            className="h-12 md:h-[55px] drop-shadow-2xl  "
            alt="logo"
            src="https://i.imgur.com/KwkSpvy.png"
          />
        </div>
        <div>
          <div className="text-xl  sm:text-[20px] md:text-[18px] ml-2 sm:ml-2  font-bold">
            React Bhojanalya
          </div>
        </div>
      </a>

      <div className=" hidden md:block font-semibold  text-blue-600">
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
                <FaCartShopping /> {(" ", cartSize)} Cart
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
            <FaCartShopping /> {(" ", cartSize)}
          </div>
        </Link>
        <div className="h-[44px] border-l-2 opacity-35"></div>
        <button
          className=" group space-y-1 text-2xl cursor-pointer text-blue-600  p-2"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          &#8801;
        </button>
        {isOpen && (
          <ul className=" w-screen absolute z-50 -top-0 pb-10 group-focus:top-0 right-0 flex flex-col justify-end duration-300 space-y-3  bg-gray-400 text-neutral-50 shadow-3xl  ">
            <button
              className="cursor-pointer hover:text-amber-400 flex justify-end m-2 "
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <RxCross2 className="size-8 flex hover:shadow-2xl shadow-amber-100 " />
            </button>
            <button
              className=" hover:bg-gray-300 flex justify-center py-2 hover:text-amber-600 cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Link to="/">Home</Link>
            </button>
            <button
              className=" hover:bg-gray-300 flex justify-center py-2 hover:text-amber-600 cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Link to="/about">About Us</Link>
            </button>
            <button
              className=" hover:bg-gray-300  flex justify-center py-2 hover:text-amber-600 cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Link to="/contact">Contact Us</Link>
            </button>
            <button
              className=" hover:bg-gray-300  flex justify-center py-2 hover:text-amber-600 cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Link to="/cart">
                <div className="">Cart</div>
              </Link>
            </button>
            <button
              className=" hover:bg-gray-300 flex  justify-center py-2 hover:text-amber-600 cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Link to="https://github.com/paramveer665/React-Bhojanalya">
                <div className="flex items-center">
                  <FaGithub /> Git
                </div>
              </Link>
            </button>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
