import { useParams } from 'react-router-dom';

const projectDetails = {
    "web": {
        "next_commerce": {
            title: "Ecommerce Next",
            description: "Una tienda web desarrollada con Next.js, MongoDB y S3, con autenticación Google y administración de bodega para productos, categorías y marcas.",
            videoUrl:"https://player.vimeo.com/video/1040060544?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479",
            technologies: [
                { name: "Next.js", imageUrl: "https://cdn.worldvectorlogo.com/logos/next-js.svg", colorClass: "nextjs" },
                { name: "MongoDB", imageUrl: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", colorClass: "mongodb" },
            ],
            links: {
                github: "https://github.com/IamNewInThis/Ecommerce-Next-Cliente",
            },
            type: "Aplicación Web Full Stack",
            category: "Aplicaciones Web"
        },
        "redux_crud": {
            title: "CRUD con Redux",
            description: "Este proyecto es un CRUD de gestión de tareas, utilizando Redux como gestor de estado. La aplicación permite a usuarios agregar tareas, editarlas o eliminarlas.",
            videoUrl: "https://player.vimeo.com/video/1040065233?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479",
            technologies: [
                { name: "React", imageUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg", colorClass: "react" },
                { name: "Redux", imageUrl: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png", colorClass: "redux" },
            ],
            links: {
                github: "https://github.com/IamNewInThis/react-redux-task",
            },
            type: "Aplicación Frontend",
            category: "Aplicaciones Web"
        },
        "angular_login": {
            title: "Login con Angular y Supabase",
            description: "Task Manager es una aplicación desarrollada con Angular y Supabase para organizar y gestionar tareas de manera eficiente. Cuenta con una funcionalidad de inicio de sesión totalmente operativa, que permite a los usuarios autenticarse de forma segura utilizando Supabase como backend.",
            videoUrl: "https://player.vimeo.com/video/1040068868?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479",
            technologies: [
                { name: "Angular", imageUrl: "https://angular.io/assets/images/logos/angular/angular.svg", colorClass: "angular" },
                { name: "Supabase", imageUrl: "https://styles.redditmedia.com/t5_47da3l/styles/communityIcon_8wbqkp0rozjd1.jpg?format=pjpg&s=70862eec9c29aa0c25f2a6b9e708698dd03474e5", colorClass: "supabase" },
            ],
            links: {
                github: "https://github.com/IamNewInThis/task_manager",
            },
            type: "Aplicación Full Stack",
            category: "Aplicaciones Web"
        },
        "spotify_convert": {
            title: "Spotify Convert",
            description: "Spotify Convert es una aplicación web que automatiza la creación de playlists en YouTube basadas en playlists de Spotify, eliminando la necesidad de buscar y transferir canciones manualmente.",
            videoUrl: "https://player.vimeo.com/video/1066336522?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479",
            technologies: [
                { name: "React", imageUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg", colorClass: "react" },
                { name: "Spotify API", imageUrl: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg", colorClass: "spotify" },
                { name: "Google API", imageUrl: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg", colorClass: "google" },
            ],
            links: {
                host: "https://spotify-convert.vercel.app/"
            },
            type: "Integración de APIs",
            category: "Aplicaciones Web"
        },
        "nextjs_chat": {
            title: "NextJS Chat",
            description: "NextJS Chat es una aplicación de chat en tiempo real desarrollada con Next.js y Supabase, permitiendo a los usuarios comunicarse instantáneamente en chats privados.",
            videoUrl: "",
            technologies: [
                { name: "Next.js", imageUrl: "https://cdn.worldvectorlogo.com/logos/next-js.svg", colorClass: "nextjs" },
                { name: "Supabase", imageUrl: "https://styles.redditmedia.com/t5_47da3l/styles/communityIcon_8wbqkp0rozjd1.jpg?format=pjpg&s=70862eec9c29aa0c25f2a6b9e708698dd03474e5", colorClass: "supabase" },
                { name: "Tailwind CSS", imageUrl: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", colorClass: "tailwind" },
            ],
            links: {
                github: "https://github.com/IamNewInThis/Next-Chat-Copilot",
                host: "https://next-chat-copilot.vercel.app/"
            },
            type: "Aplicación en Tiempo Real",
            category: "Aplicaciones Web"
        },
    },
    erp: {
        toolhaus: {
            title: "ToolHaus",
            description: "El módulo Toolhaus permite gestionar el préstamo de herramientas, permitiendo a los usuarios realizar solicitudes, reservar, devolver y enviar herramientas a mantenimiento. Incluye control de obras, usuarios solicitantes y estados de las herramientas.",
            videoUrl: "https://player.vimeo.com/video/1040077992?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479",
            technologies: [
                { name: "Python", imageUrl: "https://cdn.worldvectorlogo.com/logos/python-5.svg", colorClass: "python" },
                { name: "XML", imageUrl: "https://cdn.worldvectorlogo.com/logos/xml-2.svg", colorClass: "xml" },
                { name: "Odoo", imageUrl: "https://cdn.worldvectorlogo.com/logos/odoo.svg", colorClass: "odoo" },
            ],
            type: "Módulo ERP",
            category: "Odoo"
        },
        purchase_solicitudes: {
            title: "Purchase Solicitudes",
            description: "Módulo de Odoo que extiende el flujo de compras para permitir que cualquier usuario cree solicitudes de materiales o servicios, gestionando un control externo a las requisiciones estándar y facilitando la trazabilidad de las solicitudes.",
            videoUrl: "",
            technologies: [
                { name: "Odoo", imageUrl: "https://cdn.worldvectorlogo.com/logos/odoo.svg", colorClass: "odoo" },
                { name: "Python", imageUrl: "https://cdn.worldvectorlogo.com/logos/python-5.svg", colorClass: "python" },
                { name: "XML", imageUrl: "https://cdn.worldvectorlogo.com/logos/xml-2.svg", colorClass: "xml" },
            ],
            links: {},
            type: "Módulo ERP",
            category: "Odoo"
        },
        sii_comparacion_factura: {
            title: "SII Comparación factura",
            description: "Submódulo para contabilidad que agrega un menú donde se pueden subir archivos CSV descargados del SII. Cuando se procesan estos archivos, el sistema indica cuáles facturas faltan por ingresar al sistema.",
            videoUrl: "https://player.vimeo.com/video/1098370366?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479",
            technologies: [
                { name: "Odoo", imageUrl: "https://cdn.worldvectorlogo.com/logos/odoo.svg", colorClass: "odoo" },
                { name: "Python", imageUrl: "https://cdn.worldvectorlogo.com/logos/python-5.svg", colorClass: "python" },
                { name: "XML", imageUrl: "https://cdn.worldvectorlogo.com/logos/xml-2.svg", colorClass: "xml" },
            ],
            links: {},
            type: "Módulo ERP",
            category: "Odoo"
        },
        nomina_chilena: {
            title: "Nomina Chilena",
            description: "Desarrollé un módulo de nómina totalmente adaptado a la normativa laboral y previsional de Chile. El sistema automatiza el cálculo de remuneraciones, gestionando haberes, descuentos legales (AFP, Salud, AFC, IUR), asignaciones y movimientos. Además, genera documentos oficiales como liquidaciones de sueldo en PDF, el archivo para Previred (TXT/CSV) y el Libro de Remuneraciones Electrónico (LRE) exigido por la Dirección del Trabajo.",
            videoUrl: "",
            technologies: [
                { name: "Odoo", imageUrl: "https://cdn.worldvectorlogo.com/logos/odoo.svg", colorClass: "odoo" },
                { name: "Python", imageUrl: "https://cdn.worldvectorlogo.com/logos/python-5.svg", colorClass: "python" },
                { name: "XML", imageUrl: "https://cdn.worldvectorlogo.com/logos/xml-2.svg", colorClass: "xml" },
            ],
            type: "Módulo ERP",
            category: "Odoo"
        },
    },
    mobile: {
        pet_cholito: {
            title: "Pet Cholito",
            description: "Pet Cholito es una aplicación móvil desarrollada en React Native, con Firebase como backend. Ofrece creación de perfiles de mascotas, publicaciones, alertas geolocalizadas para adopciones o pérdidas, y acceso a servicios para mascotas. Combina diseño intuitivo, notificaciones en tiempo real y funcionalidades avanzadas en una red social.",
            videoUrl: "https://player.vimeo.com/video/1040589963?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479",
            technologies: [
                { name: "React Native", imageUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg", colorClass: "react" },
                { name: "Firebase", imageUrl: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg", colorClass: "firebase" },
                { name: "Google Cloud", imageUrl: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg", colorClass: "google" },
                { name: "Expo", imageUrl: "https://cdn.worldvectorlogo.com/logos/expo-1.svg", colorClass: "expo" },
                { name: "Mercado Pago", imageUrl: "https://img.icons8.com/?size=512&id=nTLVtpxsNPaz&format=png", colorClass: "mercadopago" },
            ],
            type: "Aplicación Móvil Full Stack",
            category: "Aplicaciones Móviles"
        },
    }
};

const VideoEmbed = ({ videoUrl }) => {
    if (!videoUrl) {
        return (
            <div className="no-video-placeholder">
                <span>Video no disponible</span>
            </div>
        );
    }

    return (
        <div className="video-container">
            <iframe
                src={videoUrl}
                allow="autoplay; fullscreen"
                title="Video del Proyecto"
            />
        </div>
    );
};

const ProjectDetail = () => {
    const { category, slug } = useParams();
    const project = projectDetails[category]?.[slug];

    if (!project) {
        return (
            <div className="project-detail-page">
                <div className="project-detail-container">
                    <h1>Proyecto no encontrado</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="project-detail-page">
            <div className="project-detail-container">
                {/* Columna Izquierda: Video */}
                <div className="video-section">
                    <VideoEmbed videoUrl={project.videoUrl} />
                </div>

                {/* Columna Derecha: Info del Proyecto */}
                <div className="project-info">
                    {/* Breadcrumbs */}
                    <div className="project-breadcrumbs">
                        <a href="/">Proyectos</a>
                        <span>/</span>
                        <span className="current">{project.category || category}</span>
                    </div>

                    {/* Encabezado */}
                    <div className="project-headline">
                        <h1>{project.title}</h1>
                        <div className="project-meta">
                            <span className="role">Desarrollador Principal</span>
                            <span className="separator"></span>
                            <span className="type">{project.type || "Aplicación"}</span>
                        </div>
                    </div>

                    {/* Descripción */}
                    <p className="project-description">{project.description}</p>

                    {/* Tecnologías */}
                    <div className="technologies-section">
                        <h3>Tecnologías Utilizadas</h3>
                        <ul className="technologies-list">
                            {project.technologies?.map((tech, index) => (
                                <li key={index} className={`technology-item ${tech.colorClass || ''}`}>
                                    <img
                                        src={tech.imageUrl}
                                        alt={tech.name}
                                        className="technology-icon"
                                    />
                                    <span>{tech.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Botones de Acción */}
                    <div className="project-actions">
                        {project.links?.host && (
                            <a
                                href={project.links.host}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary"
                            >
                                <span>Ver Demo</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        )}
                        {project.links?.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-secondary"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                <span>Ver Código</span>
                            </a>
                        )}
                        {!project.links?.host && !project.links?.github && (
                            <span className="btn-secondary" style={{ opacity: 0.5, cursor: 'default' }}>
                                Enlaces no disponibles
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
