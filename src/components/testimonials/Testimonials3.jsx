import React from 'react'
import styled from 'styled-components'

const TestiDiv3 = styled.div`
        padding: 0 30px;
`

const TestiDiv23 = styled.div`
        display: flex;
        padding-bottom: 10px;
`

const TestiP13 = styled.div`
        padding: 17px 0 0 15px;
`

const TestiP23 = styled.div`
        line-height: 2em;
`

const Testimonials3 = () => {
    return (
        <TestiDiv3>
            <TestiDiv23>
                <img src="https://i.ibb.co/CvRjcqF/Ellipse3.png" alt="Ellipse3" border="0" /><TestiP13>Darlene Robertson</TestiP13>
            </TestiDiv23>
            <TestiP23>Ayuda a entender el porqué de las cosas, lo cual nos da el poder de aprovechar mejor el lenguaje y las herramientas que tenemos.</TestiP23>
        </TestiDiv3>
    )
}

export default Testimonials3
