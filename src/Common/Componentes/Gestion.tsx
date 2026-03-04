import * as Slider from "@radix-ui/react-slider";
import styles from "../Css/Formulario.module.css";
import type {FormDataType} from "./sistemas/formTypes.ts"; // ajusta esto

type Props = {
    formData: FormDataType;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

export default function Gestion({
                                               formData,
                                               setFormData
                                           }: Props) {

    return (
        <>
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
        </>
    );
}