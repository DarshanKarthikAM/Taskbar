import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AddTask from './AddTask'
import TaskList from './TaskList'

const TasksContainer = (props)=>{
    const [tasks,setTasks] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3033/api/tasks")
        .then((response)=>{
            const result=response.data
            setTasks(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    })

    const addItem = (data)=>{
        setTasks([...tasks,data])
    }

    const removeTask=(id)=>{
        const result = tasks.filter(task=>{
            return task.id !== id
        })
        setTasks(result)
    }

    const editItem=(data)=>{
        const result =tasks.map(task =>{
            if(task.id === data.id){
                return {...task,...data}
            } else{
                return task
            }
        })
    }

    return(
        <div className="row">
            <TaskList
                    tasks={tasks}
                    removeTask={removeTask}
                    editItem={editItem}
            />
            <AddTask addItem={addItem} />
        </div>
    )
}
export default TasksContainer