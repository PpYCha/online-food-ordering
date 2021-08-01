import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import data from "../data.json";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Store from "./Store";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "30.25%", // 16:9
  },
});

export default function StoreList() {
  const classes = useStyles();
  // const { stores, loading } = useGlobalContext();
  // if (loading) {
  //   return <Loading />;
  // }
  // if (stores.length < 1) {
  //   return <h2>No stores matched your search criteria</h2>;
  // }
  return (
    <Grid container spacing={2}>
      {data.stores.map((item) => {
        return <Store key={item.id} {...item} />;
      })}
    </Grid>
  );
}
