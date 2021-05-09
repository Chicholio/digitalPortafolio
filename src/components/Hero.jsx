import React from 'react'
import styled from 'styled-components'

const HeroFlex = styled.section`
        display: flex;
        padding: 10px 50px 10px 50px;
        color: #FFFFFE;
        justify-content: space-between;
`

const Hero = ({ children }) => {
    return (
        <HeroFlex>
            { children }
        </HeroFlex>
    )
}

export default Hero
