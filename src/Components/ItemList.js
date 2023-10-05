const ItemList = (items) => {
  console.log(items.data[0].card.info);
  return (
    // {items}
    <div>
      {items.data.map((item) => {
        return (
          <div className="text-left border-b-2 p-2 my-2 flex justify-between">
            <div className="w-9/12">
              <span>
                {item?.card?.info?.name} - ({item.card.info.price / 100})
              </span>
              <p>{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute mx-16 p-1">
                <button className="bg-black text-white rounded-md p-2">Add+</button>
              </div>
              <img className
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item.card.info.imageId
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
