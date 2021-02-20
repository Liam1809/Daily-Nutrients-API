import { makeStyles } from '@material-ui/core/styles';
import { Opacity } from '@material-ui/icons';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
        },
    },
    paper: {
        padding: theme.spacing(3),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
    Round: {
        zIndex: 2,
        width: '10em',
        height: '10em',
        border: 'rgba(0,0,0, 0.9)',
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%) , 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        opacity: 0.9
    },
    Round1: {
        background: '#3F51B5',
    },
    Round2: {
        background: '#f50057',
    },
    container: {
        height: '75vh',
        paddingTop: 100,
        position: 'relative'
    },
    text: {
        position: 'relative',
        top: 110,
        left: 65,
        zIndex: 1,
        color: 'white'
    },
    text1: {
        position: 'relative',
        top: 110,
        left: 60,
        zIndex: 1,
        color: 'white'
    },
    text2: {
        position: 'relative',
        top: 110,
        left: 50,
        zIndex: 1,
        color: 'white'
    },
    mainText: {
        paddingBottom: 20
    },
    overlay1: {
        position: 'absolute',
        top: '70px',
        left: '40px',
        color: 'black',
    },
    overlay2: {
        position: 'absolute',
        top: '70px',
        right: '-120px',
        color: 'black',
    }
}));