import { Dispatch } from "react";
import estilo from "./ContactMeBottom.module.scss";

interface ContactMeBottomProps {
    espaco?: boolean;
    setForm: Dispatch<React.SetStateAction<boolean>>;
}

export default function ContactMeBottom({
    espaco = false,
    setForm,
}: Readonly<ContactMeBottomProps>) {
    const handleSubmit = () => {
        setForm(true);
    };
    return (
        <div className={estilo.bottom}>
            <div></div>
            <div>
                <button
                    className={espaco ? estilo.espaco : ""}
                    onClick={handleSubmit}
                >
                    Submit Message
                </button>
            </div>
        </div>
    );
}
