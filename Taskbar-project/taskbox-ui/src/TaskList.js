import React from 'react'
import TaskItem from './TaskItem'

const TaskList=(props)=>{
    const {tasks,removeTask,editTaskItem}=props

    return (
        <div>
           {
               tasks.length === 0 ? (
                   <div>
                       <h4>No Task Found</h4>
                       <p>Add Your First Task</p>
                   </div>
               ) : (
                   <div>
                       <h4>My Tasks -{tasks.length}</h4>
                       {
                           tasks.map(task =>{
                               return <TaskItem 
                                            key={task.id} 
                                            {...task} 
                                            removeTask={removeTask}
                                            editTaskItem={editTaskItem}
                                        />
                           })
                       }
                   </div>
               )
           }
        </div>
    )
}
export default TaskList