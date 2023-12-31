import RestaurantCard from "./RestaurantCard";
import dataOBJ from "../utils/constant";
import { useContext, useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const[query,setQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5691392&lng=77.2786314&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    console.log(json);
    setresList(
      // json?.data.cards[5]?.card?.card.gridElements?.infoWithStyle?.restaurants,
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredList(
        // json?.data.cards[5]?.card?.card.gridElements?.infoWithStyle?.restaurants,
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json?.data.cards[5]?.card?.card.gridElements?.infoWithStyle?.restaurants);
  };

  const isOnline = useOnlineStatus();

  const {setUserName} = useContext(UserContext);

  if(isOnline===false){
    return <h1>Opps you are offline, Please check your internet connection</h1>
  }
  if (resList.length === null || resList===null || resList===undefined) return <Shimmer />;

  return (

    <div className="body">

      <div className="flex m-2">
        <div className="m-2">
          <input type="text" className=" border-solid border-2 border-green-300 rounded-md" placeholder="Search" value={query} onChange={(e)=>{
              setQuery(e.target.value);
          }}/>
          <button className="ml-2 px-4 border-solid border-2 bg-purple-200 hover:border-green-300 rounded-lg" onClick={()=>{
            const filterdSearch = resList.filter((res)=>{
              return res.info.name.toLowerCase().includes(query.toLocaleLowerCase());
            })
            // console.log(filterdSearch);
            setFilteredList(filterdSearch);
          }}>Search</button>

        </div>
        <button
          onClick={() => {
            const filterData = resList.filter((res) => {
              return res.info.avgRating>4;
            });
            setFilteredList(filterData);
          }}
        className="ml-2 px-4 border-solid border-2 bg-purple-200 hover:border-green-300 rounded-lg">
          Filter all top restaurant
        </button>
        <div className="flex items-center px-2 mx-2">
            <label >Usercontext Update</label>
            <input type="text" className="border border-gray-500 p-2 mx-4 rounded-md" onChange={(e)=>{
                setUserName(e.target.value);
            }}/>
        </div>

      </div>
      <div className="flex flex-wrap">
        {filteredList.map((data,id) => {
          // console.log(data.info.id);
          return <Link to={"/restaurant/"+data.info.id}><RestaurantCard key={id} resData={data} /></Link>;
        })}
        ;
      </div>
    </div>
  );
};

export default Body;
