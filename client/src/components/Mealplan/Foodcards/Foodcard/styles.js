import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        height: "50px",
        paddingTop: '56.25%',

    },
    card: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '30px',
        height: '95%',
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px 20px 0 20px',
    },
    title: {
        padding: '0 16px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    grid: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Infor1: {
        paddingLeft: 0
    },
    Infor2: {
        paddingRight: '20%'
    },
    Infor3: {
        color: 'black',
        paddingRight: '10%',
        background: 'white',
        borderRadius: 30,
    },
    pa1: {
        paddingLeft: 10,
        position: 'relative',
        top: 5,
        left: 0,
    },
    pa2: {
        padding: '5px 10px 0 2px'
    }
});

