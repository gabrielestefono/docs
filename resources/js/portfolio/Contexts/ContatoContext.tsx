import { createContext, Dispatch, ReactNode, useMemo, useState } from "react";
import { Contato } from "../types/contato";

interface ContatoContextProps {
    valor: Contato;
    setValor: Dispatch<React.SetStateAction<Contato>>;
}

export const ContatoContext = createContext<ContatoContextProps>({
    valor: {
        created_at: "",
        email: "",
        email_icon: "",
        email_link: "",
        id: 0,
        linkedin: "",
        linkedin_icon: "",
        linkedin_link: "",
        mensagem_inicial: "",
        updated_at: "",
        whatsapp: "",
        whatsapp_icon: "",
        whatsapp_link: "",
    },
    setValor: () => {},
});

export const ContatoContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [valor, setValor] = useState<Contato>({
        created_at: "",
        email: "",
        email_icon: "",
        email_link: "",
        id: 0,
        linkedin: "",
        linkedin_icon: "",
        linkedin_link: "",
        mensagem_inicial: "",
        updated_at: "",
        whatsapp: "",
        whatsapp_icon: "",
        whatsapp_link: "",
    });

    const value = useMemo(() => ({ valor, setValor }), [valor, setValor]);

    return (
        <ContatoContext.Provider value={value}>
            {children}
        </ContatoContext.Provider>
    );
};
