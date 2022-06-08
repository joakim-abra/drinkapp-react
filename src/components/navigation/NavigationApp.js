import React from "react"
import RoutingPath from "../routes/RoutingPath"
import { Link , useNavigate } from "react-router-dom";
import "../navigation/NavigationApp.css";
import {Profile} from "../navigation/profile/Profile"


export const NavigationApp = () => {
    const navigate = useNavigate()

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
            <nav className="nav-desktop">
              <ul className="nav-desktop-list"> 
                <li className="item">
                  <Link className="link" to={RoutingPath.homeView}>Home</Link>
                </li>
                <li className="item">
                  <Link className="link" to={RoutingPath.signInView}>Sign in</Link>
                </li>
                <div className="nav-desktop-login">
                 <Profile />
                </div>
              </ul>
            
               
           
            </nav>
          );
        };
        
    
