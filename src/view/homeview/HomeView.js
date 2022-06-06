import { useState, useEffect } from "react";
import DrinkAPIService from "../../shared/api/service/DrinkAPIService";

export const HomeView = () => {

const [input, setInput] = useState("")

    return (
        <main>
            <section>
                <h1>Sök efter drinkrecept</h1>
                <input placeholder="Drinknamn" onChange={(event) => setInput(event.target.value)}/>
                <button>Hitta recept</button>
            </section>
        </main>
    )

}

/*const [serverData,setServerData] = useState([]);

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
);*/