import * as Slider from "@radix-ui/react-slider";
import {Switch} from "@headlessui/react";
import styles from "../css/Formulario.module.css";
import type {FormDataType} from "./sistemas/formTypes.ts"; // ajusta esto

type Props = {
    formData: FormDataType;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

export default function Contenido1({
                                               formData,
                                               setFormData
                                           }: Props) {

    return (
        <>
            {/*region Contenido*/}
            {formData.QueAreaSeraNecesaria === "Contenido" && (
                <div className={styles.SeccionAreas}>
                    <div className={styles.SubTituloRecuadro}>Servicios video</div>
                    {/*region animacion 3d*/}
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            formData.Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion3D
                                ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Video con animacion 3D
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion3D}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion3D"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        Contenido: {
                                            ...prev.Contenido,
                                            ServiciosDeVideosRequeridos: {
                                                ...prev.Contenido.ServiciosDeVideosRequeridos,
                                                VideoConAnimacion3D: e.target.checked
                                            }
                                        }
                                    }))
                                }

                            />
                        </div>

                        {formData.Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion3D && (
                            <div>
                                <div className={styles.SubTituloRecuadro}>
                                    Cantidad de minutos de animacion 3D
                                </div>
                                <div
                                    className={`${styles.ContenedorHijoSecundario}`}
                                >
                                    <Slider.Root
                                        className={styles.SliderRoot}
                                        value={[
                                            formData.Contenido.ServiciosDeVideosRequeridos.CantidadMinutosAnimacion3D
                                        ]}
                                        onValueChange={(value) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    ServiciosDeVideosRequeridos: {
                                                        ...prev.Contenido.ServiciosDeVideosRequeridos,
                                                        CantidadMinutosAnimacion3D: value[0]
                                                    }
                                                }
                                            }))
                                        }
                                        min={0}
                                        max={20}
                                        step={1}
                                    >
                                        <Slider.Track className={styles.SliderTrack}>
                                            <Slider.Range className={styles.SliderRange}/>
                                        </Slider.Track>
                                        <Slider.Thumb className={styles.SliderThumb}/>
                                    </Slider.Root>

                                    <input
                                        type="number"
                                        className={styles.InputTextCantidad}
                                        name="CantidadMinutosAnimacion3D"
                                        value={formData.Contenido.ServiciosDeVideosRequeridos.CantidadMinutosAnimacion3D}
                                        onChange={(e) => {
                                            const value = Number(e.target.value);
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    ServiciosDeVideosRequeridos: {
                                                        ...prev.Contenido.ServiciosDeVideosRequeridos,
                                                        CantidadMinutosAnimacion3D: value
                                                    }
                                                }
                                            }));
                                        }}
                                        min={0}
                                        max={20}
                                        step={1}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    {/*endregion*/}
                    {/*region animacion 2d*/}
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            formData.Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion3D
                                ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Video con animacion 2D
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion2D}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion3D"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        Contenido: {
                                            ...prev.Contenido,
                                            ServiciosDeVideosRequeridos: {
                                                ...prev.Contenido.ServiciosDeVideosRequeridos,
                                                VideoConAnimacion2D: e.target.checked
                                            }
                                        }
                                    }))
                                }

                            />
                        </div>

                        {formData.Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion2D && (
                            <div>
                                <div className={styles.SubTituloRecuadro}>
                                    Cantidad de minutos de animacion 2D
                                </div>
                                <div
                                    className={`${styles.ContenedorHijoSecundario}`}
                                >
                                    <Slider.Root
                                        className={styles.SliderRoot}
                                        value={[
                                            formData.Contenido.ServiciosDeVideosRequeridos.CantidadMinutosAnimacion2D
                                        ]}
                                        onValueChange={(value) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    ServiciosDeVideosRequeridos: {
                                                        ...prev.Contenido.ServiciosDeVideosRequeridos,
                                                        CantidadMinutosAnimacion2D: value[0]
                                                    }
                                                }
                                            }))
                                        }
                                        min={0}
                                        max={20}
                                        step={1}
                                    >
                                        <Slider.Track className={styles.SliderTrack}>
                                            <Slider.Range className={styles.SliderRange}/>
                                        </Slider.Track>
                                        <Slider.Thumb className={styles.SliderThumb}/>
                                    </Slider.Root>

                                    <input
                                        type="number"
                                        className={styles.InputTextCantidad}
                                        name="CantidadMinutosAnimacion3D"
                                        value={formData.Contenido.ServiciosDeVideosRequeridos.CantidadMinutosAnimacion2D}
                                        onChange={(e) => {
                                            const value = Number(e.target.value);
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    ServiciosDeVideosRequeridos: {
                                                        ...prev.Contenido.ServiciosDeVideosRequeridos,
                                                        CantidadMinutosAnimacion2D: value
                                                    }
                                                }
                                            }));
                                        }}
                                        min={0}
                                        max={20}
                                        step={1}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    {/*endregion*/}
                    {/*region Video Institucional*/}
                    <div
                        className={styles.RecuadroPregunta}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Video Institucional
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.Contenido.ServiciosDeVideosRequeridos.VideoInstitucional}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        Contenido: {
                                            ...prev.Contenido,
                                            ServiciosDeVideosRequeridos: {
                                                ...prev.Contenido.ServiciosDeVideosRequeridos,
                                                VideoInstitucional: e.target.checked
                                            }
                                        }
                                    }))
                                }

                            />
                        </div>
                    </div>
                    {/*endregion*/}
                    {/*region Video Documental*/}
                    <div
                        className={styles.RecuadroPregunta}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Video documental
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.Contenido.ServiciosDeVideosRequeridos.VideoDocumental}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoDocumental"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        Contenido: {
                                            ...prev.Contenido,
                                            ServiciosDeVideosRequeridos: {
                                                ...prev.Contenido.ServiciosDeVideosRequeridos,
                                                VideoDocumental: e.target.checked
                                            }
                                        }
                                    }))
                                }

                            />
                        </div>
                    </div>
                    {/*endregion*/}
                    {/*region Videos Para Redes Sociales Por Unidad Vendido En Paquete*/}
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            formData.Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion3D
                                ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Videos Para Redes Sociales Por Unidad Vendido En Paquete
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.Contenido.ServiciosDeVideosRequeridos.VideosParaRedesSocialesPorUnidadVendidoEnPaquete}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideosParaRedesSocialesPorUnidadVendidoEnPaquete"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        Contenido: {
                                            ...prev.Contenido,
                                            ServiciosDeVideosRequeridos: {
                                                ...prev.Contenido.ServiciosDeVideosRequeridos,
                                                VideosParaRedesSocialesPorUnidadVendidoEnPaquete: e.target.checked
                                            }
                                        }
                                    }))
                                }

                            />
                        </div>

                        {formData.Contenido.ServiciosDeVideosRequeridos.VideosParaRedesSocialesPorUnidadVendidoEnPaquete && (
                            <div>
                                <div className={styles.SubTituloRecuadro}>
                                    CantidadDeVideosParaRedesSociales
                                </div>
                                <div
                                    className={`${styles.ContenedorHijoSecundario}`}
                                >
                                    <Slider.Root
                                        className={styles.SliderRoot}
                                        value={[
                                            formData.Contenido.ServiciosDeVideosRequeridos.CantidadDeVideosParaRedesSociales
                                        ]}
                                        onValueChange={(value) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    ServiciosDeVideosRequeridos: {
                                                        ...prev.Contenido.ServiciosDeVideosRequeridos,
                                                        CantidadDeVideosParaRedesSociales: value[0]
                                                    }
                                                }
                                            }))
                                        }
                                        min={0}
                                        max={200}
                                        step={1}
                                    >
                                        <Slider.Track className={styles.SliderTrack}>
                                            <Slider.Range className={styles.SliderRange}/>
                                        </Slider.Track>
                                        <Slider.Thumb className={styles.SliderThumb}/>
                                    </Slider.Root>

                                    <input
                                        type="number"
                                        className={styles.InputTextCantidad}
                                        name="CantidadDeVideosParaRedesSociales"
                                        value={formData.Contenido.ServiciosDeVideosRequeridos.CantidadDeVideosParaRedesSociales}
                                        onChange={(e) => {
                                            const value = Number(e.target.value);
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    ServiciosDeVideosRequeridos: {
                                                        ...prev.Contenido.ServiciosDeVideosRequeridos,
                                                        CantidadDeVideosParaRedesSociales: value
                                                    }
                                                }
                                            }));
                                        }}
                                        min={0}
                                        max={200}
                                        step={1}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    {/*endregion*/}
                    {/*region VideoDron*/}
                    <div
                        className={styles.RecuadroPregunta}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Video dron
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.Contenido.ServiciosDeVideosRequeridos.VideoDron}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoDocumental"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        Contenido: {
                                            ...prev.Contenido,
                                            ServiciosDeVideosRequeridos: {
                                                ...prev.Contenido.ServiciosDeVideosRequeridos,
                                                VideoDron: e.target.checked
                                            }
                                        }
                                    }))
                                }

                            />
                        </div>
                    </div>
                    {/*endregion*/}

                    {/*-----------------------------------------------------------------------------*/}
                    <div className={styles.LiniaSeparadoraCuadro}></div>
                    <div className={styles.SubTituloRecuadro}>Variables video</div>
                    {/*region VideoDron*/}
                    <div
                        className={styles.RecuadroPregunta}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Video dron
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.Contenido.VariablesDeVideosRequeridos.VideoDron}
                                className={styles.InputCheckBox}
                                name="Contenido.VariablesDeVideosRequeridos.VideoDocumental"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        Contenido: {
                                            ...prev.Contenido,
                                            VariablesDeVideosRequeridos: {
                                                ...prev.Contenido.VariablesDeVideosRequeridos,
                                                VideoDron: e.target.checked
                                            }
                                        }
                                    }))
                                }

                            />
                        </div>
                    </div>
                    {/*endregion*/}
                    {/*region Musicalizacion*/}
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            formData.Contenido.VariablesDeVideosRequeridos.Musicalizacion
                                ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Musicalizacion
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.Contenido.VariablesDeVideosRequeridos.Musicalizacion}
                                className={styles.InputCheckBox}
                                name="Contenido.VariablesDeVideosRequeridos.Musicalizacion"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        Contenido: {
                                            ...prev.Contenido,
                                            VariablesDeVideosRequeridos: {
                                                ...prev.Contenido.VariablesDeVideosRequeridos,
                                                Musicalizacion: e.target.checked
                                            }
                                        }
                                    }))
                                }

                            />
                        </div>

                        {formData.Contenido.VariablesDeVideosRequeridos.Musicalizacion && (
                            <div>
                                <div className={styles.SubTituloRecuadro}>
                                    Cantidad Musicalizacion(Por minuto)
                                </div>
                                <div
                                    className={`${styles.ContenedorHijoSecundario}`}
                                >
                                    <Slider.Root
                                        className={styles.SliderRoot}
                                        value={[
                                            formData.Contenido.VariablesDeVideosRequeridos.CantidadMusicalizacion
                                        ]}
                                        onValueChange={(value) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeVideosRequeridos: {
                                                        ...prev.Contenido.VariablesDeVideosRequeridos,
                                                        CantidadMusicalizacion: value[0]
                                                    }
                                                }
                                            }))
                                        }
                                        min={0}
                                        max={200}
                                        step={1}
                                    >
                                        <Slider.Track className={styles.SliderTrack}>
                                            <Slider.Range className={styles.SliderRange}/>
                                        </Slider.Track>
                                        <Slider.Thumb className={styles.SliderThumb}/>
                                    </Slider.Root>

                                    <input
                                        type="number"
                                        className={styles.InputTextCantidad}
                                        name="CantidadDeVideosParaRedesSociales"
                                        value={formData.Contenido.VariablesDeVideosRequeridos.CantidadMusicalizacion}
                                        onChange={(e) => {
                                            const value = Number(e.target.value);
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    ServiciosDeVideosRequeridos: {
                                                        ...prev.Contenido.ServiciosDeVideosRequeridos,
                                                        CantidadMusicalizacion: value
                                                    }
                                                }
                                            }));
                                        }}
                                        min={0}
                                        max={200}
                                        step={1}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    {/*endregion*/}
                    {/*region Subtitulado*/}
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            formData.Contenido.VariablesDeVideosRequeridos.TieneSubtitulado
                                ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Subtitulado
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.Contenido.VariablesDeVideosRequeridos.TieneSubtitulado}
                                className={styles.InputCheckBox}
                                name="Contenido.VariablesDeVideosRequeridos.Musicalizacion"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        Contenido: {
                                            ...prev.Contenido,
                                            VariablesDeVideosRequeridos: {
                                                ...prev.Contenido.VariablesDeVideosRequeridos,
                                                TieneSubtitulado: e.target.checked
                                            }
                                        }
                                    }))
                                }

                            />
                        </div>

                        {formData.Contenido.VariablesDeVideosRequeridos.TieneSubtitulado && (
                            <div>
                                {/*region Subtitulado mas de 1 minuto*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Subtitulado mas de 1 minuto
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeVideosRequeridos.SubtituladoMasDe1Minuto}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoMasDe1Minuto"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeVideosRequeridos: {
                                                        ...prev.Contenido.VariablesDeVideosRequeridos,
                                                        SubtituladoMasDe1Minuto: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region SubtituladoTraduccionInhouse*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Subtitulado Traduccion Inhouse
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeVideosRequeridos: {
                                                        ...prev.Contenido.VariablesDeVideosRequeridos,
                                                        SubtituladoTraduccionInhouse: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region SubtituladoTraduccionProfesional*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Subtitulado Traduccion Profesional
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccion}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccion"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeVideosRequeridos: {
                                                        ...prev.Contenido.VariablesDeVideosRequeridos,
                                                        SubtituladoTraduccion: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                            </div>
                        )}
                    </div>
                    {/*endregion*/}
                    {/*region Locucion*/}
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            formData.Contenido.VariablesDeVideosRequeridos.TieneLocucion
                                ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Locucion
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.Contenido.VariablesDeVideosRequeridos.TieneLocucion}
                                className={styles.InputCheckBox}
                                name="Contenido.VariablesDeVideosRequeridos.TieneLocucion"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        Contenido: {
                                            ...prev.Contenido,
                                            VariablesDeVideosRequeridos: {
                                                ...prev.Contenido.VariablesDeVideosRequeridos,
                                                TieneLocucion: e.target.checked
                                            }
                                        }
                                    }))
                                }

                            />
                        </div>

                        {formData.Contenido.VariablesDeVideosRequeridos.TieneLocucion && (
                            <div>
                                {/*region LocucionInhouse*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Locucion Inhouse
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeVideosRequeridos.LocucionInhouse}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.LocucionInhouse"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeVideosRequeridos: {
                                                        ...prev.Contenido.VariablesDeVideosRequeridos,
                                                        LocucionInhouse: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region LocucionPerio*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Locucion Perio
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeVideosRequeridos.LocucionPerio}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.LocucionPerio"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeVideosRequeridos: {
                                                        ...prev.Contenido.VariablesDeVideosRequeridos,
                                                        LocucionPerio: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region LocucionMichaelCielo*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Locucion Michael Cielo
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeVideosRequeridos.LocucionMichaelCielo}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.LocucionMichaelCielo"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeVideosRequeridos: {
                                                        ...prev.Contenido.VariablesDeVideosRequeridos,
                                                        LocucionMichaelCielo: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                            </div>
                        )}
                    </div>
                    {/*endregion*/}
                    {/*region Registro*/}
                    <div
                        className={styles.RecuadroPregunta}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Registro
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.Contenido.VariablesDeVideosRequeridos.Registro}
                                className={styles.InputCheckBox}
                                name="Contenido.VariablesDeVideosRequeridos.Registro"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        Contenido: {
                                            ...prev.Contenido,
                                            VariablesDeVideosRequeridos: {
                                                ...prev.Contenido.VariablesDeVideosRequeridos,
                                                Registro: e.target.checked
                                            }
                                        }
                                    }))
                                }

                            />
                        </div>
                    </div>
                    {/*endregion*/}
                    {/*-----------------------------------------------------------------------------*/}
                    <div className={styles.LiniaSeparadoraCuadro}></div>
                    <div className={styles.SubTituloRecuadro}>Servicios Fotos</div>

                    {/*region FotosConDron*/}
                    <div
                        className={styles.RecuadroPregunta}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Fotos con dron
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.Contenido.ServiciosDeFotosRequeridos.FotosConDron}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoDocumental"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        Contenido: {
                                            ...prev.Contenido,
                                            ServiciosDeFotosRequeridos: {
                                                ...prev.Contenido.ServiciosDeFotosRequeridos,
                                                FotosConDron: e.target.checked
                                            }
                                        }
                                    }))
                                }

                            />
                        </div>
                    </div>
                    {/*endregion*/}
                    {/*region Timelapse*/}
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            formData.Contenido.ServiciosDeFotosRequeridos.CantidadDeMesesTimelapse
                                ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Timelapse
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.Contenido.ServiciosDeFotosRequeridos.TimelapsePrecioPorMes}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeFotosRequeridos.SesionDeFotos1dia"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        Contenido: {
                                            ...prev.Contenido,
                                            ServiciosDeFotosRequeridos: {
                                                ...prev.Contenido.ServiciosDeFotosRequeridos,
                                                TimelapsePrecioPorMes: e.target.checked
                                            }
                                        }
                                    }))
                                }

                            />
                        </div>

                        {formData.Contenido.ServiciosDeFotosRequeridos.TimelapsePrecioPorMes && (
                            <div>
                                {/*region CantidadDeMesesTimelapse*/}
                                <div>
                                    <div className={styles.SubTituloRecuadro}>
                                        Cantidad de meses timelapse
                                    </div>
                                    <div
                                        className={`${styles.ContenedorHijoSecundario}`}
                                    >
                                        <Slider.Root
                                            className={styles.SliderRoot}
                                            value={[
                                                formData.Contenido.ServiciosDeFotosRequeridos.CantidadDeMesesTimelapse
                                            ]}
                                            onValueChange={(value) =>
                                                setFormData(prev => ({
                                                    ...prev,
                                                    Contenido: {
                                                        ...prev.Contenido,
                                                        ServiciosDeFotosRequeridos: {
                                                            ...prev.Contenido.ServiciosDeFotosRequeridos,
                                                            CantidadDeMesesTimelapse: value[0]
                                                        }
                                                    }
                                                }))
                                            }
                                            min={0}
                                            max={60}
                                            step={1}
                                        >
                                            <Slider.Track className={styles.SliderTrack}>
                                                <Slider.Range className={styles.SliderRange}/>
                                            </Slider.Track>
                                            <Slider.Thumb className={styles.SliderThumb}/>
                                        </Slider.Root>

                                        <input
                                            type="number"
                                            className={styles.InputTextCantidad}
                                            name="CantidadMinutosAnimacion3D"
                                            value={formData.Contenido.ServiciosDeFotosRequeridos.CantidadDeMesesTimelapse}
                                            onChange={(e) => {
                                                const value = Number(e.target.value);
                                                setFormData(prev => ({
                                                    ...prev,
                                                    Contenido: {
                                                        ...prev.Contenido,
                                                        ServiciosDeFotosRequeridos: {
                                                            ...prev.Contenido.ServiciosDeFotosRequeridos,
                                                            CantidadDeMesesTimelapse: value
                                                        }
                                                    }
                                                }));
                                            }}
                                            min={0}
                                            max={20}
                                            step={1}
                                        />
                                    </div>
                                </div>
                                {/*endregion*/}

                                {/*region TimelapseSoftwareParaVerOnline*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Timelapse software para ver online
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.ServiciosDeFotosRequeridos.TimelapseSoftwareParaVerOnline}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    ServiciosDeFotosRequeridos: {
                                                        ...prev.Contenido.ServiciosDeFotosRequeridos,
                                                        TimelapseSoftwareParaVerOnline: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}

                                {/*region TimelapseEntregableFinal*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Timelapse entregable final
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.ServiciosDeFotosRequeridos.TimelapseEntregableFinal}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    ServiciosDeFotosRequeridos: {
                                                        ...prev.Contenido.ServiciosDeFotosRequeridos,
                                                        TimelapseEntregableFinal: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}


                            </div>
                        )}
                    </div>
                    {/*endregion*/}
                    {/*region SesionDeFotos1dia*/}
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            formData.Contenido.ServiciosDeFotosRequeridos.SesionDeFotos1dia
                                ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Sesion de fotos 1 dia
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.Contenido.ServiciosDeFotosRequeridos.SesionDeFotos1dia}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeFotosRequeridos.SesionDeFotos1dia"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        Contenido: {
                                            ...prev.Contenido,
                                            ServiciosDeFotosRequeridos: {
                                                ...prev.Contenido.ServiciosDeFotosRequeridos,
                                                SesionDeFotos1dia: e.target.checked
                                            }
                                        }
                                    }))
                                }

                            />
                        </div>

                        {formData.Contenido.ServiciosDeFotosRequeridos.SesionDeFotos1dia && (
                            <div>
                                {/*region FullDay*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Medio día / FullDay
                                    </div>

                                    <Switch
                                        checked={formData.Contenido.ServiciosDeFotosRequeridos.SesionDeFotos1diaFullDay}
                                        onChange={(checked) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    ServiciosDeFotosRequeridos: {
                                                        ...prev.Contenido.ServiciosDeFotosRequeridos,
                                                        SesionDeFotos1diaFullDay: checked
                                                    }
                                                }
                                            }))
                                        }
                                        className={`${styles.SwitchBase} ${
                                            formData.Contenido.ServiciosDeFotosRequeridos.SesionDeFotos1diaFullDay
                                                ? styles.SwitchOn
                                                : styles.SwitchOff
                                        }`}
                                    >
                                        <span className={styles.SwitchThumb} />
                                    </Switch>

                                </div>
                                {/*endregion*/}
                                {/*region SesionDeFotos1DiaExterior*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Exterior
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeFotosRequeridos.SesionDeFotos1DiaExterior}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeFotosRequeridos: {
                                                        ...prev.Contenido.VariablesDeFotosRequeridos,
                                                        SesionDeFotos1DiaExterior: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region SesionDeFotos1DiaRetrato*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Retrato
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeFotosRequeridos.SesionDeFotos1DiaRetrato}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccion"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeFotosRequeridos: {
                                                        ...prev.Contenido.VariablesDeFotosRequeridos,
                                                        SesionDeFotos1DiaRetrato: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region SesionDeFotos1DiaPosada*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Posada
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeFotosRequeridos.SesionDeFotos1DiaPosada}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccion"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeFotosRequeridos: {
                                                        ...prev.Contenido.VariablesDeFotosRequeridos,
                                                        SesionDeFotos1DiaPosada: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region SesionDeFotos1DiaEvento*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Evento
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeFotosRequeridos.SesionDeFotos1DiaEvento}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccion"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeFotosRequeridos: {
                                                        ...prev.Contenido.VariablesDeFotosRequeridos,
                                                        SesionDeFotos1DiaEvento: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region SesionDeFotos1DiaOperacion*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Operacion
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeFotosRequeridos.SesionDeFotos1DiaOperacion}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccion"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeFotosRequeridos: {
                                                        ...prev.Contenido.VariablesDeFotosRequeridos,
                                                        SesionDeFotos1DiaOperacion: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region SesionDeFotos1DiaEdicion*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Edicion
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeFotosRequeridos.SesionDeFotos1DiaEdicion}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccion"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeFotosRequeridos: {
                                                        ...prev.Contenido.VariablesDeFotosRequeridos,
                                                        SesionDeFotos1DiaEdicion: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region SesionDeFotos1DiaRetoques*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Retoques
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeFotosRequeridos.SesionDeFotos1DiaRetoques}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccion"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeFotosRequeridos: {
                                                        ...prev.Contenido.VariablesDeFotosRequeridos,
                                                        SesionDeFotos1DiaRetoques: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}

                            </div>
                        )}
                    </div>
                    {/*endregion*/}
                    {/*region SesionDeFotosEstudio*/}
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            formData.Contenido.ServiciosDeFotosRequeridos.SesionDeFotosEstudio
                                ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Sesion de fotos estudio
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.Contenido.ServiciosDeFotosRequeridos.SesionDeFotosEstudio}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeFotosRequeridos.SesionDeFotos1dia"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        Contenido: {
                                            ...prev.Contenido,
                                            ServiciosDeFotosRequeridos: {
                                                ...prev.Contenido.ServiciosDeFotosRequeridos,
                                                SesionDeFotosEstudio: e.target.checked
                                            }
                                        }
                                    }))
                                }

                            />
                        </div>

                        {formData.Contenido.ServiciosDeFotosRequeridos.SesionDeFotosEstudio && (
                            <div>
                                {/*region FullDay*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Medio día / FullDay
                                    </div>

                                    <Switch
                                        checked={formData.Contenido.ServiciosDeFotosRequeridos.SesionDeFotosEstudioFullDay}
                                        onChange={(checked) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    ServiciosDeFotosRequeridos: {
                                                        ...prev.Contenido.ServiciosDeFotosRequeridos,
                                                        SesionDeFotosEstudioFullDay: checked
                                                    }
                                                }
                                            }))
                                        }
                                        className={`${styles.SwitchBase} ${
                                            formData.Contenido.ServiciosDeFotosRequeridos.SesionDeFotosEstudioFullDay
                                                ? styles.SwitchOn
                                                : styles.SwitchOff
                                        }`}
                                    >
                                        <span className={styles.SwitchThumb} />
                                    </Switch>

                                </div>
                                {/*endregion*/}
                                {/*region SesionDeFotosEstudioBacking_fondo*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Backing fondo
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeFotosRequeridos.SesionDeFotosEstudioBacking_fondo}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeFotosRequeridos: {
                                                        ...prev.Contenido.VariablesDeFotosRequeridos,
                                                        SesionDeFotosEstudioBacking_fondo: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region SesionDeFotosEstudioRetrato*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Retrato
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeFotosRequeridos.SesionDeFotosEstudioRetrato}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccion"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeFotosRequeridos: {
                                                        ...prev.Contenido.VariablesDeFotosRequeridos,
                                                        SesionDeFotosEstudioRetrato: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region SesionDeFotosEstudioPosada*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Posada
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeFotosRequeridos.SesionDeFotosEstudioPosada}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccion"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeFotosRequeridos: {
                                                        ...prev.Contenido.VariablesDeFotosRequeridos,
                                                        SesionDeFotosEstudioPosada: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region SesionDeFotosEstudioOperaciones*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Operaciones
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeFotosRequeridos.SesionDeFotosEstudioOperaciones}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccion"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeFotosRequeridos: {
                                                        ...prev.Contenido.VariablesDeFotosRequeridos,
                                                        SesionDeFotosEstudioOperaciones: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region SesionDeFotosEstudioEdicion*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Edicion
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeFotosRequeridos.SesionDeFotosEstudioEdicion}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccion"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeFotosRequeridos: {
                                                        ...prev.Contenido.VariablesDeFotosRequeridos,
                                                        SesionDeFotosEstudioEdicion: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region SesionDeFotosEstudioRetoque*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Retoques
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.Contenido.VariablesDeFotosRequeridos.SesionDeFotosEstudioRetoque}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccion"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    VariablesDeFotosRequeridos: {
                                                        ...prev.Contenido.VariablesDeFotosRequeridos,
                                                        SesionDeFotosEstudioRetoque: e.target.checked
                                                    }
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}


                                {/*
                                            SesionDeFotosEstudioBacking_fondo: false,
                                            SesionDeFotosEstudioRetrato: false,
                                            SesionDeFotosEstudioPosada: false,
                                            SesionDeFotosEstudioOperaciones: false,
                                            SesionDeFotosEstudioEdicion: false,
                                            SesionDeFotosEstudioRetoque: false,
                                            */}
                            </div>
                        )}
                    </div>
                    {/*endregion*/}

                </div>
            )}
            {/*//endregion*/}
        </>
    );
}