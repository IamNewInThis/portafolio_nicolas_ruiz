import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github(2).svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row >
                    <Col size={12} sm={12} className="text-center text-sm-end mt-5" >
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/nicolas-ruiz-037aa5222/' ><img src={navIcon1} alt=''></img></a>
                            <a href='https://github.com/IamNewInThis'><img src={navIcon2} alt=''></img></a>
                        </div>
                        <p>CopyRight 2025. Inspirado en webdecoded</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer