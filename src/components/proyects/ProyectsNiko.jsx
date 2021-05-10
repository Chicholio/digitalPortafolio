import React from 'react'
import styled from 'styled-components'

const ProyectsIMG1 = styled.img`
        margin-left: 50px;
`

const ProyectsDiv1 = styled.div`
        background-color: #0F0E17;
        width: 40%;
        height: 300px;
        padding: 30px 80px 30px 20px;
        margin-top: 80px;
`

const ProyectsH41 = styled.h1`
        font-size: 30px;
        width: 100%;
        color: #FFFFFE;
`

const ProyectsP1 = styled.p`
        font-size: 20px;
        text-align: left;
        color: #FFFFFE;
        padding-bottom: 90px;
`

const ProyectsButton11 = styled.button`
        background-color: #FF8906;
        height: 40px;
        color: #FFFFFE;
        padding: 15px 20px 30px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border: none;
`

const ProyectsButton12 = styled.button`
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

const ProyectsNiko = () => {
    return (
        <div>
            <ProyectsIMG1 src="https://i.ibb.co/6BTQPhn/bg.png" alt="bg" border="0" />
            <ProyectsDiv1>
                <ProyectsH41>NIKO</ProyectsH41>
                <ProyectsP1>Niko es una de las marcas y proveedores de equipamiento deportivo más reconocidas y valiosas en todo el mundo.</ProyectsP1>
                <ProyectsButton11>Ver proyecto completo</ProyectsButton11>
                <ProyectsButton12>Ver código</ProyectsButton12>
            </ProyectsDiv1>
        </div>
    )
}

export default ProyectsNiko
