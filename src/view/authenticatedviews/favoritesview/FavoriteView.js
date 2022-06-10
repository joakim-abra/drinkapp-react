import './FavoriteView.css';
import {useState, useContext,useEffect} from 'react';
import LocalStorage from "../../shared/storage/LocalStorage";
import DrinkAPIService from "../../shared/api/service/DrinkAPIService";
import {UserContext} from "../../shared/provider/UserProvider"

export const FavoriteView = () => {
const [serverData, setServerData] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);

useEffect(()=>{

}
,[])

const GetMyFavorites = async ()=>{
    try{
      const{data} = await DrinkAPIService.getFavorites(LocalStorage.Id);
      console.log(data)
      setServerData(data.favorites)
    }
    catch(error)
    {
      console.log(error)
    }
  }

const renderFavorites = () =>{

}


}