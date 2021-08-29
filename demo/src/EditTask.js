import React from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'

const EditTask=(props)=>{
    const {handleToggle,id,title,status,editItem}=props

    const formSubmit=(data)=>{
        axios.put(`http://localhost:3033/api/tasks/${data.id}`,data)
        .then((response)=>{
            const result=response.data
            editItem(result)
            handleToggle() 
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

    return(
        <div>
            <TaskForm
                    id={id}
                    title={title}
                    status={status}
                    formSubmit={formSubmit}
            />
            <button 
                onClick={handleToggle}
                className="cancelbtn"
            >cancel</button>
        </div>
    )
}
export default EditTask