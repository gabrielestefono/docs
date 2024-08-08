import { BACKEND_URL_STORAGE } from "@/portfolio/helper/Contants";
import estilo from "./CardImage.module.scss";

export default function CardImage({ image, alt }: Readonly<{ image: string, alt: string }>) {
    return (
        <div className={estilo.cardimage}>
            <img
                className={estilo.image}
                src={`${BACKEND_URL_STORAGE}${image}`}
                width={50}
                height={50}
                alt={alt}
            />
        </div>
    );
}
