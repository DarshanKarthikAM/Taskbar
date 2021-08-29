import React, { useState } from 'react'

const FormNote=(props)=>{
    const [note,setNote] = useState({
        title:"",
        body:""
    })

    const {formSubmit,isSubmitted,handleIsSubmitted}= props

    const handleSubmit=(e)=>{
        e.preventDefault()
        formSubmit(note)
        if(isSubmitted){
            setNote({
                title:"",
                body:""
            })
            handleIsSubmitted()
        }
    }

    const handleNote =(e)=>{
        setNote({
            ...note,
            [e.target.name]:e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={note.title}
                    onChange={handleNote}
                    name="title"
                    placeholder="enter the title"
                /><br /><br />
                <textarea 
                    value={note.body}
                    onChange={handleNote}
                    name="body"
                    placeholder="enter the body"
                /><br /><br />
                <input 
                    type="submit"
                    value="Add"
                />
            </form>
        </div>
    )
}
export default FormNote