
const RestaurantCard=(params)=>{
    console.log(params.resData.info);
    return (
      <div className="res_card">
          <img className="res_image" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + params.resData.info.cloudinaryImageId}/>
          <div className="description">
          <h3>{params.resData.info.name}</h3>
          <h4>{params.resData.info.cuisines.join(", ")}</h4>
          <p>Ratings : {params.resData.info.avgRating}⭐</p>
          </div>
      </div>
    )
  }

  export default RestaurantCard;