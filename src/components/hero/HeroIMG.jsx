import React from 'react'
import styled from 'styled-components'

const HeroImage = styled.img`
    width: 495px;
    height: 462px;
    padding: 50px 0 50px 30px;
`

const HeroIMG = () => {
    return (
        <div>
            <HeroImage src="https://i.ibb.co/9hmWr8d/foto.png" alt="foto" border="0" />
        </div>
    )
}

export default HeroIMG
