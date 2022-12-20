import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from "chart.js";
import { Line } from "react-chartjs-2";

function GraphTotal (){
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        ArcElement
      );

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "right",
          },
          title: {
            display: true,
            text: "Mes",
          },
        },
      };
    
      const data = {
        labels: ["Enero", "Febrero", "Marzo", "Abril"],
        datasets: [
          {
            id: 1,
            label: "A",
            data: [30, 50, 10, 80],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(255, 100, 90)",
            ],
            hoverOffset: 4,
          },
          {
            id: 2,
            label: "B",
            data: [10, 70, 20, 30],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(255, 100, 90)",
            ],
            hoverOffset: 4,
          },
        ],
      };
      return <Line datasetIdKey='id' options={options} data={data} />;
}

export default GraphTotal