import React from 'react'
import CreateComment from './CreateComment';
import CreatePost from './CreatePost'
import DisplayComment from './DisplayComment';
import DisplayPost from './DisplayPost';



export default () => {
    const msg = "hello from react app"
    return (
        <div className='container'>
            <h1>Blog App</h1>
            {/* <h1>{22/7}</h1>
            <h1>{msg}</h1> */}
            <div>
           <CreatePost> </CreatePost> <br></br>
           <DisplayPost> </DisplayPost><br></br>
           <CreateComment></CreateComment><br></br>
           <DisplayComment></DisplayComment><br></br>
           </div>
        </div>
    );
} 