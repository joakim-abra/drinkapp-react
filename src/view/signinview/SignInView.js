import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";






export const SignInView = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState()  
    const navigate = useNavigate();
    
    const logIn = () => {
        setAuthenticatedUser(username); 
        localStorage.setItem(LocalStorage.username, username);
        navigate(-1); 
    }

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
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
};

