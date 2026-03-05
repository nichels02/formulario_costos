import type {FormDataType, RegresoDeCotizar} from "./formTypes.ts";
import { PRECIOS } from "./precios.ts";

export function calcularPresupuesto(data: FormDataType): RegresoDeCotizar {
    let total = 0;

    const resultadoCotizacion: RegresoDeCotizar = {
        PrecioTrabajadores: 0,
        PrecioServicios: 0,
        PrecioExtras: 0,
        PrecioBase: 0,
        PrecioConGanancia: 0,
        ListaDeServiciosCotizados: [],
        ListaDeTrabajadoresCotizados: [],
    };
    if(data.SeranRequeridosDirectores){
        total+=data.CuantosDirectoresSeranRequeridos * PRECIOS.Puestos.Director * data.HorasDeTrabajoNecesarias
        resultadoCotizacion.ListaDeTrabajadoresCotizados.push(data.CuantosDirectoresSeranRequeridos.toString()+" Directores");
        resultadoCotizacion.PrecioTrabajadores+=data.CuantosDirectoresSeranRequeridos * PRECIOS.Puestos.Director * data.HorasDeTrabajoNecesarias
    }
    if(data.SeranRequeridosJefes){
        total+=data.CuantosJefesSeranRequeridos * PRECIOS.Puestos.Jefe * data.HorasDeTrabajoNecesarias
        resultadoCotizacion.ListaDeTrabajadoresCotizados.push(data.CuantosJefesSeranRequeridos.toString()+" Jefes");
        resultadoCotizacion.PrecioTrabajadores+=data.CuantosJefesSeranRequeridos * PRECIOS.Puestos.Jefe * data.HorasDeTrabajoNecesarias
    }
    if(data.SeranRequeridosAnalistas){
        total+=data.CuantosAnalistasSeranRequeridos * PRECIOS.Puestos.Analista * data.HorasDeTrabajoNecesarias
        resultadoCotizacion.ListaDeTrabajadoresCotizados.push(data.CuantosAnalistasSeranRequeridos.toString()+" Analistas");
        resultadoCotizacion.PrecioTrabajadores+=data.CuantosAnalistasSeranRequeridos * PRECIOS.Puestos.Analista * data.HorasDeTrabajoNecesarias
    }
    if(data.SeranRequeridosPracticantes){
        total+=data.CuantosPracticantesSeranRequeridos * PRECIOS.Puestos.Practicante * data.HorasDeTrabajoNecesarias
        resultadoCotizacion.ListaDeTrabajadoresCotizados.push(data.CuantosPracticantesSeranRequeridos.toString()+" Practicantes");
        resultadoCotizacion.PrecioTrabajadores+=data.CuantosPracticantesSeranRequeridos * PRECIOS.Puestos.Practicante * data.HorasDeTrabajoNecesarias
    }

    //PrecioExtras



    if(data.QueAreaSeraNecesaria == "Contenido"){
        if(data.Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion3D){
            total+=data.Contenido.ServiciosDeVideosRequeridos.CantidadMinutosAnimacion3D
                * PRECIOS.ServiciosDeVideosRequeridos.VideoConAnimacion3D

            resultadoCotizacion.ListaDeServiciosCotizados.push("Video con animación 3D");
            resultadoCotizacion.PrecioServicios+=data.Contenido.ServiciosDeVideosRequeridos.CantidadMinutosAnimacion3D
                * PRECIOS.ServiciosDeVideosRequeridos.VideoConAnimacion3D
        }
        if(data.Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion2D){
            total+=data.Contenido.ServiciosDeVideosRequeridos.CantidadMinutosAnimacion2D
                * PRECIOS.ServiciosDeVideosRequeridos.VideoConAnimacion2D

            resultadoCotizacion.ListaDeServiciosCotizados.push("Video con animación 2D");
            resultadoCotizacion.PrecioServicios+=data.Contenido.ServiciosDeVideosRequeridos.CantidadMinutosAnimacion2D
                * PRECIOS.ServiciosDeVideosRequeridos.VideoConAnimacion2D
        }
        if(data.Contenido.ServiciosDeVideosRequeridos.VideoInstitucional){
            total+=PRECIOS.ServiciosDeVideosRequeridos.VideoInstitucional

            resultadoCotizacion.ListaDeServiciosCotizados.push("Video institucional");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosDeVideosRequeridos.VideoInstitucional
        }
        if(data.Contenido.ServiciosDeVideosRequeridos.VideosParaRedesSocialesPorUnidadVendidoEnPaquete){
            total+=data.Contenido.ServiciosDeVideosRequeridos.CantidadDeVideosParaRedesSociales
                * PRECIOS.ServiciosDeVideosRequeridos.VideosParaRedesSocialesPorUnidadVendidoEnPaquete

            resultadoCotizacion.ListaDeServiciosCotizados.push("Paquete de videos para RedesSociales");
            resultadoCotizacion.PrecioServicios+=data.Contenido.ServiciosDeVideosRequeridos.CantidadDeVideosParaRedesSociales
                * PRECIOS.ServiciosDeVideosRequeridos.VideosParaRedesSocialesPorUnidadVendidoEnPaquete
        }






        if(data.Contenido.VariablesDeVideosRequeridos.Musicalizacion){
            total+=data.Contenido.VariablesDeVideosRequeridos.CantidadMusicalizacion
                * PRECIOS.VariablesDeVideosRequeridos.Musicalizacion

            resultadoCotizacion.ListaDeServiciosCotizados.push("Musicalizacion");
            resultadoCotizacion.PrecioServicios+=data.Contenido.VariablesDeVideosRequeridos.CantidadMusicalizacion
                * PRECIOS.VariablesDeVideosRequeridos.Musicalizacion
        }
        if(data.Contenido.VariablesDeVideosRequeridos.SubtituladoMasDe1Minuto){
            total+=PRECIOS.VariablesDeVideosRequeridos.SubtituladoMasDe1Minuto
            resultadoCotizacion.ListaDeServiciosCotizados.push("Subtitulado traduccion mas de 1 minuto");
            resultadoCotizacion.PrecioServicios+=PRECIOS.VariablesDeVideosRequeridos.SubtituladoMasDe1Minuto
        }
        if(data.Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse){
            total+=PRECIOS.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse
            resultadoCotizacion.ListaDeServiciosCotizados.push("Subtitulado traduccion inhouse");
            resultadoCotizacion.PrecioServicios+=PRECIOS.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse
        }
        if(data.Contenido.VariablesDeVideosRequeridos.LocucionPerio){
            total+=PRECIOS.VariablesDeVideosRequeridos.LocucionPerio
            resultadoCotizacion.ListaDeServiciosCotizados.push("Locucion Perio");
            resultadoCotizacion.PrecioServicios+=PRECIOS.VariablesDeVideosRequeridos.LocucionPerio
        }
        if(data.Contenido.VariablesDeVideosRequeridos.LocucionMichaelCielo){
            total+=PRECIOS.VariablesDeVideosRequeridos.LocucionMichaelCielo
            resultadoCotizacion.ListaDeServiciosCotizados.push("Locucion Michael Cielo");
            resultadoCotizacion.PrecioServicios+=PRECIOS.VariablesDeVideosRequeridos.LocucionMichaelCielo
        }






        if(data.Contenido.ServiciosDeFotosRequeridos.FotosConDron){
            total+=PRECIOS.ServiciosDeFotosRequeridos.FotosConDron
            resultadoCotizacion.ListaDeServiciosCotizados.push("FotosConDron");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosDeFotosRequeridos.FotosConDron
        }
        if(data.Contenido.ServiciosDeFotosRequeridos.TimelapsePrecioPorMes){
            total+=data.Contenido.ServiciosDeFotosRequeridos.CantidadDeMesesTimelapse
                * PRECIOS.ServiciosDeFotosRequeridos.TimelapsePrecioPorMes
            resultadoCotizacion.ListaDeServiciosCotizados.push("TimelapsePrecioPorMes");
            resultadoCotizacion.PrecioServicios+=data.Contenido.ServiciosDeFotosRequeridos.CantidadDeMesesTimelapse
                * PRECIOS.ServiciosDeFotosRequeridos.TimelapsePrecioPorMes
        }
        if(data.Contenido.ServiciosDeFotosRequeridos.TimelapseSoftwareParaVerOnline){
            total+=PRECIOS.ServiciosDeFotosRequeridos.TimelapseSoftwareParaVerOnline
            resultadoCotizacion.ListaDeServiciosCotizados.push("Software para ver online timelapse");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosDeFotosRequeridos.TimelapseSoftwareParaVerOnline
        }




        if(data.Contenido.ServiciosDeFotosRequeridos.SesionDeFotos1dia){
            if(data.Contenido.ServiciosDeFotosRequeridos.SesionDeFotos1diaFullDay){
                total+=PRECIOS.ServiciosDeFotosRequeridos.SesionDeFotos1diaFullDay
                resultadoCotizacion.ListaDeServiciosCotizados.push("Sesion de fotos full day");
                resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosDeFotosRequeridos.SesionDeFotos1diaFullDay
            }else{
                total+=PRECIOS.ServiciosDeFotosRequeridos.SesionDeFotos1diaMedioDia
                resultadoCotizacion.ListaDeServiciosCotizados.push("Sesion de fotos medio dia");
                resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosDeFotosRequeridos.SesionDeFotos1diaMedioDia
            }
        }
        if(data.Contenido.ServiciosDeFotosRequeridos.SesionDeFotosEstudio){
            if(data.Contenido.ServiciosDeFotosRequeridos.SesionDeFotosEstudioFullDay){
                total+=PRECIOS.ServiciosDeFotosRequeridos.SesionDeFotosEstudioFullDay
                resultadoCotizacion.ListaDeServiciosCotizados.push("Sesion de fotos Estudio full day");
                resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosDeFotosRequeridos.SesionDeFotosEstudioFullDay
            }else{
                total+=PRECIOS.ServiciosDeFotosRequeridos.SesionDeFotosEstudioMedioDia
                resultadoCotizacion.ListaDeServiciosCotizados.push("Sesion de fotos Estudio medio dia");
                resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosDeFotosRequeridos.SesionDeFotosEstudioMedioDia
            }
        }



    }
    if(data.QueAreaSeraNecesaria == "Diseño"){
        if(data.ServiciosRequeridosDiseno.BeandingTallerDeMarca){
            total+=PRECIOS.ServiciosRequeridosDiseno.BeandingTallerDeMarca
            resultadoCotizacion.ListaDeServiciosCotizados.push("Beandin taller de marca");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosDiseno.BeandingTallerDeMarca
        }
        if(data.ServiciosRequeridosDiseno.Beanding3PropuestasDeRutaVisual){
            total+=PRECIOS.ServiciosRequeridosDiseno.Beanding3PropuestasDeRutaVisual
            resultadoCotizacion.ListaDeServiciosCotizados.push("Beanding propuestas de rutaVisual");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosDiseno.Beanding3PropuestasDeRutaVisual
        }
        if(data.ServiciosRequeridosDiseno.BeandingLogotipo){
            total+=PRECIOS.ServiciosRequeridosDiseno.BeandingLogotipo
            resultadoCotizacion.ListaDeServiciosCotizados.push("Beanding Logo tipo");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosDiseno.BeandingLogotipo
        }
        if(data.ServiciosRequeridosDiseno.BeandingBrandbook){
            total+=PRECIOS.ServiciosRequeridosDiseno.BeandingBrandbook
            resultadoCotizacion.ListaDeServiciosCotizados.push("Beanding Brandbook");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosDiseno.BeandingBrandbook
        }
        if(data.ServiciosRequeridosDiseno.BeandingToolkit){
            total+=PRECIOS.ServiciosRequeridosDiseno.BeandingToolkit
            resultadoCotizacion.ListaDeServiciosCotizados.push("Beanding Toolkit");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosDiseno.BeandingToolkit
        }
        if(data.ServiciosRequeridosDiseno.Infografia){
            total+=PRECIOS.ServiciosRequeridosDiseno.Infografia
            resultadoCotizacion.ListaDeServiciosCotizados.push("Infografia");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosDiseno.Infografia
        }
        if(data.ServiciosRequeridosDiseno.Catalogo){
            if (data.ServiciosRequeridosDiseno.CatalogoCantidadDePaginas <= 15) {
                total += data.ServiciosRequeridosDiseno.CatalogoCantidadDePaginas *
                    PRECIOS.ServiciosRequeridosDiseno.Catalogo;
                resultadoCotizacion.ListaDeServiciosCotizados.push("Catalogo (menos de 15 paginas)");
                resultadoCotizacion.PrecioServicios+=data.ServiciosRequeridosDiseno.CatalogoCantidadDePaginas *
                    PRECIOS.ServiciosRequeridosDiseno.Catalogo;
            } else {
                total += 15 * PRECIOS.ServiciosRequeridosDiseno.Catalogo;
                total += (data.ServiciosRequeridosDiseno.CatalogoCantidadDePaginas - 15) *
                    PRECIOS.ServiciosRequeridosDiseno.Catalogo_MasDe15Paginas;
                resultadoCotizacion.ListaDeServiciosCotizados.push("Catalogo (mas de 15 paginas)");

                resultadoCotizacion.PrecioServicios += 15 * PRECIOS.ServiciosRequeridosDiseno.Catalogo;
                resultadoCotizacion.PrecioServicios += (data.ServiciosRequeridosDiseno.CatalogoCantidadDePaginas - 15) *
                    PRECIOS.ServiciosRequeridosDiseno.Catalogo_MasDe15Paginas;
            }
        }
        if(data.ServiciosRequeridosDiseno.Guia){
            total+=PRECIOS.ServiciosRequeridosDiseno.Guia
            resultadoCotizacion.ListaDeServiciosCotizados.push("Guia");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosDiseno.Guia
        }
        if(data.ServiciosRequeridosDiseno.Manual){
            total+=PRECIOS.ServiciosRequeridosDiseno.Manual
            resultadoCotizacion.ListaDeServiciosCotizados.push("Manual");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosDiseno.Manual
        }
        if(data.ServiciosRequeridosDiseno.PlantillaPPT){
            total+=PRECIOS.ServiciosRequeridosDiseno.PlantillaPPT
            resultadoCotizacion.ListaDeServiciosCotizados.push("PlantillaPPT");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosDiseno.PlantillaPPT
        }
        if(data.ServiciosRequeridosDiseno.PresentacionPPT){
            total+=PRECIOS.ServiciosRequeridosDiseno.PresentacionPPT
            resultadoCotizacion.ListaDeServiciosCotizados.push("PresentacionPPT");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosDiseno.PresentacionPPT
        }
        if(data.ServiciosRequeridosDiseno.Flyer){
            total+=PRECIOS.ServiciosRequeridosDiseno.Flyer
            resultadoCotizacion.ListaDeServiciosCotizados.push("Flyer");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosDiseno.Flyer
        }
        if(data.ServiciosRequeridosDiseno.Folleto){
            total+=PRECIOS.ServiciosRequeridosDiseno.Folleto
            resultadoCotizacion.ListaDeServiciosCotizados.push("Folleto");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosDiseno.Folleto
        }
        if(data.ServiciosRequeridosDiseno.Poster){
            total+=PRECIOS.ServiciosRequeridosDiseno.Poster
            resultadoCotizacion.ListaDeServiciosCotizados.push("Poster");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosDiseno.Poster
        }
        if(data.ServiciosRequeridosDiseno.Reporte){
            total+=data.ServiciosRequeridosDiseno.ReporteCantidadDePaginas *
                PRECIOS.ServiciosRequeridosDiseno.Reporte
            resultadoCotizacion.ListaDeServiciosCotizados.push("Reporte");
            resultadoCotizacion.PrecioServicios+=data.ServiciosRequeridosDiseno.ReporteCantidadDePaginas *
                PRECIOS.ServiciosRequeridosDiseno.Reporte
        }


    }
    if(data.QueAreaSeraNecesaria == "Gestión"){
        if(data.ServiciosRequeridosGestion.ManejoDeRedes){
            total+= PRECIOS.ServiciosRequeridosGestion.ManejoDeRedes
            resultadoCotizacion.ListaDeServiciosCotizados.push("Manejo de redes");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosGestion.ManejoDeRedes
        }
        if(data.ServiciosRequeridosGestion.MapeoDeStakeholders){
            total+= PRECIOS.ServiciosRequeridosGestion.MapeoDeStakeholders
            resultadoCotizacion.ListaDeServiciosCotizados.push("Mapeo de stakeholders");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosGestion.MapeoDeStakeholders
        }
        if(data.ServiciosRequeridosGestion.GestionDeCrisis){
            total+= PRECIOS.ServiciosRequeridosGestion.GestionDeCrisis
            resultadoCotizacion.ListaDeServiciosCotizados.push("Gestion de crisis");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosGestion.GestionDeCrisis
        }
        if(data.ServiciosRequeridosGestion.MediaTraining){
            total+= PRECIOS.ServiciosRequeridosGestion.MediaTraining
            resultadoCotizacion.ListaDeServiciosCotizados.push("Media training");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosGestion.MediaTraining
        }
        if(data.ServiciosRequeridosGestion.Talleres){
            total+= PRECIOS.ServiciosRequeridosGestion.Talleres
            resultadoCotizacion.ListaDeServiciosCotizados.push("Talleres");
            resultadoCotizacion.PrecioServicios+=PRECIOS.ServiciosRequeridosGestion.Talleres
        }
    }


    for (const extra of data.MaterialesYProduccionExtras) {
        resultadoCotizacion.PrecioExtras += extra.Precio;
    }



    resultadoCotizacion.PrecioBase=total+resultadoCotizacion.PrecioExtras

    total+= resultadoCotizacion.PrecioBase * PRECIOS.MargenDeGanancia

    resultadoCotizacion.PrecioConGanancia=total




    return resultadoCotizacion;
}