import "../registerview/RegisterView.css"

export const RegisterView = () => {
    return (
    <div className="login">
         <h1 className="h1-register">Register</h1>
    
      <label>
       
        <input className="input-username2" placeholder="Enter Username" type="Text" /*onChange={(event) => setUsername(event.target.value)}*//>
      </label>
      <br/>
      <label>
        
        <input className="input-password2" placeholder="Enter Password" type="Text" /*onChange={}"password" /*onChange={(event) => setPassword(event.target.value)}*/ />
      </label>
      <div className="div-btn2">
        <button>register</button>
      </div>
    
  </div>
  )
}