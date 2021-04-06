import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        maxWidth: 'inherit',
        alignItems: 'center'
    },
    secondContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar: {
        width: '40%',
        position: 'relative',
        top: 0,
        left: "30%"
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100%',
        padding: 20,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        position: 'relative',
        top: '30%',
        left: 0,
        width: '15%',
        padding: '100px 0'
    },
    text: {
        textTransform: 'uppercase',
        borderRadius: '20px',
        marginBottom: 20,
        textAlign: 'center'
    },
    text1: {
        width: '35%',
        padding: 20
    },
    text2: {
        width: '20%',
        padding: 10
    },
    text21: {
        background: '#98ddca'
    },
    text22: {
        background: '#d5ecc2'
    },
    text23: {
        background: '#ffd3b4'
    },
    text24: {
        background: '#ffaaa7'
    },
    text3: {
        width: '32%',
        padding: 10
    },
    text31: {
        background: '#98ddca'
    },
    text32: {
        background: '#d5ecc2'
    },
    text33: {
        background: '#ffd3b4'
    },
    text34: {
        background: '#ffaaa7'
    }

}));