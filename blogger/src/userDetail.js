import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'

const UserDetail = (props)=>{

    const [users,setUsers]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            const result = response.data
            setUsers(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])

    return (
        <div className="allusers">
            <ol>
            {
                users.map(user=>{
                    return <li key={user.id}>
                                <Link to={`/users/${user.id}`}>{user.name}</Link>
                            </li>
                })
            }
            </ol>
        </div>
    )
}
export default UserDetail