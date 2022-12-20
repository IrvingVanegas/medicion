import { Container, Box, Heading, VStack, FormLabel, Input, Button} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from 'next/router'


const Page = () => {

    const router = useRouter()

    return (
        <Container alignItems="center">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Ingreso</title>
            </Head>

            <Box h={200} />

            <Box borderColor="#0d44db"  borderWidth='1px' bg="#0ddbca" borderRadius='lg' overflow='hidden' align="center" p={5}>
                <main className="login">
                    <VStack paddingStart="1.5rem" >
                        <Heading variant="page-title">
                            Ingreso
                        </Heading>

                        <div className="form-login">
                            <form>
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
                                    onClick={() => router.push('/dashboard')}
                                >
                                    Ingresar
                                </Button>
                            </form>
                        </div>
                    </VStack>
                </main>
            </Box>
        </Container>
    )
}

export default Page;