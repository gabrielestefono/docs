import { Head } from "@inertiajs/react";
import { ReactNode, useContext, useEffect } from "react";
import { HabilidadeContext } from "../Contexts/HabilidadeContext";
import favicon from "../images/favicon.ico";
import { Contato } from "../types/contato";
import { Habilidade } from "../types/habilidade";
import Header from "./Header";
import { ContatoContext } from "../Contexts/ContatoContext";

type TipoLayout = "contato" | "habilidade";

interface LayoutBase {
    type: TipoLayout;
    children: ReactNode;
    title: string;
}

interface PaginaContato extends LayoutBase {
    type: "contato";
    data: Contato;
}

interface PaginaHabilidades extends LayoutBase {
    type: "habilidade";
    data: Habilidade[];
}

type LayoutProps = PaginaContato | PaginaHabilidades;

export default function Layout({
    children,
    title,
    data,
    type,
}: Readonly<LayoutProps>) {
    const body = document.body;
    body.className = "portfolio";

    const contatoContext = useContext(ContatoContext);
    const habilidadeContext = useContext(HabilidadeContext);

    useEffect(() => {
        const head = document.head;
        let link = document.createElement("link");
        let oldLink = document.getElementById("dynamic-link");
        if (oldLink) {
            head.removeChild(oldLink);
        }
        link.rel = "icon";
        link.type = "image/x-icon";
        link.href = favicon;
        link.id = "dynamic-link";
        head.appendChild(link);

        switch (type) {
            case "contato":
                contatoContext.setValor(data);
                break;
            default:
                habilidadeContext.setValor(data);
                break;
        }
    }, []);

    return (
        <>
            <Head title={title} />
            <Header />
            <main>{children}</main>
            {/* <Footer></Footer> */}
        </>
    );
}
