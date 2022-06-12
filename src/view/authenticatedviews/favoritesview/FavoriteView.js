import './FavoriteView.css';
import {useState, useContext,useEffect,useCallback} from 'react';
import LocalStorage from "../../../shared/storage/LocalStorage";
import {Spinner,Button} from "react-bootstrap"
import DrinkAPIService from "../../../shared/api/service/DrinkAPIService";
import {DrinkCard} from "../../../components/drinkcard/DrinkCard";
import {UserContext} from "../../../shared/provider/UserProvider";
import "./FavoriteView.css"

export const FavoriteView = () => {
const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
const [serverData, setServerData] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);
const [refreshing, setRefreshing] = useState(false);



const GetMyFavorites = async ()=>{
    localStorage.setItem(LocalStorage.inFavoriteView, true);
    setIsLoaded(false);
    try{
        console.log(localStorage.getItem("Id"))
      const{data} = await DrinkAPIService.getFavorites(localStorage.getItem(LocalStorage.Id));
      console.log(data)
      setServerData(data?.favorites)
      setIsLoaded(true);
    }
    catch(error)
    {
      console.log(error)
    }
  }

  const displayData = () => { return isLoaded ? (
    <div className='flex-container'> {serverData?.map((drink) => (
      <div className="card-padding">
      <DrinkCard drink={drink} />
      </div>
        ))} 
      </div>  
      ) : (
        <div className="spinner-favorite">
          <Spinner animation="border" />
        </div>
      )
    };
    
    const onRefresh = useCallback(async () => {
      setRefreshing(true);
      GetMyFavorites()
      setRefreshing(false);
    }, [refreshing]);
    
    useEffect(()=>{
     GetMyFavorites()
    }
    ,[onRefresh])

return (
    <main>
        <section>
            {displayData()}
        </section>
    </main>
)

}