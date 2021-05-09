import React from 'react'
import styled from 'styled-components'

const HeaderFlex = styled.header`
        display: flex;
        padding: 20px 50px 10px 50px;
        justify-content: space-between;
`

const Header = ({ children }) => {
    return (
        <HeaderFlex>
            { children }
        </HeaderFlex>
    )
}

export default Header
