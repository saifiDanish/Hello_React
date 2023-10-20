const RestaurantCard = (params) => {
  // console.log(params.resData.info);
  return (
    <div className="w-44 border-solid border-2 border-b-slate-400-300 rounded-lg mx-4 h-full hover:border-gray-400">
      <img
        className="h-52"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          params.resData.info.cloudinaryImageId
        }
      />
      <div className="p-2">
        <h3 className="font-bold">{params.resData.info.name}</h3>
        <h4>{params.resData.info.cuisines.join(", ")}</h4>
        <p><span className="font-bold">Ratings</span> : {params.resData.info.avgRating}⭐</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
