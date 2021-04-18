import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider, TextField, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Container, Grid, Avatar } from '@material-ui/core/';

import useStyles from './styles.js';

const RecipesCard = ({ item }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={item?.imgURL} />
            <div className={classes.overlay}>
                <div className={`${classes.grid} ${classes.Infor3}`}>
                    <div className={classes.pa}>
                        <Typography gutterBottom variant="subtitle1">{item?.calories} Kcal / {item?.serving} servings</Typography>
                    </div>
                </div>
            </div>
            <Divider style={{ margin: '5px 0px 10px 0px' }} />
            <div style={{ padding: '0 20px' }}>
                <Typography variant="subtitle2">{item?.dishTypes?.map((tag) => `#${tag} `)} </Typography>
                <Typography variant="subtitle2">{item?.cuisines?.map((tag) => `#${tag} `)}</Typography>
            </div>
            <div className={`${classes.grid1} ${classes.Infor1}`} style={{ paddingTop: 0 }}>
                <div>
                    <Typography className={classes.title} gutterBottom variant="h5">{item?.title}</Typography>
                </div>
            </div>
            <CardContent>
                <div className={classes.grid}>
                    <div className={classes.Infor1}>
                        <Typography variant="body2" color="textSecondary" component="p">Fat:&nbsp;{item?.fat || 0}g</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Carbs:&nbsp;{item?.carbs || 0}g</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Cholesterol:&nbsp;{item?.cholesterol || 0}mg</Typography>
                    </div>
                    <div className={classes.Infor2}>
                        <Typography variant="body2" color="textSecondary" component="p">Sugars:&nbsp;{item?.sugars || 0}g</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Proteins:&nbsp;{item?.proteins || 0}g</Typography>
                    </div>
                </div>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button variant='outlined' onClick={handleClickOpen} color='secondary'>How To Cook</Button>
                <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
                    <DialogTitle>STEPS TO COOK</DialogTitle>
                    <Divider style={{ margin: '5px 0px 10px 0px' }} />
                    <DialogContent>
                        <Container>
                            <Grid container justify='flex-start'>
                                {
                                    item?.cookInstruction?.map((element) => (
                                        <div key={element.number} style={{ width: '100%' }}>
                                            <Typography variant='h6'>STEP {element.number}: {element.step}</Typography>
                                            <DialogContentText>INGREDIENTS</DialogContentText>
                                            <div>
                                                {element?.ingredients?.map((ingredient) => (

                                                    <div key={ingredient?.id} style={{ display: 'inline-block', padding: '5px 20px', textAlign: 'center' }}>
                                                        <div>
                                                            <Avatar src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient?.image}`} alt={ingredient?.name} style={{ width: 100, height: 100 }} />
                                                        </div>
                                                        <div>
                                                            <Typography variant='h6'>{ingredient?.name}</Typography>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <Divider style={{ margin: '10px 10px', width: '100%' }} />
                                        </div>
                                    ))
                                }
                            </Grid>
                        </Container>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' color='primary' onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
                <Typography variant='subtitle2'>Ready In {item?.readyInMinutes} Mins</Typography>
            </CardActions>
        </Card>
    )
};

export default RecipesCard;
