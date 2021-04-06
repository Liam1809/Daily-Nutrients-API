import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import calIcon from '../../../../image/apple.png';
import useStyles from './styles.js';

const Foodcard = ({ cardi }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={cardi.image} />
            <div className={classes.overlay}>
                <div className={`${classes.grid} ${classes.Infor3}`}>
                    <div className={classes.pa1}>
                        <Typography gutterBottom variant="subtitle1">2000</Typography>
                    </div>
                    <div className={classes.pa2}>
                        <img src={calIcon} alt="icon" height="30" width="30" />
                    </div>
                </div>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">#tag, fsfsd,fsdfs,sfsdfsf,fsdfsfsfsf</Typography>
            </div>
            <div className={`${classes.grid1} ${classes.Infor1}`}>
                <div>
                    <Typography className={classes.title} gutterBottom variant="h5">{cardi.name}</Typography>
                </div>
            </div>

            <CardContent>
                <div className={classes.grid}>
                    <div className={classes.Infor1}>
                        <Typography variant="body2" color="textSecondary" component="p">Fat:</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Carbs:</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Cholesterol:</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Zinc:</Typography>
                    </div>
                    <div className={classes.Infor2}>
                        <Typography variant="body2" color="textSecondary" component="p">Vitamin A:</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Vitamin C:</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Vitamin B6:</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Vitamin E:</Typography>
                    </div>
                </div>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary"><ThumbUpAltIcon fontSize="small" />&nbsp;choose</Button>
            </CardActions>
        </Card >
    )
}

export default Foodcard;
