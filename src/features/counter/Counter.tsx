import React, { useEffect } from "react"

import { Box, Flex, useToast } from "@chakra-ui/react"
import ButtonComponent from "../../ui/button/Button"
import { CheckIcon } from '@chakra-ui/icons'
import { useCounter } from "../../hooks/useCounter"

const Counter: React.FC = () => {
    const { count, increaseCounter } = useCounter()
    const toast = useToast()
    useEffect(() => {
        if (count > 0)
            toast({
                title: 'Incremented',
                description: `Counter is now ${count}`,
                status: 'success',
                duration: 9000,
                variant: 'customSuccess',
                icon: <CheckIcon />
            })
    }, [count, toast])

    return <Flex alignItems="center" gap="12px">
        <Box fontFamily="Inter" fontStyle="normal" fontWeight="500" fontSize="14px" lineHeight="16px">
            Current count {count}
        </Box>
        <ButtonComponent color="gray" onClick={increaseCounter}>
            + 1
        </ButtonComponent>
    </Flex>
}

export default Counter

