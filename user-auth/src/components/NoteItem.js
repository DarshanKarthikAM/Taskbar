import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import modal from './Modal'

const NoteItem =(props)=>{
    const {_id,title,body,removeItem} = props

    const handleRemove =()=>{
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,{
                headers:{
                    'x-auth':localStorage.getItem('token')
                }
            })
                .then((response)=>{
                    const result = response.data
                    removeItem(result._id)
                })
                .catch((err)=>{
                    alert(err)
                })
    }

    return (
        <div>
            <h4><Link to={`/notes/${_id}`}  onClick={()=>{modal(_id)}}>{title}</Link></h4>
            <button onClick={handleRemove}>Delete</button>

        </div>
    )
}
export default NoteItem