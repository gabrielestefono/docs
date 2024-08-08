import HeroSection from "../Components/Home/HeroSection/HeroSection";
import ProjectsContent from "../Components/Projetos/ProjectsInner/ProjectsContent";
import ProjectsTitle from "../Components/Projetos/ProjectsInner/ProjectsTitle";
import Separator from "../Components/Shared/Separator/Separator";
import { ProjetoContextProvider } from "../Contexts/ProjetoContext";
import Layout from "../Layout";

interface ProjetosProps {
    projetos: Projeto[];
}

export default function Projetos({ projetos }: Readonly<ProjetosProps>) {
    const text =
        "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.";
    return (
        <ProjetoContextProvider>
            <Layout title="Portfólio" data={projetos} type="projeto">
                <HeroSection />
                <Separator titulo="Projetos" />
                <ProjectsTitle text={text} />
                <ProjectsContent />
            </Layout>
        </ProjetoContextProvider>
    );
}
