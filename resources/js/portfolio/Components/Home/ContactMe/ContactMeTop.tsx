import { useContext } from "react";
import estilo from "./ContactMeTop.module.scss";
import { ContatoContext } from "@/portfolio/Contexts/ContatoContext";
export default function ContactMeTop() {
    const { valor } = useContext(ContatoContext);
    return (
        <div className={estilo.title}>
            <h3>
                Vamos discutir o seu <span>Projeto.</span>
            </h3>
            <p>{valor.mensagem_inicial}</p>
        </div>
    );
}
