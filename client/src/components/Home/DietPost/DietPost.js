import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActions, CardContent, Button, Typography, Divider, Avatar, Container, Tooltip } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';

import useStyles from './styles.js';

const DietPost = ({ dietPost }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Divider />
            <CardContent>
                <div className={classes.flexbox}>
                    <div className={classes.spacing1}>
                        <Typography variant="h5">{dietPost.creator}</Typography>
                    </div>
                    <div className={classes.spacig1}>
                        <Typography variant="subtitle2">Created {moment(dietPost.createdAt).fromNow()}</Typography>
                    </div>
                </div>

                <div className={`${classes.container} ${classes.box1}`}>
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
                            <div className={classes.flexbox}>
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
                <div className={`${classes.container} ${classes.box2}`}>
                    <div className={classes.flexbox}>
                        <div className={classes.spacing1}>
                            <Typography className={classes.spacing3} variant="h6">Fruits Dishes</Typography>

                        </div>
                        <div className={classes.spacing1}>
                            <Typography>{moment(dietPost?.Fruits?.start).format('LT')} - {moment(dietPost?.Fruits?.end).format('LT')}</Typography>
                        </div>
                    </div>
                    {
                        dietPost?.Fruits?.recipes?.map((item) => (
                            <div className={classes.flexbox}>
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

                <div className={`${classes.container} ${classes.box3}`}>
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
                            <div className={classes.flexbox}>
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
                <div className={`${classes.container} ${classes.box4}`}>
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
                            <div className={classes.flexbox}>
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
                <Button><Tooltip title="Like"><FavoriteIcon fontSize='default' color='secondary' /></Tooltip>like</Button>
                <Button><Tooltip title="Delete"><DeleteIcon fontSize='default' /></Tooltip></Button>
            </CardActions>
        </Card >
    )
}

export default DietPost;

