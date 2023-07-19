

import { useSelector, useDispatch } from "react-redux";
import FoodItems from "./foodItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "cart");

  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">Cart Page</h1>
      <h2>Cart Items: {cartItems.length}</h2>
      <button className="bg-green-100 p-2 m-2" onClick={() => handleClearCart()}>Clear Cart</button>
      <div className="flex">
      {cartItems.map((item) => {
        const { id, name, price, imageId } =
          item?.card?.card?.itemCards?.[0]?.card?.info || {};

        return (
          <FoodItems
            key={id}
            name={name}
            price={price}
            cloudinaryImageId={imageId}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Cart;
