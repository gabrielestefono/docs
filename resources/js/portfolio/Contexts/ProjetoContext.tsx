import { createContext, Dispatch, ReactNode, useMemo, useState } from "react";

interface ProjetoContextProps {
    valor: Projeto[];
    setValor: Dispatch<React.SetStateAction<Projeto[]>>;
}

export const ProjetoContext = createContext<ProjetoContextProps>({
    valor: [],
    setValor: () => {},
});

export const ProjetoContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [valor, setValor] = useState<Projeto[]>([]);

    const value = useMemo(() => ({ valor, setValor }), [valor, setValor]);

    return (
        <ProjetoContext.Provider value={value}>
            {children}
        </ProjetoContext.Provider>
    );
};
