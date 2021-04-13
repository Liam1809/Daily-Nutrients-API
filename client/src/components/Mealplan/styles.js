import { makeStyles } from '@material-ui/core/styles';
import { Rotate90DegreesCcw } from '@material-ui/icons';

export default makeStyles(({
    mainContainer: {
        maxWidth: 'inherit',
        background: 'white',
        height: '100%',
        borderRadius: 30,
        border: '1px solid rgba(0,0,0, 0.2)',
        paddingTop: 20,
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%) , 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    },
    secondContainer: {
        margin: '30px 20px'
    },
    shape: {
        padding: '10px 10px',
        margin: '0 5px',
        borderRadius: '20px',
        textAlign: 'center'
    },
    shape1: {
        background: "#98ddca"
    },
    shape2: {
        background: "#d5ecc2"
    },
    shape3: {
        background: "#ffd3b4"
    },
    shape4: {
        background: "#ffaaa7"
    },
    text: {
        position: 'relative',
        top: 0,
        left: '10%',
        textTransform: 'uppercase'
    },
    image: {
        width: 100,
        height: 100,
        position: 'relative',
        top: -100,
        left: -70,
        transform: 'rotate(0deg)',
    },
    position: {
        position: 'relative',
        top: -230,
        left: -120,
    }
}));