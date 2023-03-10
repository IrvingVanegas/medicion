import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";

const Website = ({Component, pageProps, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} key={router.route} />
        </ChakraProvider>
    )
}

export default Website