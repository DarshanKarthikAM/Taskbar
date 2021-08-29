import axios from 'axios'
import swal from 'sweetalert'

const modal = (id)=>{

    axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{
        headers:{
            'x-auth':localStorage.getItem('token')
        }
    })
        .then((response)=>{
            const result=response.data
            swal({
                title: `Title - ${result.title}`,
                text: `Body - ${result.body}`,
                // icon: "success",
                button: "Ok",
            })
        })
        .catch((err)=>{
            console.log(err)
        })

}
export default modal