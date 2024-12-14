import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const [projectDescription, setProjectDescription] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  );

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
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
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Proyectos de Software</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                {/* Aquí puedes agregar otros Tab.Pane si es necesario */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
