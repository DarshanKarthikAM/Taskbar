import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserShow =(props)=>{
    const {id}=props.match.params
    const [user,setUser] = useState({})
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const result = response.data
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response)=>{
                const data = response.data
                setPosts(data)
            })
            .catch((err)=>{
                alert(err.message)
            })
            setUser(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[id])

    return (
        <div>
            <h2>UserName : {user.name}</h2>
            <h3>Post Written by User</h3>
            <ul>
            {
                posts.map(post=>{
                    return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                })
            }
            </ul>
            <Link to="/users">back</Link>
        </div>
    )
}
export default UserShow