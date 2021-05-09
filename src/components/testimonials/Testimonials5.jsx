import React from 'react'
import styled from 'styled-components'

const TestiDiv5 = styled.div`
        padding: 0 30px;
`

const TestiDiv25 = styled.div`
        display: flex;
        padding-bottom: 10px;
`

const TestiP15 = styled.div`
        padding: 17px 0 0 15px;
`

const TestiP25 = styled.div`
        line-height: 2em;
`

const Testimonials5 = () => {
    return (
        <TestiDiv5>
            <TestiDiv25>
                <img src="https://i.ibb.co/cyjjrqs/Ellipse5.png" alt="Ellipse5" border="0" /><TestiP15>Eleanor Pena</TestiP15>
            </TestiDiv25>
            <TestiP25>Antonio a sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo. Lo que nos hubiera llevado 6 meses solo les llevo 1,5 meses.</TestiP25>
        </TestiDiv5>
    )
}

export default Testimonials5
