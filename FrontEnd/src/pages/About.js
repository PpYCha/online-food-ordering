import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 600,

    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(5),
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={5}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{"Name: Danica Mari R. Socorro"}</Typography>
            <Typography noWrap>{"Address: Pambujan Northern Samar"}</Typography>
            <Typography noWrap>{"Course: BSIT"}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
