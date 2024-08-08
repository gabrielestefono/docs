import { BACKEND_URL_STORAGE } from "@/portfolio/helper/Contants";
import estilo from "./SkillsInnerCard.module.scss";

interface SkillsInnerCardProps {
    image: string;
    alt: string;
    text: string;
}

export default function SkillsInnerCard({
    alt,
    image,
    text,
}: Readonly<SkillsInnerCardProps>) {
    return (
        <div className={estilo.card}>
            <div>
                <img src={`${BACKEND_URL_STORAGE}${image}`} width={50} height={50} alt={alt} />
            </div>
            <h2>{text}</h2>
        </div>
    );
}
