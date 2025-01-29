import { useState } from "react";
import { Link } from "react-router";
const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src="https://i.imgur.com/rxc4Nd9.jpeg" />
  </a>
);

const Header = function () {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />

      <div className="header-child">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="https://github.com/paramveer665/React-Bhojanalya/">
              Git
            </Link>
          </li>
          <li>Cart</li>
        </ul>
        <h4>Project is in development phase - </h4>
      </div>
      {!isLoggedin ? (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
