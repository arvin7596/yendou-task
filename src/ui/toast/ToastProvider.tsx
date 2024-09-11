import React, { PropsWithChildren } from 'react';

import {
    ChakraProvider,
} from '@chakra-ui/react';
import { theme } from './toastThemes';



const ChakraProviderComponent: React.FC<PropsWithChildren> = ({ children }) => {

    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
}

export default ChakraProviderComponent
