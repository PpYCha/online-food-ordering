import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";

import { useGlobalContext } from "../context";
import Loading from "./Loading";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "30.25%", // 16:9
  },
});

const Store = ({ id, img, storeName }) => {
  const classes = useStyles();
  return (
    <Grid item lg={3} sm={6} xs={12} component={Link} to={`/store/${id}`}>
      <Card>
        <CardHeader />
        <CardMedia className={classes.media} image={img} title={storeName} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <Grid container>
                <Grid container justify="space-evenly">
                  <label>{storeName}</label>
                </Grid>
              </Grid>
              <Divider light />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Store;
