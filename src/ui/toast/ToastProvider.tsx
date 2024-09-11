import {
    ChakraProvider,
} from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import { theme } from './toastThemes';



const ChakraProviderComponent: React.FC<PropsWithChildren> = ({ children }) => {

    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
}

export default ChakraProviderComponent
