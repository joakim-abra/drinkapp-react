import { useState, useEffect } from "react";
import DrinkAPIService from "../../shared/api/service/DrinkAPIService";
import {Spinner, Button} from "react-bootstrap"
import "./HomeView.css"
import {DrinkCard} from "../../components/drinkcard/DrinkCard"
import 'antd/dist/antd.css';
import LocalStorage from "../../shared/storage/LocalStorage"

export const HomeView = () => {

const [input, setInput] = useState("")
const [serverData, setServerData] = useState([])
const [isLoaded, setIsLoaded] = useState(false)
const [buttonClicked, setButtonClicked] = useState(false)
const [show, setShow] = useState(true)
const [randomDrink, setRandomDrink] = useState([]);

const loadRandom = async () => {
    try{
      const {data} = await DrinkAPIService.getRandomDrink();
      setRandomDrink(data);
      console.log(data);
  }
  catch(error){
    console.log(error);
  } 
}


const showRandom = () => {

    return (
      <div className="rnd-style">
        <div className="rnd-col"></div>
        <div>
    <h3>Random drink: {randomDrink?.strDrink}</h3>
    <span><b>Ingredients</b>: {randomDrink?.strIngredient1}, {randomDrink?.strIngredient2}{randomDrink.strIngredient3 ? ", " + randomDrink.strIngredient3: null}{randomDrink.strIngredient4 ? ", " + randomDrink.strIngredient4: null}
    {randomDrink.strIngredient5 ? ", " + randomDrink.strIngredient5: null}{randomDrink.strIngredient6 ? ", " + randomDrink.strIngredient6: null}{randomDrink.strIngredient7 ? ", " + randomDrink.strIngredient7: null}
    {randomDrink.strIngredient8 ? ", " + randomDrink.strIngredient8: null}{randomDrink.strIngredient9 ? ", " + randomDrink.strIngredient9: null}{randomDrink.strIngredient10 ? ", " + randomDrink.strIngredient10: null}
    {randomDrink.strIngredient11 ? ", " + randomDrink.strIngredient11: null}{randomDrink.strIngredient12 ? ", " + randomDrink.strIngredient12: null}{randomDrink.strIngredient13 ? ", " + randomDrink.strIngredient13: null}
    {randomDrink.strIngredient14 ? ", " + randomDrink.strIngredient14: null}{randomDrink.strIngredient15 ? ", " + randomDrink.strIngredient15: null}</span>
    <br />
    <p><b>Instructions:</b> {randomDrink?.strInstructions}</p>
    <br />
    <img src={randomDrink?.strDrinkThumb} className="rnd-img"></img>
    </div>
    <div className="rnd-col"></div>
  </div>)


}

useEffect(() => {
loadRandom();
},[show])





const findDrinkByName = async () => {
  localStorage.setItem(LocalStorage.inFavoriteView,false)
  try{
  const {data} = await DrinkAPIService.getDrinksByName(input)
  setServerData(data.drinks)
  console.log(data)
  setIsLoaded(true)
  setShow(false)
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
  setShow(false)
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



      if (buttonClicked && ((serverData != undefined) || (serverData != null))) {
        return (
          <main className="search-row">
          <section className="section-home">
              <h1>Search cocktails</h1>
              <input placeholder="Enter text" onChange={(event) => setInput(event.target.value)}/> <br />
              <Button variant="outline-dark" size="sm" className="search-btn" onClick={() => {findDrinkByName(input); setButtonClicked(true)}}>Search by name</Button> <br />
              <Button variant="outline-dark" size="sm" className="search-btn" onClick={() => {findDrinkByIngredient(input); setButtonClicked(true)}}>Search by ingredient</Button> 
              {displayData()}
          </section>
      </main>
        )
      } 
      else if (buttonClicked && ((serverData == undefined) || (serverData == null))) {
        return (
          <main className="search-row">
          <section className="section-home">
          <div className="search-header">
              <h1>Search cocktails</h1>
              </div>
              <input placeholder="Enter text" onChange={(event) => setInput(event.target.value)}/> <br />
              <Button variant="outline-dark" size="sm" className="search-btn" onClick={() => {findDrinkByName(input); setButtonClicked(true)}}>Search by name</Button> <br />
              <Button  variant="outline-dark" size="sm" className="search-btn" onClick={() => {findDrinkByIngredient(input); setButtonClicked(true)}}>Search by ingredient</Button>
              <div className="no-result">
              <h1>Search produced no result</h1> 
              </div>
          </section>
      </main>
        )
      }
      else {
        return (
          <main className="search-row">
          <section className="section-home">
            <div className="search-header">
              <h1>Search cocktails</h1>
              </div>
              <div className="search-input">
              <input placeholder="Enter text" onChange={(event) => setInput(event.target.value)}/> <br />
              <Button variant="outline-dark" size="sm" className="search-btn" onClick={() => {findDrinkByName(input); setButtonClicked(true)}}>Search by name</Button> <br />
              <Button variant="outline-dark" size="sm" className="search-btn" onClick={() => {findDrinkByIngredient(input); setButtonClicked(true)}}>Search by ingredient</Button>
              </div> 
              {showRandom()}
          </section>
      </main>
        )
      }
} 

