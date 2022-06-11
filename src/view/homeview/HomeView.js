import { useState, useEffect } from "react";
import DrinkAPIService from "../../shared/api/service/DrinkAPIService";
import {Spinner} from "react-bootstrap"
import "./HomeView.css"
import {DrinkCard} from "../../components/drinkcard/DrinkCard"
import { Pagination } from "antd";
import 'antd/dist/antd.css';
import LocalStorage from "../../shared/storage/LocalStorage"

export const HomeView = () => {

const [input, setInput] = useState("")
const [serverData, setServerData] = useState([])
const [isLoaded, setIsLoaded] = useState(false)
const [buttonClicked, setButtonClicked] = useState(false)

const findDrinkByName = async () => {
  localStorage.setItem(LocalStorage.inFavoriteView,false)
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
  localStorage.setItem(LocalStorage.inFavoriteView,false)
  try{
  const {data} = await DrinkAPIService.getDrinksByIngredientName(input)
  setServerData(data.drinks)
  console.log(serverData)
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

  useEffect(() => {
      localStorage.setItem(LocalStorage.inFavoriteView, false)
  },[])

      if (buttonClicked && ((serverData != undefined) || (serverData != null))) {
        return (
          <main>
          <section className="section-home">
              <h1>Search cocktails</h1>
              <input placeholder="Enter text" onChange={(event) => setInput(event.target.value)}/>
              <button onClick={() => {findDrinkByName(input); setButtonClicked(true)}}>Search by name</button>
              <button onClick={() => {findDrinkByIngredient(input); setButtonClicked(true)}}>Search by ingredient</button> 
              {displayData()}
          </section>
      </main>
        )
      } 
      else if (buttonClicked && ((serverData == undefined) || (serverData == null))) {
        return (
          <main>
          <section className="section-home">
              <h1>Search cocktails</h1>
              <input placeholder="Enter text" onChange={(event) => setInput(event.target.value)}/>
              <button onClick={() => {findDrinkByName(input); setButtonClicked(true)}}>Search by name</button>
              <button onClick={() => {findDrinkByIngredient(input); setButtonClicked(true)}}>Search by ingredient</button>
              <h3>No result</h3> 
          </section>
      </main>
        )
      }
      else {
        return (
          <main>
          <section className="section-home">
              <h1>Search cocktails</h1>
              <input placeholder="Enter text" onChange={(event) => setInput(event.target.value)}/>
              <button onClick={() => {findDrinkByName(input); setButtonClicked(true)}}>Search by name</button>
              <button onClick={() => {findDrinkByIngredient(input); setButtonClicked(true)}}>Search by ingredient</button> 
          </section>
      </main>
        )
      }
} 

