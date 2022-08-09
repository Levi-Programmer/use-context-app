import UserContext from "../context/User/useContext"
import { useContext } from "react"
import '../styles/userList.css'

export default function Profile(){
    const { selectedUser } = useContext(UserContext)
    return(
        <div className="profile">
            {selectedUser ? ( <div className="profile-co">
                <img src={selectedUser.avatar} alt='User Img' className="image-user"/>
                <h1> {`${selectedUser.first_name} ${selectedUser.last_name}`} </h1>
                <h3 className="email">email: {selectedUser.email} </h3>
            </div> ): (<h1>No has seleccionado un usuario</h1>)}
        </div> 
    )
}