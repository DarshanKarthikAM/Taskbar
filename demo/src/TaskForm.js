import React,{useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'


const TaskForm=(props)=>{
    const {formSubmit,isSaved,handleSave,id:slNo,title:author,status:newStatus} = props
    const [id,setId]=useState(slNo ? slNo : uuidv4())
    const [title,setTitle]=useState(author ? author : '')
    const [status,setStatus]=useState(newStatus ? newStatus : false)

    useEffect(()=>{
        if(isSaved){
            setTitle('')
            setStatus(false)
            setId(uuidv4())
            handleSave()
        }
    },[isSaved])

    const handleTitle = (e)=>{
        setTitle(e.target.value)
    }
    
    const handleStatus=(e)=>{
        setStatus(e.target.checked)
    }

    const handleForm=(e)=>{
        e.preventDefault()
        const formData ={
            id:id,
            title:title,
            status:status
        }
        formSubmit(formData)
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <label>title</label><br />
                <input type="text" 
                                value={title} 
                                onChange={handleTitle} 
                                placeholder="Enter Task" 
                /><br />
                <input type="checkbox"
                            checked={status}
                            onChange={handleStatus}                                   
                />
                <label>Completed</label><br />
                <input type="submit" value="save" />
            </form>
        </div>
    )
}
export default TaskForm