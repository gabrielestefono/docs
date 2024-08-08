import { useContext } from "react";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import estilo from "./ProjectsContent.module.scss";
import { ProjetoContext } from "@/portfolio/Contexts/ProjetoContext";

export default function ProjectsContent() {
    const { valor } = useContext(ProjetoContext);
    return (
        <div className={estilo.content}>
            <div>
                {valor.map((projeto) => (
                    <ProjectsCard
                        key={projeto.id}
                        imagem={projeto.imagem}
                        title={projeto.nome}
                        alt={projeto.alt}
                    />
                ))}
            </div>
        </div>
    );
}
