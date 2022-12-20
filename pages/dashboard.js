import { Container, Box, Heading, VStack, Stack} from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "../components/navbar"
import Graph from "../components/chart/chart"

const Dashboard = () => {

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
                    </Box>

                    <Box borderColor="#0d44db"  borderWidth='1px' borderRadius='lg' overflow='hidden' h={400} p={5} mb={6} align="center">
                        <Graph />
                    </Box>
                </Container>

                <Container>
                    <Stack
                        direction={{base: 'column', md :'row'}}
                        display={{base: 'none', md: 'flex'}}
                        width={{base: 'full', md: 'auto'}}
                    >
                        <Box as="button" borderRadius="lg" w="100px" borderColor="#0d44db"  borderWidth='1px' bg="#0ddbca">
                           Operacion 1
                        </Box>
                        <Box as="button" borderRadius="lg" w="100px" borderColor="#0d44db"  borderWidth='1px' bg="#0ddbca">
                            Operacion 2
                        </Box>
                        <Box as="button" borderRadius="lg" w="100px" borderColor="#0d44db"  borderWidth='1px' bg="#0ddbca">
                            Operacion 3
                        </Box>
                        <Box as="button" borderRadius="lg" w="100px" borderColor="#0d44db"  borderWidth='1px' bg="#0ddbca">
                            Operacion 4
                        </Box>
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

export default Dashboard;