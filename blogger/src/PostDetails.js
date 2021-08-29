import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PostDetails =(props)=>{
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            const result=response.data
            setPosts(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])

    return (
        <div className="posts">
            <h2>Total Posts -{posts.length}</h2>
            {
                posts.map(post=>{
                    return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link> </li>
                })
            }
        </div>
    )
}
export default PostDetails