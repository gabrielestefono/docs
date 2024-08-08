import { useContext } from "react";
import SkillsInnerCard from "./Cards/SkillsInnerCard";
import estilo from "./SkillsInnerContent.module.scss";
import { HabilidadeContext } from "@/portfolio/Contexts/HabilidadeContext";

export default function SkillsInnerContent() {
    const { valor } = useContext(HabilidadeContext);
    return (
        <div className={estilo.content}>
            <div>
                {valor.map((habilidade) => (
                    <SkillsInnerCard
                        key={habilidade.id}
                        image={habilidade.imagem}
                        text={habilidade.nome}
                        alt={habilidade.alt}
                    />
                ))}
            </div>
        </div>
    );
}
