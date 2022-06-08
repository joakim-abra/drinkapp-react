import { useState, useContext } from "react";
import axios from "axios";


export const SignInView = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState()
    
      
    const  logIn = async () => {

        axios.post('https://localhost:44318/api/login',{
            username: username,
            password: password
        })
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
            console.log(error.response)
        })
            
            
            
            
        };
        
        return (
            <div className="login">
        <h1>Please Log In</h1>
        <form>
          <label>
            <p>Username</p>
            <input type="Text" onChange={(event) => setUsername(event.target.value)}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={(event) => setPassword(event.target.value)} />
          </label>
          <div>
            <button onClick={() => logIn()}>Submit</button>
          </div>
        </form>
      </div>
      )
}    
