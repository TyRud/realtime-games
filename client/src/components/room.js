import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

const Room = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      {props.room && (
        <List className={classes.root}>
          <ListItem>
            <Avatar>
              <i class="material-icons">play_circle_filled</i>
            </Avatar>
            <ListItemText
              primary="Playing"
              secondary={props.playing.toString()}
            />
          </ListItem>
          <ListItem>
            {props.character === "Merlin" && (
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://usercontent1.hubstatic.com/13012388_f520.jpg"
                />
              </ListItemAvatar>
            )}
            {props.character == "Percival" && (
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="http://nagas1.com/%D7%99%D7%A8%D7%A7%D7%95%D7%9F/%D7%9E%D7%97%D7%96%D7%95%D7%A8%202014/%D7%9B%D7%99%D7%AA%D7%94%20%D7%97/%D7%9E%D7%A9%D7%94%D7%95%20%D7%A7%D7%A6%D7%AA%20%D7%A9%D7%95%D7%A0%D7%94/ohad/img/bvb.jpg"
                />
              </ListItemAvatar>
            )}
            {props.character === "Morgana" && (
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="data:image/jpeg;base64,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"
                />
              </ListItemAvatar>
            )}
            {props.character === "Mordred" && (
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://ksr-ugc.imgix.net/assets/000/112/218/8dfe4717dc52b024fbf20b9f73ff788e_original.jpg?ixlib=rb-1.1.0&w=680&fit=max&v=1344901092&auto=format&gif-q=50&q=92&s=bf8955d9c5d4a62de5f30494d9a71cfehttps://usercontent1.hubstatic.com/13012388_f520.jpg"
                />
              </ListItemAvatar>
            )}
            {props.character === "Oberon" && (
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="data:image/jpeg;base64,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"
                />
              </ListItemAvatar>
            )}
            {props.character === "Loyal Servant" && (
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="data:image/jpeg;base64,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"
                />
              </ListItemAvatar>
            )}
            {props.character === "Assassin" && (
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="data:image/jpeg;base64,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"
                />
              </ListItemAvatar>
            )}
            {!props.character && (
              <Avatar>
                <i class="material-icons">mood</i>
              </Avatar>
            )}
            <ListItemText primary="Character" secondary={props.character} />
          </ListItem>
        </List>
      )}
    </React.Fragment>
  );
};

export default withStyles(styles)(Room);
