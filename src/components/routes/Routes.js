import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importerar 3 funktioner från react-router-dom
import { HomeView } from "../../view/homeview/HomeView";
import RoutingPath from "./RoutingPath";

export const Routing = ({children}) => {
    return (
        <BrowserRouter>
        {children}
            <Routes>
                <Route path={RoutingPath.homeView} element={<HomeView/>} />
            </Routes>
        </BrowserRouter>
    )
}
