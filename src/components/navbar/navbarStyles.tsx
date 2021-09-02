import { makeStyles, fade } from '@material-ui/core/styles';


const drawerWidth = 0;

export default makeStyles((theme) => ({



    list: {
        width: 450,
        // overflow:'hidden',
        position:'relative',
        height: '100%',

        [theme.breakpoints.down('sm')]: {
          width: 400,
        },
        [theme.breakpoints.down('xs')]: {
          width: 'auto',
        },

      },
      fullList: {
        width: 'auto',
      },






      toolbar: theme.mixins.toolbar,
 
      emptyButton: {
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
          marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
          marginRight: '20px',
        },
      },
      checkoutButton: {
        minWidth: '150px',
      },
      link: {
        textDecoration: 'none',
      },
      cardDetails: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '5rem',
        width: '100%',
        justifyContent: 'space-between',
      },























    


    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100%-${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
        [theme.breakpoints.down('xs')]: {
          // whiteSpace: 'nowrap',
          // fontSize: '1.7rem',
        },
    },
    image: {
        marginRight: '10px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            // display: 'none',
        },
    },
    grow: {
        flexGrow: 1
    },
    search: {
        position: 'relative',
        borerRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        //vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        }
    }

}))