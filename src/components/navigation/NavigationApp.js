import React from "react"
import RoutingPath from "../routes/RoutingPath"
import { Link , useNavigate } from "react-router-dom";
import "../navigation/NavigationApp.css";
import {Profile} from "../navigation/profile/Profile"
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import '../navigation/NavigationApp.css'


export const NavigationApp = () => {
    const navigate = useNavigate()

    //const logOut = () => {
     // localStorage.removeItem(localStorage.username);
     // setAuthenticatedUser(false);
      //navigate(RoutingPath.homeView)

    //}

    /*     const LoggedIn = () => {
      if (authenticatedUser) {
        return (
          <div className="nav-desktop-login">
            <Profile />
          </div>
        );
      } else {
        return (
          <div className="nav-desktop-login">
            <button onClick={() => navigate(RoutingPath.signInView)}>
              Sign in
            </button>
          </div>
        );
      }
    }; */
        
        return (
          <div className="App">
            <Navbar bg="red" variant="dark" sticky="top">
              <Navbar.Brand>
                JEM
              </Navbar.Brand>
              <Nav>
                <Nav.Link href="/" to={RoutingPath.homeView}>Home</Nav.Link>
               
              </Nav>
              <Nav>
              <NavDropdown id="collasible-nav-dropdown" title="Profile">
                  <NavDropdown.Item href="/signin">Log in</NavDropdown.Item>
                  <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                   <NavDropdown.Item /*onClick={() => logOut()} */href="/">Log out</NavDropdown.Item> 
                </NavDropdown>
              </Nav>

            </Navbar>
          </div>
        );
};
        
    
