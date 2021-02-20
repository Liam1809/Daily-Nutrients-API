import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginRight: '15px',
    },
    mainContainer: {
        background: 'white',
        height: '80vh',
        borderRadius: 30,
        border: '1px solid rgba(0,0,0, 0.2)',
        paddingTop: 20,
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%) , 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    },
}));
