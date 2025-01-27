import { useState, useContext } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import useOffline from "../utils/useOffline";
import userContext from "../utils/UserContext";

const loggedInUser = () => {
  // API call to authenticate the user
  return false;
};

const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2 transition-transform duration-300 hover:scale-105"
      alt="logo"
      // src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
      src={logo}
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOffline = useOffline();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [title, setTitle] = useState("FoodVilla");

  const { user } = useContext(userContext);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-blue-300 shadow-lg p-4">
      <Title />

      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✖️" : "☰"}
      </button>

      {/* Just for understanding about useState */}
      {/* <h1>{title}</h1>
            <button onClick={() => setTitle("New Food App")}>Change Title</button> */}

      <div
        className={`flex-col md:flex md:flex-row ${
          isMenuOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          {/* Link is just similar to the <a> tag */}
          {/* <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link> */}
          <li className="text-white hover:text-blue-500 transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white hover:text-blue-500 transition-colors">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-white hover:text-blue-500 transition-colors">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="text-white hover:text-blue-500 transition-colors">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="text-white hover:text-blue-500 transition-colors">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>

      {/* JS Expressions and Statements */}
      {/* You cannot do this thing here in the React as it is not a JS Expression
            You can only use JS Expressions in the JSX and not the Statements
            {
              a=10;
              console.log(a);
            }

            But you can do this thing here in the React as it is a JS Expression
              ((a=10), console.log(a));
      */}

<div className="flex items-center space-x-4 mt-4 md:mt-0">
        <h1 className={`text-2xl ${isOffline ? "text-red-500" : "text-green-500"}`}>
          {/* {isOffline ? "❌" : "✔️"} */}
        </h1>
        {user.name}
        {isLoggedIn ? (
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors" 
            onClick={() => setIsLoggedIn(false)}
          >
            LogOut
          </button>
        ) : (
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors" 
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
