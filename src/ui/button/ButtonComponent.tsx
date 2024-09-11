import React, { PropsWithChildren } from 'react'

import { Button } from '@chakra-ui/react'
import { IButton } from './button.type'


// The purpose of this component is to show the reusability  

const ButtonComponent: React.FC<PropsWithChildren<IButton>> = ({ children, onClick, color }) => {
    return (<>
        <Button colorScheme={color} onClick={onClick}>
            {children}
        </Button>
    </>)
}

export default ButtonComponent