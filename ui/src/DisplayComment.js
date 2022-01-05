import React , {useState , useEffect} from 'react'
import axios from 'axios'

export default({postId})=>{
    const  [comments,updateComments] = useState([])
    const loadComments = async()=>{
      const resp = await  axios.get(`http://localhost:5001/api/v1/blog/post/1001/comment`)
      updateComments(resp.data)
    }

    useEffect(()=>{
        loadComments()
    },[])
    const liOfComments = comments.map(c=>{
        return (<li key={c.commentId}>
            {c.description}

        </li>)
    })
    return(<ul>
        {liOfComments}
        {/* { {loadComments}} */}


        {/* <li>1 {postId}</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li> */}
    </ul>)
}