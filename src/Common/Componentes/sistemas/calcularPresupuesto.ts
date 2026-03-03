import type {FormDataType, RegresoDeCotizar} from "./formTypes.ts";
import { PRECIOS } from "./precios.ts";

export function calcularPresupuesto(data: FormDataType): RegresoDeCotizar {
    let total = 0;

    const resultadoCotizacion: RegresoDeCotizar = {
        PrecioBase: 0,
        PrecioConGanancia: 0,
        ListaDeServiciosCotizados: [],
    };
    if(data.SeranRequeridosDirectores){
        total+=data.CuantosDirectoresSeranRequeridos * PRECIOS.Puestos.Director * data.HorasDeTrabajoNecesarias
        resultadoCotizacion.ListaDeServiciosCotizados.push(data.CuantosDirectoresSeranRequeridos.toString()+" Directores");
    }
    if(data.SeranRequeridosJefes){
        total+=data.CuantosJefesSeranRequeridos * PRECIOS.Puestos.Jefe * data.HorasDeTrabajoNecesarias
        resultadoCotizacion.ListaDeServiciosCotizados.push(data.CuantosJefesSeranRequeridos.toString()+" Jefes");
    }
    if(data.SeranRequeridosAnalistas){
        total+=data.CuantosAnalistasSeranRequeridos * PRECIOS.Puestos.Analista * data.HorasDeTrabajoNecesarias
        resultadoCotizacion.ListaDeServiciosCotizados.push(data.CuantosAnalistasSeranRequeridos.toString()+" Analistas");
    }
    if(data.SeranRequeridosPracticantes){
        total+=data.CuantosPracticantesSeranRequeridos * PRECIOS.Puestos.Practicante * data.HorasDeTrabajoNecesarias
        resultadoCotizacion.ListaDeServiciosCotizados.push(data.CuantosPracticantesSeranRequeridos.toString()+" Practicantes");
    }
    if(data.QueAreaSeraNecesaria == "Contenido"){
        if(data.Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion3D){
            total+=data.Contenido.ServiciosDeVideosRequeridos.CantidadMinutosAnimacion3D
                * PRECIOS.ServiciosDeVideosRequeridos.VideoConAnimacion3D

            resultadoCotizacion.ListaDeServiciosCotizados.push("Video con animación 3D");
        }
        if(data.Contenido.ServiciosDeVideosRequeridos.VideoConAnimacion2D){
            total+=data.Contenido.ServiciosDeVideosRequeridos.CantidadMinutosAnimacion2D
                * PRECIOS.ServiciosDeVideosRequeridos.VideoConAnimacion2D
            resultadoCotizacion.ListaDeServiciosCotizados.push("Video con animación 2D");
        }
        if(data.Contenido.ServiciosDeVideosRequeridos.VideoInstitucional){
            total+=PRECIOS.ServiciosDeVideosRequeridos.VideoInstitucional

            resultadoCotizacion.ListaDeServiciosCotizados.push("Video institucional");
        }
        if(data.Contenido.ServiciosDeVideosRequeridos.VideosParaRedesSocialesPorUnidadVendidoEnPaquete){
            total+=data.Contenido.ServiciosDeVideosRequeridos.CantidadDeVideosParaRedesSociales
                * PRECIOS.ServiciosDeVideosRequeridos.VideosParaRedesSocialesPorUnidadVendidoEnPaquete

            resultadoCotizacion.ListaDeServiciosCotizados.push("Paquete de videos para RedesSociales");
        }






        if(data.Contenido.VariablesDeVideosRequeridos.Musicalizacion){
            total+=data.Contenido.VariablesDeVideosRequeridos.CantidadMusicalizacion
                * PRECIOS.VariablesDeVideosRequeridos.Musicalizacion

            resultadoCotizacion.ListaDeServiciosCotizados.push("Musicalizacion");
        }
        if(data.Contenido.VariablesDeVideosRequeridos.SubtituladoMasDe1Minuto){
            total+=PRECIOS.VariablesDeVideosRequeridos.SubtituladoMasDe1Minuto
            resultadoCotizacion.ListaDeServiciosCotizados.push("Subtitulado traduccion mas de 1 minuto");
        }
        if(data.Contenido.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse){
            total+=PRECIOS.VariablesDeVideosRequeridos.SubtituladoTraduccionInhouse
            resultadoCotizacion.ListaDeServiciosCotizados.push("Subtitulado traduccion inhouse");
        }
        if(data.Contenido.VariablesDeVideosRequeridos.LocucionPerio){
            total+=PRECIOS.VariablesDeVideosRequeridos.LocucionPerio
            resultadoCotizacion.ListaDeServiciosCotizados.push("Locucion Perio");
        }
        if(data.Contenido.VariablesDeVideosRequeridos.LocucionMichaelCielo){
            total+=PRECIOS.VariablesDeVideosRequeridos.LocucionMichaelCielo
            resultadoCotizacion.ListaDeServiciosCotizados.push("Locucion Michael Cielo");
        }






        if(data.Contenido.ServiciosDeFotosRequeridos.FotosConDron){
            total+=PRECIOS.ServiciosDeFotosRequeridos.FotosConDron
            resultadoCotizacion.ListaDeServiciosCotizados.push("FotosConDron");
        }
        if(data.Contenido.ServiciosDeFotosRequeridos.TimelapsePrecioPorMes){
            total+=data.Contenido.ServiciosDeFotosRequeridos.CantidadDeMesesTimelapse
                * PRECIOS.ServiciosDeFotosRequeridos.TimelapsePrecioPorMes
            resultadoCotizacion.ListaDeServiciosCotizados.push("TimelapsePrecioPorMes");
        }
        if(data.Contenido.ServiciosDeFotosRequeridos.TimelapseSoftwareParaVerOnline){
            total+=PRECIOS.ServiciosDeFotosRequeridos.TimelapseSoftwareParaVerOnline
            resultadoCotizacion.ListaDeServiciosCotizados.push("Software para ver online timelapse");
        }




        if(data.Contenido.ServiciosDeFotosRequeridos.SesionDeFotos1dia){
            if(data.Contenido.ServiciosDeFotosRequeridos.SesionDeFotos1diaFullDay){
                total+=PRECIOS.ServiciosDeFotosRequeridos.SesionDeFotos1diaFullDay
                resultadoCotizacion.ListaDeServiciosCotizados.push("Sesion de fotos full day");
            }else{
                total+=PRECIOS.ServiciosDeFotosRequeridos.SesionDeFotos1diaMedioDia
                resultadoCotizacion.ListaDeServiciosCotizados.push("Sesion de fotos medio dia");
            }
        }
        if(data.Contenido.ServiciosDeFotosRequeridos.SesionDeFotosEstudio){
            if(data.Contenido.ServiciosDeFotosRequeridos.SesionDeFotosEstudioFullDay){
                total+=PRECIOS.ServiciosDeFotosRequeridos.SesionDeFotosEstudioFullDay
                resultadoCotizacion.ListaDeServiciosCotizados.push("Sesion de fotos Estudio full day");
            }else{
                total+=PRECIOS.ServiciosDeFotosRequeridos.SesionDeFotosEstudioMedioDia
                resultadoCotizacion.ListaDeServiciosCotizados.push("Sesion de fotos Estudio medio dia");
            }
        }



    }
    if(data.QueAreaSeraNecesaria == "Diseño"){
        if(data.ServiciosRequeridosDiseno.BeandingTallerDeMarca){
            total+=PRECIOS.ServiciosRequeridosDiseno.BeandingTallerDeMarca
            resultadoCotizacion.ListaDeServiciosCotizados.push("Beandin taller de marca");


        }
        if(data.ServiciosRequeridosDiseno.Beanding3PropuestasDeRutaVisual){
            total+=PRECIOS.ServiciosRequeridosDiseno.Beanding3PropuestasDeRutaVisual
            resultadoCotizacion.ListaDeServiciosCotizados.push("Beanding propuestas de rutaVisual");
        }
        if(data.ServiciosRequeridosDiseno.BeandingLogotipo){
            total+=PRECIOS.ServiciosRequeridosDiseno.BeandingLogotipo
            resultadoCotizacion.ListaDeServiciosCotizados.push("Beanding Logo tipo");
        }
        if(data.ServiciosRequeridosDiseno.BeandingBrandbook){
            total+=PRECIOS.ServiciosRequeridosDiseno.BeandingBrandbook
            resultadoCotizacion.ListaDeServiciosCotizados.push("Beanding Brandbook");
        }
        if(data.ServiciosRequeridosDiseno.BeandingToolkit){
            total+=PRECIOS.ServiciosRequeridosDiseno.BeandingToolkit
            resultadoCotizacion.ListaDeServiciosCotizados.push("Beanding Toolkit");
        }
        if(data.ServiciosRequeridosDiseno.Infografia){
            total+=PRECIOS.ServiciosRequeridosDiseno.Infografia
            resultadoCotizacion.ListaDeServiciosCotizados.push("Infografia");
        }
        if(data.ServiciosRequeridosDiseno.Catalogo){
            if (data.ServiciosRequeridosDiseno.CatalogoCantidadDePaginas <= 15) {
                total += data.ServiciosRequeridosDiseno.CatalogoCantidadDePaginas * PRECIOS.ServiciosRequeridosDiseno.Catalogo;
                resultadoCotizacion.ListaDeServiciosCotizados.push("Catalogo (menos de 15 paginas)");
            } else {
                total += 15 * PRECIOS.ServiciosRequeridosDiseno.Catalogo;
                total += (data.ServiciosRequeridosDiseno.CatalogoCantidadDePaginas - 15) * PRECIOS.ServiciosRequeridosDiseno.Catalogo_MasDe15Paginas;
                resultadoCotizacion.ListaDeServiciosCotizados.push("Catalogo (mas de 15 paginas)");
            }
        }
        if(data.ServiciosRequeridosDiseno.Guia){
            total+=PRECIOS.ServiciosRequeridosDiseno.Guia
            resultadoCotizacion.ListaDeServiciosCotizados.push("Guia");
        }
        if(data.ServiciosRequeridosDiseno.Manual){
            total+=PRECIOS.ServiciosRequeridosDiseno.Manual
            resultadoCotizacion.ListaDeServiciosCotizados.push("Manual");
        }
        if(data.ServiciosRequeridosDiseno.PlantillaPPT){
            total+=PRECIOS.ServiciosRequeridosDiseno.PlantillaPPT
            resultadoCotizacion.ListaDeServiciosCotizados.push("PlantillaPPT");
        }
        if(data.ServiciosRequeridosDiseno.PresentacionPPT){
            total+=PRECIOS.ServiciosRequeridosDiseno.PresentacionPPT
            resultadoCotizacion.ListaDeServiciosCotizados.push("PresentacionPPT");
        }
        if(data.ServiciosRequeridosDiseno.Flyer){
            total+=PRECIOS.ServiciosRequeridosDiseno.Flyer
            resultadoCotizacion.ListaDeServiciosCotizados.push("Flyer");
        }
        if(data.ServiciosRequeridosDiseno.Folleto){
            total+=PRECIOS.ServiciosRequeridosDiseno.Folleto
            resultadoCotizacion.ListaDeServiciosCotizados.push("Folleto");
        }
        if(data.ServiciosRequeridosDiseno.Poster){
            total+=PRECIOS.ServiciosRequeridosDiseno.Poster
            resultadoCotizacion.ListaDeServiciosCotizados.push("Poster");
        }
        if(data.ServiciosRequeridosDiseno.Reporte){
            total+=data.ServiciosRequeridosDiseno.ReporteCantidadDePaginas * PRECIOS.ServiciosRequeridosDiseno.Reporte
            resultadoCotizacion.ListaDeServiciosCotizados.push("Reporte");
        }


    }
    if(data.QueAreaSeraNecesaria == "Gestión"){
        if(data.ServiciosRequeridosGestion.ManejoDeRedes){
            total+= PRECIOS.ServiciosRequeridosGestion.ManejoDeRedes
            resultadoCotizacion.ListaDeServiciosCotizados.push("Manejo de redes");
        }
        if(data.ServiciosRequeridosGestion.MapeoDeStakeholders){
            total+= PRECIOS.ServiciosRequeridosGestion.MapeoDeStakeholders
            resultadoCotizacion.ListaDeServiciosCotizados.push("Mapeo de stakeholders");
        }
        if(data.ServiciosRequeridosGestion.GestionDeCrisis){
            total+= PRECIOS.ServiciosRequeridosGestion.GestionDeCrisis
            resultadoCotizacion.ListaDeServiciosCotizados.push("Gestion de crisis");
        }
        if(data.ServiciosRequeridosGestion.MediaTraining){
            total+= PRECIOS.ServiciosRequeridosGestion.MediaTraining
            resultadoCotizacion.ListaDeServiciosCotizados.push("Media training");
        }
        if(data.ServiciosRequeridosGestion.Talleres){
            total+= PRECIOS.ServiciosRequeridosGestion.Talleres
            resultadoCotizacion.ListaDeServiciosCotizados.push("Talleres");
        }
    }


    resultadoCotizacion.PrecioBase=total

    total+= total * PRECIOS.MargenDeGanancia

    resultadoCotizacion.PrecioConGanancia=total




    return resultadoCotizacion;
}