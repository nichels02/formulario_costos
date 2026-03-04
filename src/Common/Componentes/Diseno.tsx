import * as Slider from "@radix-ui/react-slider";
import styles from "../Css/Formulario.module.css";
import type {FormDataType} from "./sistemas/formTypes.ts"; // ajusta esto

type Props = {
    formData: FormDataType;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

export default function Diseno({
                                               formData,
                                               setFormData
                                           }: Props) {

    return (
        <>
            {/*region Diseño*/}
            {formData.QueAreaSeraNecesaria === "Diseño" && (
                <div className={styles.SeccionAreas}>
                    <div className={styles.SubTituloRecuadro}>Diseño</div>
                    {/*region Beanding*/}
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            formData.ServiciosRequeridosDiseno.Beanding
                                ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Beanding
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.ServiciosRequeridosDiseno.Beanding}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeFotosRequeridos.SesionDeFotos1dia"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        ServiciosRequeridosDiseno: {
                                            ...prev.ServiciosRequeridosDiseno,
                                            Beanding: e.target.checked
                                        }

                                    }))
                                }

                            />
                        </div>

                        {formData.ServiciosRequeridosDiseno.Beanding && (
                            <div>

                                {/*region BeandingTallerDeMarca*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Taller de marca
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.ServiciosRequeridosDiseno.BeandingTallerDeMarca}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                ServiciosRequeridosDiseno: {
                                                    ...prev.ServiciosRequeridosDiseno,
                                                    BeandingTallerDeMarca: e.target.checked
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region Beanding3PropuestasDeRutaVisual*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        3 propuestas de ruta visual
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.ServiciosRequeridosDiseno.Beanding3PropuestasDeRutaVisual}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                ServiciosRequeridosDiseno: {
                                                    ...prev.ServiciosRequeridosDiseno,
                                                    Beanding3PropuestasDeRutaVisual: e.target.checked
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region BeandingLogotipo*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Logotipo
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.ServiciosRequeridosDiseno.BeandingLogotipo}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                ServiciosRequeridosDiseno: {
                                                    ...prev.ServiciosRequeridosDiseno,
                                                    BeandingLogotipo: e.target.checked
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region BeandingBrandbook*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Brandbook
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.ServiciosRequeridosDiseno.BeandingBrandbook}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                ServiciosRequeridosDiseno: {
                                                    ...prev.ServiciosRequeridosDiseno,
                                                    BeandingBrandbook: e.target.checked
                                                }
                                            }))
                                        }

                                    />
                                </div>
                                {/*endregion*/}
                                {/*region BeandingToolkit*/}
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.SubTituloRecuadro}>
                                        Toolkit
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.ServiciosRequeridosDiseno.BeandingToolkit}
                                        className={styles.InputCheckBox}
                                        name="Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse"
                                        onChange={(e) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                ServiciosRequeridosDiseno: {
                                                    ...prev.ServiciosRequeridosDiseno,
                                                    BeandingToolkit: e.target.checked
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
                    {/*region Infografia*/}
                    <div
                        className={styles.RecuadroPregunta}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Infografia
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.ServiciosRequeridosDiseno.Infografia}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                            ...prev,
                                            ServiciosRequeridosDiseno: {
                                                ...prev.ServiciosRequeridosDiseno,
                                                Infografia: e.target.checked
                                            }
                                        }
                                    ))
                                }

                            />
                        </div>
                    </div>
                    {/*endregion*/}
                    {/*region Catalogo*/}
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            formData.ServiciosRequeridosDiseno.Catalogo
                                ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Catalogo
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.ServiciosRequeridosDiseno.Catalogo}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion3D"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        ServiciosRequeridosDiseno: {
                                            ...prev.ServiciosRequeridosDiseno,
                                            Catalogo: e.target.checked

                                        }
                                    }))
                                }

                            />
                        </div>

                        {formData.ServiciosRequeridosDiseno.Catalogo && (
                            <div>
                                <div className={styles.SubTituloRecuadro}>
                                    Cantidad de paginas del catalogo
                                </div>
                                <div
                                    className={`${styles.ContenedorHijoSecundario}`}
                                >
                                    <Slider.Root
                                        className={styles.SliderRoot}
                                        value={[
                                            formData.ServiciosRequeridosDiseno.CatalogoCantidadDePaginas
                                        ]}
                                        onValueChange={(value) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                ServiciosRequeridosDiseno: {
                                                    ...prev.ServiciosRequeridosDiseno,
                                                    CatalogoCantidadDePaginas: value[0]
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
                                        value={formData.ServiciosRequeridosDiseno.CatalogoCantidadDePaginas}
                                        onChange={(e) => {
                                            const value = Number(e.target.value);
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    ServiciosRequeridosDiseno: {
                                                        ...prev.ServiciosRequeridosDiseno,
                                                        CatalogoCantidadDePaginas: value
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
                    {/*region Guia*/}
                    <div
                        className={styles.RecuadroPregunta}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Guia
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.ServiciosRequeridosDiseno.Guia}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                            ...prev,
                                            ServiciosRequeridosDiseno: {
                                                ...prev.ServiciosRequeridosDiseno,
                                                Guia: e.target.checked
                                            }
                                        }
                                    ))
                                }

                            />
                        </div>
                    </div>
                    {/*endregion*/}
                    {/*region Manual*/}
                    <div
                        className={styles.RecuadroPregunta}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Manual
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.ServiciosRequeridosDiseno.Manual}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                            ...prev,
                                            ServiciosRequeridosDiseno: {
                                                ...prev.ServiciosRequeridosDiseno,
                                                Manual: e.target.checked
                                            }
                                        }
                                    ))
                                }

                            />
                        </div>
                    </div>
                    {/*endregion*/}
                    {/*region PlantillaPPT*/}
                    <div
                        className={styles.RecuadroPregunta}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                PlantillaPPT
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.ServiciosRequeridosDiseno.PlantillaPPT}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                            ...prev,
                                            ServiciosRequeridosDiseno: {
                                                ...prev.ServiciosRequeridosDiseno,
                                                PlantillaPPT: e.target.checked
                                            }
                                        }
                                    ))
                                }

                            />
                        </div>
                    </div>
                    {/*endregion*/}
                    {/*region PresentacionPPT*/}
                    <div
                        className={styles.RecuadroPregunta}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                PresentacionPPT
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.ServiciosRequeridosDiseno.PresentacionPPT}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                            ...prev,
                                            ServiciosRequeridosDiseno: {
                                                ...prev.ServiciosRequeridosDiseno,
                                                PresentacionPPT: e.target.checked
                                            }
                                        }
                                    ))
                                }

                            />
                        </div>
                    </div>
                    {/*endregion*/}
                    {/*region Flyer*/}
                    <div
                        className={styles.RecuadroPregunta}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Flyer
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.ServiciosRequeridosDiseno.Flyer}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                            ...prev,
                                            ServiciosRequeridosDiseno: {
                                                ...prev.ServiciosRequeridosDiseno,
                                                Flyer: e.target.checked
                                            }
                                        }
                                    ))
                                }

                            />
                        </div>
                    </div>
                    {/*endregion*/}
                    {/*region Folleto*/}
                    <div
                        className={styles.RecuadroPregunta}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Folleto
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.ServiciosRequeridosDiseno.Folleto}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                            ...prev,
                                            ServiciosRequeridosDiseno: {
                                                ...prev.ServiciosRequeridosDiseno,
                                                Folleto: e.target.checked
                                            }
                                        }
                                    ))
                                }

                            />
                        </div>
                    </div>
                    {/*endregion*/}
                    {/*region Poster*/}
                    <div
                        className={styles.RecuadroPregunta}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Poster
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.ServiciosRequeridosDiseno.Poster}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                            ...prev,
                                            ServiciosRequeridosDiseno: {
                                                ...prev.ServiciosRequeridosDiseno,
                                                Poster: e.target.checked
                                            }
                                        }
                                    ))
                                }

                            />
                        </div>
                    </div>
                    {/*endregion*/}
                    {/*region Merchandising*/}
                    <div
                        className={styles.RecuadroPregunta}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Merchandising
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.ServiciosRequeridosDiseno.Merchandising}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                            ...prev,
                                            ServiciosRequeridosDiseno: {
                                                ...prev.ServiciosRequeridosDiseno,
                                                Merchandising: e.target.checked
                                            }
                                        }
                                    ))
                                }

                            />
                        </div>
                    </div>
                    {/*endregion*/}
                    {/*region Reporte*/}
                    <div
                        className={`${styles.RecuadroPregunta} ${
                            formData.ServiciosRequeridosDiseno.Reporte
                                ? styles.RecuadroGrandeActivo : ""
                        }`}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Reporte
                            </div>

                            <input
                                type="checkbox"
                                checked={formData.ServiciosRequeridosDiseno.Reporte}
                                className={styles.InputCheckBox}
                                name="Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion3D"
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        ServiciosRequeridosDiseno: {
                                            ...prev.ServiciosRequeridosDiseno,
                                            Reporte: e.target.checked

                                        }
                                    }))
                                }

                            />
                        </div>

                        {formData.ServiciosRequeridosDiseno.Reporte && (
                            <div>
                                <div className={styles.SubTituloRecuadro}>
                                    Cantidad de paginas del reporte
                                </div>
                                <div
                                    className={`${styles.ContenedorHijoSecundario}`}
                                >
                                    <Slider.Root
                                        className={styles.SliderRoot}
                                        value={[
                                            formData.ServiciosRequeridosDiseno.ReporteCantidadDePaginas
                                        ]}
                                        onValueChange={(value) =>
                                            setFormData(prev => ({
                                                ...prev,
                                                ServiciosRequeridosDiseno: {
                                                    ...prev.ServiciosRequeridosDiseno,
                                                    ReporteCantidadDePaginas: value[0]
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
                                        value={formData.ServiciosRequeridosDiseno.ReporteCantidadDePaginas}
                                        onChange={(e) => {
                                            const value = Number(e.target.value);
                                            setFormData(prev => ({
                                                ...prev,
                                                Contenido: {
                                                    ...prev.Contenido,
                                                    ServiciosRequeridosDiseno: {
                                                        ...prev.ServiciosRequeridosDiseno,
                                                        CatalogoCantidadDePaginas: value
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

                </div>
            )}
            {/*endregion*/}
        </>
    );
}