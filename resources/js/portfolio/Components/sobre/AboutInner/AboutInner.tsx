import estilo from "./AboutInner.module.scss";
import CardImage from "./Cards/CardImage";
import CardInfo from "./Cards/CardInfo";
import { Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { SobreContext } from "@/portfolio/Contexts/SobreContext";

export default function AboutInner() {
    const {valor} = useContext(SobreContext);
    return (
        <div className={estilo.aboutinner}>
            {valor.map((sobre, index) => {
                if (index % 2 === 1) {
                    return (
                        <Fragment key={sobre.id}>
                            <CardInfo title={sobre.titulo} text={sobre.texto} />
                            <CardImage image={sobre.imagem} alt={sobre.alt}/>
                        </Fragment>
                    );
                }
                return (
                    <Fragment  key={sobre.id}>
                        <CardImage image={sobre.imagem} alt={sobre.alt}/>
                        <CardInfo title={sobre.titulo} text={sobre.texto} />
                    </Fragment>
                );
            })}
        </div>
    );
}
