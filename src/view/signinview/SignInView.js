import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";





export const SignInView = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState()  
    


    return (
        <div className="login">
        <h1>Please Log In</h1>
        <form>
          <label>
            <p>Username</p>
            <input type="Text" value={name}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
};

