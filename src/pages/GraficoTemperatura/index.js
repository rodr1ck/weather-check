import React, { useState, useEffect } from "react";
import ChartHoras from "./chart";

const GraficoTemperatura = () => {
  const [temperatura, setTemperatura] = useState();
  const [label, setLabel] = useState("Temperatura");

  useEffect(() => {
    const url = "https://api.weather.gov/gridpoints/TOP/31,80/forecast";

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((responseJson) => {
        const arrTemperature = responseJson.properties.periods.map((x) => {
          const { number, startTime, endTime, temperature } = x;
          return { number, startTime, endTime, temperature };
        });
        setTemperatura(arrTemperature);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {temperatura != undefined ? (
        <ChartHoras datos={temperatura} label={label} />
      ) : (
        ""
      )}
    </div>
  );
};

export default GraficoTemperatura;
