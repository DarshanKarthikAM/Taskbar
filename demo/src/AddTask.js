import React,{useState} from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'

const AddTask=(props)=>{
    const {addItem} = props
    const [isSaved,setIsSaved] = useState(false)

    const formSubmit=(formData)=>{
        axios.post("http://localhost:3033/api/tasks",formData)
        .then((response)=>{
            const result = response.data
            addItem(result)
            setIsSaved(true)
        })
    }

    const handleSave=()=>{
        setIsSaved(false)
    }
    return(
        <div className="col-md-6 col-sm-6">
            <div className="addtask">
                <h5>Add Task</h5>
                <TaskForm 
                        formSubmit={formSubmit} 
                        isSaved={isSaved}
                        handleSave={handleSave}
                />
            </div>
        </div>
    )
}
export default AddTask