import { makeStyles } from '@material-ui/core/styles';
import { NoEncryption } from '@material-ui/icons';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: '#20565c',
        textDecoration: 'none'
    },
    icon: {
        width: 70,
        height: 70,
        padding: 10,
        paddingLeft: 40
    },

}));