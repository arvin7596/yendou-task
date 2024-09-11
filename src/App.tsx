
import '@fontsource/inter/400.css'; // Regular weight
import '@fontsource/inter/700.css'; // Bold weight
import React from "react"

import { Center } from "@chakra-ui/react"
import CounterContextProvider from "./context/CounterContext"
import Counter from "./features/counter/Counter"
import ChakraProviderComponent from "./ui/toast/ToastProvider"


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