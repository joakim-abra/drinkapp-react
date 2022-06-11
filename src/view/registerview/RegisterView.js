import "../registerview/RegisterView.css"
import DrinkAPIService from "../../shared/api/service/DrinkAPIService";
import { useState, useContext } from "react";
import {UserContext} from "../../shared/provider/UserProvider"
import { useNavigate } from "react-router-dom";
import LocalStorage from "../../shared/storage/LocalStorage";


export const RegisterView = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [noCreate, setNoCreate] = useState(false);
  const navigate = useNavigate();


  const createUser = async () =>{
    const user ={
      "username":username,
      "password":password
    }
    console.log(user);
    try{
      const {data} = await DrinkAPIService.registerUser(user);
      console.log(data)
      if(data?.id!==null)
      {
        setAuthenticatedUser(true)
        localStorage.setItem(LocalStorage.Id, data?.id)
        console.log(data)
        console.log('autUser', authenticatedUser)
        return true;
      }
    }
      catch(error)
      {
        console.log('error')
        console.log(error)
        return false;
      }
    } 

    const Register = async () => {
      
      if(await createUser())
      {
        setNoCreate(false); 
        navigate("/");
      }
      else
      {
        setNoCreate(true);
      }

    };

    const BadCreate = () => {
      return noCreate?
        <div>
          Username already in use!
        </div> : <></>
        }


    return (
    <div className="login">
         <h1 className="h1-register">Register</h1>
         <form>

        <input className="input-username2" placeholder="Enter Username" type="Text" onChange={(event) => setUsername(event.target.value)}/>

      <br/>

        <input className="input-password2" placeholder="Enter Password" type="Text" onChange={(event) => setPassword(event.target.value)}/>

     


      <div className="div-btn2">
      <button onClick={(ev) =>{ev.preventDefault(); Register();}}>Submit</button>
      </div>
    </form>
    {BadCreate()}
  </div>
  )
}