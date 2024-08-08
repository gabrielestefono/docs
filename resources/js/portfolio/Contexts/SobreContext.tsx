import { createContext, Dispatch, ReactNode, useMemo, useState } from "react";
import { Sobre } from "../types/sobre";

interface SobreContextProps {
    valor: Sobre[];
    setValor: Dispatch<React.SetStateAction<Sobre[]>>;
}

export const SobreContext = createContext<SobreContextProps>({
    valor: [],
    setValor: () => {},
});

export const SobreContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [valor, setValor] = useState<Sobre[]>([]);

    const value = useMemo(() => ({ valor, setValor }), [valor, setValor]);

    return (
        <SobreContext.Provider value={value}>
            {children}
        </SobreContext.Provider>
    );
};
