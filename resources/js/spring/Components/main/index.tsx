import { Link, usePage } from "@inertiajs/react";
import styles from "./index.module.scss";
import { Fragment, useContext } from "react";
import { OrdemContext } from "@/spring/contexts/OrdemContext";
import Breadcrumb from "./Breadcrumb";
import ReactMarkdown from "react-markdown";
import { Ordenavel, TextoOrdenacao } from "@/spring/interfaces/OrdenacaoGeral";

interface MainProps {
    objetoAtual: Ordenavel;
    textos?: TextoOrdenacao[];
}

export default function Main({ objetoAtual, textos }: Readonly<MainProps>) {
    const { data } = useContext(OrdemContext);
    const { url } = usePage();
    const itemAtual = data.find((el) => url.includes(el.ordenavel.slug));
    return (
        <div className={styles.main}>
            <div>
                <Link href="/">Spring Framework</Link>
                <Breadcrumb
                    titulo={itemAtual?.ordenavel.titulo ?? ""}
                    filhos={itemAtual?.ordenavel.ordenacao_grupo}
                    slug={itemAtual?.ordenavel.slug ?? ""}
                />
            </div>
            <div>
                <h1>{objetoAtual.titulo}</h1>
                <ReactMarkdown>{objetoAtual.descricao}</ReactMarkdown>
                {textos?.map((texto) => (
                    <Fragment key={texto.texto.id}>
                        <h2>{texto.texto.titulo}</h2>
                        <ReactMarkdown>{texto.texto.descricao}</ReactMarkdown>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}
