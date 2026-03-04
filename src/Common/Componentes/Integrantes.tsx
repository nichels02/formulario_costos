import * as Slider from "@radix-ui/react-slider";
import { Disclosure } from "@headlessui/react";
import styles from "../css/Formulario.module.css";
import type {FormDataType} from "./sistemas/formTypes.ts"; // ajusta esto

type Props = {
    formData: FormDataType;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Integrantes({
                                               formData,
                                               setFormData,
                                               handleChange
                                           }: Props) {

    return (
        <>
            {/*region integrantes*/}
            <Disclosure defaultOpen={formData.SeranRequeridosDirectores}
            >
                {({ open }) => (
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            open ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Directores
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.SeranRequeridosDirectores}
                                className={styles.InputCheckBox}
                                name="SeranRequeridosDirectores"
                                onChange={handleChange}

                            />
                        </div>

                        {formData.SeranRequeridosDirectores && (
                            <div
                                className={`${styles.ContenedorHijoSecundario}`}
                            >
                                <Slider.Root
                                    className={styles.SliderRoot}
                                    value={[formData.CuantosDirectoresSeranRequeridos]}
                                    onValueChange={(value) =>
                                        setFormData(prev => ({
                                            ...prev,
                                            CuantosDirectoresSeranRequeridos: value[0]
                                        }))
                                    }
                                    max={10}
                                    step={1}
                                >
                                    <Slider.Track className={styles.SliderTrack}>
                                        <Slider.Range className={styles.SliderRange} />
                                    </Slider.Track>
                                    <Slider.Thumb className={styles.SliderThumb} />
                                </Slider.Root>

                                <input
                                    type="number"
                                    className={styles.InputTextCantidad}
                                    name="CuantosDirectoresSeranRequeridos"
                                    value={formData.CuantosDirectoresSeranRequeridos}
                                    onChange={handleChange}
                                    min={0}
                                    max={10}
                                    step={1}
                                />
                            </div>
                        )}
                    </div>
                )}
            </Disclosure>

            <Disclosure defaultOpen={formData.SeranRequeridosJefes}
            >
                {({ open }) => (
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            open ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Jefes
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.SeranRequeridosJefes}
                                className={styles.InputCheckBox}
                                name="SeranRequeridosJefes"
                                onChange={handleChange}

                            />
                        </div>

                        {formData.SeranRequeridosJefes && (
                            <div
                                className={`${styles.ContenedorHijoSecundario}`}
                            >
                                <Slider.Root
                                    className={styles.SliderRoot}
                                    value={[formData.CuantosJefesSeranRequeridos]}
                                    onValueChange={(value) =>
                                        setFormData(prev => ({
                                            ...prev,
                                            CuantosJefesSeranRequeridos: value[0]
                                        }))
                                    }
                                    max={10}
                                    step={1}
                                >
                                    <Slider.Track className={styles.SliderTrack}>
                                        <Slider.Range className={styles.SliderRange} />
                                    </Slider.Track>
                                    <Slider.Thumb className={styles.SliderThumb} />
                                </Slider.Root>

                                <input
                                    type="number"
                                    className={styles.InputTextCantidad}
                                    name="CuantosJefesSeranRequeridos"
                                    value={formData.CuantosJefesSeranRequeridos}
                                    onChange={handleChange}
                                    min={0}
                                    max={10}
                                    step={1}
                                />
                            </div>
                        )}
                    </div>
                )}
            </Disclosure>

            <Disclosure defaultOpen={formData.SeranRequeridosAnalistas}
            >
                {({ open }) => (
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            open ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Analistas
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.SeranRequeridosAnalistas}
                                className={styles.InputCheckBox}
                                name="SeranRequeridosJefes"
                                onChange={handleChange}

                            />
                        </div>

                        {formData.SeranRequeridosAnalistas && (
                            <div
                                className={`${styles.ContenedorHijoSecundario}`}
                            >
                                <Slider.Root
                                    className={styles.SliderRoot}
                                    value={[formData.CuantosAnalistasSeranRequeridos]}
                                    onValueChange={(value) =>
                                        setFormData(prev => ({
                                            ...prev,
                                            CuantosAnalistasSeranRequeridos: value[0]
                                        }))
                                    }
                                    max={10}
                                    step={1}
                                >
                                    <Slider.Track className={styles.SliderTrack}>
                                        <Slider.Range className={styles.SliderRange} />
                                    </Slider.Track>
                                    <Slider.Thumb className={styles.SliderThumb} />
                                </Slider.Root>

                                <input
                                    type="number"
                                    className={styles.InputTextCantidad}
                                    name="CuantosAnalistasSeranRequeridos"
                                    value={formData.CuantosAnalistasSeranRequeridos}
                                    onChange={handleChange}
                                    min={0}
                                    max={10}
                                    step={1}
                                />
                            </div>
                        )}
                    </div>
                )}
            </Disclosure>

            <Disclosure defaultOpen={formData.SeranRequeridosPracticantes}
            >
                {({ open }) => (
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            open ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Practicantes
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.SeranRequeridosPracticantes}
                                className={styles.InputCheckBox}
                                name="SeranRequeridosPracticantes"
                                onChange={handleChange}

                            />
                        </div>

                        {formData.SeranRequeridosPracticantes && (
                            <div
                                className={`${styles.ContenedorHijoSecundario}`}
                            >
                                <Slider.Root
                                    className={styles.SliderRoot}
                                    value={[formData.CuantosPracticantesSeranRequeridos]}
                                    onValueChange={(value) =>
                                        setFormData(prev => ({
                                            ...prev,
                                            CuantosPracticantesSeranRequeridos: value[0]
                                        }))
                                    }
                                    max={10}
                                    step={1}
                                >
                                    <Slider.Track className={styles.SliderTrack}>
                                        <Slider.Range className={styles.SliderRange} />
                                    </Slider.Track>
                                    <Slider.Thumb className={styles.SliderThumb} />
                                </Slider.Root>

                                <input
                                    type="number"
                                    className={styles.InputTextCantidad}
                                    name="CuantosPracticantesSeranRequeridos"
                                    value={formData.CuantosPracticantesSeranRequeridos}
                                    onChange={handleChange}
                                    min={0}
                                    max={10}
                                    step={1}
                                />
                            </div>
                        )}
                    </div>
                )}
            </Disclosure>
            {/*//endregion*/}
        </>
    );
}