const Header = ()=>{
    return (
      <div className="headContainer">
        <div className="logo-container">
          <img  className="logo" src = "https://e0.pxfuel.com/wallpapers/174/289/desktop-wallpaper-printable-customizable-restaurant-logo-templates-food-logo-thumbnail.jpg"/>
        </div>
        <div className="nav-items">
          <ul className="li-items">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li className="cart">Cart</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;