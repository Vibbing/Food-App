import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const authenticateUser = () => {
  return true;
};

const Title = () => {
  return (
    <a href="/">
      <img
        className="h-20 w-20"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq_LmiEG7PEV3p9MGjSYDxsn1BzvEy5fEdg"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "cart");
  return (
    <div className="flex justify-between bg-violet-300 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home </Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>

          <li className="px-2">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
