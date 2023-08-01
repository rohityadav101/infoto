import Chart from "react-apexcharts";
import React from 'react'

export default function LineChart() {
    const chart = {
        options: {
          chart: {
            background: "transparent",
            stacked: false,
            toolbar: {
              show: false,
            },
            zoom: false,
          },
          title: {
            align: "left",
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize: "18px",
              fontWeight: "bold",
              color: "#fff",
            },
          },
    
          colors: ["#405DF9", ],
          dataLabels: {
            enabled: false,
          },
          grid: {
            borderColor: "",
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          legend: {
            show: true,
            position: "top",
            horizontalAlign: "left",
           
          },
          markers: {
            size: 4,
            strokeColors: ["#1f87e6", "#27c6db"],
            strokeWidth: 0,
            shape: "circle",
            radius: 2,
            hover: {
              size: undefined,
              sizeOffset: 2,
            },
          },
          stroke: {
            width: 2,
            curve: "smooth",
            lineCap: "butt",
            dashArray: [0, 0],
          },
          theme: {
            mode: ""         },
    
          xaxis: {
            axisBorder: {
              color: "",
            },
            axisTicks: {
              show: true,
              color: "",
            },
            categories: ["05 May", "06 May", "07 May", "08 May", "09 May"],
          },
          yaxis: [
            {
              axisBorder: {
                show: true,
                color: "",
              },
              axisTicks: {
                show: true,
                color: "",
              },
              labels: {
                style: {
                  colors: "",
                },
              },
            },
          ],
        },
        series: [
          {
            name: "max bid",
            data: [150, 300, 600, 700, 900],
          },
    
        ],
      };
  return (
    <div>
    <Chart type="area" {...chart} height={250} />
    </div>
  )
}
