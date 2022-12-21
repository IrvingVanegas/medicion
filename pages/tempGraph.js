import { Container, Box, Heading, VStack, Stack, Button} from "@chakra-ui/react"
import { ArrowRightIcon } from "@chakra-ui/icons";
import Head from "next/head"
import Navbar from "../components/navbar"
import { useRouter } from 'next/router'
import { useState } from "react";
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

const TempGraph = (props) => {
    const router = useRouter();
    const [promedioCalculado, setPromCalc] = useState(false);
    const [varianzaCalculada, setVarCalc] = useState(false);
    const [desviacionSCalculado, setDesSCalc] = useState(false);
    const [promedio, setPromedio] = useState(0);
    const [varianza, setVarianza] = useState(0);
    const [desviacion, setDesviacion] = useState(0);
    const {posts} = props;
    let listaCap = [];
    let listaCent =[];
    
    posts.map((wa) => {
        listaCap.push(wa.captura);
    });
    posts.map((wa) => {
        listaCent.push(wa.centigrados);
    });

    listaCap.reverse();
    listaCent.reverse();

    function calcularPromedio() {
        if (promedioCalculado == true) {
            <Notification>Promedio ya calculado</Notification>
        } else {
            let prom = listaCent.reduce((acc, curr)=>{
                return acc + curr
            }, 0) / listaCent.length;
    
            setPromedio(promedio + prom);
            setPromCalc(true);
        }
    }

    function calcVarianza(){
        if (varianzaCalculada == true) {
            <Notification>Varianza ya calculada</Notification>
        } else {
            let sum = listaCent.reduce((acc, curr)=> acc + curr);
            let num =  listaCent.length;
            let mean = sum / num;
            let variance = 0;
            listaCent.forEach(num =>{
                variance += ((num-mean)*(num-mean));
            });
            variance /= num;
            setVarianza(varianza+variance)
            setVarCalc(true);
        }
    }

    function desviacionStandart(){
        if (desviacionSCalculado == true) {
            <Notification>Varianza ya calculada</Notification>
        } else {
            let mean = listaCent.reduce((acc, curr)=>{
                return acc + curr
              }, 0) / listaCent.length;
               
              listaCent = listaCent.map((k)=>{
                return (k - mean) ** 2
              });
               
             let sum = listaCent.reduce((acc, curr)=> acc + curr, 0);
              
             let des = Math.sqrt(sum / listaCent.length);
    
             setDesviacion(desviacion+des);
             setDesSCalc(true);
        }
    }

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
            text: "Temperatura C° en los ultimos 5 dias",
          },
        },
      };

      const data = {
        labels: listaCap,
        datasets: [{
            label:"",
            data:listaCent,
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(255, 100, 90)",
              ],
              hoverOffset: 4,
        }]
      }
    

    return (

        <Box>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>
                    Medicion
                </title>
            </Head>


            <VStack>
                <Navbar/>

                <Box h={20} />

                <Container maxW="container.md">

                    <Box display={{md: 'flex'}}>
                        <Box flexGrow={1}>
                            <Heading as="h2" variant="page-title">
                                Datos Actuales
                            </Heading>
                        </Box>
                        <br/>
                        <Stack spacing={4} direction='row' align='center'>
                            <Box>
                                <ArrowRightIcon/>
                            </Box>
                            <Button colorScheme='teal' size='lg' onClick={() => router.push('/totalGraph')}>
                                Produccion<br/>General
                            </Button>
                            <Button colorScheme='teal' size='lg' onClick={() => router.push('/panelGraph')}>
                                Produccion<br/>por Panel
                            </Button>
                        </Stack>
                    </Box>
                    <br/>
                    <Box borderColor="#0d44db"  borderWidth='1px' borderRadius='lg' overflow='hidden' p={5} mb={6} align="center">
                        <Line datasetIdKey='id' options={options} data={data} />
                    </Box>
                </Container>

                <Container>
                <br/>
                        <Stack spacing={4} direction='row' align='center'>
                            <Button onClick={calcularPromedio} colorScheme='teal' size='lg'>
                                Promedio
                            </Button>
                            <Button onClick={calcVarianza} colorScheme='teal' size='lg'>
                                Varianza
                            </Button>
                            <Button onClick={desviacionStandart} colorScheme='teal' size='lg'>
                                Desviacion<br/>Estandar
                            </Button>
                            <Button colorScheme='teal' size='lg'>
                                Operacion
                            </Button>
                        </Stack>
                </Container>

                <br/>

                <Container maxW="container.md">

                    <Box display={{md: 'flex'}}>
                        <Box flexGrow={1}>
                            <Heading as="h1" variant="page-title">
                                Resultados
                            </Heading>
                        </Box>
                    </Box>

                    <Box borderColor="#0d44db"  borderWidth='1px' borderRadius='lg' overflow='hidden' h={200} p={5} mb={6} align="center">
                        Promedio: {promedio}
                        <br/>
                        Varianza: {varianza}
                        <br/>
                        Desviacion Estandar: {desviacion}
                    </Box>
                </Container>
            </VStack>
        </Box>
    )
}

export async function getStaticProps(context) {
    
    const res = await fetch("http://localhost:3000/api/showTemp");
    const posts = await res.json();
      
    return {
    props: {posts},
    };
  }

export default TempGraph;