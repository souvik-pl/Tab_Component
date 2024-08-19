import { createContext } from "react";
import { TabContextType } from "./common.types";

export const TabsContext = createContext<TabContextType | undefined>(undefined);
