import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importerar 3 funktioner från react-router-dom
import { HomeView } from "../../view/homeview/HomeView";
import { Profile } from "../navigation/profile/Profile";
import RoutingPath from "./RoutingPath";
import {SignInView} from "../../view/signinview/SignInView"
import { RegisterView } from "../../view/registerview/RegisterView";

export const Routing = ({children}) => {
    return (
        <BrowserRouter>
        {children}
            <Routes>
                <Route path={RoutingPath.homeView} element={<HomeView/>} />

                <Route path={RoutingPath.profile} element={<Profile/>}/>

                <Route path={RoutingPath.signInView} element={<SignInView/>}/>

                <Route path={RoutingPath.registerView} element={<RegisterView/>}/>
            </Routes>
            
            
        </BrowserRouter>
    )
}
