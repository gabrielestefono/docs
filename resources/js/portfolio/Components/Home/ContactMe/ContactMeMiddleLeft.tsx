import ContactMeMiddleLeftCard from "./ContactMeMiddleLeftCard";
import estilo from "./ContactMeMiddleLeft.module.scss";
import { useContext } from "react";
import { ContatoContext } from "@/portfolio/Contexts/ContatoContext";

export default function ContactMeMiddleLeft() {
    const { valor } = useContext(ContatoContext);
    return (
        <div className={estilo.contact}>
            <ContactMeMiddleLeftCard
                img={valor.whatsapp_icon}
                title="Whatsapp"
                text={valor.whatsapp}
                altText="Ícone de telefone"
                link={valor.whatsapp_link}
            />
            <ContactMeMiddleLeftCard
                img={valor.email_icon}
                title="Email"
                text={valor.email}
                altText="Ícone de email"
                link={valor.email_link}
            />
            <ContactMeMiddleLeftCard
                img={valor.linkedin_icon}
                title="Linkedin"
                text={valor.linkedin}
                altText="Ícone de endereço"
                link={valor.linkedin_link}
            />
        </div>
    );
}
