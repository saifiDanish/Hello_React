import RestaurantCard from "./RestaurantCard";
import dataOBJ from "../utils/constant";


const Body = ()=>{
    return (
      <div className="body">
  
        <div className="search">Search</div>
        <div className="res-container"> 
        
        {dataOBJ.map((data)=>{
          return <RestaurantCard resData={data}/>
        })};
        
        </div>
          
      </div>
    )
  }

  export default Body;