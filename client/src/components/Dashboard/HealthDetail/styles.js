import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        height: '75vh',
        paddingTop: 100,
        position: 'relative'
    },
    Round: {
        zIndex: 2,
        width: '10em',
        height: '10em',
        border: 'rgba(0,0,0, 0.9)',
        boxShadow: '4px 8px 4px -1px rgb(0 0 0 / 20%) , 4px 8px 5px 0px rgb(0 0 0 / 14%), 4px 8px 10px 0px rgb(0 0 0 / 12%)',
        opacity: 0.9
    },
    Round1: {
        background: '#3f51b5',
    },
    Round2: {
        background: '#f50057',
    },
    mainText: {
        position: 'relative',
        top: 110,
        zIndex: 1,
        color: 'white'
    },
    text: { left: 65 },
    text1: { left: 60, },
    text2: { left: 50, },
    mainOverlay: {
        position: 'absolute',
        color: 'black',
    },
    overlay1: {
        top: 70,
        left: 40
    },
    overlay2: {
        top: 70,
        right: -150
    },
    overlay3: {
        bottom: 20,
        right: -150
    },
    [theme.breakpoints.down('md')]: {
        Round: {
            width: '8em',
            height: '8em'
        },
        mainText: {
            top: 100
        },
        text: { left: 45 },
        text1: { left: 45, },
        text2: { left: 35, },
    }
}));