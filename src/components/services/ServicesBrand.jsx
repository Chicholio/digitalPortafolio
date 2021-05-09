import React from 'react'
import styled from 'styled-components'

const BrandP = styled.p`
        font-size: 30px;
`

const BrandUl = styled.ul`
        list-style: none;
        line-height: 2.5em;
        font-size: 24px;
        padding: 0 15px 0 0;
`

const BrandButton = styled.button`
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

const ServicesBrand = () => {
    return (
        <div>
            <BrandP>Marca</BrandP>
            <BrandUl>
                <li>Identidad de la marca</li>
                <li>Estrategia de la marca</li>
            </BrandUl>
            <BrandButton>Ver servicios de marca <img width="20" height="20" src="https://i.ibb.co/VghyMd7/arrow-right.png" alt="arrow-right" border="0" /></BrandButton>
        </div>
    )
}

export default ServicesBrand
