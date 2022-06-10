import http from "../DrinkAPI";


const getDrinksByName = (name)=>{
    return http.get(`Drinks/GetDrinksByName?name=${name}`);
    // return http.get(`api/json/v1/1/search.php?s=${name}`);
};



const logIn = async (login)=>{
  return await http.post(`login`,login);
};

const getFavorites = (userID)=>{
  return http.get(`UserFavorite/Favorites?id=${userID}`)
}

const AddFavorite = (userID, drinkID) => {
    return http.post(`UserFavorite/AddFavorite?userID=${userID}&drinkID=${drinkID}`);
  };


const getMyIngredients = (userID) => {
  return http.get(`UserIngredient/GetMyIngredients?userID=${userID}`)
}


const findIngredient = (search) => {
  return http.get(`Ingredient/Ingredients/Search?name=${search}`)
}

const getDrinkById = (id) => {
  return http.get(`Drinks/GetDrinksByID?id=${id}`);
};

const getDrinksByIngredientName = (name) => {

    return http.get(`/Drinks/GetDrinksByIngredientName?name=${name}`);
};

const registerUser = (user) => {
    return http.post(`/User/CreateUser`, user)
};

export default {
    getDrinksByName, 
    AddFavorite, 
    logIn, 
    getFavorites, 
    getMyIngredients,
    findIngredient, 
    getDrinkById,
    getDrinksByIngredientName,
    registerUser
 };

/*
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
  
    const AddtoFavorites = async ()=>{
      try{
        const{data} = await DrinkAPIService.AddFavorite(1,11025);
        console.log(data)
        console.log(data.favorites)
        setServerData(data.favorites)
        console.log(serverData)
      }
      catch(error)
      {
        console.log(error)
      }

    }

 


    const GetMyIngredients = async ()=>{
      try{
        const{data} = await DrinkAPIService.getMyIngredients(1);
        console.log(data);
        setServerData(data.userIngredients)
        console.log(serverData)
      }
      catch(error)
      {
        console.log(error);
      }
    }

    const FindIngredient = async ()=>{
      try{
        const{data} = await DrinkAPIService.findIngredient("vodka");
        console.log(data);
        setServerData(data);
      }
      catch(error)
      {
        console.log(error);
      }
    }




        const GetDrinkById = async () =>{
          try{
            const{data} = await DrinkAPIService.getDrinkById(17005)
            setServerData(data)
          }
          catch(error)
          {
            console.log('error')
          }

        }
  

    // useEffect(()=>{
  
    // AddtoFavorites();
    // LogIn()
    // GetMyFavorites();
    // GetMyIngredients();
    // FindIngredient();
    //   GetDrinkById()
    // },[])

    //GetDrinkById()
    // return(
    //   <div>
    //     <h1>{serverData?.strDrink}</h1>
    //     <p>{serverData?.strInstructions}</p>
    //   </div>
    // )



    //FindIngredient
    // return(
    //   <div>
    //     <h2>Find ingredients</h2>
    //     <h3>Results:</h3>
    //     {serverData.map((ing) =>(
    //       <div>
    //         <h4>{ing.name}</h4>
    //         <p>ID: {ing.id}</p>
    //         <p>CocktailDB-ID: {ing.cocktailDBId}</p>
    //       </div>
    //     ))}
    //   </div>
    // )


    // GetMyIngredients

    // return(
    //   <div className="App">
    //     <h1>Ingredients list</h1>
    //     {serverData?.map((ing) => (
    //       <div key={ing}>
    //         <h3>{ing?.name}</h3>
    //         <p>CocktailDB id: {ing?.cocktailDBid}</p>
    //       </div>
    //     ))}
    //   </div>
    // )


    //LogIn

    // return(
    //   <div>
    //     <h1>Username</h1>
    //     <p>
    //     {serverData.Username}
    //       </p>
        
    //   </div>
    // )



// GetMyFavorites

// return (
//     <div className="App">
//          {serverData.map((favorite) =>(
//              <div>
//              <h1>{favorite?.name}</h1>
//              </div>
//            ))}
//       </div>
//     );


// GetDrinksByName

  // return (
  //   <div className="App">
  //        {serverData.map((drink) =>(
  //          <div>
  //          <h1>{drink?.strDrink}</h1>
  //          <img src={drink?.strDrinkThumb} />
  //          </div>
  //        ))}

  //   </div>
  // );

*/

