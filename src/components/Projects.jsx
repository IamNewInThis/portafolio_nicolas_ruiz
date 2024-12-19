import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const [projectDescription, setProjectDescription] = useState(
    "Proyectos WEB: Desarrollo de aplicaciones web con tecnologías React, NextJS, Arquitectura MERN."
  );

  const projects = [
    {
      id: 1,
      title: "Next JS Ecommerce",
      description: "Control de stock de Tecnologia",
      imgUrl: projImg1,
      category: "web",
      slug: "next_commerce"
    },
    {
      id: 2,
      title: "Redux",
      description: "CRUD con Redux",
      imgUrl: projImg1,
      category: "web",
      slug: "redux_crud"
    },
    {
      id: 3,
      title: "Angular",
      description: "Login con Angular y Supabase",
      imgUrl: projImg1,
      category: "web",
      slug: "angular_login"
    },
    {
      id: 4,
      title: "ToolHaus",
      description: "Control de Herramientas",
      imgUrl: projImg3,
      category: "erp",
      slug: "toolhaus"
    },
    { 
      id: 5,
      title: "Pet Cholito",
      description: "Aplicación de adopción de mascotas",
      imgUrl: projImg3,
      category: "mobile",
      slug: "pet_cholito"
    },
  ];

  const handleTabSelect = (eventKey) => {
    switch (eventKey) {
      case "first":
        setProjectDescription(
          "Proyectos WEB: Desarrollo de aplicaciones web con tecnologías React, NextJS, Arquitectura MERN."
        );
        break;
      case "second":
        setProjectDescription(
          "Proyectos Odoo: Integración y desarrollo en el ERP Odoo para mejorar la gestión empresarial."
        );
        break;
      case "third":
        setProjectDescription(
          "Proyectos Móviles: Creación de aplicaciones móviles con React Native, optimizando la experiencia de usuario."
        );
        break;
      case "fifth":
        setProjectDescription(
          "Proyectos de Software: Desarrollo de soluciones de software personalizadas para diferentes industrias."
        );
        break;
      default:
        setProjectDescription(
          "Proyectos WEB: Desarrollo de aplicaciones web con tecnologías React, NextJS, Arquitectura MERN."
        );
        break;
    }
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Proyectos</h2>
            <p>{projectDescription}</p>
            <Tab.Container
              id="projects-tabs"
              defaultActiveKey="first"
              onSelect={handleTabSelect}
            >
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Proyectos WEB</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Proyectos Odoo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Proyectos Moviles</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="fifth">Proyectos de Software</Nav.Link>
                </Nav.Item> */}
              </Nav>
              <Tab.Content id="slideInUp">
                {['web', 'erp', 'mobile', 'ia', 'software'].map((category, idx) => (
                  <Tab.Pane eventKey={['first', 'second', 'third', 'fourth', 'fifth'][idx]}>
                    <Row>
                      {projects.filter(project => project.category === category).map((project) => (
                        <ProjectCard key={project.id} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
