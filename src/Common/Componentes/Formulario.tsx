import { Disclosure, Switch } from "@headlessui/react";
import * as Slider from '@radix-ui/react-slider'
import type { FormDataType, CosasExtra } from "./sistemas/formTypes.ts";

import { useState, useEffect } from "react";
import styles from "../css/Formulario.module.css";


//import { useContent } from "./Sistemas/useContent.tsx";
//import { useLanguage } from "./Sistemas/LanguageContext.tsx";
//import LazyImage from './Sistemas/LazyImage.tsx'; // o ajusta el path si está en otro lado

function Formulario() {


    //				valor servicio	sin valor dicho aun
    //region los datos

    const [formData, setFormData] = useState<FormDataType>({
        nombreDeProyecto: "",

        //region integrantes
        SeranRequeridosDirectores: false,
        CuantosDirectoresSeranRequeridos: 0,

        SeranRequeridosJefes: false,
        CuantosJefesSeranRequeridos: 0,

        SeranRequeridosAnalistas: false,
        CuantosAnalistasSeranRequeridos: 0,

        SeranRequeridosPracticantes: false,
        CuantosPracticantesSeranRequeridos: 0,
        //endregion

        HorasDeTrabajoNecesarias:0,

        QueAreaSeraNecesaria: "",

        //region Contenido video
        Contenido: {
            ServiciosDeVideosRequeridos: {
                VideoConAnimacion3D: false,
                CantidadMinutosAnimacion3D: 0,
                VideoConAnimacion2D: false,
                CantidadMinutosAnimacion2D: 0,
                VideoInstitucional: false,
                VideoDocumental: false,
                VideosParaRedesSocialesPorUnidadVendidoEnPaquete: false,
                CantidadDeVideosParaRedesSociales: 0,
                VideoDron: false,
            },
            VariablesDeVideosRequeridos: {
                VideoDron: false,
                Musicalizacion: false,
                CantidadMusicalizacion:0,
                TieneSubtitulado: false,
                SubtituladoMasDe1Minuto: false,
                SubtituladoTraduccionInhouse: false,
                SubtituladoTraduccion: false,
                TieneLocucion: false,
                LocucionInhouse: false,
                LocucionPerio: false,
                LocucionMichaelCielo: false,
                Registro: false,
            },
            ServiciosDeFotosRequeridos: {
                FotosConDron: false,

                TimelapsePrecioPorMes: false,
                CantidadDeMesesTimelapse: 0,
                TimelapseSoftwareParaVerOnline: false,
                TimelapseEntregableFinal: false,

                SesionDeFotos1dia: false,
                SesionDeFotos1diaFullDay:false,

                SesionDeFotosEstudio: false,
                SesionDeFotosEstudioFullDay: false
            },
            VariablesDeFotosRequeridos: {
                SesionDeFotos1DiaExterior: false,
                SesionDeFotos1DiaRetrato: false,
                SesionDeFotos1DiaPosada: false,
                SesionDeFotos1DiaEvento: false,
                SesionDeFotos1DiaOperacion: false,
                SesionDeFotos1DiaEdicion: false,
                SesionDeFotos1DiaRetoques: false,

                SesionDeFotosEstudioBacking_fondo: false,
                SesionDeFotosEstudioRetrato: false,
                SesionDeFotosEstudioPosada: false,
                SesionDeFotosEstudioOperaciones: false,
                SesionDeFotosEstudioEdicion: false,
                SesionDeFotosEstudioRetoque: false,
            },

        },
        //endregion

        //region Diseño
        ServiciosRequeridosDiseno: {
            Beanding:false,

            BeandingTallerDeMarca:false,
            Beanding3PropuestasDeRutaVisual:false,
            BeandingLogotipo:false,
            BeandingBrandbook:false,
            BeandingToolkit:false,

            Infografia:false,

            Catalogo:false,
            CatalogoCantidadDePaginas:0,

            Guia:false,
            Manual:false,
            PlantillaPPT:false,
            PresentacionPPT:false,
            Flyer:false,
            Folleto:false,
            Poster:false,
            Merchandising:false,
            Reporte:false,
            ReporteCantidadDePaginas:0,
        },
        //endregion

        //region Gestion
        ServiciosRequeridosGestion: {
            Asesoria:false,
            ManejoDeRedes:false,
            CantidadDeMesesManejoDeRedes: 0,
            MapeoDeStakeholders:false,
            EstudiosCualitativosYCuantitativos:false,
            EstrategiaDeComunicacion:false,
            CampanasCreativas:false,
            GestionDeCrisis:false,
            RelacionDePrensaYGestionDeMedios:false,
            MediaTraining:false,
            Talleres:false,
            GestionYProduccionDeEventos:false,
            Activaciones:false,
        },


        //endregion

        //region transporte
        RequiereTransporte:false,
        CuantoCostoElTransporte:0,
        //endregion

        //region Alimentacion
        RequiereAlimentacion:false,
        AlimentoParaCuantosDias:0,
        CostoDeAlimentoPorPersonaDeUnDia:0,
        //endregion


        PrecioBase:0,
        PrecioBaseDeServicios:0,
        ListaDeSeviciosSinPrecio:[],
        MaterialesYProduccionExtras:[],
        valorServiciosSinValorDichoAun:"",
        RecargoFueraDelHorario:false,
        HorasFueraDelHorario:0,
    });

    useEffect(() => {
        console.log("Form actualizado:", formData);
    }, [formData]);
    //endregion






    const agregarExtra = () => {
        setFormData(prev => ({
            ...prev,
            MaterialesYProduccionExtras: [
                ...prev.MaterialesYProduccionExtras,
                { Descripcion: "", Precio: 0 }
            ]
        }));
    };

    const eliminarExtra = (index: number) => {
        setFormData(prev => ({
            ...prev,
            MaterialesYProduccionExtras:
                prev.MaterialesYProduccionExtras.filter((_, i) => i !== index)
        }));
    };

    const actualizarExtra = (
        index: number,
        campo: keyof CosasExtra,
        valor: string | number
    ) => {
        setFormData(prev => {
            const nuevos = [...prev.MaterialesYProduccionExtras];
            nuevos[index] = {
                ...nuevos[index],
                [campo]: valor
            };
            return {
                ...prev,
                MaterialesYProduccionExtras: nuevos
            };
        });
    };






    //region cambiar los datos
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement| HTMLSelectElement>
    ) => {
        const { name, type } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? (e.target as HTMLInputElement).checked
                    : type === "number"
                        ? Number(e.target.value)
                        : e.target.value
        }));
        console.log(formData);
    };
    //endregion

    //region subir datos
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // evita que recargue la página
    };
    //endregion


    return (
        <div className={styles.Padre}>
            <div className={styles.ComponentePadre}>
                <form  className={styles.ComponentePadreForm} onSubmit={handleSubmit}>
                    {/* componente normal */}
                    {/*
                    <div className={styles.RecuadroPregunta}>
                        <div className={styles.TituloRecuadro}>

                        </div>
                        <div className={styles.CuadroTexto}>

                        </div>
                    </div>
                    */}
                    {/* componente Cantidad */}
                    {/*
                    <div className={`${styles.RecuadroPregunta} ${true ? styles.RecuadroGrandeActivo : ""}`}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>

                            </div>
                            <div className={styles.InputBox}>

                            </div>
                        </div>
                        <div className={`${styles.ContenedorVacio} ${true ? styles.ContenedorHijoSecundario : ""}`}>
                            <div className={styles.InputRange}>

                            </div>
                            <div className={styles.InputTextCantidad}>

                            </div>
                        </div>
                    </div>
                    */}

{/*-----------------------------------------------------------------------------------------------------------------------------------*/}

                    {/*region Nombre de proyecto*/}
                    <div className={styles.RecuadroPregunta}>
                        <div className={styles.TituloRecuadro}>
                            Nombre de proyecto:
                        </div>
                        <input
                            type="text"
                            className={styles.CuadroTexto}
                            name="nombreDeProyecto"
                            value={formData.nombreDeProyecto}
                            onChange={handleChange}
                        />
                    </div>
                    {/*//endregion*/}

                    {/*
                    <div className={`${styles.RecuadroPregunta} ${formData.SeranRequeridosDirectores ? styles.RecuadroGrandeActivo : ""}`}>
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>

                            </div>
                            <div className={styles.InputBox}>

                            </div>
                        </div>
                        <div className={`${styles.ContenedorVacio} ${formData.SeranRequeridosDirectores ? styles.ContenedorHijoSecundario : ""}`}>
                            <div className={styles.InputRange}>

                            </div>
                            <div className={styles.InputTextCantidad}>

                            </div>
                        </div>
                    </div>
                    */}

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

                    {/*region HorasDeTrabajoNecesarias*/}
                    <div className={styles.RecuadroPregunta}>
                        <div className={styles.TituloRecuadro}>
                            Horas de trabajo necesarias:
                        </div>
                        <input
                            type="text"
                            className={styles.CuadroTexto}
                            name="HorasDeTrabajoNecesarias"
                            value={formData.HorasDeTrabajoNecesarias}
                            onChange={handleChange}
                            min={0}
                            step={1}
                        />
                    </div>
                    {/*//endregion*/}

                    {/*region QueAreaSeraNecesaria*/}
                    <div
                        className={`${styles.RecuadroPregunta} `}
                    >
                        <div className={styles.ContenedorHijoPrincipal}>
                            <div className={styles.TituloRecuadro}>
                                Que area sera necesaria
                            </div>

                            <select
                                name="QueAreaSeraNecesaria"
                                value={formData.QueAreaSeraNecesaria}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                <option value="" disabled>
                                    -
                                </option>

                                <option value="Contenido">Contenido</option>
                                <option value="Diseño">Diseño</option>
                                <option value="Gestión">Gestión</option>
                            </select>
                        </div>

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
                        {/*region Gestión*/}
                        {formData.QueAreaSeraNecesaria === "Gestión" && (
                            <div className={styles.SeccionAreas}>
                                <div className={styles.SubTituloRecuadro}>Gestión</div>

                                {/*region Asesoria*/}
                                <div
                                    className={styles.RecuadroPregunta}>
                                    <div className={styles.ContenedorHijoPrincipal}>
                                        <div className={styles.TituloRecuadro}>
                                            Asesoria
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={formData.ServiciosRequeridosGestion.Asesoria}
                                            className={styles.InputCheckBox}
                                            name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                            onChange={(e) =>
                                                setFormData(prev => ({
                                                        ...prev,
                                                        ServiciosRequeridosGestion: {
                                                            ...prev.ServiciosRequeridosGestion,
                                                            Asesoria: e.target.checked
                                                        }
                                                    }
                                                ))
                                            }

                                        />
                                    </div>
                                </div>
                                {/*endregion*/}
                                {/*region ManejoDeRedes*/}
                                <div
                                    className={`${styles.RecuadroPregunta} ${
                                        formData.ServiciosRequeridosGestion.ManejoDeRedes
                                            ? styles.RecuadroGrandeActivo : ""
                                    }`}
                                >
                                    <div className={styles.ContenedorHijoPrincipal}>
                                        <div className={styles.TituloRecuadro}>
                                            Manejo de redes
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={formData.ServiciosRequeridosGestion.ManejoDeRedes}
                                            className={styles.InputCheckBox}
                                            name="Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion3D"
                                            onChange={(e) =>
                                                setFormData(prev => ({
                                                    ...prev,
                                                    ServiciosRequeridosGestion: {
                                                        ...prev.ServiciosRequeridosGestion,
                                                        ManejoDeRedes: e.target.checked

                                                    }
                                                }))
                                            }

                                        />
                                    </div>

                                    {formData.ServiciosRequeridosGestion.ManejoDeRedes && (
                                        <div>
                                            <div className={styles.SubTituloRecuadro}>
                                                Cantidad de meses
                                            </div>
                                            <div
                                                className={`${styles.ContenedorHijoSecundario}`}
                                            >
                                                <Slider.Root
                                                    className={styles.SliderRoot}
                                                    value={[
                                                        formData.ServiciosRequeridosGestion.CantidadDeMesesManejoDeRedes
                                                    ]}
                                                    onValueChange={(value) =>
                                                        setFormData(prev => ({
                                                            ...prev,
                                                            ServiciosRequeridosGestion: {
                                                                ...prev.ServiciosRequeridosGestion,
                                                                CantidadDeMesesManejoDeRedes: value[0]
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
                                                    value={formData.ServiciosRequeridosGestion.CantidadDeMesesManejoDeRedes}
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
                                {/*region MapeoDeStakeholders*/}
                                <div
                                    className={styles.RecuadroPregunta}>
                                    <div className={styles.ContenedorHijoPrincipal}>
                                        <div className={styles.TituloRecuadro}>
                                            Mapeo de stakeholders
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={formData.ServiciosRequeridosGestion.MapeoDeStakeholders}
                                            className={styles.InputCheckBox}
                                            name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                            onChange={(e) =>
                                                setFormData(prev => ({
                                                        ...prev,
                                                        ServiciosRequeridosGestion: {
                                                            ...prev.ServiciosRequeridosGestion,
                                                            MapeoDeStakeholders: e.target.checked
                                                        }
                                                    }
                                                ))
                                            }

                                        />
                                    </div>
                                </div>
                                {/*endregion*/}
                                {/*region EstudiosCualitativosYCuantitativos*/}
                                <div
                                    className={styles.RecuadroPregunta}>
                                    <div className={styles.ContenedorHijoPrincipal}>
                                        <div className={styles.TituloRecuadro}>
                                            Estudios cualitativos y cuantitativos
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={formData.ServiciosRequeridosGestion.EstudiosCualitativosYCuantitativos}
                                            className={styles.InputCheckBox}
                                            name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                            onChange={(e) =>
                                                setFormData(prev => ({
                                                        ...prev,
                                                        ServiciosRequeridosGestion: {
                                                            ...prev.ServiciosRequeridosGestion,
                                                            EstudiosCualitativosYCuantitativos: e.target.checked
                                                        }
                                                    }
                                                ))
                                            }

                                        />
                                    </div>
                                </div>
                                {/*endregion*/}
                                {/*region EstrategiaDeComunicacion*/}
                                <div
                                    className={styles.RecuadroPregunta}>
                                    <div className={styles.ContenedorHijoPrincipal}>
                                        <div className={styles.TituloRecuadro}>
                                            Estrategia de comunicacion
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={formData.ServiciosRequeridosGestion.EstrategiaDeComunicacion}
                                            className={styles.InputCheckBox}
                                            name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                            onChange={(e) =>
                                                setFormData(prev => ({
                                                        ...prev,
                                                        ServiciosRequeridosGestion: {
                                                            ...prev.ServiciosRequeridosGestion,
                                                            EstrategiaDeComunicacion: e.target.checked
                                                        }
                                                    }
                                                ))
                                            }

                                        />
                                    </div>
                                </div>
                                {/*endregion*/}
                                {/*region CampanasCreativas*/}
                                <div
                                    className={styles.RecuadroPregunta}>
                                    <div className={styles.ContenedorHijoPrincipal}>
                                        <div className={styles.TituloRecuadro}>
                                            Campañas creativas
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={formData.ServiciosRequeridosGestion.CampanasCreativas}
                                            className={styles.InputCheckBox}
                                            name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                            onChange={(e) =>
                                                setFormData(prev => ({
                                                        ...prev,
                                                        ServiciosRequeridosGestion: {
                                                            ...prev.ServiciosRequeridosGestion,
                                                            CampanasCreativas: e.target.checked
                                                        }
                                                    }
                                                ))
                                            }

                                        />
                                    </div>
                                </div>
                                {/*endregion*/}
                                {/*region GestionDeCrisis*/}
                                <div
                                    className={styles.RecuadroPregunta}>
                                    <div className={styles.ContenedorHijoPrincipal}>
                                        <div className={styles.TituloRecuadro}>
                                            Gestion de crisis
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={formData.ServiciosRequeridosGestion.GestionDeCrisis}
                                            className={styles.InputCheckBox}
                                            name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                            onChange={(e) =>
                                                setFormData(prev => ({
                                                        ...prev,
                                                        ServiciosRequeridosGestion: {
                                                            ...prev.ServiciosRequeridosGestion,
                                                            GestionDeCrisis: e.target.checked
                                                        }
                                                    }
                                                ))
                                            }

                                        />
                                    </div>
                                </div>
                                {/*endregion*/}
                                {/*region RelacionDePrensaYGestionDeMedios*/}
                                <div
                                    className={styles.RecuadroPregunta}>
                                    <div className={styles.ContenedorHijoPrincipal}>
                                        <div className={styles.TituloRecuadro}>
                                            Relacion de prensa y gestion de medios
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={formData.ServiciosRequeridosGestion.RelacionDePrensaYGestionDeMedios}
                                            className={styles.InputCheckBox}
                                            name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                            onChange={(e) =>
                                                setFormData(prev => ({
                                                        ...prev,
                                                        ServiciosRequeridosGestion: {
                                                            ...prev.ServiciosRequeridosGestion,
                                                            RelacionDePrensaYGestionDeMedios: e.target.checked
                                                        }
                                                    }
                                                ))
                                            }

                                        />
                                    </div>
                                </div>
                                {/*endregion*/}
                                {/*region MediaTraining*/}
                                <div
                                    className={styles.RecuadroPregunta}>
                                    <div className={styles.ContenedorHijoPrincipal}>
                                        <div className={styles.TituloRecuadro}>
                                            Media training
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={formData.ServiciosRequeridosGestion.MediaTraining}
                                            className={styles.InputCheckBox}
                                            name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                            onChange={(e) =>
                                                setFormData(prev => ({
                                                        ...prev,
                                                        ServiciosRequeridosGestion: {
                                                            ...prev.ServiciosRequeridosGestion,
                                                            MediaTraining: e.target.checked
                                                        }
                                                    }
                                                ))
                                            }

                                        />
                                    </div>
                                </div>
                                {/*endregion*/}
                                {/*region Talleres*/}
                                <div
                                    className={styles.RecuadroPregunta}>
                                    <div className={styles.ContenedorHijoPrincipal}>
                                        <div className={styles.TituloRecuadro}>
                                            Talleres
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={formData.ServiciosRequeridosGestion.Talleres}
                                            className={styles.InputCheckBox}
                                            name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                            onChange={(e) =>
                                                setFormData(prev => ({
                                                        ...prev,
                                                        ServiciosRequeridosGestion: {
                                                            ...prev.ServiciosRequeridosGestion,
                                                            Talleres: e.target.checked
                                                        }
                                                    }
                                                ))
                                            }

                                        />
                                    </div>
                                </div>
                                {/*endregion*/}
                                {/*region GestionYProduccionDeEventos*/}
                                <div
                                    className={styles.RecuadroPregunta}>
                                    <div className={styles.ContenedorHijoPrincipal}>
                                        <div className={styles.TituloRecuadro}>
                                            Gestion y produccion de eventos
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={formData.ServiciosRequeridosGestion.GestionYProduccionDeEventos}
                                            className={styles.InputCheckBox}
                                            name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                            onChange={(e) =>
                                                setFormData(prev => ({
                                                        ...prev,
                                                        ServiciosRequeridosGestion: {
                                                            ...prev.ServiciosRequeridosGestion,
                                                            GestionYProduccionDeEventos: e.target.checked
                                                        }
                                                    }
                                                ))
                                            }

                                        />
                                    </div>
                                </div>
                                {/*endregion*/}
                                {/*region Activaciones*/}
                                <div
                                    className={styles.RecuadroPregunta}>
                                    <div className={styles.ContenedorHijoPrincipal}>
                                        <div className={styles.TituloRecuadro}>
                                            Activaciones
                                        </div>

                                        <input
                                            type="checkbox"
                                            checked={formData.ServiciosRequeridosGestion.Activaciones}
                                            className={styles.InputCheckBox}
                                            name="Contenido.ServiciosDeVideosRequeridos.VideoInstitucional"
                                            onChange={(e) =>
                                                setFormData(prev => ({
                                                        ...prev,
                                                        ServiciosRequeridosGestion: {
                                                            ...prev.ServiciosRequeridosGestion,
                                                            Activaciones: e.target.checked
                                                        }
                                                    }
                                                ))
                                            }

                                        />
                                    </div>
                                </div>
                                {/*endregion*/}
                            </div>
                        )}
                        {/*endregion*/}
                    </div>
                    {/*//endregion*/}

                    {/*region transporte*/}
                    <Disclosure defaultOpen={formData.RequiereTransporte}
                    >
                        {({ open }) => (
                            <div
                                className={`${styles.RecuadroPregunta} ${
                                    open ? styles.RecuadroGrandeActivo : ""
                                }`}
                            >
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.TituloRecuadro}>
                                        Requiere transporte
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.RequiereTransporte}
                                        className={styles.InputCheckBox}
                                        name="RequiereTransporte"
                                        onChange={handleChange}

                                    />
                                </div>

                                {formData.RequiereTransporte && (
                                    <div>
                                        <div className={styles.SubTituloRecuadro}>
                                            Cuanto se gastara en transporte
                                        </div>
                                        <div
                                            className={`${styles.ContenedorHijoSecundario}`}
                                        >
                                            <Slider.Root
                                                className={styles.SliderRoot}
                                                value={[formData.CuantoCostoElTransporte]}
                                                onValueChange={(value) =>
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        CuantoCostoElTransporte: value[0]
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
                                                name="CuantoCostoElTransporte"
                                                value={formData.CuantoCostoElTransporte}
                                                onChange={handleChange}
                                                min={0}
                                                max={10}
                                                step={1}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </Disclosure>
                    {/*endregion*/}


                    {/*region Alimento*/}
                    <Disclosure defaultOpen={formData.RequiereAlimentacion}
                    >
                        {({ open }) => (
                            <div
                                className={`${styles.RecuadroPregunta} ${
                                    open ? styles.RecuadroGrandeActivo : ""
                                }`}
                            >
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.TituloRecuadro}>
                                        Requiere alimentacion
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.RequiereAlimentacion}
                                        className={styles.InputCheckBox}
                                        name="RequiereAlimentacion"
                                        onChange={handleChange}

                                    />
                                </div>

                                {formData.RequiereAlimentacion && (
                                    <div>
                                        <div className={styles.SubTituloRecuadro}>
                                            Alimento para cuantos dias sera necesario
                                        </div>
                                        <div
                                            className={`${styles.ContenedorHijoSecundario}`}
                                        >
                                            <Slider.Root
                                                className={styles.SliderRoot}
                                                value={[formData.AlimentoParaCuantosDias]}
                                                onValueChange={(value) =>
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        AlimentoParaCuantosDias: value[0]
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
                                                name="CuantoCostoElTransporte"
                                                value={formData.AlimentoParaCuantosDias}
                                                onChange={handleChange}
                                                min={0}
                                                max={10}
                                                step={1}
                                            />
                                        </div>



                                        <div className={styles.SubTituloRecuadro}>
                                            Cuanto cuesta el alimento de una persona por dia
                                        </div>
                                        <div
                                            className={`${styles.ContenedorHijoSecundario}`}
                                        >
                                            <Slider.Root
                                                className={styles.SliderRoot}
                                                value={[formData.CostoDeAlimentoPorPersonaDeUnDia]}
                                                onValueChange={(value) =>
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        CostoDeAlimentoPorPersonaDeUnDia: value[0]
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
                                                name="CuantoCostoElTransporte"
                                                value={formData.CostoDeAlimentoPorPersonaDeUnDia}
                                                onChange={handleChange}
                                                min={0}
                                                max={10}
                                                step={1}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </Disclosure>
                    {/*endregion*/}


                    <div
                        className={`${styles.RecuadroPregunta} `}
                    >
                        <div className={styles.SeccionAreas}>
                            <div className={styles.SubTituloRecuadro}>
                                Materiales y Producción Extras
                            </div>

                            {formData.MaterialesYProduccionExtras.map((extra, index) => (
                                <div
                                    key={index}
                                    className={`${styles.RecuadroPregunta} ${styles.RecuadroGrandeActivo}`}
                                >
                                    <div className={styles.ContenedorHijoPrincipal}>
                                        <div className={styles.TituloRecuadro}>
                                            Extra {index + 1}
                                        </div>
                                    </div>

                                    <div className={styles.ContenedorHijoSecundario}>

                                        <div className={styles.InputTextAreaContenedor}>
                                            {/* 🔹 Descripción */}
                                            <div className={styles.SubTituloRecuadro}>
                                                Descripción
                                            </div>

                                            <textarea
                                                className={styles.InputTextArea}
                                                placeholder="Describe el material o producción extra"
                                                value={extra.Descripcion}
                                                onChange={(e) =>
                                                    actualizarExtra(index, "Descripcion", e.target.value)
                                                }
                                            />
                                        </div>

                                        <div>
                                            {/* 🔹 Precio */}
                                            <div className={styles.SubTituloRecuadro}>
                                                Costo
                                            </div>

                                            <input
                                                type="number"
                                                className={styles.InputTextCantidad}
                                                placeholder="0"
                                                value={extra.Precio}
                                                onChange={(e) =>
                                                    actualizarExtra(index, "Precio", Number(e.target.value))
                                                }
                                                min={0}
                                                step={1}
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            className={styles.BotonEliminar}
                                            onClick={() => eliminarExtra(index)}
                                        >
                                            Eliminar
                                        </button>

                                    </div>
                                </div>
                            ))}

                            <button
                                type="button"
                                className={styles.BotonAgregar}
                                onClick={agregarExtra}
                            >
                                + Agregar extra
                            </button>
                        </div>
                    </div>

                    {/*region RecargoFueraDeHorario*/}
                    <Disclosure defaultOpen={formData.RecargoFueraDelHorario}
                    >
                        {({ open }) => (
                            <div
                                className={`${styles.RecuadroPregunta} ${
                                    open ? styles.RecuadroGrandeActivo : ""
                                }`}
                            >
                                <div className={styles.ContenedorHijoPrincipal}>
                                    <div className={styles.TituloRecuadro}>
                                        Recargo fuera del horario
                                    </div>

                                    <input
                                        type="checkbox"
                                        checked={formData.RecargoFueraDelHorario}
                                        className={styles.InputCheckBox}
                                        name="RecargoFueraDelHorario"
                                        onChange={handleChange}

                                    />
                                </div>

                                {formData.RecargoFueraDelHorario && (
                                    <div>
                                        <div className={styles.SubTituloRecuadro}>
                                           Horas de recargo fuera del horario
                                        </div>
                                        <div
                                            className={`${styles.ContenedorHijoSecundario}`}
                                        >
                                            <Slider.Root
                                                className={styles.SliderRoot}
                                                value={[formData.HorasFueraDelHorario]}
                                                onValueChange={(value) =>
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        HorasFueraDelHorario: value[0]
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
                                                name="HorasFueraDelHorario"
                                                value={formData.HorasFueraDelHorario}
                                                onChange={handleChange}
                                                min={0}
                                                max={10}
                                                step={1}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </Disclosure>
                    {/*endregion*/}


                    <button type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Formulario;