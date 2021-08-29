import React,{useState} from 'react'
import axios from 'axios'
import FormNote from './formNote'

const AddNote=(props)=>{
    const {addItem} = props
    const [isSubmitted,setIsSubmitted] = useState(false)

    const handleIsSubmitted =()=>{
        console.log(isSubmitted)
        setIsSubmitted(false)
    }

    const formSubmit=(formData)=>{
        axios.post("http://dct-user-auth.herokuapp.com/api/notes",formData,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result =response.data
            addItem(result)
            setIsSubmitted(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div>
            <h3>Add Notes</h3>
            <FormNote 
                    formSubmit={formSubmit}
                    isSubmitted={isSubmitted}
                    handleIsSubmitted={handleIsSubmitted}
            />
            
        </div>
    )
}
export default AddNote