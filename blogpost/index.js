const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {}
app.post('/api/v1/blog/post',(req,resp) => {
    const {title} = req.body;
    const postId = uuid.v4()
    posts[postId] = {title,postId}

    resp.send(posts[postId])
    
});

app.get('/api/v1/blog/post',(req,resp) => {
    resp.send(posts)
})

app.listen(5000,() => {
    console.log("listening to 5000");
});