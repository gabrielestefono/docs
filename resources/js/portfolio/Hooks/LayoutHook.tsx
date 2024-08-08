import { useContext } from "react";
import { LayoutContext } from "../Contexts/LayoutContext";

export const useLayoutContext = () => {
    const context = useContext(LayoutContext);
    if (context === undefined) {
        throw new Error("useLayoutContext must be used within a LayoutContextProvider");
    }
    return context;
};