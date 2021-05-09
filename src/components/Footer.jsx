import React from 'react'
import styled from 'styled-components'

const FooterFlex = styled.footer`
        display: flex;
        padding: 20px 50px 20px 50px;
        justify-content: space-between;
`

const Footer = ({ children }) => {
    return (
        <FooterFlex>
            { children }
        </FooterFlex>
    )
}

export default Footer
