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

      
    // const  logIn = async () => {
    //     axios.post('https://localhost:44318/api/login',{
    //         username: usern,
    //         password: passwrd
    //     })
    //     .then((response) => {
    //         console.log(response.data)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //         console.log(error.response)
    //     })}

            
    const CheckLogIn = async ()=>{
      const login = {
        "username":username,
        "password":password
      }
      try{
        console.log()
        const {data} = await DrinkAPIService.logIn(login);
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
            
      const LogIn = () => {
        CheckLogIn();
        // logIn();
        if(authenticatedUser!==null)
        {
          localStorage.setItem(LocalStorage.user, authenticatedUser);
          setBadlogin(false); 
          navigate(-1);
        }
        else
        {
          setBadlogin(true);
        }

      };

      const Incorrect = () => {
        return(badlogin?(
          <div>
            Incorrect login!
          </div>) : <></>
        )
      }

        
        return (
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
            <button className="btn-signin" onClick={(ev) =>{ev.preventDefault(); LogIn();}}>Sign In</button>
            </div>
            <br/>
        
         {Incorrect()}
       </div>
      )
}    
