import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { DrinkCardModal } from "./drinkcardmodal/DrinkCardModal";
import "./DrinkCard.css"

export const DrinkCard = ({drink}) => {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
<>
    <div className="card-effect">
    <Card style={{ width: "18rem" }} className="card-styling">
      
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


