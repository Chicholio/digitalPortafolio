import React from 'react'
import styled from 'styled-components'

const HeroH1 = styled.h1`
        font-size: 60px;
        width: 100%;
`

const HeroP = styled.p`
        font-size: 24px;
        text-align: justify;
`

const HeroArrow = styled.img`
        padding: 100px 0 0 0;
`

const HeroText = () => {
    return (
        <div>
            <HeroH1>¡Hola a todos!<br />Soy Antonio Pereira</HeroH1>
            <HeroP>Developer que le encanta implementar diseños que<br />inspiran y atraen a las personas.</HeroP>
            <HeroArrow src="https://i.ibb.co/DY1kYjq/arrow-down.png" alt="arrow-down" border="0" />
        </div>
    )
}

export default HeroText
