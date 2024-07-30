import estilo from "./ContactMeMiddleLeftCard.module.scss";

interface ContactMeMiddleLeftCardProps {
    img: string;
    title: string;
    text: string;
    altText: string;
    link: string;
}

export default function ContactMeMiddleLeftCard({
    img,
    text,
    title,
    altText,
    link,
}: Readonly<ContactMeMiddleLeftCardProps>) {
    return (
        <a href={link} className={estilo.card}>
            <div>
                <div>
                    <div>
                        <img
                            src={`/storage/${img}`}
                            width={"100%"}
                            height={"100%"}
                            alt={altText}
                        />
                    </div>
                </div>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </a>
    );
}
