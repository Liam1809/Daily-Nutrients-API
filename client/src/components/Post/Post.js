import React from 'react';
import { Container, Grow, Grid, Button } from '@material-ui/core';
import useStyles from './styles.js';
import { Link } from 'react-router-dom';


const Post = () => {
    const classes = useStyles();

    return (
        <Grow in>
            <Container className={classes.mainContainer}>
                <Grid container justify='center' alignItems='center' >

                    <Button component={Link} to='/'>go back to home</Button>
                    This is post
                </Grid>
            </Container>
        </Grow>
    )
}

export default Post;
