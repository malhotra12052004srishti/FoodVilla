import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  // API call to authenticate the user
  return false;
};

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      // src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
      src={logo}
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const title = "Food Villa";
  // const [title, setTitle] = useState("FoodVilla");
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>

      {/* Just for understanding about useState */}
      {/* <h1>{title}</h1>
            <button onClick={() => setTitle("New Food App")}>Change Title</button> */}

      <div className="nav-items">
        <ul>
          {/* Link is just similar to the <a> tag */}
          {/* <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link> */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
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

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
