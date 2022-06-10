import {React, useContext} from "react"
import RoutingPath from "../routes/RoutingPath"
import { Link , useNavigate } from "react-router-dom";
import "../navigation/NavigationApp.css";
import {Profile} from "../navigation/profile/Profile"
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import '../navigation/NavigationApp.css'
import {UserContext} from "../../shared/provider/UserProvider";
import LocalStorage from "../../shared/storage/LocalStorage"


export const NavigationApp = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const navigate = useNavigate()

    const logOut = () => {
      localStorage.removeItem(localStorage.clear());
      setAuthenticatedUser(false);
      navigate(RoutingPath.homeView)

    }

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
            <Navbar bg="dark" variant="dark" sticky="top">
              <Navbar.Brand className="nav">
                JEM
              </Navbar.Brand>
              <Nav className="nav-home">
                <Nav.Link href="/" to={RoutingPath.homeView}>Home</Nav.Link>
               
              </Nav>
              <Nav className="nav-right">
              <NavDropdown className="nav-dropdown" id="collasible-nav-dropdown" title="Profile">
                  <NavDropdown.Item href="/signin">Log in</NavDropdown.Item>
                  <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                   <NavDropdown.Item onClick={() => logOut()} href="/">Log out</NavDropdown.Item> 
                </NavDropdown>
              </Nav>

            </Navbar>
          </div>
        );
};