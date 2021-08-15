import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={6} sm={3}></Grid>
        <Grid item xs={6} sm={3}>
          <Button
            variant="contained"
            onClick={() => history.push("/temperatura")}
          >
            Temperatura
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/viento")}
          >
            Velocidad del Viento
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}></Grid>
      </Grid>
    </div>
  );
}
