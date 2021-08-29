import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AddTask from './AddTask'
import TaskList from './TaskList'
import './App.css'

const TaskContainer =(props)=>{
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
    },[])

    const addTask =(task)=>{
        const result = [...tasks,task]
        setTasks(result)
    }

    const removeTask =(id)=>{
        const result = tasks.filter(task=>{
            return task.id !== id
        })
        setTasks(result)
    }

    const editTaskItem=(task)=>{
        const result = tasks.map(t=>{
            if(t.id === task.id){
                return {...t,...task}
            }else{
                return t
            }
        })
        setTasks(result)
    }

    return (
        <div className="container">
            <h1 >TaskBox</h1>
            <div className="flex">
                <TaskList
                        tasks={tasks}
                        removeTask={removeTask}
                        editTaskItem={editTaskItem}
                />
                <AddTask addTask={addTask} />
            </div>

        </div>
    )
}

export default TaskContainer