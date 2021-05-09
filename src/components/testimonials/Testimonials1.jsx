import React from 'react'
import styled from 'styled-components'

const TestiDiv1 = styled.div`
        padding: 0 30px;
`

const TestiDiv21 = styled.div`
        display: flex;
        padding-bottom: 10px;
`

const TestiP11 = styled.div`
        padding: 17px 0 0 15px;
`

const TestiP21 = styled.div`
        line-height: 2em;
`

const Testimonials1 = () => {
    return (
        <TestiDiv1>
            <TestiDiv21>
                <img src="https://i.ibb.co/cc8M4QV/Ellipse1.png" alt="Ellipse1" border="0" /><TestiP11>Juan Antonio</TestiP11>
            </TestiDiv21>
            <TestiP21>Tengo algunos años trabajando con Javascript y aún así aprendí varias cosas importantes de Antonio y como utiliza Javascript en el día a día.</TestiP21>
        </TestiDiv1>
    )
}

export default Testimonials1
