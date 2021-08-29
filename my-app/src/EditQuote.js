import React from 'react'
import QuoteForm from './QuoteForm'

const EditQuote=(props)=>{

    const {id,author,title,toggle,editItem,handleToggle}=props

    const formSubmission = (formData)=>{
        editItem(formData)
    }

    return (
        <div>
            <h3>Edit Quote</h3>
            <QuoteForm 
                    id={id}
                    author={author}
                    title={title}
                    toggle={toggle}
                    handleToggle={handleToggle}
                    formSubmission={formSubmission}
            />
        </div>
    )
}
export default EditQuote