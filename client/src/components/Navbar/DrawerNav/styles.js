import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';


export default makeStyles((theme) => ({
    list: {
        width: 300,
    },
    fullList: {
        width: 'auto',
    },
    setColor: {
        color: 'black'
    },
    img: {
        width: 100,
        height: 100
    },
    text: {
        fontSize: '1.5rem',
        paddingLeft: 20
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500]
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        background: '#333',
        color: 'white',
        textAlign: 'center',
        alignContent: 'center',
        width: '100%',
        height: 50,
        fontSize: '1.125rem',
        paddingTop: 15
    },
    fontIcon: {
        paddingRight: 40,
        fontSize: '3rem'
    }
}));

