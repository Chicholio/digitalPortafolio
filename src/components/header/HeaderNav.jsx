import React from 'react'
import styled from 'styled-components'

const NavFlex = styled.nav`
        display: flex;
        margin-top: 15px;
        color: #FFFFFE;
`

const NavA = styled.a`
        text-decoration: none;
        padding: 0 30px;
        color: #FFFFFE;
`

const NavAHome = styled.a`
        text-decoration: none;
        padding: 0 30px;
        color: #F25F4C;
`

const NavHr = styled.hr`
        text-decoration: none;
        border-color: #F25F4C;
`

const HeaderNav = () => {
    return (
        <div>
            <NavFlex>
                <NavA href="#"><img src="https://i.ibb.co/0DMdtPn/LOGO.png" NavAlt="LOGO" border="0" /></NavA>
                <NavAHome href="#">Hola<NavHr /></NavAHome>
                <NavA href="#">Proyectos</NavA>
                <NavA href="#">Testimonios</NavA>
                <NavA href="#">Contacto</NavA>
            </NavFlex>
        </div>
    )
}

export default HeaderNav
