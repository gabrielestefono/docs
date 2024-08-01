import ContactMeMiddleLeft from "./ContactMeMiddleLeft";
import ContactMeMiddleRight from "./ContactMeMiddleRight";
import estilo from "./ContactMeMiddle.module.scss";
import { Dispatch } from "react";

interface ContactMeMiddleProps {
    form: boolean;
    setForm: Dispatch<React.SetStateAction<boolean>>;
}

export default function ContactMeMiddle({
    form,
    setForm,
}: Readonly<ContactMeMiddleProps>) {
    return (
        <div className={estilo.contact}>
            <ContactMeMiddleLeft />
            <ContactMeMiddleRight form={form} setForm={setForm} />
        </div>
    );
}
