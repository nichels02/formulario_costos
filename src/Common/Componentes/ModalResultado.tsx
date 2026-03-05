import { useEffect, useState } from "react";
import styles from "../Css/Modal.module.css";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    //children: React.ReactNode;
};

export default function ModalResultado({ isOpen, onClose }: Props) {

    const [tooltipActivo, setTooltipActivo] = useState<string | null>(null);

    useEffect(() => {
        const handleClickOutside = () => {
            setTooltipActivo(null);
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);



    //bloquear scroll
    useEffect(() => {
        if (isOpen) {
            // Bloquea scroll
            document.body.style.overflow = "hidden";
        } else {
            // Restaura scroll
            document.body.style.overflow = "";
        }

        // Limpieza en caso de que el componente se desmonte mientras está abierto
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);




    // Cerrar con ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()} // 👈 evita que se cierre al hacer click dentro
            >
                <div className={styles.modalCeldaI}>
                    <div className={styles.textoCeldaModal}>
                        Trabajadores
                    </div>
                    <div className={styles.infoWrapper}>
                        <div
                            className={styles.infoExtra}
                            onClick={(e) => {
                                e.stopPropagation(); // 👈 evita que el click cierre inmediatamente
                                setTooltipActivo(prev =>
                                    prev === "trabajadores" ? null : "trabajadores"
                                );
                            }}
                        >
                            i
                        </div>

                        {tooltipActivo === "trabajadores" && (
                            <div
                                className={styles.tooltip}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className={styles.ContenedorInternoTooltip}>

                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                </div>
                            </div>
                        )}
                    </div>

                </div>
                <div className={styles.modalCeldaD}>
                    <div className={styles.TextoPrecio}>
                        918
                    </div>
                </div>
                <div className={styles.modalCeldaI}>
                    <div className={styles.textoCeldaModal}>
                        Servicios
                    </div>
                    <div className={styles.infoWrapper}>
                        <div
                            className={styles.infoExtra}
                            onClick={(e) => {
                                e.stopPropagation(); // 👈 evita que el click cierre inmediatamente
                                setTooltipActivo(prev =>
                                    prev === "Servicios" ? null : "Servicios"
                                );
                            }}
                        >
                            i
                        </div>

                        {tooltipActivo === "Servicios" && (
                            <div
                                className={styles.tooltip}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className={styles.ContenedorInternoTooltip}>

                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.modalCeldaD}>
                    <div className={styles.TextoPrecio}>
                        918
                    </div>
                </div>
                <div className={styles.modalCeldaI}>
                    <div className={styles.textoCeldaModal}>
                        Extras
                    </div>
                    <div className={styles.infoWrapper}>
                        <div
                            className={styles.infoExtra}
                            onClick={(e) => {
                                e.stopPropagation(); // 👈 evita que el click cierre inmediatamente
                                setTooltipActivo(prev =>
                                    prev === "Extras" ? null : "Extras"
                                );
                            }}
                        >
                            i
                        </div>

                        {tooltipActivo === "Extras" && (
                            <div
                                className={styles.tooltip}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className={styles.ContenedorInternoTooltip}>

                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                </div>
                            </div>
                        )}
                    </div>

                </div>
                <div className={styles.modalCeldaD}>
                    <div className={styles.TextoPrecio}>
                        918
                    </div>
                </div>


                <div className={styles.modalCeldaI}>
                    <div className={styles.textoCeldaModal}>
                        Total
                    </div>

                </div>
                <div className={styles.modalCeldaD}>
                    <div className={styles.TextoPrecio}>
                        918
                    </div>
                </div>




                <div className={styles.modalCeldaI}>
                    <div className={styles.textoCeldaModal}>
                        Total con ganancias
                    </div>
                    <div className={styles.infoWrapper}>
                        <div
                            className={styles.infoExtra}
                            onClick={(e) => {
                                e.stopPropagation(); // 👈 evita que el click cierre inmediatamente
                                setTooltipActivo(prev =>
                                    prev === "TotalConGanancias" ? null : "TotalConGanancias"
                                );
                            }}
                        >
                            i
                        </div>

                        {tooltipActivo === "TotalConGanancias" && (
                            <div
                                className={styles.tooltip}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className={styles.ContenedorInternoTooltip}>

                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                </div>
                            </div>
                        )}
                    </div>

                </div>
                <div className={styles.modalCeldaD}>
                    <div className={styles.TextoPrecio}>
                        918
                    </div>
                </div>






                <div className={styles.modalCeldaI}>
                    <div className={styles.textoCeldaModal}>
                        Falta cotizar
                    </div>
                    <div className={styles.infoWrapper}>
                        <div
                            className={styles.infoExtra}
                            onClick={(e) => {
                                e.stopPropagation(); // 👈 evita que el click cierre inmediatamente
                                setTooltipActivo(prev =>
                                    prev === "FaltaCotizar" ? null : "FaltaCotizar"
                                );
                            }}
                        >
                            i
                        </div>

                        {tooltipActivo === "FaltaCotizar" && (
                            <div
                                className={styles.tooltip}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className={styles.ContenedorInternoTooltip}>

                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                    Este es el texto informativo
                                </div>

                            </div>
                        )}
                    </div>

                </div>
                <div className={styles.modalCeldaD}>
                    <div className={styles.TextoPrecio}>
                    </div>
                </div>
            </div>
        </div>
    );
}