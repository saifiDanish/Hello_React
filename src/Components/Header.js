import { Link } from "react-router-dom";


const Header = ()=>{
    return (
      <div className="headContainer">
        <div className="logo-container">
          <img  className="logo" src = "https://e0.pxfuel.com/wallpapers/174/289/desktop-wallpaper-printable-customizable-restaurant-logo-templates-food-logo-thumbnail.jpg"/>
        </div>
        <div className="nav-items">
          <ul className="li-items">
            <li>
              <Link to="/Home">Home</Link>
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