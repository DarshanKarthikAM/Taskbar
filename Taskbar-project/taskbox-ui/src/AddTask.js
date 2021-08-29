import React,{useState} from 'react'
import TaskForm from './TaskForm'
import axios from 'axios'

const AddTask =(props)=>{
    const {addTask} = props
    const [isSaved,setIsSaved] = useState(false)

    const formSubmit=(formData)=>{
        axios.post("http://localhost:3033/api/tasks",formData)
        .then((response)=>{
            const result=response.data
            addTask(result)
            setIsSaved(true)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

    const handleIsSaved =()=>{
        setIsSaved(false)
    }

    return (
        <div >
            <h3>Add Task</h3>
            <TaskForm 
                    formSubmit={formSubmit} 
                    isSaved={isSaved}
                    handleIsSaved={handleIsSaved}
            />
        </div>
    )
}
export default AddTask