import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data , showItems,setshowIndex})=>{

    // console.log(data)
    // const [showItems,setShowItems] = useState(false);
    const handleClick= ()=>{
        // console.log("clicked");
        // setShowItems(!showItems);
        setshowIndex();

    }
    return (
        <div>
            <div className=" w-6/12 bg-gray-50 mx-auto my-3  p-4 shadow-lg cursor-pointer" onClick={handleClick}>
                <div className="flex justify-between">
                    <span className="font-bold">{data?.title} ({data?.itemCards?.length})</span>
                    <span>{"⬇️"}</span>
                </div>
                {showItems && <ItemList data={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;