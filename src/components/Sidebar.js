import React from "react";
import "../styles/siderbar.css";
import { withRouter } from "react-router-dom";
import { MdEmail as MailIcon, MdInbox as InboxIcon } from "react-icons/md";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Divider,
  Toolbar,
} from "@material-ui/core";
import {
  FaFireAlt,
  FaPlaystation,
  FaStar,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { BsFillSkipForwardFill } from "react-icons/bs";
import ActionIcon from "../images/actionIcon.jpg";
import AdventureIcon from "../images/Adventure.jpg";
import ShooterIcon from "../images/shooter game image.jpg";
import StrategyIcon from "../images/Strategy.jpg";
import RacingIcon from "../images/RacingIcon.jpg";
import FightingIcon from "../images/FightingIcon.jpg";

const useStyles = makeStyles({
  drawer: {
    
    width: "250px",
    zIndex: "1",
    
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
  ListItemIcon: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    width: "250px",
    background: "#151515",
    overflowX: 'hidden',
    overflowY: 'hidden',
    '&:hover': {
      overflowY: 'auto',
    },
    '&::-webkit-scrollbar': {
      display: 'none',
    }
  },
});

const Sidebar = (props) => {
  const { history } = props;
  const classes = useStyles();

  const Releases = [
    {
      text: "Last 30 Days",
      icon: <FaStar />,
      onClick: () => history.push("/last-month"),
    },
    {
      text: "This Week",
      icon: <FaFireAlt />,
      onClick: () => history.push("/this-week"),
    },
    {
      text: "Next Week",
      icon: <BsFillSkipForwardFill />,
      onClick: () => history.push("/next-week"),
    },
  ];

  const Platforms = [
    {
      text: "PC",
      icon: <FaWindows />,
      onClick: () => history.push("/PC"),
    },
    {
      text: "Playstation 4",
      icon: <FaPlaystation />,
      onClick: () => history.push("/PS4"),
    },
    {
      text: "Xbox One",
      icon: <FaXbox />,
      onClick: () => history.push("/Xbox"),
    },
  ];
  const Genres = [
    {
      text: "Action",
      icon: ActionIcon,
      onClick: () => history.push("/Action-games"),
    },
    {
      text: "Shooter",
      icon: ShooterIcon,
      onClick: () => history.push("/Shooter-games"),
    },
    {
      text: "Strategy",
      icon: StrategyIcon,
      onClick: () => history.push("/Strategy-games"),
    },
    {
      text: "Adventure",
      icon: AdventureIcon,
      onClick: () => history.push("/Adventure-games"),
    },
    {
      text: "Racing",
      icon: RacingIcon,
      onClick: () => history.push("/Racing-games"),
    },
    {
      text: "Fighting",
      icon: FightingIcon,
      onClick: () => history.push("/Fighting-games"),
    },
  ];
  const itemsList = [
    {
      text: "Home",
      icon: <InboxIcon />,
      onClick: () => history.push("/"),
    },
    {
      text: "About",
      icon: <MailIcon />,
      onClick: () => history.push("/"),
    },
    {
      text: "Contact",
      icon: <MailIcon />,
      onClick: () => history.push("/"),
    },
  ];
  return (
    <MUIDrawer
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: classes.paper }}
    >
      <Toolbar />
      <Toolbar />
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick} className="ListItem">
              {icon && (
                <ListItemIcon className={classes.ListItemIcon}>
                  <div className="iconHolder">{icon}</div>
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Toolbar className={classes.toolbar}>
        <h2>New Releases</h2>
      </Toolbar>
      <Divider />
      <List>
        {Releases.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick} className="ListItem">
              {icon && (
                <ListItemIcon className={classes.ListItemIcon}>
                  <div className="iconHolder">{icon}</div>
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Toolbar className={classes.toolbar}>
        <h2>Platforms</h2>
      </Toolbar>
      <Divider />
      <List>
        {Platforms.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick} className="ListItem">
              {icon && (
                <ListItemIcon className={classes.ListItemIcon}>
                  <div className="iconHolder">{icon}</div>
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Toolbar className={classes.toolbar}><h2>Genres</h2></Toolbar>
      <Divider />
      <List>
        {Genres.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick} className="ListItem">
              {icon && (
                <ListItemIcon className={classes.ListItemIcon}>
                  <div className="iconHolder">
                    <img src={icon} alt="" />
                  </div>
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Sidebar);
