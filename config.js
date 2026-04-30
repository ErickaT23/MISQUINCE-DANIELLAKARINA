const config = {
    event: {
        defaultEventId: "misxv-daniella-mazariegos-2026",
        eventIdParam: "eventId",
        legacyFallback: {
            read: false,
            write: false,
            subscribe: false
        }
    },

    admin: {
        adminKey: "twodesign123",
        keyParam: "key",
        legacyKeyParam: "admin"
    },

    seo: {
        titulo: "Daniella Mazariegos | Mis XV 2026",
        descripcion: "Acompáñanos a celebrar los XV años de Daniella Mazariegos este 23 de mayo de 2026",
        keywords: "Daniella Mazariegos, Mis XV, XV años, invitación digital, 23 de mayo 2026",
        autor: "Two Design"
    },

    pareja: {
        nombres: "Daniella Mazariegos",
        fecha: "23-05-2026",
        fechaVisible: "23.05.2026"
    },

    musica: {
        titulo: "Nuestra Canción",
        archivo: "audio/nuestra-cancion.mp3"
    },

    evento: {
        ceremonia: {
            titulo: "Ceremonia",
            lugar: "Parroquia Inmaculada Concepción",
            hora: "5:00 pm",
            direccion: "2a avenida 7-32, zona 10, Ciudad de Guatemala",
            ubicacionUrl: "https://maps.app.goo.gl/wqQdZjpZ34TdazcPA",
            wazeUrl: "https://ul.waze.com/ul?venue_id=176619666.1766131125.8273574&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
        },
        recepcion: {
            titulo: "Recepción",
            lugar: "Hotel Vista Quince",
            hora: "7:00 pm",
            direccion: "2.ª calle 20-23 zona 15, Vista Hermosa 1, Ciudad de Guatemala",
            ubicacionUrl: "http://google.com/maps/place/Hotel+Vista+Quince/@14.609642,-90.5229128,14.64z/data=!4m6!3m5!1s0x8589a36f5fbd2971:0x809c494486c6e58f!8m2!3d14.5897539!4d-90.4906679!16s%2Fg%2F11j7vs71gn!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
            wazeUrl: "https://ul.waze.com/ul?venue_id=176619666.1766262195.21589910&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
        }
    },

    textos: {
        mensajeInvitado: "Eres muy especial para nosotros",
        mensajePases: "Hemos reservado para ti {pases} lugares especiales"
    },

    footer: {
        hashtag: "#MisXVDaniella",
        instagramUrl: "https://instagram.com/rocio.fernando.boda",
        facebookUrl: "https://facebook.com/rociofernandoboda",
        marcaTexto: "Diseno",
        marcaNombre: "Two Design",
        marcaUrl: "https://twodesign.com"
    }
};

window.config = config;
