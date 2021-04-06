import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

// import styles/images
import useStyles from './styles.js';

const Schedule = () => {
    const classes = useStyles();

    return (
        <Grow in>
            <Container className={classes.mainContainer}>
                <div>This is Schedule page</div>
            </Container>
        </Grow>

    )
}

export default Schedule;
