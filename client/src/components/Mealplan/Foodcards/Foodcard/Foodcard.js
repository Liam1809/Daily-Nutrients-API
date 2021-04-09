import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import useStyles from './styles.js';

const Foodcard = ({ cardi, currentArray, setCurrentArray, countIngredients, setCountIngredients }) => {
    const classes = useStyles();
    const [isChosen, setIsChosen] = useState(false);

    let arr = currentArray;

    const handleToggled = () => {

        setIsChosen((prevState) => !prevState);
        if (!isChosen) {
            // console.log(givenFood);
            arr.push(cardi.name);
            setCurrentArray(arr);
            setCountIngredients(countIngredients + 1);
        } else {
            let index = arr.indexOf(cardi.name);
            if (index != -1) {
                arr.splice(index, 1);
                setCurrentArray(arr);
                setCountIngredients(countIngredients - 1);
            }
        }
        // console.log(currentArray);
    }

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={cardi.imgURL} />
            <Divider />
            <div className={classes.overlay}>
                <div className={`${classes.grid} ${classes.Infor3}`}>
                    <div className={classes.pa}>
                        {
                            cardi.hasOwnProperty('grams') ? (
                                <Typography gutterBottom variant="subtitle1">{cardi.calories}&nbsp;kcal&nbsp;/&nbsp;{cardi.grams}&nbsp;g</Typography>

                            ) : (
                                <Typography gutterBottom variant="subtitle1">{cardi.calories}&nbsp;kcal</Typography>

                            )
                        }
                    </div>
                </div>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary"></Typography>
            </div>
            <div className={`${classes.grid1} ${classes.Infor1}`}>
                <div>
                    <Typography className={classes.title} gutterBottom variant="h5">{cardi.name || cardi.title}</Typography>
                </div>
            </div>

            <CardContent>
                <div className={classes.grid}>
                    <div className={classes.Infor1}>
                        <Typography variant="body2" color="textSecondary" component="p">Fat:&nbsp;{cardi.fat || 0}g</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Carbs:&nbsp;{cardi.carbs || 0}g</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Cholesterol:&nbsp;{cardi.cholesterol || 0}mg</Typography>
                    </div>
                    <div className={classes.Infor2}>
                        <Typography variant="body2" color="textSecondary" component="p">Sugars:&nbsp;{cardi.sugars || 0}g</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Proteins:&nbsp;{cardi.proteins || 0}g</Typography>
                    </div>
                </div>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={handleToggled}><ThumbUpAltIcon fontSize="small" />&nbsp;{isChosen ? 'chosen' : 'choose'}</Button>
            </CardActions>
        </Card >
    )
}

export default Foodcard;
