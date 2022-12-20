import { Container, Box, Heading, VStack, FormLabel, Input, Button} from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "../components/navbar"

const User = () =>{
    return(
        <Box>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>
                    Registro Usuario
                </title>
            </Head>

            <VStack>
                <Navbar/>
                <Box h={20}/>

                <Container maxW="container.md">
                    <Box display={{md: 'flex'}}>
                        <Box flexGrow={1}>
                            <Heading as="h2" variant="page-title">
                                Registro de Usuarios
                            </Heading>
                        </Box>
                    </Box>

                    <Box borderColor="#0d44db" bg="#0ddbca"  borderWidth='1px' borderRadius='lg' overflow='hidden' h={400} p={5} mb={6} align="center">
                        <main className="registro">
                            <VStack paddingStart="1.5rem" maxW="container.md">
                                <div className="form-registro">
                                    <form>

                                        <FormLabel> Nombre(s) </FormLabel>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Nombre(s)"
                                            variant="filled"
                                            maxWidth="container.md"
                                        />

                                        <FormLabel> Apellido(s) </FormLabel>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Apellidos(s)"
                                            variant="filled"
                                            maxWidth="container.md"
                                        />

                                        <FormLabel> Tipo de Usuario </FormLabel>
                                        <Input
                                            id="tipo"
                                            type="text"
                                            placeholder="Usuario)"
                                            variant="filled"
                                            maxWidth="container.md"
                                        />

                                        <FormLabel> Email </FormLabel>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="email@mail.com"
                                            variant="filled"
                                            maxWidth="container.md"
                                        />

                                        <FormLabel> Contraseña </FormLabel>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="Contraseña"
                                            variant="filled"
                                            maxWidth="container.md"
                                        />

                                        <Button
                                            mt={4}
                                            size="lg"
                                            colorScheme="teal"
                                            //type="submit"
                                        >
                                            Registrar
                                        </Button>
                                    </form>
                                </div>
                            </VStack>
                        </main>
                    </Box>
                </Container>
            </VStack>
        </Box>
    )
}

export default User