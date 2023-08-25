import { useSelector } from "react-redux";
// import { userSelector } from "../../features/auth";
// import useStyles from "./styles";
import { Typography, Button, Box } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

const Profile = () => {
  const favourateMovies = [
    "jhaatujar",
    "hasina ke seene pe pasina",
    "andhari raat me dia tere haath me "
  ];
  const { user } = useSelector((state) => state.user);
  // const classes = useStyles();
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          {" "}
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favourateMovies.length ? (
        <Typography variant="h5">
          Add favourate or watchlist some movie to see them here
        </Typography>
      ) : (
        <Box>
          {favourateMovies.map((mov, index) => (
            <p key={index}>{mov}</p>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Profile;
