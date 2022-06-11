import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importerar 3 funktioner från react-router-dom
import { HomeView } from "../view/homeview/HomeView";
import { Profile } from "../components/navigation/profile/Profile";
import RoutingPath from "./RoutingPath";
import {SignInView} from "../view/signinview/SignInView"
import { RegisterView } from "../view/registerview/RegisterView";
import { useContext, useEffect } from "react";
import { UserContext } from "../shared/provider/UserProvider";
import {FavoriteView} from "../view/authenticatedviews/favoritesview/FavoriteView";
import LocalStorage from "../shared/storage/LocalStorage";
import { SettingsView } from "../view/settingsview/SettingsView";
import {IngredientsView } from "../view/authenticatedviews/ingredientsview/IngredientsView";


export const Routing = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const isUserAuthenticated = () => {
        localStorage.getItem(LocalStorage.Id)>0? setAuthenticatedUser(true): setAuthenticatedUser(false);
      };
    
      useEffect(() => {
        isUserAuthenticated();
      }, []);
    return (
        <BrowserRouter>
        {children}
            <Routes>
                <Route path={RoutingPath.homeView} element={<HomeView/>} />
                <Route path={RoutingPath.favoriteView} element={<FavoriteView/>} />
                <Route path={RoutingPath.settings} element={<SettingsView/>}/>
                <Route path={RoutingPath.ingredientsView} element={<IngredientsView/>} />
                <Route path={RoutingPath.profile} element={<Profile/>}/>
                <Route path={RoutingPath.signInView} element={<SignInView/>}/>
                <Route path={RoutingPath.registerView} element={<RegisterView/>}/>

            </Routes>
            
            
        </BrowserRouter>
    )
}
