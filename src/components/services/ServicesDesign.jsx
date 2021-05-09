import React from 'react'
import styled from 'styled-components'

const DesignP = styled.p`
        font-size: 30px;
`

const DesignUl = styled.ul`
        list-style: none;
        line-height: 2.5em;
        font-size: 24px;
        padding: 0 15px 0 0;
`

const DesignButton = styled.button`
        background-color: #0F0E17;
        width: 250px;
        height: 40px;
        font-size: 15px;
        color: #FF8906;
        padding: 0 20px 10px 20px;
        text-align: center;
        display: inline-block;
        border: none;
`

const ServicesDesign = () => {
    return (
        <div>
            <DesignP>Diseño</DesignP>
            <DesignUl>
                <li>Experiencia de usuario</li>
                <li>Interfaz de usuario</li>
                <li>Aplicaciones web</li>
                <li>Prueba de concepto</li>
            </DesignUl>
            <DesignButton>Ver servicios de diseño <img width="20" height="20" src="https://i.ibb.co/VghyMd7/arrow-right.png" alt="arrow-right" border="0" /></DesignButton>
        </div>
    )
}

export default ServicesDesign
