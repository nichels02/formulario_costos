export type CosasExtra = {
    Descripcion: string;
    Precio: number;
}
export type Areas =
    | ""
    | "Contenido"
    | "Diseño"
    | "Gestión";
export  type FormDataType = {
    nombreDeProyecto: string;

    //region integrantes
    SeranRequeridosDirectores: boolean;
    CuantosDirectoresSeranRequeridos: number;

    SeranRequeridosJefes: boolean;
    CuantosJefesSeranRequeridos: number;

    SeranRequeridosAnalistas: boolean;
    CuantosAnalistasSeranRequeridos: number;

    SeranRequeridosPracticantes: boolean;
    CuantosPracticantesSeranRequeridos: number;
    //endregion

    HorasDeTrabajoNecesarias: number;

    QueAreaSeraNecesaria:Areas;

    //region Contenido video
    Contenido: {
        ServiciosDeVideosRequeridos: {
            VideoConAnimacion3D: boolean;
            CantidadMinutosAnimacion3D: number;
            VideoConAnimacion2D: boolean;
            CantidadMinutosAnimacion2D: number;
            VideoInstitucional: boolean;
            VideoDocumental: boolean;
            VideosParaRedesSocialesPorUnidadVendidoEnPaquete: boolean;
            CantidadDeVideosParaRedesSociales: number;
            VideoDron: boolean;
        },
        VariablesDeVideosRequeridos: {
            VideoDron: boolean;
            Musicalizacion: boolean;
            CantidadMusicalizacion: number;
            TieneSubtitulado: boolean;
            SubtituladoMasDe1Minuto: boolean;
            SubtituladoTraduccionInhouse: boolean;
            SubtituladoTraduccion: boolean;
            TieneLocucion: boolean;
            LocucionInhouse: boolean;
            LocucionPerio: boolean;
            LocucionMichaelCielo: boolean;
            Registro: boolean;
        },
        ServiciosDeFotosRequeridos: {
            FotosConDron: boolean;

            TimelapsePrecioPorMes: boolean;
            CantidadDeMesesTimelapse: number;
            TimelapseSoftwareParaVerOnline: boolean;
            TimelapseEntregableFinal: boolean;

            SesionDeFotos1dia: boolean;
            SesionDeFotos1diaFullDay:boolean;

            SesionDeFotosEstudio: boolean;
            SesionDeFotosEstudioFullDay: boolean;

        },
        VariablesDeFotosRequeridos: {

            SesionDeFotos1DiaExterior: boolean;
            SesionDeFotos1DiaRetrato: boolean;
            SesionDeFotos1DiaPosada: boolean;
            SesionDeFotos1DiaEvento: boolean;
            SesionDeFotos1DiaOperacion: boolean;
            SesionDeFotos1DiaEdicion: boolean;
            SesionDeFotos1DiaRetoques: boolean;
            SesionDeFotosEstudioBacking_fondo: boolean;
            SesionDeFotosEstudioRetrato: boolean;
            SesionDeFotosEstudioPosada: boolean;
            SesionDeFotosEstudioOperaciones: boolean;
            SesionDeFotosEstudioEdicion: boolean;
            SesionDeFotosEstudioRetoque: boolean;
        },

    },
    //endregion

    //region Diseño
    ServiciosRequeridosDiseno: {
        Beanding:boolean;

        BeandingTallerDeMarca:boolean;
        Beanding3PropuestasDeRutaVisual:boolean;
        BeandingLogotipo:boolean;
        BeandingBrandbook:boolean;
        BeandingToolkit:boolean;

        Infografia:boolean;

        Catalogo:boolean;
        CatalogoCantidadDePaginas:number;

        Guia:boolean;
        Manual:boolean;
        PlantillaPPT:boolean;
        PresentacionPPT:boolean;
        Flyer:boolean;
        Folleto:boolean;
        Poster:boolean;
        Merchandising:boolean;

        Reporte:boolean;
        ReporteCantidadDePaginas:number;
    },
    //endregion

    //region Gestion
    ServiciosRequeridosGestion: {
        Asesoria:boolean;
        ManejoDeRedes:boolean;
        CantidadDeMesesManejoDeRedes: number,
        MapeoDeStakeholders:boolean;
        EstudiosCualitativosYCuantitativos:boolean;
        EstrategiaDeComunicacion:boolean;
        CampanasCreativas:boolean;
        GestionDeCrisis:boolean;
        RelacionDePrensaYGestionDeMedios:boolean;
        MediaTraining:boolean;
        Talleres:boolean;
        GestionYProduccionDeEventos:boolean;
        Activaciones:boolean;
    },


    //endregion

    //region transporte
    RequiereTransporte:boolean;
    CuantoCostoElTransporte:number;
    //endregion

    //region Alimentacion
    RequiereAlimentacion:boolean;
    AlimentoParaCuantosDias:number;
    CostoDeAlimentoPorPersonaDeUnDia:number;
    //endregion

    PrecioBase:number;
    PrecioBaseDeServicios:number;
    ListaDeSeviciosSinPrecio:string[];
    MaterialesYProduccionExtras:CosasExtra[];
    valorServiciosSinValorDichoAun:string;
    RecargoFueraDelHorario:boolean;
    HorasFueraDelHorario:number;
}

export type RegresoDeCotizar = {
    PrecioBase: number;
    PrecioConGanancia: number;
    ListaDeServiciosCotizados: string[];
}

