import {useState} from "react";
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery} from "@mui/material";
import { Menu, AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";
import {Sidebar} from '../index'
import { useTheme } from '@mui/material/styles';


const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <>
      {/*------------------------------------------NavBar--------------------------------------------- */}
      <AppBar
        position="fixed"
        style={{ background: "linear-gradient(to right, #093028, #237a57)" }}
      >
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen( (prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? (
              <WbIncandescentIcon />
            ) : (
              <WbIncandescentOutlinedIcon />
            )}
          </IconButton>
          {!isMobile && "Search..."}

          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <> My Movies &nbsp; </>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src={
                    "data:image/jpeg;base64,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"
                  }
                />
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {/* ------------------------------------------SideBar--------------------------------------------- */}
      <div>
        <nav className={classes.Drawer}>
          {isMobile ? (
            <Drawer
              variant="remporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen( (prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;

