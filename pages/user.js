import { Container, Box, Heading, VStack, Button} from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from 'next/router'
import Navbar from "../components/navbar"

const User = (props) =>{
    const router = useRouter();
    const {posts} = props;
    console.log(posts);
    const data=posts.map(
        (item)=> <tr>
                    <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {item.idusuarios}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                    <td>
                        &nbsp;&nbsp;
                        {item.nombre}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                    <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {item.apellido}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                    <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {item.email}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                    <td>{item.tipo}</td>
                  </tr>
    )
    return(
        <Box>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>
                    Usuarios
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
                    <Box h={10} />

                    <Box borderColor="#0d44db" bg="#0ddbca"  borderWidth='1px' borderRadius='lg' overflow='hidden' p={5} mb={6} align="center">
                        <main className="registro">
                            <VStack paddingStart="1.5rem" maxW="container.md">
                                <div>
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                            <th>ID</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Correo</th>
                                            <th>Tipo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data}
                                        </tbody>
                                    </table>
                                </div>
                                <br/>
                                <Button
                                    mt={4}
                                    size="lg"
                                    colorScheme="teal"
                                    onClick={() => router.push('/userReg')}
                                >
                                    Nuevo Usuario
                                </Button>
                            </VStack>
                        </main>
                    </Box>
                </Container>
            </VStack>
        </Box>
    )
}

export async function getStaticProps(context) {
    
    const res = await fetch("http://localhost:3000/api/showUser");
    const posts = await res.json();
      
    return {
    props: {posts},
    };
}

export default User