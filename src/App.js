import './App.css';
import DrinkAPIService from './shared/api/service/DrinkAPIService';
import {useEffect, useState} from "react";


function App() {
  const [serverData,setServerData] = useState([]);

  const findDrink = async ()=>{
    try{
      const{data} = await DrinkAPIService.getDrinksByName("Margarita");
      console.log(data)
      setServerData(data.drinks);
    }
    catch(error)
    {
      console.log(error)
    }
  }
  useEffect(()=>{
    findDrink();
    },[])
 
  return (
    <div className="App">
         {serverData.map((drink) =>(
           <div>
           <h1>{drink?.strDrink}</h1>
           <img src={drink?.strDrinkThumb} />
           </div>
         ))}

    </div>
  );
}

export default App;
