import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold">React Bhojanalya</h2>
        <p className="text-sm text-gray-400 mt-1">
          Serving delicious food with love!
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>

          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Bhojanalya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
