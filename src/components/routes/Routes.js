import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importerar 3 funktioner från react-router-dom
import { HomeView } from "../../view/homeview/HomeView";
import { Profile } from "../navigation/profile/Profile";
import {ContactView } from "../../view/contactview/ContactView"
import RoutingPath from "./RoutingPath";
import {SignInView} from "../../view/signinview/SignInView"

export const Routing = ({children}) => {
    return (
        <BrowserRouter>
        {children}
            <Routes>
                <Route path={RoutingPath.homeView} element={<HomeView/>} />

                <Route path={RoutingPath.contact} element={<ContactView/>}/>
            
                <Route path={RoutingPath.profile} element={<Profile/>}/>

                <Route exact path={RoutingPath.signInView} element={<SignInView/>}/>
            </Routes>
            
            
        </BrowserRouter>
    )
}
