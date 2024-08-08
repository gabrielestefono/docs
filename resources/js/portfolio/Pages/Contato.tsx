import ContactMe from "../Components/Home/ContactMe/ContactMe";
import HeroSection from "../Components/Home/HeroSection/HeroSection";
import Separator from "../Components/Shared/Separator/Separator";
import { ContatoContextProvider } from "../Contexts/ContatoContext";
import Layout from "../Layout";
import { Contato as ContatoObject } from "../types/contato";

interface ContatoProps {
    contato: ContatoObject;
}

export default function Contato({ contato }: Readonly<ContatoProps>) {
    return (
        <ContatoContextProvider>
            <Layout title="Portfólio" data={contato} type="contato">
                <HeroSection />
                <Separator titulo="Contate-me" />
                <ContactMe espaco={true} />
            </Layout>
        </ContatoContextProvider>
    );
}
