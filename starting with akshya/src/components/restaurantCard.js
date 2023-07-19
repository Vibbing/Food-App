import { cloudinaryId } from "../constants"; 

const ResturantCard = ({name,cuisine,address,opening_hours,cloudinaryImageId}) => {
    return (
      <div className="w-56 p-2 m-2 shadow-lg bg-violet-300">
        <img
          src={cloudinaryId + cloudinaryImageId} 
          alt="card image"
        />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisine}</h3>
        <h4>{address} stars</h4>
        <h5>{opening_hours} stars</h5>
      </div>
    );
  };

  export default ResturantCard;