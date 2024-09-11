import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function useCounter() {
  const context = useContext(CounterContext);
  if (context === undefined) throw new Error("context is not in the provider");
  return context;
}

export { useCounter };
