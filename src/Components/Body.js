import RestaurantCard from "./RestaurantCard";
import dataOBJ from "../utils/constant";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const[query,setQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5691392&lng=77.2786314&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setresList(
      // json?.data.cards[5]?.card?.card.gridElements?.infoWithStyle?.restaurants,
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredList(
        // json?.data.cards[5]?.card?.card.gridElements?.infoWithStyle?.restaurants,
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json?.data.cards[5]?.card?.card.gridElements?.infoWithStyle?.restaurants);
  };

  if (resList.length === null) return <Shimmer />;

  return (
    <div className="body">

      <div className="filter-container">
        <div className="search">
          <input type="text" className="search-box" value={query} onChange={(e)=>{
              setQuery(e.target.value);
          }}/>
          <button className="search-btn" onClick={()=>{
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
        className="filter-btn">
          Filter all top restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((data,id) => {
          console.log(data.info.id);
          return <Link to={"/restaurant/"+data.info.id}><RestaurantCard key={id} resData={data} /></Link>;
        })}
        ;
      </div>
    </div>
  );
};

export default Body;
