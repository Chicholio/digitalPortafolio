import React from 'react'
import styled from 'styled-components'

const ProyectsIMG3 = styled.img`
        margin-left: 50px;
`

const ProyectsDiv3 = styled.div`
        background-color: #0F0E17;
        width: 50%;
        height: 300px;
        padding: 30px 80px 30px 20px;
        margin-top: 80px;
`

const ProyectsH43 = styled.h1`
        font-size: 30px;
        width: 100%;
        color: #FFFFFE;
`

const ProyectsP3 = styled.p`
        font-size: 20px;
        text-align: left;
        color: #FFFFFE;
        padding-bottom: 40px;
`

const ProyectsButton31 = styled.button`
        background-color: #FF8906;
        height: 40px;
        color: #FFFFFE;
        padding: 15px 20px 30px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border: none;
`

const ProyectsButton32 = styled.button`
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

const ProyectsAmazonas = () => {
    return (
        <div>
            <ProyectsIMG3 src="https://i.ibb.co/Sc626Pg/bg-1.png" alt="bg-1" border="0" />
            <ProyectsDiv3>
                <ProyectsH43>Amazonas</ProyectsH43>
                <ProyectsP3>Amazonas es la empresa en internet de venta al por menor más grande del...</ProyectsP3>
                <ProyectsButton31>Ver proyecto completo</ProyectsButton31>
                <ProyectsButton32>Ver código</ProyectsButton32>
            </ProyectsDiv3>
        </div>
    )
}

export default ProyectsAmazonas
