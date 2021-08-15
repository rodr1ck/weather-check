import React, { Component } from "react";
import * as chartjs from "chart.js";
import { Line } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

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

const ChartHoras = (props) => {
  const classes = useStyles();
  console.log(props);

  const startTime = props.datos.map((x) => {
    const { startTime } = x;
    //console.log(startTime);
    return startTime;
  });
  console.log(startTime);

  const temperature = props.datos.map((x) => {
    const { temperature } = x;
    //console.log(startTime);
    return temperature;
  });
  console.log(temperature);

  let options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["00:00", "06:00", "12:00", "18:00", "23:59"],
    },
  };

  let series = [
    {
      name: "Contactos",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  console.log(series[0].data);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <Line
            data={{
              labels: startTime,
              datasets: [
                {
                  label: props.label,
                  data: temperature,
                  fill: true,
                  backgroundColor: "rgb(230, 126, 34, 0.5)",
                  borderColor: "rgb(230, 126, 34)",
                  tension: 0.1,
                },
              ],
            }}
            options={options}
            height={400}
            width={600}
          />
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
};

export default ChartHoras;
