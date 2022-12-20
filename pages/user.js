import { Container, Box, Heading, VStack, Button} from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import Navbar from "../components/navbar"

const User = () =>{
    const [usuarios, setUsuarios] = useState([]);
    const router = useRouter();

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

                    <Box borderColor="#0d44db" bg="#0ddbca"  borderWidth='1px' borderRadius='lg' overflow='hidden' h={300} p={5} mb={6} align="center">
                        <main className="registro">
                            <VStack paddingStart="1.5rem" maxW="container.md">
                                <DataTable
                                    columns={columns}
                                    data={data}
                                />
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

const columns = [
    {
        name: 'Id',
        selector: row => row.id,
    },
    {
        name: 'Nombre',
        selector: row => row.name,
    },
    {
        name: 'Apellidos',
        selector: row => row.lastName,
    },
    {
        name: 'Tipo',
        selector: row => row.tipo,
    },
    {
        name: 'Correo',
        selector: row => row.email,
    },
];

const data = [
    {
        id: 1,
        name: 'Irving',
        lastName: 'Vanegas',
        tipo: 'Administrador',
        email: 'irving@mail.com',
    },
    {
        id: 2,
        name: 'John',
        lastName: 'Smith',
        tipo: 'Usuario',
        email: 'john@mail.com',
    },
    
]

export default User