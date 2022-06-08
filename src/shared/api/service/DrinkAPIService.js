import http from "../DrinkAPI";

const getDrinksByName = (name)=>{
    return http.get(`/api/Drinks/GetDrinksByName?name=${name}`);
    // return http.get(`api/json/v1/1/search.php?s=${name}`);
}

const getDrinksByIngredientName = (name) => {
    return http.get(`/api/Drinks/GetDrinksByIngredientName?name=${name}`);
}

const getDrinksByID = (id) => {
    return http.get(`/api/Drinks/GetDrinksByID?id=${id}`)
}

export default {getDrinksByName, getDrinksByIngredientName, getDrinksByID};