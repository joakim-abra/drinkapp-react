import { useState, useContext } from "react";
import DrinkAPIService from "../../shared/api/service/DrinkAPIService";
import {UserContext} from "../../shared/provider/UserProvider"
import { useNavigate } from "react-router-dom";
import LocalStorage from "../../shared/storage/LocalStorage";
import "../signinview/SignInView.css"

export const SignInView = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [badlogin, setBadlogin] = useState(false);
    const navigate = useNavigate();
        
    
    const CheckLogIn = async ()=>{
      const login = {
        "username":username,
        "password":password
      }
      try{
        const {data} = await DrinkAPIService.logIn(login);
          localStorage.setItem(LocalStorage.Id, data?.id)
          localStorage.setItem(LocalStorage.Username, data?.username)
          setAuthenticatedUser(true)
          console.log(authenticatedUser)
          return true;
        
      }
        catch(error)
        {
          console.log('error')
          console.log(error.toJSON())
          return false;
        }
      } 
            
      const LogIn = async () => {
        if(await CheckLogIn() === true)
        { 
            setBadlogin(false); 
            navigate("/");
        }
        else
        {
            setBadlogin(true);
        }

      };

      const Incorrect = () => {
        return badlogin? <div> Incorrect login!</div> : <></>
      }


        
        return (<>
        <div className="login">
         <h1 className="h11">Log In</h1>
        
          <label className="label1">
            
            <input className="input-username" type="Text" placeholder="Enter Username" onChange={(event) => setUsername(event.target.value)}/>
          </label>
          <br/>
          <label>
            <input className="input-password" type="password" placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)} />
          </label>
          
          <div className="div-btn">
            <button className="btn-signin" onClick={(event) =>{event.preventDefault(); LogIn();}}>Sign In</button>
            </div>
            <br/> 
       </div>
       {Incorrect()}
        </>
      )
}    
