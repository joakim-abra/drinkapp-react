import {Modal, Button} from "react-bootstrap"
import "./DrinkCardModal.css"
import DrinkAPIService from "../../../shared/api/service/DrinkAPIService";
import { useEffect, useState } from "react";


export const DrinkCardModal = ({show, id, handleClose}) => {

const [drink, setDrink] = useState([])

  const getDrinksByID = async () => {
    if(show){
    console.log("method called...")
    try{
    const {data} = await DrinkAPIService.getDrinkById(id)
    setDrink(data)
    console.log(drink)
    }
    catch (error) {
        console.log(error)
    }
  }
  }

useEffect(() => {getDrinksByID()}, [show])

return (
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton className="modal-header">
  <Modal.Title><b>{drink?.strDrink}</b></Modal.Title>
</Modal.Header>
<Modal.Body  className="modal-bg">
  <img src={`${drink?.strDrinkThumb}`} alt="Cocktail pic" className="modal-img" />
    <b>Glass</b>
  <p>{drink?.strGlass}</p>
  <b>Ingredients</b>
  <p>{drink?.strIngredient1} {drink?.strMeasure1}</p>
  <p>{drink?.strIngredient2} {drink?.strMeasure2}</p> 
  <p>{drink?.strIngredient3} {drink?.strMeasure3}</p>
  <p>{drink?.strIngredient4} {drink?.strMeasure4}</p>
  <p>{drink?.strIngredient5} {drink?.strMeasure5}</p>
  <p>{drink?.strIngredient6} {drink?.strMeasure6}</p>
  <p>{drink?.strIngredient7} {drink?.strMeasure7}</p>
  <p>{drink?.strIngredient8} {drink?.strMeasure8}</p>
  <p>{drink?.strIngredient9} {drink?.strMeasure9}</p>
  <p>{drink?.strIngredient10} {drink?.strMeasure10}</p>
  <p>{drink?.strIngredient11} {drink?.strMeasure11}</p>
  <p>{drink?.strIngredient12} {drink?.strMeasure12}</p>
  <p>{drink?.strIngredient13} {drink?.strMeasure13}</p>
  <p>{drink?.strIngredient14} {drink?.strMeasure14}</p>
  <p>{drink?.strIngredient15} {drink?.strMeasure15}</p>
    <b>Instructions</b>
  <p>{drink?.strInstructions}</p>
</Modal.Body>
{/*<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Stäng
  </Button>
</Modal.Footer>*/}
</Modal>
)}


// style={{backgroundImage:`url(${drink?.strDrinkThumb})`}}