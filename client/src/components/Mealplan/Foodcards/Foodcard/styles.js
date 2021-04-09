import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        backgroundSize: '250px 250px',
        height: "100px",
        paddingTop: '200px',
    },
    card: {
        margin: '20',
        width: '280px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '30px',
        height: '95%',
        position: 'relative',
        border: '2px solid #EDF3EB',
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
        alignItems: 'top'
    },
    Infor1: {
        paddingLeft: 0
    },
    Infor2: {
        paddingRight: '15px'
    },
    Infor3: {
        color: 'black',
        background: '#EDF3EB',
        borderRadius: 30,
    },
    pa: {
        padding: '0 10px',
        position: 'relative',
        top: 5,
        left: 0,
    }
});

