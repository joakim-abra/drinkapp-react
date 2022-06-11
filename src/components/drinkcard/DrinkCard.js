import { Card, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { DrinkCardModal } from "./drinkcardmodal/DrinkCardModal";
import "./DrinkCard.css"
import DrinkApiService from "../../shared/api/service/DrinkAPIService";
import LocalStorage from "../../shared/storage/LocalStorage";
import {UserContext} from "../../shared/provider/UserProvider";

export const DrinkCard = ({drink}) => {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

const deleteFavorite = async () =>{
    try
    {
        const response = await DrinkApiService.removeFavorite(localStorage.getItem(LocalStorage.Id),drink?.idDrink)
        console.log(response);
    }
    catch (error)
    {
        console.log(error)
    }
}

const displayAddOrDeleteButton = () => {
    if(authenticatedUser && (window.location.href == "http://localhost:3000/favorites"))
    {
       return <Button variant="outline-warning" size="sm" onClick={()=>deleteFavorite()}>Delete</Button>
    }
    else if (authenticatedUser && (window.location.href == "http://localhost:3000/")) 
    {
        {/* OBS! Använde DELETE-funktionen som placeholder*/}
        return <Button variant="outline-warning" size="sm" onClick={()=>deleteFavorite()}>Add</Button>
    }
    else
        return <></>
}

return (
<>
    <div className="card-effect">
        <Card style={{ width: "18rem" }} className="card-styling">
            {displayAddOrDeleteButton()}
            <Card.Img variant="top" src={drink?.strDrinkThumb} alt="Cocktail pic" className="img-card" />
            <Card.Body className="card-bg">
                <Card.Title className="card-adjust">{drink?.strDrink}</Card.Title>
                <Button variant="outline-primary" onClick={handleShow}>View</Button>
             </Card.Body>
         </Card> 
    </div>
    <DrinkCardModal show={show} id={drink?.idDrink} handleClose={handleClose}/>
</>
)}


