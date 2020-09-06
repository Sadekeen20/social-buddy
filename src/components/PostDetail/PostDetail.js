import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Comments from '../Comments/Comments';
import { Container, Grid, Avatar } from '@material-ui/core';
import image from '../../user.png'
const PostDetail = () => {

    const styleContainer = { background: 'linear-gradient(to right, #8e9eab, #eef2f3)', border: '1px solid gray', borderRadius: '15px', marginBottom: '20px', marginTop: '20px', padding: '20px' }
    const imageStyle = { display: "flex", alignItems: "center", justifyContent: "center" }

    const { postId } = useParams();


    const [post, setPost] = useState({});
    const { id, title, body } = post;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [])
    



    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data));
    }, [])
    return (
        <div>

            <Container fixed style={styleContainer}>

                <Grid container spacing={3} >


                    <Grid item xs={4} style={imageStyle}>
                        <Avatar src={image} />
                    </Grid>
                    <Grid item xs={8}>
                        <h4>Post Id# {id}</h4>
                        <h5>{title}</h5>
                        <p>{body}</p>
                    </Grid>
                </Grid>

            </Container>


            {comment.map(comments => <Comments comments={comments}></Comments>)}

        </div>
    );
};

export default PostDetail;