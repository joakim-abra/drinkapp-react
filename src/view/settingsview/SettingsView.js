import DrinkAPIService from "../../shared/api/service/DrinkAPIService";
import { UserContext } from "../../shared/provider/UserProvider";
import {useState, useContext} from "react";
import LocalStorage from "../../shared/storage/LocalStorage";
import { Button } from "react-bootstrap";
import "../settingsview/SettingsView.css";


export const SettingsView = () => {
    const[authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [id, setId] = useState("")
        const [badsettings, setBadSettings] = useState();
        

    const ChangeUserLogin = async () => {
        const newUser = {
            "username": username,
            "password": password,
            "Id": id
        }
        try{
            setId(localStorage.getItem('Id'))
            const {data} = await DrinkAPIService.EditUser(newUser);
            localStorage.setItem(LocalStorage.Id, data?.id)
            localStorage.setItem(LocalStorage.Username, data?.username)
            return true;
            
        }catch(error){
            console.log('error')
            console.log(error)
            return false;
        }

    }
        const ChangeLogin = async () => {
            if(await ChangeUserLogin() === true) {
                setBadSettings(false)
                
            }else{
                setBadSettings(true)
            }
        }
        const settingsstatus = () => {
            return badsettings? <div> Incorrect change! try again! </div> : <></>
          }
        
        
        return (<>
        <div className="settings">
         <h1 className="h11">Change login</h1>
        
          <label className="label1">
            
            <input className="input-username" type="Text" placeholder="New Username" onChange={(event) => setUsername(event.target.value)}/>
          </label>
          <br/>
          <label>
            <input className="input-password" type="password" placeholder="New Password" onChange={(event) => setPassword(event.target.value)} />
          </label>
          
          <div className="div-btn">
            <Button variant="outline-dark" size="sm" className="btn-signin" onClick={(event) =>{event.preventDefault(); ChangeUserLogin();}}>Confirm</Button>
            </div>
            <br/> 
            
        </div>
         {settingsstatus()}
        </>
    )
}