import { useState } from "react";
import ContactMeBottom from "./ContactMeBottom";
import ContactMeMiddle from "./ContactMeMiddle";
import ContactMeTop from "./ContactMeTop";

interface ContactMeProps {
    espaco?: boolean;
}

export default function ContactMe({ espaco }: Readonly<ContactMeProps>) {
    const [form, setForm] = useState<boolean>(false);
    return (
        <div>
            <ContactMeTop />
            <ContactMeMiddle form={form} setForm={setForm}/>
            {espaco ? <ContactMeBottom espaco={true} setForm={setForm}/> : <ContactMeBottom setForm={setForm} />}
        </div>
    );
}
