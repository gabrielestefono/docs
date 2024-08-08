import { Dispatch, useEffect, useReducer, useState } from "react";
import estilo from "./ContactMeMiddleRight.module.scss";
import { object, string, ValidationError } from "yup";

interface ContactMeMiddleRightProps {
    form: boolean;
    setForm: Dispatch<React.SetStateAction<boolean>>;
}

interface ActionProps {
    type:
        | "SET_NOME"
        | "SET_WHATSAPP"
        | "SET_EMAIL"
        | "SET_ORCAMENTO"
        | "SET_MENSAGEM"
        | "SET_RESET";
    payload: string;
}

interface StateProps {
    nome: string;
    whatsapp: string;
    email: string;
    orcamento: string | null;
    mensagem: string;
}

export default function ContactMeMiddleRight({
    form,
    setForm,
}: Readonly<ContactMeMiddleRightProps>) {
    const [error, setError] = useState<{
        field: string;
        message: string | undefined;
    }>({
        field: "",
        message: undefined,
    });

    const reduce = (state: StateProps, action: ActionProps) => {
        switch (action.type) {
            case "SET_NOME":
                return { ...state, nome: action.payload };
            case "SET_WHATSAPP":
                return { ...state, whatsapp: action.payload };
            case "SET_EMAIL":
                return { ...state, email: action.payload };
            case "SET_ORCAMENTO":
                return { ...state, orcamento: action.payload };
            case "SET_MENSAGEM":
                return { ...state, mensagem: action.payload };
            case "SET_RESET":
                return {...state, mensagem: "", orcamento: "", email: "", whatsapp: "", nome: ""};
            default:
                return state;
        }
    };

    const mensagemSchema = object({
        nome: string().required("Nome é obrigatório!"),
        whatsapp: string().required("Whatsapp é obrigatório!"),
        email: string().email("Email deve ser válido").required("Email é obrigatório!"),
        orcamento: string().nullable(),
        mensagem: string().required("Mensagem é obrigatória!"),
    });

    const [state, dispatch] = useReducer(reduce, {
        nome: "",
        whatsapp: "",
        email: "",
        orcamento: null,
        mensagem: "",
    });

    const handleSubmit = async () => {
        const isValid = await mensagemSchema
            .validate(state, { abortEarly: false })
            .catch((err: any) => {
                err.inner.forEach((error: ValidationError) => {
                    setError({
                        field: error.path!,
                        message: error.message,
                    });
                });
            });
        if (!isValid) {
            return;
        }
        setError({
            field: "",
            message: undefined,
        });

        const response = await fetch("http://localhost:8000/api/send-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(state),
        });

        if(!response){
            alert("Deu erro aqui");
        }

        alert('ENVIADO')
        dispatch({
            type: "SET_RESET",
            payload: ""
        })
    };

    useEffect(() => {
        if (form) {
            handleSubmit();
            setForm(false);
        }
    }, [form]);

    return (
        <form className={estilo.form}>
            <div>
                <div>
                    <label htmlFor="nome" hidden>
                        Nome
                    </label>
                    <input
                        type="text"
                        placeholder="Nome"
                        id="nome"
                        value={state.nome}
                        onChange={(e) =>
                            dispatch({
                                type: "SET_NOME",
                                payload: e.target.value,
                            })
                        }
                        className={error.field === "nome" ? estilo.error : ""}
                    />
                    {error.field === "nome" && <span className={estilo.message}>{error.message}</span>}
                </div>
                <div>
                    <label htmlFor="whatsapp" hidden>
                        Whatsapp
                    </label>
                    <input
                        type="text"
                        placeholder="Whatsapp"
                        value={state.whatsapp}
                        id="whatsapp"
                        onChange={(e) =>
                            dispatch({
                                type: "SET_WHATSAPP",
                                payload: e.target.value,
                            })
                        }
                        className={
                            error.field === "whatsapp" ? estilo.error : ""
                        }
                    />
                    {error.field === "whatsapp" && <span className={estilo.message}>{error.message}</span>}
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={state.email}
                        onChange={(e) =>
                            dispatch({
                                type: "SET_EMAIL",
                                payload: e.target.value,
                            })
                        }
                        className={error.field === "email" ? estilo.error : ""}
                    />
                    {error.field === "email" && <span className={estilo.message}>{error.message}</span>}
                </div>
                <div>
                    <label htmlFor="orcamento" hidden>
                        Orçamento em R$
                    </label>
                    <input
                        type="text"
                        placeholder="Orçamento"
                        id="orcamento"
                        value={state.orcamento ?? ""}
                        onChange={(e) =>
                            dispatch({
                                type: "SET_ORCAMENTO",
                                payload: e.target.value,
                            })
                        }
                        className={
                            error.field === "orcamento" ? estilo.error : ""
                        }
                    />
                    {error.field === "orcamento" && (
                        <span className={estilo.message}>{error.message}</span>
                    )}
                </div>
            </div>
            <div>
                <label htmlFor="mensagem" hidden>
                    Mensagem
                </label>
                <textarea
                    name="mensagem"
                    id="mensagem"
                    cols={30}
                    rows={10}
                    value={state.mensagem}
                    placeholder="Mensagem"
                    onChange={(e) =>
                        dispatch({
                            type: "SET_MENSAGEM",
                            payload: e.target.value,
                        })
                    }
                    className={error.field === "mensagem" ? estilo.error : ""}
                ></textarea>
                {error.field === "mensagem" && <span className={estilo.message}>{error.message}</span>}
            </div>
        </form>
    );
}
