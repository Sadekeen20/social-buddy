import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Container, Box} from '@material-ui/core';
import PostDetail from '../PostDetail/PostDetail';

const Post = (props) => {
    const { id, userId, title, body } = props.post;
    
    const styleContainer={border: '1px solid steelblue', borderRadius: '15px',marginBottom:'20px',marginTop:'20px',padding: '20px'}
    
    const history = useHistory();
    const handleClick = (postId)=>{
        const url = `/post/${postId}`;
        history.push(url);
    }
    return (
        <div>
          
            <Container fixed style={styleContainer}>

                <h4>Post# {id}</h4>
                <h4>{title}</h4>
                <h6> {body}</h6>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                        <Link to={`/post/${id}`} style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" color="secondary" onClick={()=>handleClick(id)}>
                                See Comments
                            </Button>
                        </Link> 
                </Box>
                

            </Container>

        </div>
    );
};

export default Post;