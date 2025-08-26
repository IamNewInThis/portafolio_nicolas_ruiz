import { useParams } from 'react-router-dom';

const projectDetails = {
    "web": {
        "next_commerce": {
            title: "Ecommerce Next",
            description: "Una tienda web desarrollada con Next.js, MongoDB y S3, con autenticación Google y administración de bodega para productos, categorías y marcas.",
            videoUrl:"https://player.vimeo.com/video/1040060544?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479",
            technologies: [
                { name: "Next.js", imageUrl: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
                { name: "MongoDB", imageUrl: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },

            ],
            links: {
                github: "https://github.com/IamNewInThis/Ecommerce-Next-Cliente",
            },
        },
        "redux_crud": {
            title: "CRUD con Redux",
            description: "Este proyecto es un CRUD de gestión de tareas, utilizando Redux como gestor de estado. La aplicación usuarios agregar tareas, editarlas o eliminarlas.",
            videoUrl: "https://player.vimeo.com/video/1040065233?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479",
            technologies: [
                { name: "React", imageUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
                { name: "Redux", imageUrl: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" },
            ],
            links: {
                github: "https://github.com/IamNewInThis/react-redux-task",
            },
        },
        "angular_login": {
            title: "Login con Angular y Supabase",
            description: "Task Manager es una aplicación desarrollada con Angular y Supabase para organizar y gestionar tareas de manera eficiente. Actualmente, cuenta con una funcionalidad de inicio de sesión totalmente operativa, que permite a los usuarios autenticarse de forma segura utilizando Supabase como backend y Angular para la interfaz de usuario",
            videoUrl: "https://player.vimeo.com/video/1040068868?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479",
            technologies: [
                { name: "Angular", imageUrl: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
                { name: "Supabase", imageUrl: "https://styles.redditmedia.com/t5_47da3l/styles/communityIcon_8wbqkp0rozjd1.jpg?format=pjpg&s=70862eec9c29aa0c25f2a6b9e708698dd03474e5" },
            ],
            links: {
                github: "https://github.com/IamNewInThis/task_manager",
            },
        },
        "spotify_convert": {
            title: "Spotify Convert",
            description: "Spotify Convert es una aplicación web que automatiza la creación de playlists en YouTube basadas en playlists de Spotify, eliminando la necesidad de buscar y transferir canciones manualmente.",
            videoUrl: "https://player.vimeo.com/video/1066336522?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479",
            technologies: [
                { name: "React", imageUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
                { name: "Spotify API", imageUrl: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg" },
                { name: "Google API", imageUrl: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
            ],
            links: {
                host: "https://spotify-convert.vercel.app/"
            },
        },
        "nextjs_chat": {
            title: "NextJS Chat",
            description: "NextJS Chat es una aplicación de chat en tiempo real desarrollada con Next.js y Supabase, permitiendo a los usuarios comunicarse instantáneamente en chats privados",
            videoUrl: "",
            technologies: [
                { name: "Next.js", imageUrl: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
                { name: "Supabase", imageUrl: "https://styles.redditmedia.com/t5_47da3l/styles/communityIcon_8wbqkp0rozjd1.jpg?format=pjpg&s=70862eec9c29aa0c25f2a6b9e708698dd03474e5" },
                { name: "Tailwind CSS", imageUrl: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },  
            ],
            links: {
                github: "https://github.com/IamNewInThis/Next-Chat-Copilot",
                host: "https://next-chat-copilot.vercel.app/"
            },
        },
    },
    erp:{
        toolhaus: {
            title: "ToolHaus",
            description:"El módulo Toolhaus permite gestionar el préstamo de herramientas, permitiendo a los usuarios realizar solicitudes, reservar, devolver y enviar herramientas a mantenimiento. Incluye control de obras, usuarios solicitantes y estados de las herramientas.",
            videoUrl:"https://player.vimeo.com/video/1040077992?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479",
            technologies: [
                { name: "Python", imageUrl: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
                { name: "XML", imageUrl: "https://cdn.worldvectorlogo.com/logos/xml-2.svg" },
                { name: "Odoo", imageUrl: "https://cdn.worldvectorlogo.com/logos/odoo.svg" },
            ],
        },
        purchase_solicitudes: {
            title: "Purchase Solicitudes",
            description: "Módulo de Odoo que extiende el flujo de compras para permitir que cualquier usuario cree solicitudes de materiales o servicios, gestionando un control externo a las requisiciones estándar y facilitando la trazabilidad de las solicitudes.",
            videoUrl: "",
            technologies: [
                { name: "Odoo", imageUrl: "https://cdn.worldvectorlogo.com/logos/odoo.svg" },
                { name: "Python", imageUrl: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
                { name: "XML", imageUrl: "https://cdn.worldvectorlogo.com/logos/xml-2.svg" },
            ],
            links: {
                // Puedes agregar enlaces aquí si los tienes en el futuro
            },
        },
        sii_comparacion_factura: {
            title: "SII Comparación factura",
            description: "Submódulo para contabilidad que agrega un menú donde se pueden subir archivos CSV descargados del SII. Cuando se procesan estos archivos, el sistema indica cuáles facturas faltan por ingresar al sistema.",
            videoUrl: "https://player.vimeo.com/video/1098370366?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479",
            technologies: [
                { name: "Odoo", imageUrl: "https://cdn.worldvectorlogo.com/logos/odoo.svg" },
                { name: "Python", imageUrl: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
                { name: "XML", imageUrl: "https://cdn.worldvectorlogo.com/logos/xml-2.svg" },
            ],
            links: {
                // Puedes agregar enlaces aquí si los tienes en el futuro
            },
        },
        nomina_chilena: {
            title: "Nomina Chilena",
            description: "Desarrollé un módulo de nómina totalmente adaptado a la normativa laboral y previsional de Chile. El sistema automatiza el cálculo de remuneraciones, gestionando haberes, descuentos legales (AFP, Salud, AFC, IUR), asignaciones y movimientos. Además, genera documentos oficiales como liquidaciones de sueldo en PDF, el archivo para Previred (TXT/CSV) y el Libro de Remuneraciones Electrónico (LRE) exigido por la Dirección del Trabajo.  ",
            // videoUrl: "https://player.vimeo.com/video/1040589963?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479",
            technologies: [
                { name: "Odoo", imageUrl: "https://cdn.worldvectorlogo.com/logos/odoo.svg" },
                { name: "Python", imageUrl: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
                { name: "XML", imageUrl: "https://cdn.worldvectorlogo.com/logos/xml-2.svg" },
            ],
        },
    },
    mobile:{
        pet_cholito: {
        title: "Pet Cholito",
            description:"Pet Cholito es una aplicación móvil desarrollada en React Native, con Firebase como backend. Ofrece creación de perfiles de mascotas, publicaciones, alertas geolocalizadas para adopciones o pérdidas, y acceso a servicios para mascotas. Combina diseño intuitivo, notificaciones en tiempo real y funcionalidades avanzadas en una red social.",
            videoUrl:"https://player.vimeo.com/video/1040589963?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479",
            technologies: [
                { name: "React Native", imageUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
                { name: "Firebase", imageUrl: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
                { name: "Google Cloud", imageUrl: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
                { name: "Expo", imageUrl: "https://cdn.worldvectorlogo.com/logos/expo-1.svg" },
                { name:"Mercado pago", imageUrl:"https://img.icons8.com/?size=512&id=nTLVtpxsNPaz&format=png"},
            ],
        },
    }
  
};

const VideoEmbed = ({ videoUrl }) => {
    return (
        <div className="video-container">
            <iframe
                className="project-video"
                src={videoUrl}
                allow="autoplay; fullscreen"
                title="Vimeo Video"
            ></iframe>
        </div>
    );
};

const ProjectDetail = () => {
    const { category, slug } = useParams(); // Obtenemos los parámetros de la URL
    const project = projectDetails[category]?.[slug]; 

    if (!project) {
        return <div>Project not found!</div>; 
    }

    return (
        <div className="project-detail-container">
            <div className="project-detail-left">
                <div className="project-detail-card">
                    <div className="project-content">
                        <h1>{project.title}</h1>
                    </div>
                </div>
                
                    <VideoEmbed videoUrl={project.videoUrl} />

                {project.links && (
                    <div className="project-links">
                        <h3>Enlaces:</h3>
                        {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        )}
                        {project.links.host && (
                            <a href={project.links.host} target="_blank" rel="noreferrer">
                                Host
                            </a>
                        )}
                    </div>
                )}
            </div>

            <div className="project-detail-right">
                <div className="project-description-card">
                    <p>{project.description}</p>
                </div>

                <div className="technologies-card">
                    <h3>Tecnologías utilizadas:</h3>
                    <ul className="technologies-list">
                        {project.technologies &&
                        project.technologies.map((tech, index) => (
                            <li key={index} className="technology-item">
                                <img src={tech.imageUrl} alt={tech.name} className="technology-icon" />
                                <span>{tech.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
