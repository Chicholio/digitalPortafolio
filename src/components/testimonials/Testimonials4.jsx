import React from 'react'
import styled from 'styled-components'

const TestiDiv4 = styled.div`
        padding: 0 30px;
`

const TestiDiv24 = styled.div`
        display: flex;
        padding-bottom: 10px;
`

const TestiP14 = styled.div`
        padding: 17px 0 0 15px;
`

const TestiP24 = styled.div`
        line-height: 2em;
`

const Testimonials4 = () => {
    return (
        <TestiDiv4>
            <TestiDiv24>
                <img src="https://i.ibb.co/ws16kPY/Ellipse4.png" alt="Ellipse4" border="0" /><TestiP14>Jane Cooper</TestiP14>
            </TestiDiv24>
            <TestiP24>La forma como explica y trabaja los temas Antonio, me ha ayudado a comprender y sacarle el mayor provecho a HTML y CSS.</TestiP24>
        </TestiDiv4>
    )
}

export default Testimonials4
