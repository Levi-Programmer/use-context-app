import { useEffect, useContext } from "react"
import UserContext from "../context/User/useContext"
import '../styles/userList.css'


export default function UserList(){

   const { users, getUsers, getProfile } = useContext(UserContext)

    useEffect(() => {
        getUsers();
    }, [])

    return(
        <div className="users">
            {
                users.map(user => (
                    <a href="#" key={user.id} onClick={() => getProfile(user.id)} className='link'> 
                    <img src={user.avatar} />
                        <p className="name">
                            {`${user.first_name} ${user.last_name}`}
                        </p> 
                    </a>
                ))
            }
        </div>
    )
}