import React from 'react'
import styled from 'styled-components'

const ProyectsIMG2 = styled.img`
        margin-left: 50px;
`

const ProyectsDiv2 = styled.div`
        background-color: #0F0E17;
        width: 50%;
        height: 300px;
        padding: 30px 80px 30px 20px;
        margin-top: 80px;
`

const ProyectsH42 = styled.h1`
        font-size: 30px;
        width: 100%;
        color: #FFFFFE;
`

const ProyectsP2 = styled.p`
        font-size: 20px;
        text-align: left;
        color: #FFFFFE;
        padding-bottom: 40px;
`

const ProyectsButton21 = styled.button`
        background-color: #FF8906;
        height: 40px;
        color: #FFFFFE;
        padding: 15px 20px 30px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border: none;
`

const ProyectsButton22 = styled.button`
        background-color: transparent;
        height: 40px;
        color: #FF8906;
        padding: 15px 20px 30px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-color: #FF8906;
        margin-left: 10px;
`

const ProyectsFresco = () => {
    return (
        <div>
            <ProyectsIMG2 src="https://i.ibb.co/NZMvJ90/bg-2.png" alt="bg-2" border="0" />
            <ProyectsDiv2>
                <ProyectsH42>Príncipe fresco</ProyectsH42>
                <ProyectsP2>La serie está protagonizada por Will Smith como una versión ficticio de si...</ProyectsP2>
                <ProyectsButton21>Ver proyecto completo</ProyectsButton21>
                <ProyectsButton22>Ver código</ProyectsButton22>
            </ProyectsDiv2>
        </div>
    )
}

export default ProyectsFresco
