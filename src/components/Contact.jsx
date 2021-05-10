import React from 'react'
import styled from 'styled-components'

const ContactSection = styled.section`
        padding: 50px;
        text-align: left;
        color: #FFFFFE;
        background: linear-gradient(130deg, #FEB692, #F25F4C);
`

const ContactForm = styled.form`
    margin: 0px 300px 0px 300px;
    background-color: #0F0E17;
    text-align: center;
    border-radius: 3px;
    padding: 30px 40px 30px 40px;
    line-height: 2.5em;
    font-family: arial;
`

const Contact = ({ children }) => {
    return (
        <ContactSection>
            <ContactForm>
                { children }
            </ContactForm>
        </ContactSection>
    )
}

export default Contact
