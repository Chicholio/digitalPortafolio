import React from 'react'
import styled from 'styled-components'

const ServiciesSection = styled.section`
        padding: 50px;
        text-align: left;
        color: #0F0E17;
        background: linear-gradient(130deg, #FEB692, #F25F4C);
`

const ServiciesH2 = styled.h2`
        font-size: 40px;
`

const ServicesFlex = styled.div`
        display: flex;
        justify-content: space-between;
`

const Servicies = ({ children }) => {
    return (
        <ServiciesSection>
            <ServiciesH2>Servicios</ServiciesH2>
            <ServicesFlex>
            { children }
            </ServicesFlex>
        </ServiciesSection>
    )
}

export default Servicies
