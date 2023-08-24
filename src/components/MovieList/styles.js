import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  moviesContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: '17rem',
    marginRight: '-5rem',
   
    justifyContent: "space-between",
    overflow: "auto",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginLeft: '3rem'
    }
  }
}));
