import { Container, Box, Heading, VStack, Text} from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "../components/navbar"

const History = () => {
    return (
        <Container maxWidth="container.md">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>
                    Historial
                </title>
            </Head>

            <VStack>
                <Navbar/>
                <Box h={20} />

                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Medidas Previas
                        </Heading>
                    </Box>
                </Box>

                <Box borderColor="#0d44db"  borderWidth='1px' borderRadius='lg' overflow='hidden' h={200} p={5} mb={6} align="left">
                    <Text>DD/MM/AAA</Text>
                </Box>

                <Box borderColor="#0d44db"  borderWidth='1px' borderRadius='lg' overflow='hidden' h={200} p={5} mb={6} align="left">
                    <Text>DD/MM/AAA</Text>
                </Box>

                <Box borderColor="#0d44db"  borderWidth='1px' borderRadius='lg' overflow='hidden' h={200} p={5} mb={6} align="left">
                    <Text>DD/MM/AAA</Text>
                </Box>


            </VStack>
        </Container>
    )
}

export default History