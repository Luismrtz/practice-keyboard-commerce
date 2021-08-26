import { makeStyles } from '@material-ui/core/styles';

export default  makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        // marginTop: theme.spacing(9),
        // padding: theme.spacing(9),
        // backgroundColor: theme.palette.primary.main
    }, 
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between'

    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}))