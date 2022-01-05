import React, { useState } from 'react'
import axios from 'axios'


export default({postId})=>{
    const [description,updateDescription] = useState('comment #01')
    const onSubmitHandler= async (event)=>{
        event.preventDefault();
        await axios.post(`http://localhost:5001/api/v1/blog/post/1001/comment`,{
            description
        }).catch(e=>console.log(e.message))
        updateDescription('')
    }
    return (<form onSubmit={onSubmitHandler}>
         <div className="form-group">
            <label>Enter comment</label>
            <input type="text" value={description} onChange={(e)=> 
            updateDescription(e.target.value)} 
            className="form-control" />
            <br></br>
            <button className='btn btn-primary'>submit </button>
            </div>

    </form>);
}