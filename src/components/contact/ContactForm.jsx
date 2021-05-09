import React from 'react'
import styled from 'styled-components'

const ContactInput = styled.input`
        border: none;
        display: block;
        width: 100%;
        height: 50px;
        margin-top: 20px;
        padding: 0 0 0 10px;
`

const ContactTextarea = styled.textarea`
        width: 100%;
        height: 150px;
        padding: 10px 0 0 10px;
        margin-top: 20px;
`

const ContactButton = styled.button`
        background-color: #FF8906;
        width: 103%;
        height: 45px;
        color: white;
        border: none;
`

const ContactForm = () => {
    return (
        <div>
            <ContactInput type="text" placeholder="Nombre completo" required />
            <ContactInput type="email" placeholder="Correo electrónico" required />
            <ContactTextarea cols="30" rows="10" placeholder="Mensaje" />
            <ContactButton type="submit">Enviar mensaje</ContactButton>
        </div>
    )
}

export default ContactForm
