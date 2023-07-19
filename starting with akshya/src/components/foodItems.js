import { cloudinaryId } from "../constants"; 

const FoodItems = ({name,price,cloudinaryImageId}) => {
    return (
      <div className="w-56 p-2 m-2 shadow-lg bg-violet-300">
        <img
          src={cloudinaryId + cloudinaryImageId} 
          alt="card image"
        />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>Price -{price} </h3>
      </div>
    );
  };

  export default FoodItems;