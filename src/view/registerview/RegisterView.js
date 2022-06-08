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
      if(data!==null)
      {
        setAuthenticatedUser(data)
        console.log(data)
      }
    }
      catch(error)
      {
        console.log('error')
        console.log(error.toJSON())
        return null;
      }
    } 

    const Register = () => {
      createUser();
      if(authenticatedUser!==null)
      {
        localStorage.setItem(LocalStorage.user, authenticatedUser);
        setNoCreate(false); 
        navigate(-1);
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
    <h1>Register</h1>
    <form>
      <label>
        <p>Username</p>
        <input type="Text" onChange={(event) => setUsername(event.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={(event) => setPassword(event.target.value)}/>
      </label>
      <div>
      <button onClick={(ev) =>{ev.preventDefault(); Register();}}>Submit</button>
      </div>
    </form>
    {BadCreate()}
  </div>
  )
}