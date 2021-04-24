import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grow, Grid, Typography, Divider, Button, Tooltip } from '@material-ui/core';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';

import DietPost from '../Home/DietPosts/DietPost/DietPost.js';
import { getDietPost } from '../../actions/diet.js';
// import styles/images
import useStyles from './styles.js';
import { setSnackBar } from '../../actions/snackBar.js';
import moment from 'moment';
import { set } from 'date-fns';
import { LaptopWindowsTwoTone } from '@material-ui/icons';

const Scheduling = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [data, setData] = useState([{ Subject: '', Description: '', StartTime: '', EndTime: '' }]);

    const user = JSON.parse(localStorage.getItem('userProfile'));

    useEffect(() => {
        dispatch(getDietPost());
    }, [data]);

    const dietPosts = useSelector((state) => state.diets.filter((post) => post.ID === user?.userInfo?._id || post.ID === user?.userInfo?.googleId));

    const gapi = window.gapi;

    const CLIENT_ID = "28630541311-ocrl8r6bsa51rvl0r2umdrdkq1l4i9ia.apps.googleusercontent.com";
    const API_KEY = "AIzaSyBDaFg3REsqQs5K9JWreLax29XrjfnIo6o";
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    const SCOPES = "https://www.googleapis.com/auth/calendar.events";


    const extractData = (string) => {
        if (string === "custom") {
            let newArr = ["Vegetables", "Fruits", "Grains", "Proteins"];
            let arr = [];
            dietPosts.map((dietPost) => {
                newArr.map((type) => {
                    let obj = {};
                    obj.Subject = `Eating ${type}`;
                    let Str = "";
                    dietPost[type]?.recipes?.map((recipe) => Str += `${recipe.title} - ${recipe.calories} Kcal <br/>`);
                    obj.Description = Str;
                    obj.StartTime = moment(dietPost[type]?.start).format();
                    obj.EndTime = moment(dietPost[type]?.end).format();
                    // console.log(obj);
                    arr.push(obj);
                })
            })
            // console.log(arr);
            return arr;
        } else {
            // let newArr = ["Vegetables", "Fruits", "Grains", "Proteins"];
            let newArr = ["Vegetables", "Fruits"];
            // let newArr = ["Grains", "Proteins"];
            let arr = [];
            dietPosts.map((dietPost) => {
                newArr.map((type) => {
                    let obj = {};
                    obj.summary = `Eating ${type}`;
                    let Str = "";
                    dietPost[type]?.recipes?.map((recipe) => Str += `${recipe.title} - ${recipe.calories} Kcal <br/>`);
                    obj.description = Str;
                    obj.start = {
                        "dateTime": moment(dietPost[type]?.start).format(),
                        "timeZone": 'GB'
                    };
                    obj.end = {
                        "dateTime": moment(dietPost[type]?.end).format(),
                        "timeZone": 'GB'
                    };

                    obj.recurrence = ['RRULE:FREQ=DAILY;COUNT=1'];

                    obj.reminders = {
                        'useDefault': false,
                        'overrides': [
                            { 'method': 'email', 'minutes': 24 * 60 },
                            { 'method': 'popup', 'minutes': 30 }
                        ]
                    };
                    // console.log(obj);
                    arr.push(obj);
                })
            })
            // console.log(arr);
            return arr;
        }
    };

    const handleDisplay = (e) => {
        e.preventDefault();
        setData(extractData("custom"));
    }

    const addToGoogleCalendar = (e) => {
        e.preventDefault();
        setData(extractData("custom"));
        if (user?.userInfo?._id) {
            dispatch(setSnackBar(true, "error", "YOU ARE NOT AUTHORIZED BY GOOGLE"));
        } else {
            // On load, called to load the auth2 library and API client library.
            gapi.load('client:auth2', () => {

                // Initializes the API client library
                gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                });
                console.log('LOADED CLIENT!');

                // load calendar  in version 3
                gapi.client.load('calendar', 'v3', () => console.log('LOADED!'));

                // sign in user and add event to user's calendar
                gapi.auth2.getAuthInstance().signIn()
                    .then(() => {

                        var EVENTS = extractData("google");

                        // console.log(events);

                        EVENTS.map((EVENT) => {
                            // insert request
                            var request = gapi.client.calendar.events.insert({
                                'calendarId': 'primary',
                                'resource': EVENT,
                            });
                            // execute request
                            request.execute((EVENT) => {
                                window.open(EVENT.htmlLink);
                            });
                        })
                    })
                    .catch((error) => console.log(error));
            });
            dispatch(setSnackBar(true, "success", "SUCCESSFULLY ADDED TO GOOGLE CALENDAR"));
        }

    };

    return (
        <Grow in>
            {
                !user ? (
                    <Container className={classes.mainContainer}>
                        <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Schedule</Typography>
                        <Divider style={{ margin: 20 }} />
                        <Grid container justify="center" alignItems="center" spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h5">YOU ARE NOT AUTHORIZED . . .</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                ) : (
                    user?.userInfo?.role !== "ADMIN" ? (
                        <Container className={classes.mainContainer}>
                            <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Schedule</Typography>
                            <Divider style={{ margin: 20 }} />
                            <Grid container justify="center" alignItems="center" spacing={3} style={{ marginBottom: 20 }}>
                                <Grid item xs={12} md={3}>
                                    <Typography variant="h6" style={{ padding: '0 0 0 100px' }}>Calendar</Typography>
                                </Grid>
                                <Grid item xs={12} md={10}>
                                    <ScheduleComponent
                                        currentView='Month'
                                        eventSettings={{ dataSource: data }}
                                        timezone='Europe/London'
                                        width='100%'
                                        height='550px'
                                    >
                                        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                                    </ScheduleComponent>
                                </Grid>
                            </Grid>

                            <Grid container justify="center" alignItems="flex-start" spacing={10} style={{ marginBottom: 20 }}>
                                <Grid item xs={12} md={10}>
                                    <div style={{ display: 'flex', margin: '20px 0 0 0', justifyContent: 'space-between' }}>
                                        <div>
                                            <Button variant="outlined" onClick={addToGoogleCalendar}>Add To Your Google Calendar</Button>
                                        </div>
                                        <div>
                                            <Button variant="outlined" onClick={handleDisplay}>Display Your Schedule</Button>
                                        </div>
                                    </div>
                                </Grid>
                                {
                                    dietPosts && (
                                        dietPosts?.map((dietPost) => (
                                            <Grid key={dietPost._id} item xs={12} md={4}>
                                                <DietPost user={user} dietPost={dietPost} />
                                            </Grid>
                                        ))
                                    )
                                }
                            </Grid>

                        </Container>
                    ) : (
                        <Container className={classes.mainContainer}>
                            <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Schedule</Typography>
                            <Divider style={{ margin: 20 }} />
                            <Grid container justify="center" alignItems="center" spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5">ADMIN ARE NOT AUTHORIZED . . .</Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    )
                )
            }
        </Grow >

    )
}

export default Scheduling;
