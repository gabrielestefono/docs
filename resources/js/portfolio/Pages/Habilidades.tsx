import SkillsInnerContent from "../Components/Habilidades/SkillsInner/SkillsInnerContent";
import SkillTitle from "../Components/Habilidades/SkillsInner/SkillsTitle";
import HeroSection from "../Components/Home/HeroSection/HeroSection";
import Separator from "../Components/Shared/Separator/Separator";
import { HabilidadeContextProvider } from "../Contexts/HabilidadeContext";
import Layout from "../Layout";
import { Habilidade } from "../types/habilidade";

interface HabilidadeProps {
    habilidades: Habilidade[];
}

export default function Habilidades({ habilidades }: Readonly<HabilidadeProps>) {
    return (
        <HabilidadeContextProvider>
            <Layout title="Portfolio" type="habilidade" data={habilidades}>
                <HeroSection />
                <Separator titulo="Minhas Habilidades" />
                <SkillTitle />
                <SkillsInnerContent />
            </Layout>
        </HabilidadeContextProvider>
    );
}
