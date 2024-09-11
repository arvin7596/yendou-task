import { createContext, PropsWithChildren, useState } from "react";
import { ICounterContext } from "./counterContext.type";
export const CounterContext = createContext<ICounterContext | undefined>(undefined);

const CounterContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [count, setCounter] = useState(0)
    const increaseCounter = () => {
        setCounter((pre) => pre + 1)
    }
    const value = {
        count,
        increaseCounter
    };
    return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
}



export default CounterContextProvider 