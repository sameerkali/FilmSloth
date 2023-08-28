import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "230px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: 0,
    textAlign: "center"
  },
  links: {
    width: "220px",
    alignItems: "center",
    fontWeight: "bolder",
    textDecoration: "none",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column"
    },
    "&:hover": {
      cirsur: "pointer",
      
    }
  },
  image: {
    borderRadius: '5px',
    height: '300px',
    width: '200px',
    marginBottom: '10px',
    "&:hover": {
      transform: 'scale(1.01)'
    }
  }
}));
