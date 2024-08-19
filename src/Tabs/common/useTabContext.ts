import { useContext } from "react";
import { TabsContext } from "./TabsContext";

function useTabContext() {
  const context = useContext(TabsContext);
  if (!context) throw new Error("useTabContext should be used inside TabList component");
  return context;
}

export default useTabContext;
