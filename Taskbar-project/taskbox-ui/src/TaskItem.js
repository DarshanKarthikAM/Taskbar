import React,{useState} from 'react'
import axios from 'axios'
import EditTask from './EditTask'

const TaskItem =(props)=>{
    const {id,title,status,removeTask,editTaskItem}=props
    const [toggle,setToggle] = useState(false)

    const handleRemove=(id)=>{
            axios.delete(`http://localhost:3033/api/tasks/${id}`)
            .then((response)=>{
                const result = response.data
                removeTask(result.id)
            })
            .catch((err)=>{
                alert(err.message)
            })
    }

    const handleToggle=()=>{
        const result = !toggle
        setToggle(result)
    }

    return(
        <div>
        {
            toggle ? (
            <EditTask 
                    handleToggle={handleToggle} 
                    id={id}
                    title={title}
                    status={status}
                    editTaskItem={editTaskItem}
            />
            ) :(
                    <div>
                        <p className="text-primary">{title}-{status ? 'completed' : 'Not Completed'}</p>
                        <button onClick={()=>{handleRemove(id)}}>remove</button>
                        <button onClick={handleToggle}>edit</button>
                    </div>
                )
        }
        </div>
    )
        
}
export default TaskItem