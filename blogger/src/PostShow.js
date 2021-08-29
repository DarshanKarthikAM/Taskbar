import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PostShow=(props)=>{
    const {id}=props.match.params
    const [comments,setComments]=useState([])
    const [user,setUser]=useState({})
    const [post,setPost] = useState({})

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then((response)=>{
           const data =response.data
            setPost(data)
        })
        .catch((err)=>{
             alert(err.message)
        })
    },[id])

    useEffect(() => {
        if(post.userId)
        {
            axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then((response) => {
                const result = response.data
                setUser(result)
            })
            .catch((err) => {
                alert(err.message)
            })
        }
    },[post.userId])

    useEffect(() => {
        if(post.id)
        {
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
            .then((response) => {
                const result = response.data
                setComments(result)
            })
            .catch((err) => {
                alert(err.message)
            })
        }
    },[post.id])

    

    return(
        <div>
            <h2>UserName -{user.name}</h2>
            <h3>Title -{post.title}</h3>
            <h3>Body:{post.body}</h3>
            <hr />
            {
                comments.map(comment=>{
                    return <li key={comment.id}>{comment.body}</li>
                })
            }
            <hr />
            <Link to={`/users/${id}`}>More posts of author:{user.name}</Link>
        </div>
    )
}
export default PostShow