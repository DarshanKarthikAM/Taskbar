import React from 'react'
import QuoteForm from './QuoteForm'

const AddQuote=(props)=>{
    const {handleQuotes} = props

    const formSubmission =(formData)=>{
        handleQuotes(formData)
    }

    return (
        <div>
            <h3>Add Quote</h3>
            <QuoteForm formSubmission={formSubmission} />
        </div>
    )
}
export default AddQuote