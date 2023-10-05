import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const Header = ()=>{
  const isOnline = useOnlineStatus();
  const [loggedIn,setLoggedIn] = useState("Logout");

  const {loggedInUser} = useContext(UserContext);
  // console.log(UserName.loggedInUser);
    return (
      <div className="flex justify-between items-center bg-green-100">
        <div className="w-20">
          <img  className="logo p-1"  src = "https://e0.pxfuel.com/wallpapers/174/289/desktop-wallpaper-printable-customizable-restaurant-logo-templates-food-logo-thumbnail.jpg"/>
        </div>
        <div className="flex ">
          <ul className="flex px-20 ">
            <li className="m-2">
                Online Status: {isOnline===true?"✅":"❌"}
            </li>
            <li className="m-2">
              <Link to="/Home">Home</Link>
            </li>
            <li className="m-2">
              <Link to="/IndiaMart">IndiaMart</Link>
            </li>
            <li className="m-2"><Link to="/About">About</Link></li>
            <li className="m-2"><Link to="/Contact">Contact Us</Link></li>
            <li className="m-2">Cart</li>
            <li className="m-2 cursor-pointer" onClick={()=>{
              loggedIn==="Logout"?setLoggedIn("Login"):setLoggedIn("Logout");
            }}>{loggedIn} - {loggedInUser}</li>

          </ul>
        </div>
      </div>
    )
  }

  export default Header;