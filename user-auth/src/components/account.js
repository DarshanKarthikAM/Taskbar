import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Account =(props)=>{
    const [user,setUser] = useState({})

    useEffect(()=>{
        axios.get("http://dct-user-auth.herokuapp.com/users/account",{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            setUser(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <div className="accounts">
            {
                localStorage.getItem('token') && <div> 
                    <h3>Account Details</h3>
                    <h4>Email - {user.email} </h4>
                    <h4>UserName - {user.username}</h4>
                    </div>
            }
        </div>
    )
}
export default Account