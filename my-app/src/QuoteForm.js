import React, { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const QuoteForm =(props)=>{
    const {formSubmission,id: slNo,author,title,toggle,handleToggle} = props

    const [id,setId] = useState(slNo ? slNo :uuidv4())
    const [name,setName] = useState(author ? author:'')
    const [body,setBody] = useState(title ? title :'')

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formDetail = {
            id:id,
            author:name,
            title:body
        }
        formSubmission(formDetail)
        if(toggle){
            handleToggle()
        }
            setName('')
            setBody('')
            setId(uuidv4())
            
    }

    const handleName=(e)=>{
        setName(e.target.value)
    }

    const handleBody =(e)=>{
        setBody(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Name</label><br />
            <input type="text" value={name} onChange={handleName} /><br />
            <label>Body</label><br />
            <textarea value={body} onChange={handleBody} ></textarea><br />
           {
            ( body.length === 0)?
                (
                <input type="submit" value="save" disabled={true} />
                ) :
                (
                    <input type="submit" value="save" disabled={false} />
                )
           }
            </form>
        </div>
    )
}
export default QuoteForm