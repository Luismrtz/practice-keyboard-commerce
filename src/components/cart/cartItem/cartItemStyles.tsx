import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

  //!nav

  flexwrapper: {
    display: 'flex',
    marginBottom: '2rem'
  },

  mediaNav: {
    flex: '1',
    // display: 'block',
    // width: '100%',
    minHeight: '7rem',
    objectFit: 'cover',
   
  },
  navbtnWrapper: {
    textAlign: 'center',
    flex: '1'
  },
  navCardContent: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    // display: 'inline-block',
    // textOverflow: 'ellipsis',
    // width: 15rem;
  },
  // navDrawerContent: {
  //   textOverflow: 'ellipsis',
  //   whiteSpace: 'nowrap',
  //   overflow: 'hidden',
  //   display: 'inline-block',
  // },


  // test123: {
  //   // minWidth: '4rem',
  //   // width: '5rem'
  //   // textAlign: 'center'
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   justifyItems: 'center',
  //   alignItems: 'center',
  //   alignContent: 'center',
  // },

  buttonNav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },












  //!other content
  media: {
    height: 260,
  },
  cardContent: {
    // display: 'flex',
    // flexDirection: 'column'
    // justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));