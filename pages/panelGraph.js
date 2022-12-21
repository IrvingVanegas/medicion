import { Container, Box, Heading, VStack, Stack, Button} from "@chakra-ui/react"
import { ArrowRightIcon } from "@chakra-ui/icons";
import Head from "next/head"
import Navbar from "../components/navbar"
import { useRouter } from 'next/router'
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

const PanelGraph = (props) => {
    const router = useRouter();
    const {posts} = props;
    let listaPanel = [];
    let listaWatts =[];
    
    posts.map((wa) => {
        listaPanel.push(wa.nombrePanel);
    });
    posts.map((wa) => {
        listaWatts.push(wa.kilowatts);
    });

    listaPanel.reverse();
    listaWatts.reverse();

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
            text: "KiloWatts producido por cada panel",
          },
        },
      };

      const data = {
        labels: listaPanel,
        datasets: [{
            label:"",
            data:listaWatts,
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
                            <Button colorScheme='teal' size='lg' onClick={() => router.push('/tempGraph')}>
                                Temperatura<br/>Ambiental
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
                            <Button colorScheme='teal' size='lg'>
                                Operacion
                            </Button>
                            <Button colorScheme='teal' size='lg'>
                                Operacion
                            </Button>
                            <Button colorScheme='teal' size='lg'>
                                Operacion
                            </Button>
                            <Button colorScheme='teal' size='lg'>
                                Operacion
                            </Button>
                        </Stack>
                </Container>

                <Box h={20} />

                <Container maxW="container.md">

                    <Box display={{md: 'flex'}}>
                        <Box flexGrow={1}>
                            <Heading as="h1" variant="page-title">
                                Resultados
                            </Heading>
                        </Box>
                    </Box>

                    <Box borderColor="#0d44db"  borderWidth='1px' borderRadius='lg' overflow='hidden' h={200} p={5} mb={6} align="center">
                        Resultados
                    </Box>
                </Container>
            </VStack>
        </Box>
    )
}

export async function getStaticProps(context) {
    
    const res = await fetch("http://localhost:3000/api/showPanel");
    const posts = await res.json();
      
    return {
    props: {posts},
    };
  }

export default PanelGraph;