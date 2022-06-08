import axios from "axios";

const DrinkApi = axios.create({
    baseURL: 'https://localhost:44318/api',
        // baseURL: 'http://www.thecocktaildb.com/'
});

export default DrinkApi;