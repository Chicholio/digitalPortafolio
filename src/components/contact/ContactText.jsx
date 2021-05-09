import React from 'react'
import styled from 'styled-components'

const ContactsH2 = styled.h2`
        font-size: 40px;
        text-align: left;
`

const ContactsP = styled.p`
        font-size: 15px;
        line-height: 2em;
        text-align: left;
`

const ContactText = () => {
    return (
        <div>
            <ContactsH2>Contacto</ContactsH2>
            <ContactsP>Si está interesado en trabajar conmigo en su ContactsPróximo proyecto, no dude en ponerse en contacto.</ContactsP>
        </div>
    )
}

export default ContactText
