import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { setSnackBar } from '../../actions/snackBar.js';

import useStyles from './styles.js';



const CustomizedSnackbars = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const snackbarOpen = useSelector(state => state.snackbar.snackbarOpen);
    const snackbarType = useSelector(state => state.snackbar.snackbarType);
    const snackbarMessage = useSelector(state => state.snackbar.snackbarMessage);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(setSnackBar(false, snackbarType, snackbarMessage));
    };

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert
                    severity={snackbarType}
                    elevation={6}
                    variant="filled"
                    onClose={handleClose}
                    color={snackbarType}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div >
    );
};

export default CustomizedSnackbars;
