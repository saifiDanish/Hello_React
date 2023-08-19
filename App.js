// const heading = React.createElement(
//   "h1",
//   { id: "head" ,},
//   "Hello World from basic"
// );

import React from "react";
import  ReactDOM  from "react-dom";



const Body = ()=>{
  return (
    <div className="body">

      <div className="search">Search</div>
      <div className="res-container"> 
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
        <RestaurantCard/>
      
      </div>
        
    </div>
  )
}

const RestaurantCard=()=>{

  return (
    <div className="res_card">
        <img className="res_image" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mghci4j6xjg0gk78kd0d"/>
        <div className="description">
        <h2>Okhla Corner</h2>
        <h3>Cuisens : Biryani, Nihari, korma, Bheja, Chole Bhature</h3>
        <p>Ratings : 4⭐</p>
        </div>
    </div>
  )
}


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


  const AppLayout = ()=>{
    return (
      // <Hello/>
      <>
        <Header/>
        <Body/>
      </>
      // <h1>Hello</h1>
    )
  }


  const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
  
  // reactRoot.render(heading);
  reactRoot.render(<AppLayout/>);
