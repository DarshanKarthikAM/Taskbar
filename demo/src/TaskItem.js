import React,{useState} from 'react'
import axios from 'axios'
import EditTask from './EditTask'

const TaskItem =(props)=>{
    const {id,title,status,removeTask,editItem}=props
    const [toggle,setToggle] = useState(false)

    const removeItem=(id)=>{
        axios.delete(`http://localhost:3033/api/tasks/${id}`)
        .then((response)=>{
            const result=response.data
            removeTask(result.id)
        })
        .catch((err)=>{
            alert(err.message)
        })

    }

    const handleToggle=()=>{
        setToggle(!toggle)
    }

    return (
        <div className="taskitem">
            {
                toggle ? (
                <EditTask
                        handleToggle={handleToggle}
                        id={id}
                        title={title}
                        status={status}
                        editItem={editItem}
                />) :(
                    <div>
                        <h4>{title}-{status ? 'Completed' : 'Not Completed'}</h4>
                        <button 
                            className="btn btn-secondary"
                            type="button"
                            onClick={handleToggle}
                        >Edit</button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={()=>{removeItem(id)}}
                        >Remove</button>
                    </div>
                )
            }
        </div>
    )
}
export default TaskItem