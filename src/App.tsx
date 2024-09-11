import { Center } from "@chakra-ui/react"
import CounterContextProvider from "./context/CounterContext"
import Counter from "./features/counter/Counter"
import ChakraProviderComponent from "./ui/toast/ToastProvider"
import React from "react"


const App: React.FC = () => {
  return <>
    <ChakraProviderComponent >
      <CounterContextProvider>
        <Center height="100vh">
          <Counter />
        </Center>
      </CounterContextProvider>
    </ChakraProviderComponent >
  </>
}

export default App