import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import image from '../../user.png'
const Comments = (props) => {
    
    const { email, body } = props.comments;
    const styleContainer={background: 'linear-gradient(to right, #ffffff, #b6fbff)',border: '1px solid gray', borderRadius: '15px',marginBottom:'20px',marginTop:'20px',padding: '20px'}
    const imageStyle={ display: "flex",alignItems: "center",justifyContent: "center"}
    
    return (
        <div >
            <Container fixed style={styleContainer}>

                <Grid container spacing={3} >


                    <Grid item xs={4} style={imageStyle}>
                        <Avatar src={image}/>
                    </Grid>
                    <Grid item xs={8}>
                        <h5>{email}</h5>
                        <p>{body}</p>
                    </Grid>
                </Grid>

            </Container>



        </div>
    );
};

export default Comments;