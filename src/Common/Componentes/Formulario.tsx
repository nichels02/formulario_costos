import { Disclosure } from "@headlessui/react";
import * as Slider from '@radix-ui/react-slider'
import type { FormDataType, CosasExtra } from "./sistemas/formTypes.ts";

import { useState, useEffect } from "react";
import styles from "../css/Formulario.module.css";
import Integrantes from "./Integrantes.tsx";
import Contenido1 from "./Contenido1.tsx";
import Diseno from "./Diseno.tsx";
import Gestion from "./Gestion.tsx";


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

                    {/*region integrantes*/}
                    <Integrantes
                        formData={formData}
                        setFormData={setFormData}
                        handleChange={handleChange}
                    />
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

                        <Contenido1
                            formData={formData}
                            setFormData={setFormData}
                        />

                        <Diseno
                            formData={formData}
                            setFormData={setFormData}
                        />

                        <Gestion
                            formData={formData}
                            setFormData={setFormData}
                        />


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


                    {/*region Materiales y Producción Extras*/}
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
                    {/*endregion*/}


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