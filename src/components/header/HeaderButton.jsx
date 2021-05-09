import React from 'react'
import styled from 'styled-components'

const NavButton = styled.button`
        background-color: #FF8906;
        height: 40px;
        color: #FFFFFE;
        padding: 15px 20px 30px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border: none;
`

const HeaderButton = () => {
    return (
        <div>
            <NavButton>Descargar currículum</NavButton>
        </div>
    )
}

export default HeaderButton
