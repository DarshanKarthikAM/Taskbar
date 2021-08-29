import React,{useState,useEffect} from 'react'
import AddQuote from './AddQuote'
import QuotesList from './QuotesList'


const QuotesContainer=(props)=>{
    const [quotes,setQuotes] = useState([])

    useEffect(()=>{
      const result = JSON.parse(localStorage.getItem('quotes')) || []
        setQuotes(result)
    },[])

    useEffect(()=>{
        localStorage.setItem('quotes',JSON.stringify(quotes))
    },[quotes])

    const handleQuotes = (quote)=>{
        const result = [quote,...quotes]
        setQuotes(result)
    }

    const removeItem =(id)=>{
        const result = quotes.filter(quote =>{
            return quote.id !== id
        })
        setQuotes(result)
    }

    const editItem=(quote)=>{
        const result = quotes.map(q=>{
            if(q.id === quote.id){
                console.log(quote)
                return {...q,...quote}
            } else{
                return {...q}
            }
        })
        setQuotes(result)
    }


    return (
        <div className="container">
            <h1>My Quotes - {quotes.length}</h1>
            <div className="row">
                    <QuotesList 
                                quotes={quotes} 
                                removeItem={removeItem} 
                                editItem={editItem}
                    />
                    <AddQuote handleQuotes={handleQuotes} />
            </div>
        </div>
    )
}
export default QuotesContainer