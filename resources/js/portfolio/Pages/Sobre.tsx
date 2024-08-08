import HeroSection from "../Components/Home/HeroSection/HeroSection";
import AboutInner from "../Components/sobre/AboutInner/AboutInner";
import { SobreContextProvider } from "../Contexts/SobreContext";
import Layout from "../Layout";
import { Sobre as SobreInterface } from "../types/sobre";

interface SobreProps {
    sobre: SobreInterface[];
}

export default function Sobre({ sobre }: Readonly<SobreProps>) {
    return (
        <SobreContextProvider>
            <Layout title="Portfólio" data={sobre} type="sobre">
                <HeroSection />
                <AboutInner />
            </Layout>
        </SobreContextProvider>
    );
}
