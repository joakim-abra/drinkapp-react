import { Card, Button } from "react-bootstrap";
import { useState, useContext, useEffect,useCallback } from "react";
import { DrinkCardModal } from "./drinkcardmodal/DrinkCardModal";
import "./DrinkCard.css"
import DrinkApiService from "../../shared/api/service/DrinkAPIService";
import LocalStorage from "../../shared/storage/LocalStorage";
import {UserContext} from "../../shared/provider/UserProvider";
import { message, Popconfirm } from "antd";
import RoutingPath from "../../routes/RoutingPath"
import DrinkAPIService from "../../shared/api/service/DrinkAPIService";

export const DrinkCard = ({drink}) => {
const idList = [];
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
const URL = "http://localhost:3000";
const [serverData, setServerData] = useState([]);
const [refreshing, setRefreshing] = useState(false);
message.config({
    top: 40,
    duration: 1,
    maxCount: 1,
    rtl: true,
  });


const getFavorites = async ()=>{
    localStorage.setItem(LocalStorage.inFavoriteView, true);
    {/*setIsLoaded(false);*/}
    try{
        console.log(localStorage.getItem("Id"))
      const{data} = await DrinkAPIService.getFavorites(localStorage.getItem(LocalStorage.Id));
      console.log(data)
      setServerData(data?.favorites)
      console.log(serverData)
      {/*setIsLoaded(true);*/}
    }
    catch(error)
    {
      console.log(error)
    }
  }
//   const [favoriteDrinkId, setFavoriteDrinkId] = useState()
//   const [abortAdd, setAbortAdd] = useState(false)

// const checkDuplicates = () => {
//     getFavorites()

//     {serverData.map(serverData => {
//         idList.push(serverData.idDrink)
//       setFavoriteDrinkId(serverData)
//       {console.log(favoriteDrinkId)}
//       {console.log(serverData)}
//       (favoriteDrinkId === addDrinkId) ? setAbortAdd(true) : setAbortAdd(false)
//      } )} 
           
         
//           console.log(abortAdd)
    
// }

/*
{serverData.map((drink) => (
    setFavoriteDrinkId(drink?.idDrink)
    (favoriteDrinkId === addDrinkId) ? setAbortAdd(true) : setAbortAdd(false)
        ))} 
        console.log(favoriteDrinkId)
        console.log(abortAdd)
  console.log(serverData)
*/

const deleteFavorite = async () =>{
    try
    {
        const response = await DrinkApiService.removeFavorite(localStorage.getItem(LocalStorage.Id),drink?.idDrink)
        console.log(response);
        message.info("Cocktail deleted from Favorites");
        onRefresh();
    }
    catch (error)
    {
        console.log(error)
    }
}


// const [addDrinkId, setAddDrinkId] = useState();

const addFavorite = async () =>{
// setAddDrinkId(drink?.idDrink)
// console.log('drink.idDrink', drink?.idDrink)
// checkDuplicates()
// if (abortAdd) {
//     alert("Already in Favorites")
//     return
// }else {
    try
    {
        const response = await DrinkApiService.AddFavorite(localStorage.getItem(LocalStorage.Id),drink?.idDrink)
        console.log('response :', response);        
        message.success("Cocktail added to Favorites");
        onRefresh();
    }
    catch (error)
    {
        console.log('error message:', error)
        alert("Already in your favoriteslist")

    }
// }
}

const displayAddOrDeleteButton = () => {
    if(authenticatedUser && (window.location.href == (`${URL}${RoutingPath.favoriteView}`)))
    {
       return <Button variant="outline-warning" size="sm" onClick={()=>deleteFavorite()}>Delete</Button>
    }
    else if (authenticatedUser && (window.location.href == (`${URL}${RoutingPath.homeView}`))) 
    {
        return <Button variant="outline-warning" size="sm" onClick={()=>addFavorite()}>Add</Button>
    }
    else
        return <></>
}
const onRefresh = useCallback(async () => {
    setRefreshing(true);
    getFavorites()
    setRefreshing(false);
  }, [refreshing]);

  useEffect(()=>{
    getFavorites()
   return ()=>localStorage.setItem(LocalStorage.inFavoriteView, false)}
   ,[onRefresh])

return (
<>
    <div className="card-effect">
        <Card style={{ width: "18rem" }} className="card-styling">
            {displayAddOrDeleteButton()}
            <Card.Img variant="top" src={drink?.strDrinkThumb} alt="Cocktail pic" className="img-card" />
            <Card.Body className="card-bg">
                <Card.Title className="card-adjust">{drink?.strDrink}</Card.Title>
                <Button variant="outline-dark" size="sm" onClick={handleShow}>View</Button>
             </Card.Body>
         </Card> 
    </div>
    <DrinkCardModal show={show} id={drink?.idDrink} handleClose={handleClose}/>
</>
)}


