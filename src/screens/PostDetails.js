import React, { useEffect, memo, useState } from "react";
import {
  Typography,
  makeStyles,
  List,
  ListItem,
  Grid,
  ListItemText,
} from "@material-ui/core";
import { BASE_URL } from "../constant/Config";
import Header from "../common/Header";
import { useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  list: {
    flex: 1,
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 16,
  },
  inline: {
    display: "inline",
  },
}));

function PostDetails() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const { state } = location;
  const classes = useStyles();

  /**
   * Description:This function will fetch post list data from server
   */
  const fetchPostDetails = async (postid) => {
    try {
      let response = await fetch(`${BASE_URL}comments?postId=${postid}`);
      let json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
   fetchPostDetails(state.postid);
  }, [state]);

  return (
    <div>
      <Header title="Post Details" />
      <Grid
        justify="center"
        container
        direction="column"
        className={classes.root}
      >
        {data.map((item) => (
          <List className={classes.list}>
            <ListItem alignItems="flex-start">
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      PostId:
                    </Typography>
                    {item.postId}
                  </React.Fragment>
                }
              />
              </ListItem>
              <ListItem alignItems="flex-start">
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Name:
                    </Typography>
                    {item.name}
                  </React.Fragment>
                }
              />
              </ListItem>
              <ListItem alignItems="flex-start">
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Email:
                    </Typography>
                    {item.email}
                  </React.Fragment>
                }
              />
              </ListItem>
              <ListItem alignItems="flex-start">
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Comment:
                    </Typography>
                    {item.body}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        ))}
      </Grid>
    </div>
  );
}

export default memo(PostDetails);
