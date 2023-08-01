
import { Box } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

const state = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },

};


export default function Circlechart() {
  return (
    <Box className="barchart">
    <ReactApexChart
      options={state}
      series={state.series}
      type="pie"
      height={250}
    />
  </Box>
  )
}
