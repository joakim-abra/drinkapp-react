import { useState, useEffect } from "react";
import DrinkAPIService from "../../shared/api/service/DrinkAPIService";
import {Spinner} from "react-bootstrap"
import "./HomeView.css"
import {DrinkCard} from "../../components/drinkcard/DrinkCard"
import { Pagination } from "antd";
import 'antd/dist/antd.css';

export const HomeView = () => {

const [input, setInput] = useState("")
const [serverData, setServerData] = useState([])
const [isLoaded, setIsLoaded] = useState(false)

const findDrinkByName = async () => {
  try{
  const {data} = await DrinkAPIService.getDrinksByName(input)
  setServerData(data.drinks)
  console.log(data)
  setIsLoaded(true)
  }
  catch (error) {
      console.log(error)
  }
}

const findDrinkByIngredient = async () => {
  try{
  const {data} = await DrinkAPIService.getDrinksByIngredientName(input)
  setServerData(data.drinks)
  console.log(data)
  setIsLoaded(true)
  }
  catch (error) {
      console.log(error)
  }
} 

const displayData = () => { return isLoaded ? (
  <div className='flex-container'> {serverData.map((drink) => (
    <div className="card-padding">
    <DrinkCard drink={drink} />
    </div>
      ))} 
    </div>  
    ) : (
      <div>
        <Spinner animation="border" />
      </div>
    )
  
  };

  const [buttonClicked, setButtonClicked] = useState(false)
  // Tom funktion för att fylla ut ternary:n
  const emptyFunc = () => {}
    return (
        <main>
            <section>
                <h1>Search cocktails</h1>
                <input placeholder="Enter text" onChange={(event) => setInput(event.target.value)}/>
                <button onClick={() => {findDrinkByName(input); setButtonClicked(true)}}>Search by name</button>
                <button onClick={() => {findDrinkByIngredient(input); setButtonClicked(true)}}>Search by ingredient</button>
                {buttonClicked ? displayData() : emptyFunc() }
               
                
            </section>
        </main>
    )
   

} 

//{buttonClicked ? displayData() : <h3>Något annat</h3>}
//{serverData ? displayData() : <h3>No result</h3>}