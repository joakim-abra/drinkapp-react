import { Card, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { DrinkCardModal } from "./drinkcardmodal/DrinkCardModal";
import { Pagination } from "antd";
import 'antd/dist/antd.css';
import "./DrinkCard.css"
//import {getDrinksByID} from  "../../view/homeview/HomeView";
//import {selectIngredientButton} from "../../view/homeview/HomeView";


export const DrinkCard = ({drink}) => {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
<>
    <div className="container">
    <Card style={{ width: "15rem" }}>
    <Card.Img variant="top" src={drink?.strDrinkThumb} alt="Cocktail pic" className="img-card" />
    <Card.Body>
    <Card.Title>{drink?.strDrink}</Card.Title>
    <Button variant="outline-primary" onClick={handleShow}>View</Button>

    </Card.Body>
    </Card> 
    </div>
    <DrinkCardModal show={show} drink={drink} handleClose={handleClose}/>
</>
)}

//if (selectIngredientButton) { getDrinksByID(drink?.idDrink) }

/*
<Row xs={1} md={4} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
<Card style={{ width: "15rem" }}>
<Card.Img variant="top" src={drink?.strDrinkThumb} alt="Cocktail pic" className="img-card" />
<Card.Body>
    <Card.Title>{drink?.strDrink}</Card.Title>
    <Button variant="primary" onClick={handleShow}>View</Button>

    </Card.Body>
    </Card> 
    </Col>
  ))}
</Row>*/
 

