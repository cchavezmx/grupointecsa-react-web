// LOGO DE EMPRESA ESTE VA CAMBIANDO SEGUN EL BOTON QUE SE OPRIMA
import logoIta from '../assets/img/italogo.svg'
import logoIndus from '../assets/img/logoIndustrial.svg'
import logoCanaliza from '../assets/img/logoCanaliza.svg'
import logoEguel from '../assets/img/logoEguel.svg'

import logo from '../assets/img/italogo.svg'

const dataEmpresas = {
    ita : {
        titulo: 'Soluciónes Integrales',
        contenido: "Instalaciones Tecnológicas Aplicadas S. A. de C. V.  parte de GRUPO INTECSA: es una empresa dedicada a la instalación, planeación, construcción y mantenimiento de Centros Comerciales y Tiendas Departamentales especializada en proyectos electromecánicos cuyos servicios se extienden a todo el mercado nacional.",
        logo: logo,
    },
    indus: {
        titulo: 'Industrial Connect',
        contenido: "Asesoría profesional y respaldo necesario para cubrir sus necesidades en materia de seguridad y equipo contra incendio, todos nuestros productos están elaborados bajo los más estrictos estándares de calidad, siempre rigiéndonos por las Normas Oficiales Mexicanas y controles de calidad internacionales.",
        logo: logoIndus,
    },
    canaliza : {
        titulo: 'Canalizacion y Soporteria',
        contenido: "Nos dedicamos a la transformación de la materia prima, destinándola a diferentes áreas de producción eléctrica. Entre nuestros productos están: Acometidas a ducto, brakets, caja pos, chicote flexible, coples para ducto, derivación T, registros, tapas, zapatas, marco nivelador, kit de mastil, punta y retenida de pararrayos, etcétera.",
        logo: logoCanaliza,
    },
    eguel : {
        titulo: 'Renta',
        contenido: "Flotilla de transportes, provisionales eléctricos, andamiaje, bienes raices y plantas de energía.",
        logo: logoEguel,
    },
    tecnica: {
        titulo: 'Servicios',
        contenido: 'Instalaciónes eléctricas en industrias y comercios. Dotamos de energía eléctrica a edificios, instalaciones, lugares públicos, infraestructuras, etc. Incluimos los equipos necesarios para asegurar su correcto funcionamiento y la conexión con los aparatos eléctricos correspondientes.',
        logo: logo,
    },
    padnet: {
        titulo: 'Sistema modular, integral de soportería y fijación.',
        contenido: "Su diseño reticular, modular y escalable brinda una gran flexibilidad  a la soportería y fijación de numerosas instalaciones así como la del plafón. Sus ventajas son",
        listas: {
            1: "Realiza el montaje de las instalaciones a diferentes alturas.",
            2: "Disminución considerable de andamios.",
            3: "Mayor rendimiento de mano de obra.",
            4: "Disminuye considerablemente las perforaciones para la soportería en losa.",
            5: "Disminución de tiempo de ejecución.",
            6: "Acabado en cualquier color de pintura.",
            7: "Solución con menor costo total.",
            8: "30% de reducción en tiempo de instalación de la soportería individual o por disciplina.",
            9: "30 % de reducción en costo de materiales en muchas aplicaciones.",
            10: "Con Tan solo 7 Kg/m2, soporta hasta 70 Kg/m2",
            11: "Permite que las instalaciones tengan el órden que requiere las especificaciones de nuestros clientes.",
        },
        logo: logo,
    }
}

export default dataEmpresas