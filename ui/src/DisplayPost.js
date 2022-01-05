import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CreateComment from './CreateComment'
import DisplayComment from './DisplayComment'

export default () => {
    const [posts, updatePosts] = useState({})

    const getPosts = async () => {
        const resp = await axios.get(`http://localhost:5000/api/v1/blog/post`);
        updatePosts(resp.data);
    }

    useEffect(() => {
        getPosts()
    }, [])
    console.log(posts)


    const cardOfPosts = Object.values(posts).map((p) => {
        return (
            <div className='card' style={{ width: '40%', marginBottom: '30px' }} key={p.postId}>
                <div className='card-body'>
                    <h3>{p.title}</h3>
                    <DisplayComment postId={p.postId}></DisplayComment>
                    <CreateComment postId={p.postId}> </CreateComment>
                </div>
            </div>
        );
    });
    console.log(cardOfPosts)
    return (
        <div className='d-flex flex-row flex-wrap justify-content'>
            {cardOfPosts}
        </div>
    );
};