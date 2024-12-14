import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'
const Skills = () => {
    const responsive = {
        superLargeDesktop:{
            breakpoint: {max:4000, min:3000},
            items:5
        },
        desktop:{
            breakpoint: {max:3000, min:1024},
            items:3
        },
        tablet:{
            breakpoint: {max:1024, min:464},
            items:2
        },
        mobile:{
            breakpoint: {max:464, min:0},
            items:1
        }
    }

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Habilidades
                            </h2>
                            <p>
                                Soy un desarrollador con experiencia en React, React Native y Odoo. Me gusta crear aplicaciones que sean fáciles de usar y se vean atractivas. Disfruto trabajando en proyectos donde pueda aplicar mis conocimientos para resolver problemas y ofrecer soluciones creativas.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={meter1} alt=''></img>
                                    <h5>Desarrollo en React</h5>
                                </div>

                                <div className='item'>
                                    <img src={meter2} alt=''></img>
                                    <h5>Desarrollo en React Native</h5>
                                </div>

                                <div className='item'>
                                    <img src={meter2} alt=''></img>
                                    <h5>Desarrollo en Odoo</h5>
                                </div>

                                <div className='item'>
                                    <img src={meter3} alt=''></img>
                                    <h5>Desarrollo Web</h5>
                                </div>

                                <div className='item'>
                                    <img src={meter1} alt=''></img>
                                    <h5>JavaScript</h5>
                                </div>

                                <div className='item'>
                                    <img src={meter2} alt=''></img>
                                    <h5>Python</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt=''></img>
        </section>
    )
}

export default Skills