import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { DrinkCardModal } from "./drinkcardmodal/DrinkCardModal";

export const DrinkCard = ({drink}) => {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
<>
<Card style={{ width: "15rem" }}>
<Card.Img variant="top" src={drink?.strDrinkThumb} alt="Cocktail pic" className="img-card" />
<Card.Body>
    <Card.Title>{drink?.strDrink}</Card.Title>
    <Button variant="primary" onClick={handleShow}>Välj</Button>
    </Card.Body>
    </Card> 
    <DrinkCardModal show={show} drink={drink} handleClose={handleClose}/>
</>
)}