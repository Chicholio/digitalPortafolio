import React from 'react'
import styled from 'styled-components'
import ProyectsAmazonas from './proyects/ProyectsAmazonas'
import ProyectsFresco from './proyects/ProyectsFresco'

const ProyectsSection = styled.section`
        padding: 50px;
        text-align: left;
        color: #0F0E17;
        background-color: #FFFFFE;
`

const ProyectsH2 = styled.h2`
        font-size: 40px;
`

const ProyectsFlex = styled.div`
        display: flex;
        justify-content: space-between;
`

const ProyectsButtonDiv = styled.div`
        text-align: center;
`

const ProyectsButton = styled.button`
        background-color: transparent;
        width: 200px;
        height: 40px;
        color: #0F0E17;
        padding: 10px 20px 30px 20px;
        margin: 50px 0;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-color: #0F0E17;
        margin: center;
`

const Proyects = ({ children }) => {
    return (
        <ProyectsSection>
            <ProyectsFlex>
                <ProyectsH2>Parece Magia, funciona<br />con código.</ProyectsH2>
                <p>A lo largo de mi carrera como frontend, he tenido el privilegio de trabajar en proyectos retadores e increibles.</p>
            </ProyectsFlex>
            <div>
                { children }
            </div>
            <ProyectsFlex>
                <ProyectsFresco />
                <ProyectsAmazonas />
            </ProyectsFlex>
            <ProyectsButtonDiv>
                <ProyectsButton>Ver mas proyectos <img width="20" height="20" src="https://i.ibb.co/QXmsN1f/arrow-right-1.png" alt="arrow-right-1" border="0" /></ProyectsButton>
            </ProyectsButtonDiv>
        </ProyectsSection>
    )
}

export default Proyects
