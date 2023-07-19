import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinaryId } from "../constants";
import useRestaurant from "../utils/useRestaurants";
import Shimmer from "./shimmer";
import { addItem } from "../utils/cartSlice";
import {useDispatch} from "react-redux"

const RestaurantMenu = () => {
  const { id } = useParams();
  
  const restaurantMenu = useRestaurant(id)

  const dispatch = useDispatch()

  const addFoodItem = (item) => {
    dispatch(addItem(item))

  }


  const { cards } = restaurantMenu;
  const {
    name: restaurantName,
    cloudinaryImageId,
    city,
    areaName,
    cuisines,
    avgRating,
  } = cards?.[0]?.card?.card?.info || {};
  
  const menuItems = cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (restaurantMenu == "null") ? <Shimmer /> : (
    <div className="flex">
      <div>
        {restaurantName && <h1>{restaurantName}</h1>}
        {areaName && <h2>{areaName}</h2>}
        {city && <h3>{city}</h3>}
        {cuisines && <h3>{cuisines.join(", ")}</h3>}
        {avgRating && <h4>{avgRating}</h4>}
        {cloudinaryImageId && (
          <img
            className="shopImage"
            src={`${cloudinaryId}${cloudinaryImageId}`}
            alt="RestaurantMenuImage"
          />
        )}
      </div>
      
      <div>
      <h1>Menu</h1>
    {menuItems.map((item, index) => {
      const {
        name: dishName,
        category,
        description,
        imageId,
        price,
      } = item?.card?.card?.itemCards?.[0]?.card.info  || {};

      return (
        <div  key={index}>
        
         {dishName && <h1>{dishName}</h1>}
          {category && <h2>{category}</h2>}
          {description && <h3>{description}</h3>}
          {imageId && (
            <img
              className="menuImage"
              src={`${cloudinaryId}${imageId}`}
              alt="RestaurantMenuImage"
            />
          )}
          {price && <h4>{price}</h4>}
          <button className="p-2 m-2 bg-green-100" onClick={() => addFoodItem(item)}>Add Item</button>
        </div>
      );
    })}
  </div>
    </div>
  );
};

export default RestaurantMenu;


