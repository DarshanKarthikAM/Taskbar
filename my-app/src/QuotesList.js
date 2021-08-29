import React from 'react'
import QuotesItem from './QuotesItem'

const QuotesList =(props)=>{
    const {quotes,removeItem,editItem} = props


    return (
        <div>
            {
                quotes.length === 0 ? (
                    <div>
                    <h3>No Quotes found</h3>
                    <h4>Add Your first quote</h4>
                    </div>
                ):(
                    quotes.map(ele=>{
                        return <QuotesItem 
                                    key={ele.id} 
                                    {...ele} 
                                    removeItem={removeItem} 
                                    editItem={editItem}
                                />
                    })
                )
            }
        </div>
    )
}
export default QuotesList