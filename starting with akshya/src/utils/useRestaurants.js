import {useState, useEffect} from "react"

const useRestaurant = (id) => {

    const [restaurant, setRestaurant] = useState("null")

    useEffect(() => {
        getRestaurants()
    },[])

    async function getRestaurants() {
        const data = await fetch (
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9312328&lng=76.26730409999999&restaurantId=" + id
            )
        const json = await data.json()
        console.log(json,'jss');
        setRestaurant(json.data)
    }
    console.log(restaurant,'ooo');
    return restaurant;

}

export default useRestaurant

