import { Container, Box, Heading, VStack, Stack, useColorModeValue, Button} from "@chakra-ui/react"
import Image from "next/image";
import Head from "next/head"
import { useRouter } from 'next/router'
import Navbar from "../components/navbar"
import { ArrowRightIcon } from "@chakra-ui/icons";

const Dashboard = () => {
    const router = useRouter();
    const imageHeader = '/images/agrovoltaica_11zon-768x439.jpg'

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

                <Box h={10} />

                <Container maxW="container.md">

                    <Box display={{md: 'flex'}}>
                        <Box flexGrow={1}>
                            <Heading as="h2" variant="page-title" align="center">
                                Interfaz de Visualizacion Agrovoltaica
                            </Heading>
                        </Box>
                    </Box>
                    <Box h={10} />
                    <Container alignContent="center">
                        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1} w="500px">
                            ¿Que desea visualizar?
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
                            <Button colorScheme='teal' size='lg' onClick={() => router.push('/tempGraph')}>
                                Temperatura<br/>Ambiental
                            </Button>
                        </Stack>
                    </Container>
                    <Box h={10} />
                    <Box
                        borderRadius="lg"
                        mb={6}
                        p={3}
                        textAlign="center"
                        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                        css={{ backdropFilter: 'blur(10px)' }}
                    >
                        La energía agrovoltaica, también conocida como agrofotovoltaica, consiste en aprovechar una misma superficie de terreno tanto para obtener energía solar como productos agrícolas. Es decir, los paneles solares conviven con los cultivos sobre la misma superficie.
                    </Box>

                    <Box borderColor="#0d44db"  borderWidth='1px' borderRadius='lg' overflow='hidden' p={5} mb={6} align="center">
                        <Image src={imageHeader} width={700} height={700} alt="header" />
                    </Box>
                </Container>
            </VStack>
        </Box>
    )
}

export default Dashboard;