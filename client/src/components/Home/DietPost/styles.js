import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        width: 100,
        height: 100
    },
    card: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    container: {
        borderRadius: '0'
    },
    box1: {
        background: '#98ddca',
        borderTopRightRadius: '15px',
        borderTopLeftRadius: '15px'
    },
    box2: {
        background: '#d5ecc2'
    },
    box3: {
        background: '#ffd3b4'
    },
    box4: {
        background: '#ffaaa7',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px'
    },
    flexbox: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center'
    },
    spacing1: {
        padding: 5,
    },
    spacing2: {
        padding: '0 5px',
        width: 150
    },
    spacing21: {
        padding: '0 5px',
        width: 120
    },
    spacing3: {
        padding: '0 5px'
    }
});

