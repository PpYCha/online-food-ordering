import React from "react";
import data from "../data";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "30.25%", // 16:9
  },
});

// nalipong ak sa JSX, pag abat ko mag himu iba nga component para diri malipat ohh

function Items(props) {
  return <li>{props.name}</li>;
}

function Store() {
  return (
    <Grid container spacing={2}>
      {data.map((store) => {
        return (
          <div>
            <h1>{store.storeName}</h1>
            <ul>
              {store.items.map((item) => {
                return <Items name={item.name}></Items>;
              })}
            </ul>
          </div>
        );
      })}
    </Grid>
  );
}

export default Store;
