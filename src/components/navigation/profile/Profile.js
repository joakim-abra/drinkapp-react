import { Profiledropdown } from "../profile/profiledropdown/ProfileDropDown";
import "../profile/Profile.css"
import { useContext } from "react";
import {UserContext } from "../../../shared/provider/UserProvider"

export const Profile= () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    return(
        <div className="profile">
            <p>profil</p>
            <span>{localStorage.getItem("username")}</span>
            <Profiledropdown />
        </div>

    )
}