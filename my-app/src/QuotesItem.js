import React, { useState } from 'react'
import EditQuote from './EditQuote'

const QuotesItem =(props)=>{
    const [toggle,setToggle] = useState(false)
    const {id,author,title,removeItem,editItem}= props

    const remove=()=>{
       const confirm = window.confirm('Are yo want to remove')
       if(confirm){
        removeItem(id)
       }
    }

    const handleToggle =()=>{
        setToggle(!toggle)
    }


    return (
        <div>
            {
                toggle ? (
                    <div>
                        <EditQuote
                                id={id}
                                author={author}
                                title={title}
                                toggle={toggle}
                                handleToggle={handleToggle}
                                editItem={editItem}
                        />
                        <button onClick={handleToggle}>cancel</button>
                    </div>
                ):(
                    <div>
                        <blockquote>{title} - {author}</blockquote>
                        <button onClick={handleToggle}>edit</button>
                        <button onClick={()=>{remove()}}>remove</button>
                    </div>
                )
            }
        </div>
    )
}
export default QuotesItem