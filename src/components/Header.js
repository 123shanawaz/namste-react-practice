import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo"></img>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
