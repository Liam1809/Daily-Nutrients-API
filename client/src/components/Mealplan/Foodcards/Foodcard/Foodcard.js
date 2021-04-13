import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider, TextField } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import useStyles from './styles.js';

const Foodcard = ({ cardi, text, text1, flag1, setFlag1, currentArray, setCurrentArray, currentArray1, setCurrentArray1, countIngredients, setCountIngredients, countRecipes, setCountRecipes }) => {
    const classes = useStyles();
    const [isChosen, setIsChosen] = useState(false);
    const [isChosen1, setIsChosen1] = useState(false);
    const [serving, setServing] = useState(cardi.serving_qty);

    let arr = currentArray;
    let arr1 = currentArray1;

    useEffect(() => {
        if (flag1 == true) {
            setIsChosen(false);
            setIsChosen1(false);
            setServing(cardi.serving_qty);
        }
    }, [flag1]);

    const handleToggled = (e) => {
        e.preventDefault();
        setIsChosen((prevState) => !prevState);
        setFlag1(false);
        if (!isChosen) {
            // console.log(givenFood);
            arr.push({ title: cardi.name, img: cardi.imgURL, calories: parseFloat((cardi.calories * serving).toFixed(2)), serving_qty: parseInt(serving) });
            console.log(arr);
            setCurrentArray(arr);
            setCountIngredients(countIngredients + 1);
        } else {
            let index = arr.findIndex(item => item.title === cardi.name);
            if (index != -1) {
                arr.splice(index, 1);
                console.log(arr)
                setCurrentArray(arr);
                setCountIngredients(countIngredients - 1);
                setServing(cardi.serving_qty);
            }
        }
        console.log(currentArray);
    }

    const handleToggled1 = (e) => {
        e.preventDefault();
        setIsChosen1((prevState) => !prevState);
        setFlag1(false);
        if (!isChosen1) {
            // console.log(givenFood);
            arr1.push({ title: cardi.title, img: cardi.imgURL, calories: parseFloat(cardi.calories) });
            setCurrentArray1(arr1);
            setCountRecipes(countRecipes + 1);
        } else {
            let index = arr1.findIndex(item => item.title === cardi.title);
            if (index != -1) {
                arr1.splice(index, 1);
                setCurrentArray1(arr1);
                setCountRecipes(countRecipes - 1);
            }
        }
        console.log(currentArray1);
    }

    const onChange = (e) => {
        setFlag1(false);
        setServing(e.target.value);
    }

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={cardi.imgURL} />
            <Divider />
            <div className={classes.overlay}>
                <div className={`${classes.grid} ${classes.Infor3}`}>
                    <div className={classes.pa}>
                        {
                            text1 === "fruit" ? (
                                cardi.hasOwnProperty('grams') ? (
                                    <Typography gutterBottom variant="subtitle1">{(cardi.calories * serving).toFixed(2)}&nbsp;kcal&nbsp;/&nbsp;{(cardi.grams * serving).toFixed(2)}&nbsp;g</Typography>
                                ) : (
                                    <Typography gutterBottom variant="subtitle1">{cardi.calories * serving}&nbsp;kcal</Typography>
                                )
                            ) : (
                                cardi.hasOwnProperty('grams') ? (
                                    <Typography gutterBottom variant="subtitle1">{cardi.calories}&nbsp;kcal&nbsp;/&nbsp;{cardi.grams}&nbsp;g</Typography>
                                ) : (
                                    <Typography gutterBottom variant="subtitle1">{cardi.calories}&nbsp;kcal</Typography>
                                )
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
                {
                    text === "food" ? (
                        <Button size="small" color="primary" onClick={handleToggled}><ThumbUpAltIcon fontSize="small" />&nbsp;{isChosen ? 'chosen' : 'choose'}</Button>
                    ) : (
                        <Button size="small" color="primary" onClick={handleToggled1}><ThumbUpAltIcon fontSize="small" />&nbsp;{isChosen1 ? 'chosen' : 'choose'}</Button>
                    )
                }
                {
                    text1 === "fruit" && (
                        <TextField name="serving_qty" label={`quantity: ${serving}`} variant="outlined" value={serving} className={classes.quantity} onChange={onChange} />
                    )
                }
            </CardActions>
        </Card >
    )
}

export default Foodcard;
