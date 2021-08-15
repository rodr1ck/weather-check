import React, { useState, useEffect } from "react";
import ChartHoras from "./chart";

const GraficoViento = () => {
  const [viento, setViento] = useState();
  const [label, setLabel] = useState("Viento");

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
        const arrViento = responseJson.properties.periods.map((x) => {
          const { number, startTime, endTime, windSpeed } = x;
          const wind = windSpeed.split(" ")[0];

          return { number, startTime, endTime, wind };
        });

        console.log(arrViento);
        setViento(arrViento);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {viento != undefined ? (
        <ChartHoras datos={viento} label={label} />
      ) : (
        ""
      )}
    </div>
  );
};

export default GraficoViento;
