import { useState, useEffect } from "react";
import DrinkAPIService from "../../shared/api/service/DrinkAPIService";
import {Card, Spinner, Button, ListGroup, Modal} from "react-bootstrap"
import "./HomeView.css"
import {DrinkCard} from "../../components/drinkcard/DrinkCard"

export const HomeView = () => {

const [input, setInput] = useState("")
const [serverData, setServerData] = useState([])

const findDrinkByName = async () => {
  try{
  const {data} = await DrinkAPIService.getDrinksByName(input)
  setServerData(data.drinks)
  console.log(data)
  }
  catch (error) {
      console.log(error)
  }
}

const findDrinkByIngredient = async () => {
  try{
  const {data} = await DrinkAPIService.getDrinksByIngredient(input)
  setServerData(data.drinks)
  console.log(data)
  }
  catch (error) {
      console.log(error)
  }
} 

const displayData = () => { return (
  <div> {serverData.map((drink) => (
    <>
    <DrinkCard drink={drink} />
    </>
      ))} 
    </div>  
    )};

    return (
        <main>
            <section>
                <h1>Search cocktails</h1>
                <input placeholder="Enter text" onChange={(event) => setInput(event.target.value)}/>
                <button onClick={() => findDrinkByName(input)}>Search by name</button>
                <button onClick={() => findDrinkByIngredient(input)}>Search by ingredient</button>
                
                {displayData()}
            </section>
        </main>
    )

} 
