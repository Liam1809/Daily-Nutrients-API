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
    icon: {
        width: 50,
        height: 50,
        paddingLeft: 20
    }
}));

