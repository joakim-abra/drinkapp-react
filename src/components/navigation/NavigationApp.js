import React from "react"
import {useNavigate} from "react-router-dom"
import RoutingPath from "../routes/RoutingPath"

export const NavigationApp = () => {
    const navigate = useNavigate()
    
    return (
        <div>
            <button onClick={() => navigate(RoutingPath.homeView)}>Home</button>
        </div>
    )
}