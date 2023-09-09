import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
  const isOnline = useOnlineStatus();
    return (
      <div className="headContainer">
        <div className="logo-container">
          <img  className="logo" src = "https://e0.pxfuel.com/wallpapers/174/289/desktop-wallpaper-printable-customizable-restaurant-logo-templates-food-logo-thumbnail.jpg"/>
        </div>
        <div className="nav-items">
          <ul className="li-items">
            <li>
                Online Status: {isOnline===true?"✅":"❌"}
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/IndiaMart">IndiaMart</Link>
            </li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li className="cart">Cart</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;