import ContactMeTop from "./ContactMeTop";
import ContactMeMiddle from "./ContactMeMiddle";
import ContactMeBottom from "./ContactMeBottom";
import { useContext } from "react";
import { ContatoContext } from "@/portfolio/Contexts/ContatoContext";

interface ContactMeProps {
    espaco?: boolean;
}

export default function ContactMe({ espaco }: Readonly<ContactMeProps>) {
    const { valor } = useContext(ContatoContext);
    console.log(valor);
    return (
        <div>
            <ContactMeTop />
            <ContactMeMiddle />
            {espaco ? <ContactMeBottom espaco={true} /> : <ContactMeBottom />}
        </div>
    );
}
