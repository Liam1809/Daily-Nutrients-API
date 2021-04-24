import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActions, CardContent, Button, Typography, Divider, Avatar, Container, Tooltip, Grid, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import useStyles from './styles.js';
import { setSnackBar } from '../../../../actions/snackBar.js';
import { updateDietPost, deleteDietPost, likeDietPost } from '../../../../actions/diet.js';

const DietPost = ({ user, dietPost }) => {
    const classes = useStyles();
    const [flag, setFlag] = useState(false);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const initial = {
        Vegetables: dietPost?.Vegetables,
        Fruits: dietPost?.Fruits,
        Grains: dietPost?.Grains,
        Proteins: dietPost?.Proteins
    };
    const [newDietData, setNewDietData] = useState(initial);

    useEffect(() => {
        if (newDietData) setNewDietData(newDietData);
    }, [newDietData]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setNewDietData(initial);
    };

    const updateDietData = async (e) => {
        e.preventDefault();
        if (!flag) {
            dispatch(setSnackBar(true, 'error', "PLEASE SELECT TIME TO UPDATE"));
        } else {
            // console.log(newDietData);
            dispatch(updateDietPost(dietPost._id, newDietData));
            setNewDietData(initial);
            setFlag(false);
            setOpen(false);
        }
    };

    return (
        <Card className={classes.card} key={dietPost?._id}>
            <CardContent>
                <div className={classes.flexbox}>
                    <div className={classes.spacing1}>
                        <Typography variant="h5">{dietPost?.creator}</Typography>
                    </div>
                    <div className={classes.spacig1}>
                        <Typography variant="subtitle2">Created {moment(dietPost?.createdAt).fromNow()}</Typography>
                    </div>
                    {/* UPDATE */}
                    {
                        (user?.userInfo?._id === dietPost.ID || user?.userInfo?.googleId === dietPost.ID) && (
                            <div className={`${classes.spacig1} ${classes.overlay}`}>
                                <Button onClick={handleClickOpen}><Tooltip title="UPDATE"><MoreHorizIcon fontSize='default' /></Tooltip></Button>
                                <Dialog fullWidth maxWidth='sm' open={open} onClose={handleClose}>
                                    <DialogTitle>UPDATE TIME</DialogTitle>
                                    <DialogContent>
                                        <Grid container justify="flex-start" alignItems="center" spacing={3}>
                                            <Grid item xs={12} md={2}>
                                                <Typography variant="subtitle1">Vegetables</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardTimePicker label="Start Time" value={newDietData?.Vegetables?.start} onChange={(e) => {
                                                        setFlag(true);
                                                        setNewDietData({ ...newDietData, Vegetables: { start: e } });
                                                    }} />
                                                </MuiPickersUtilsProvider>
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardTimePicker label="End Time" value={newDietData?.Vegetables?.end} onChange={(e) => setNewDietData({ ...newDietData, Vegetables: { recipes: dietPost?.Vegetables?.recipes, start: newDietData?.Vegetables?.start, end: e } })} />
                                                </MuiPickersUtilsProvider>
                                            </Grid>
                                        </Grid><Grid container justify="flex-start" alignItems="center" spacing={3}>
                                            <Grid item xs={12} md={2}>
                                                <Typography variant="subtitle1">Fruits</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardTimePicker label="Start Time" value={newDietData?.Fruits?.start} onChange={(e) => setNewDietData({ ...newDietData, Fruits: { start: e } })} />
                                                </MuiPickersUtilsProvider>
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardTimePicker label="End Time" value={newDietData?.Fruits?.end} onChange={(e) => setNewDietData({ ...newDietData, Fruits: { recipes: dietPost?.Fruits?.recipes, start: newDietData?.Fruits?.start, end: e } })} />
                                                </MuiPickersUtilsProvider>
                                            </Grid>
                                        </Grid><Grid container justify="flex-start" alignItems="center" spacing={3}>
                                            <Grid item xs={12} md={2}>
                                                <Typography variant="subtitle1">Grains</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardTimePicker label="Start Time" value={newDietData?.Grains?.start} onChange={(e) => setNewDietData({ ...newDietData, Grains: { start: e } })} />
                                                </MuiPickersUtilsProvider>
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardTimePicker label="End Time" value={newDietData?.Grains?.end} onChange={(e) => setNewDietData({ ...newDietData, Grains: { recipes: dietPost?.Grains?.recipes, start: newDietData?.Grains?.start, end: e } })} />
                                                </MuiPickersUtilsProvider>
                                            </Grid>
                                        </Grid><Grid container justify="flex-start" alignItems="center" spacing={3}>
                                            <Grid item xs={12} md={2}>
                                                <Typography variant="subtitle1">Proteins</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardTimePicker label="Start Time" value={newDietData?.Proteins?.start} onChange={(e) => setNewDietData({ ...newDietData, Proteins: { start: e } })} />
                                                </MuiPickersUtilsProvider>
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardTimePicker label="End Time" value={newDietData?.Proteins?.end} onChange={(e) => setNewDietData({ ...newDietData, Proteins: { recipes: dietPost?.Proteins?.recipes, start: newDietData?.Proteins?.start, end: e } })} />
                                                </MuiPickersUtilsProvider>
                                            </Grid>
                                        </Grid>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant="contained" color='primary' onClick={updateDietData}>UPDATE</Button>
                                        <Button variant="contained" color='secondary' onClick={handleClose}>Close</Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        )
                    }

                </div>
                {/* DISPLAY */}
                <div className={classes.box1}>
                    <div className={classes.flexbox}>
                        <div className={classes.spacing1}>
                            <Typography className={classes.spacing3} variant="h6">Vegetables Dishes</Typography>
                        </div>
                        <div className={classes.spacing1}>
                            <Typography>{moment(dietPost?.Vegetables?.start).format('LT')} - {moment(dietPost?.Vegetables?.end).format('LT')}</Typography>
                        </div>
                    </div>
                    {
                        dietPost?.Vegetables?.recipes?.map((item) => (
                            <div className={classes.flexbox} key={item._id}>
                                <div className={classes.spacing1}>
                                    <Avatar src={item.img} alt={item.title} className={classes.media} />
                                </div>
                                <div className={classes.spacing2}>
                                    <Typography variant="subtitle1">{item.title}</Typography>
                                </div>
                                <div className={classes.spacing1}>
                                    <Typography variant="subtitle1">{item.calories} Kcal</Typography>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={classes.box2}>
                    <div className={classes.flexbox}>
                        <div className={classes.spacing1}>
                            <Typography className={classes.spacing3} variant="h6">Fruits Dishes</Typography>
                        </div>
                        <div className={classes.spacing1}>
                            <Typography>{moment(dietPost?.Fruits?.start).format('LT')} - {moment(dietPost?.Fruits?.end).format('LT')} </Typography>
                        </div>
                    </div>
                    {
                        dietPost?.Fruits?.recipes?.map((item) => (
                            <div className={classes.flexbox} key={item._id}>
                                <div className={classes.spacing1}>
                                    <Avatar src={item.img} alt={item.title} className={classes.media} />
                                </div>
                                <div className={classes.spacing21}>
                                    <Typography variant="subtitle1">{item.title}</Typography>
                                </div>
                                <div className={classes.spacing1}>
                                    <Typography variant="subtitle1">{item.serving_qty} units / {item.calories} Kcal</Typography>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={classes.box3}>
                    <div className={classes.flexbox}>
                        <div className={classes.spacing1}>
                            <Typography className={classes.spacing3} variant="h6">Grains Dishes</Typography>
                        </div>
                        <div className={classes.spacing1}>
                            <Typography>{moment(dietPost?.Grains?.start).format('LT')} - {moment(dietPost?.Grains?.end).format('LT')}</Typography>
                        </div>
                    </div>
                    {
                        dietPost?.Grains?.recipes?.map((item) => (
                            <div className={classes.flexbox} key={item._id}>
                                <div className={classes.spacing1}>
                                    <Avatar src={item.img} alt={item.title} className={classes.media} />
                                </div>
                                <div className={classes.spacing2}>
                                    <Typography variant="subtitle1">{item.title}</Typography>
                                </div>
                                <div className={classes.spacing1}>
                                    <Typography variant="subtitle1">{item.calories} Kcal</Typography>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={classes.box4}>
                    <div className={classes.flexbox}>
                        <div className={classes.spacing1}>
                            <Typography className={classes.spacing3} variant="h6">Proteins Dishes</Typography>
                        </div>
                        <div className={classes.spacing1}>
                            <Typography>{moment(dietPost?.Proteins?.start).format('LT')} - {moment(dietPost?.Proteins?.end).format('LT')}</Typography>
                        </div>
                    </div>
                    {
                        dietPost?.Proteins?.recipes?.map((item) => (
                            <div className={classes.flexbox} key={item._id}>
                                <div className={classes.spacing1}>
                                    <Avatar src={item.img} alt={item.title} className={classes.media} />
                                </div>
                                <div className={classes.spacing2}>
                                    <Typography variant="subtitle1">{item.title}</Typography>
                                </div>
                                <div className={classes.spacing1}>
                                    <Typography variant="subtitle1">{item.calories} Kcal</Typography>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </CardContent>
            <CardActions className={classes.cardActions}>

                <Button disabled={!user} onClick={() => { dispatch(likeDietPost(dietPost._id)) }}>
                    {
                        (dietPost?.likes?.length > 0) ? (

                            dietPost?.likes.find((id) => id === String(user?.userInfo?._id) || id === String(user?.userInfo?.googleId)) ? (

                                <>< Tooltip title="Like"><FavoriteIcon fontSize='default' color='secondary' style={{ paddingRight: 5 }} /></Tooltip>
                                    {
                                        (dietPost?.likes?.length <= 1) ? 'You like this' : `You and ${dietPost?.likes?.length > 2 ? `${dietPost?.likes?.length - 1} Others` : 'another'}  like this`}</>
                            ) : (
                                <>< Tooltip title="Like"><FavoriteIcon fontSize='default' color='secondary' style={{ paddingRight: 5 }} /></Tooltip>{`${dietPost?.likes?.length} ${dietPost?.likes?.length >= 2 ? 'people' : 'person'} like this`}</>
                            )
                        ) : (
                            <>< Tooltip title="Like"><FavoriteIcon fontSize='default' color='secondary' style={{ paddingRight: 5 }} /></Tooltip> 0 Likes</>
                        )
                    }
                </Button>
                {
                    (user?.userInfo?._id === dietPost.ID || user?.userInfo?.googleId === dietPost.ID) && (
                        <Button onClick={() => dispatch(deleteDietPost(dietPost._id))} ><Tooltip title="Delete"><DeleteIcon fontSize='default' /></Tooltip></Button>
                    )
                }
            </CardActions>
        </Card >

    )
}

export default DietPost;

