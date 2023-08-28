import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  image: {
    borderRadius: '5px',
    boxShadow: '0.2em .4em .7em rgb(64, 64, 70)',
    width: '80%',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto !imporatant',
      width: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto !imporatant',
      width: '100%',
      height: '350px',
      marginBottom: '30px',
    },
    "&:hover": {
        width: '80.2%',
      }
  },
  btns: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'space-around',
  },
}));
