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
import { useEffect, useState } from "react";

function GraphTotal (){
  const [capturas, setCapturas] = useState([]);
  const [watts, setWatts] = useState(
    []
  );

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
            text: "Total de Kilowatts en los ultimos 5 dias",
          },
        },
      };
    
      useEffect(() => {
        let lista = [];
        watts.map((wa) => {
          lista.push(wa.captura);
        });
        setCapturas(lista);
    
        return () => {
          setCapturas([])
        };
      }, [watts]);
    
      let datasets = capturas.map((c) => {
        return {
          label: c,
          data: watts.map((w) => w.nWatts),
          backgroundColor: "rgb(255, 99, 132)",
        };
      });
    
      const data = {
        labels: capturas,
        datasets: [
          {
            label: "",
            data: watts.map((wa) => wa.nWatts),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
            ],
          },
        ],
      };

      useEffect(() => {
        const getCapturas = async () => {
          let respuesta = await sql_query(`
              SELECT * FROM totalwatts
              ORDER BY idwatts DESC
              LIMIT 5
          `);
    
          let lista = [];
          respuesta.data.map((com) => {
            if (com.watts !== undefined) {
              lista.push({
                captura: com.captura,
                nWatts: com.watts.length,
              });
            } else {
              lista.push({
                capturas: com.captura,
                nWatts: 0,
              });
            }
          });
          setWatts(lista);
        };
    
        getCapturas();
      }, []);
      
      return <Line datasetIdKey='id' options={options} data={data} />;
}

export default GraphTotal