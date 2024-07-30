import { Head } from "@inertiajs/react";
import favicon from "../images/favicon.ico";
import { ReactNode, useContext, useEffect } from "react";
import Header from "./Header";
import { Contato } from "../types/contato";
import { ContatoContext } from "../Contexts/ContatoContext";

type TipoLayout = "contato" | "outroTipo";

interface PaginaContato {
    type: TipoLayout;
    children: ReactNode;
    title: string;
    data: Contato;
}

type LayoutProps = PaginaContato;

export default function Layout({
    children,
    title,
    data,
}: Readonly<LayoutProps>) {
    const body = document.body;
    body.className = "portfolio";

    const { setValor } = useContext(ContatoContext);

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

        setValor(data);
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
