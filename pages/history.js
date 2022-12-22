import { Container, Box, Heading, VStack, Button} from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "../components/navbar"

const History = (props) =>{
    const {posts} = props;
    console.log(posts);
    return(
        <Box>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>
                    Historial
                </title>
            </Head>

            <VStack>
                <Navbar/>
                <Box h={20}/>

                <Container maxW="container.md">
                    <Box display={{md: 'flex'}}>
                        <Box flexGrow={1}>
                            <Heading as="h2" variant="page-title">
                                Operaciones Previas
                            </Heading>
                        </Box>
                    </Box>
                    <Box h={10} />

                    <Box borderColor="#0d44db" bg="#0ddbca"  borderWidth='1px' borderRadius='lg' overflow='hidden' p={5} mb={6} align="center">
                        <main className="registro">
                            <VStack paddingStart="1.5rem" maxW="container.md">
                                <div>
                                {posts.map(
                                    (item)=> <>
                                            <h2 key="id">Operacion {item.idhistorial}</h2>
                                            <br/>
                                            <p key="tipo">Tipo de Operacion: {item.tipo}</p>
                                            <p key="prom">Promedio: {item.promedio}</p>
                                            <p key="vari">Varianza: {item.varianza}</p>
                                            <p key="desv">Desviacion Estandar: {item.desviacionstandar}</p>
                                            <p key="fecha">Fecha de Captura: {item.fechacaptura}</p>
                                            <hr/>
                                            <br/><br/>
                                        </>
                                    )}
                                </div>
                                <br/>
                            </VStack>
                        </main>
                    </Box>
                </Container>
            </VStack>
        </Box>
    )
}

export async function getStaticProps(context) {
    
    const res = await fetch("http://localhost:3000/api/showHistory");
    const posts = await res.json();
      
    return {
    props: {posts},
    };
}

export default History