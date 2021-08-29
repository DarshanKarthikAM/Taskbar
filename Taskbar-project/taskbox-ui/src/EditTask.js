import React from 'react'
import TaskForm from './TaskForm'
import axios from 'axios'

const EditTask =(props)=>{

    const {handleToggle,id,title,status,editTaskItem} = props

    const formSubmit =(data)=>{
        axios.put(`http://localhost:3033/api/tasks/${id}`,data)
        .then((response)=>{
            const result = response.data
            editTaskItem(result)
            handleToggle()
        })
    }

    return (
        <div>
            <TaskForm 
                    id={id}
                    title={title}
                    status={status}
                    formSubmit={formSubmit}
            />
            <button onClick={handleToggle}>cancel</button>
        </div>
    )
}
export default EditTask