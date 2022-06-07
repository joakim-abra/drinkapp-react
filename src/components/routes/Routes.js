import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importerar 3 funktioner från react-router-dom
import { HomeView } from "../../view/homeview/HomeView";
import { Profile } from "../navigation/profile/Profile";
import {ContactView } from "../../view/contactview/ContactView"
import RoutingPath from "./RoutingPath";

export const Routing = ({children}) => {
    return (
        <BrowserRouter>
        {children}
            <Routes>
                <Route path={RoutingPath.homeView} element={<HomeView/>} />

                <Route path={RoutingPath.contact} element={<contact/>}/>
            
                <Route path={RoutingPath.profile} element={<Profile/>}/>

                <Route path={RoutingPath.signinView} element={<signinView/>}/>
            </Routes>
            
            
        </BrowserRouter>
    )
}
