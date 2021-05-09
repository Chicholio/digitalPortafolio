import React from 'react'
import styled from 'styled-components'

const TestiDiv2 = styled.div`
        padding: 0 30px;
`

const TestiDiv22 = styled.div`
        display: flex;
        padding-bottom: 10px;
`

const TestiP12 = styled.div`
        padding: 17px 0 0 15px;
`

const TestiP22 = styled.div`
        line-height: 2em;
`

const Testimonials2 = () => {
    return (
        <TestiDiv2>
            <TestiDiv22>
                <img src="https://i.ibb.co/zS20T8X/Ellipse2.png" alt="Ellipse2" border="0" /><TestiP12>Albert Flores</TestiP12>
            </TestiDiv22>
            <TestiP22>Me gusto ver el porqué de las cosas del core de React, saber la magia que ocurre por detrás, excelente profesor Antonio gran vocacion.</TestiP22>
        </TestiDiv2>
    )
}

export default Testimonials2
