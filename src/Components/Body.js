import RestaurantCard from "./RestaurantCard";
import dataOBJ from "../utils/constant";
import { useState } from "react";


const Body = ()=>{
    const [resList,setresList] = useState(dataOBJ);
    return (

      <div className="body">
  
        {/* <div className="search">Search</div> */}
        <button onClick={()=>{
            // console.log({dataOBJ});
            // dataOBJ.filter((data)=>{
                //     return data.
                // })
                    const filterData = dataOBJ.filter((res)=>{
                        // console.log();
                        return res.info.avgRating>4.0;
                    })
                    setresList(filterData);
                // console.log({filterData});
        }}>Filter all top restaurant</button>
        <div className="res-container"> 
        
        {resList.map((data)=>{
          return <RestaurantCard resData={data}/>
        })};
        
        </div>
          
      </div>
    )
  }

  export default Body;