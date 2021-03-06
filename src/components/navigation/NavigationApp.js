import {React, useContext} from "react"
import RoutingPath from "../../routes/RoutingPath"
import { Link , useNavigate } from "react-router-dom";
import "../navigation/NavigationApp.css";
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import '../navigation/NavigationApp.css'
import {UserContext} from "../../shared/provider/UserProvider";
import LocalStorage from "../../shared/storage/LocalStorage";
import {Profile} from "../navigation/profile/Profile"

 

export const NavigationApp = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const navigate = useNavigate()
  



    const logOut = () => {
      localStorage.removeItem(localStorage.clear());
      setAuthenticatedUser(false);
      
    }

    
    
    

         const LoggedIn = () => {
      if (authenticatedUser) {
        return (
          <NavDropdown className="nav-dropdown" id="collapsible-nav-dropdown" title={localStorage.getItem(LocalStorage.Username)}>
          <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
          <NavDropdown.Item  href="/" onClick={() => logOut()}>Log out</NavDropdown.Item> 
           
          </NavDropdown>
          );
        } else {
          return (
            <NavDropdown className="nav-dropdown" id="collapsible-nav-dropdown" title="Options">
          <NavDropdown.Item href="/signin">Log in</NavDropdown.Item>
          <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          </NavDropdown>
        );
      }
    }; 
        
        return (
          <div className="App">
          
            <Navbar className="navbar"  variant="dark" sticky="top">
          
              <Navbar.Brand className="nav">
                iDrink App
              </Navbar.Brand>
              <Nav className="nav-home">
                <Nav.Link href="/" to={RoutingPath.homeView}>Search</Nav.Link>
              </Nav>
              {authenticatedUser ? 
              <Nav className="nav-favorites">
                <Nav.Link href="/favorites" to={RoutingPath.favoriteView}>Favorites</Nav.Link>
                <Nav.Link href="/ingredients" to={RoutingPath.ingredientsView}>Ingredients</Nav.Link>
              </Nav>
              : null}
              <Nav className="nav-right">
              {LoggedIn()}
              </Nav>
            </Navbar>
          </div>
        );
};