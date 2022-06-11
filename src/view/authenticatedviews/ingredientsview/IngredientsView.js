import LocalStorage from "../../../shared/storage/LocalStorage";
import DrinkAPIService from "../../../shared/api/service/DrinkAPIService";
import { useState, useEffect } from "react";
import {Spinner} from "react-bootstrap"
import "./IngredientsView.css"

export const IngredientsView = () => {
    
    const [input, setInput] = useState("")
    const [serverData, setServerData] = useState([])
    const [myList, setMyList] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [buttonClicked, setButtonClicked] = useState(false)
    const idArray =[]

    const findIngredient = async () => {
        try{
           const {data} = await DrinkAPIService.findIngredient(input);
            setServerData(data)
            console.log(data)
            setIsLoaded(true)
        }
        catch(error){
            console.log(error);
        }

    }

    const getIngredientList = async () => {
        try{
            const {data} = await DrinkAPIService.getMyIngredients(localStorage.getItem(LocalStorage.Id));
            setMyList(data.userIngredients)
            console.log(data)
            setIsLoaded(true)
        }
        catch(error)
        {
            console.log(error);
        }
    }

    const addIngredient = async (ingredientID) => {
        try{
           const {data} = await DrinkAPIService.addUserIngredient(localStorage.getItem(LocalStorage.Id),ingredientID);
            console.log(data)
            setIsLoaded(true)
        }
        catch(error)
        {
            console.log(error);
        }
    }

    const deleteFromList = async (idIngredient) => {
        try{
            const {data} = await DrinkAPIService.removeUserIngredient(localStorage.getItem(LocalStorage.Id),idIngredient)
            setIsLoaded(true)
        }
        catch(error)
        {
            console.log(error);
        }
    }


    const displaySearchResults = () => { return isLoaded ? (
        <div> {serverData.map((ingredient) => (
          <div>
            <p>
                <h3>
                {ingredient?.strIngredient}
                </h3>
          </p>
          <p>
          Ingredient ID: {ingredient?.id}
          </p>
          <p>
            CocktailDB ID: {ingredient?.idIngredient}
          </p>
          <div>
            <button onClick={()=>{addIngredient(ingredient.id); setButtonClicked(true)}}>Add</button>
          </div>
          </div>
            ))} 
          </div>  
          ) : (
            <div>
              <Spinner animation="border" />
            </div>
          )
        };

        const displayStoredList = () => { return isLoaded ? (
            <div> {myList.map((list) => (
              <div>
                {idArray.push(list?.cocktailDBid)}
                <p>
                    <h3>
                    {list?.name}
                    </h3>
              </p>
              <p>
                CocktailDB ID: {list?.cocktailDBid}
              </p>
              <div>
                <button onClick={()=>{deleteFromList(list.cocktailDBid); setButtonClicked(true)}}>Delete</button>
              </div>
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
    getIngredientList()
},[])

    return (
        <>
        <div className="row">
          <div className="column">
              <h1>Search ingredients</h1>
              <input placeholder="Search for ingredient.." onChange={(event) => setInput(event.target.value)}/>
              <button onClick={() => {findIngredient(input); setButtonClicked(true)}}>Search by name</button>
              {displaySearchResults()}
          </div>
          <div className="column">
        <h1>My ingredients list</h1>
        {displayStoredList()}
        </div>
      {console.log(idArray)}
      </div>
        </>
    )
}