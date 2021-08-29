import React from 'react'
import TaskItem from './TaskItem'

const TaskList =(props)=>{

    const {tasks,removeTask,editItem}=props

    return (
        <div className="col-md-6 col-sm-6">
            {
                tasks.length === 0 ? (
                        <div className="tasklist">
                            <h4>No Task Found</h4>
                            <p>Add Your first task</p>
                        </div> ) :(
                            <div>
                                {
                                    tasks.map(task=>{
                                        return <TaskItem 
                                                        key={task.id}
                                                        {...task}
                                                        removeTask={removeTask}
                                                        editItem={editItem}
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