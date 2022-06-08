import http from "../DrinkAPI";

const getDrinksByName = (name)=>{
    return http.get(`/api/Drinks/GetDrinksByName?name=${name}`);
    // return http.get(`api/json/v1/1/search.php?s=${name}`);
}

const getDrinksByIngredient = (ingredient) => {
    return http.get(`/api/Drinks/GetDrinksByIngredient?ingredient=${ingredient}`);
}

export default {getDrinksByName, getDrinksByIngredient};