const express = require ('express')
const cors = require('cors')
const uuid = require('uuid')
const bodyParser = require ('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(cors())


const postIdAndComments = {}
app.get('/api/v1/blog/post/1001/comment' , (req , resp) =>{
    const postId = req.params.postId
    const commentsArray = postIdAndComments[postId] || []
    resp.send(commentsArray)
});
app.post('/api/v1/blog/post/1001/comment' , (req,resp) =>{
    const {description} = req.body;
    const commentId = uuid.v4()
    const postId = req.params.postId
    const comment = {commentId,description}
    const comments = postIdAndComments[postId] || []
    comments.push(comment)
    postIdAndComments[postId]=comments
    resp.send(comments)
});

app.listen(5001,()=>{
    console.log("listening port 5001")
})