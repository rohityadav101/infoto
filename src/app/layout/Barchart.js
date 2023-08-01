
import { Box } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

const state = {
  series: [{
    name: "sales",
    data: [{
      x: 'January',
      y: 100
    }, {
      x: 'February',
      y: 200
    }, {
      x: 'March',
      y: 300
    }, {
      x: 'April',
      y: 400
    }, {
      x: 'May',
      y: 500
    }, {
      x: 'June',
      y: 600
    }]
  }],
  options: {
    chart: {
      type: 'bar',
      height: 380
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function(val) {
          return "Q" + dayjs(val).quarter()
        }
      },
      group: {
        style: {
          fontSize: '10px',
          fontWeight: 700
        },
        groups: [
          { title: '2019', cols: 4 },
          { title: '2020', cols: 4 }
        ]
      }
    },
    title: {
        text: 'Grouped Labels on the X-axis',
    },
    tooltip: {
      x: {
        formatter: function(val) {
          return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY")
        }  
      }
    },
  },

};

export default function Barchart() {
  return (
    <Box className="barchart">
      <ReactApexChart
        options={state}
        series={state.series}
        type="bar"
        height={250}
      />
    </Box>
  );
}
