import LocalStorage from "../../../shared/storage/LocalStorage";
import DrinkAPIService from "../../../shared/api/service/DrinkAPIService";
import { useState, useEffect,useCallback } from "react";
import {Spinner, Button} from "react-bootstrap"
import "./IngredientsView.css"
import {DrinkCard} from "../../../components/drinkcard/DrinkCard"

export const IngredientsView = () => {
    
    const [input, setInput] = useState("")
    const [serverData, setServerData] = useState([])
    const [listData, setListData] = useState([])
    const [myList, setMyList] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [buttonClicked, setButtonClicked] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
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
            onRefresh();
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
            onRefresh();
        }
        catch(error)
        {
            console.log(error);
        }
    }

    const searchFromList = async () => {
      try{
        const {data} = await DrinkAPIService.searchDrinksByMyIngredients(localStorage.getItem(LocalStorage.Id));
         setListData(data.drinks)
         console.log(data)
         setIsLoaded(true)
     }
     catch(error){
         console.log(error);
     }
    }


    const displaySearchResults = () => { return isLoaded ? ( 
        <div>{serverData.map((ingredient) => (
          <div className="box-result">
                <h3>
                {ingredient?.strIngredient}
                </h3>
          <p>
          Ingredient ID: {ingredient?.id}
          </p>
          <p>
            CocktailDB ID: {ingredient?.idIngredient}
          </p>
          <div>
            <Button variant="outline-dark" onClick={()=>{addIngredient(ingredient.id); setButtonClicked(true)}}>Add</Button>
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
              <div className="box-result">
                {idArray.push(list?.cocktailDBid)}

                    <h3>
                    {list?.name}
                    </h3>

              <p>
                CocktailDB ID: {list?.cocktailDBid}
              </p>
              <div>
                <Button variant="outline-dark" onClick={()=>{deleteFromList(list.cocktailDBid); setButtonClicked(true)}}>Delete</Button>
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

            const displaySearchResultsFromList = () => {
              console.log('listData: ', listData)
              return isLoaded ? (
                <div className='flex-container'> {listData.map((drink) => (
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
            }

            const onRefresh = useCallback(async () => {
              setRefreshing(true);
              getIngredientList()
              setRefreshing(false);
            }, [refreshing]);

useEffect(() => {
    getIngredientList()
},[onRefresh])

    return (
        <>
        <div className="row">
          <div className="column">
            <div className="header-box">
              <h1>Search ingredients</h1>
              </div>
              <div className="search-box">
              <input placeholder="Search for ingredient.." onChange={(event) => setInput(event.target.value)}/><br />
              <Button variant="outline-dark" size="sm" className="add-btn" onClick={() => {findIngredient(input); setButtonClicked(true)}}>Search by name</Button>
              </div>
              {displaySearchResults()}
          <div className="header-box">
              <h1>Search for drinks by my ingredients</h1>
              </div>
              <div className="search-box">
              <Button variant="outline-dark" size="sm" className="add-btn" onClick={() => {searchFromList(); setButtonClicked(true)}}>Search by ingredient list</Button>
              </div>
              {displaySearchResultsFromList()}
          </div>
          <div className="column">
            <div className="header-box">
        <h1>My ingredients list</h1>
        </div>
        <div className="search-box"></div>
        {displayStoredList()}
        </div>
      {console.log(idArray)}
      </div>
        </>
    )
}