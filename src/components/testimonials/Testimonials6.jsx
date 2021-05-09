import React from 'react'
import styled from 'styled-components'

const TestiDiv6 = styled.div`
        padding: 0 30px;
`

const TestiDiv26 = styled.div`
        display: flex;
        padding-bottom: 10px;
`

const TestiP16 = styled.div`
        padding: 17px 0 0 15px;
`

const TestiP26 = styled.div`
        line-height: 2em;
`

const Testimonials6 = () => {
    return (
        <TestiDiv6>
            <TestiDiv26>
                <img src="https://i.ibb.co/wcBnFG8/Ellipse6.png" alt="Ellipse6" border="0" /><TestiP16>Guy Hawkins</TestiP16>
            </TestiDiv26>
            <TestiP26>Antonio ha superado mis expectativas desde el diseño hasta el desarrollo.</TestiP26>
        </TestiDiv6>
    )
}

export default Testimonials6
