import React, { useState } from 'react'
import axios from 'axios'


export default()=>{
    const [title,updateTitle] = useState('my first blog post!')

    const onSubmitHandler = async (event)=> {
        event.preventDefault();
     await axios.post(`http://localhost:5000/api/v1/blog/post`,{
         title
     }).catch(e=> console.log(e.message));
     updateTitle('')
    }
    return (
    
    <form>
        <div className="form-control">
            <label>Enter Title</label>
            <input type="text" value={title} onChange={(e)=> updateTitle(e.target.value)} 
            className="form-control" />
            <label>You entered :  {title}</label>
            <br></br>
            <button className='btn btn-primary'>submit </button>
        </div>
         </form>);
}