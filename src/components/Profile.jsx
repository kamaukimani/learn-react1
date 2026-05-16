import React,{useContext} from 'react'
import { UserContext } from '../context/User';

function Profile({theme}){
    const {user,setUser}=useContext(UserContext)
    if(!user) return <h2>Please Log In to view Profile</h2>
    return(
        <div>
            <h3>{user.name}'s profile</h3>
        </div>
    )
}
export default Profile;