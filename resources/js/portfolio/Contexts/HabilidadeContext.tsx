import { createContext, Dispatch, ReactNode, useMemo, useState } from "react";
import { Habilidade } from "../types/habilidade";

interface HabilidadeContextProps {
    valor: Habilidade[];
    setValor: Dispatch<React.SetStateAction<Habilidade[]>>;
}

export const HabilidadeContext = createContext<HabilidadeContextProps>({
    valor: [],
    setValor: () => {},
});

export const HabilidadeContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [valor, setValor] = useState<Habilidade[]>([]);

    const value = useMemo(() => ({ valor, setValor }), [valor, setValor]);

    return (
        <HabilidadeContext.Provider value={value}>
            {children}
        </HabilidadeContext.Provider>
    );
};
