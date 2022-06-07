import {useNavigate} from "react-router-dom"
import RoutingPath from "../../../routes/RoutingPath"



export const Profiledropdown = () =>{
    
    const navigate = useNavigate();


    return(
        <div className="profiledropdown">
            <p>settings</p>
            <p>log out</p>
        </div>
    )
}
