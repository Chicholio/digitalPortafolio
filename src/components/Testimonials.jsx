import React from 'react'
import styled from 'styled-components'
import Testimonials1 from './testimonials/Testimonials1'
import Testimonials2 from './testimonials/Testimonials2'
import Testimonials3 from './testimonials/Testimonials3'
import Testimonials4 from './testimonials/Testimonials4'
import Testimonials5 from './testimonials/Testimonials5'
import Testimonials6 from './testimonials/Testimonials6'

const TestimonialsSection = styled.section`
        padding: 50px;
        text-align: left;
        color: #FFFFFE;
`

const TestimonialsH2 = styled.h2`
        font-size: 40px;
`

const TestimonialsFlex = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 0 0 30px 0;
`

const Testimonials = () => {
    return (
        <TestimonialsSection>
            <TestimonialsH2>Testimonios</TestimonialsH2>
            <TestimonialsFlex>
                <Testimonials1 />
                <Testimonials2 />
                <Testimonials3 />
            </TestimonialsFlex>
            <TestimonialsFlex>
                <Testimonials4 />
                <Testimonials5 />
                <Testimonials6 />
            </TestimonialsFlex>
        </TestimonialsSection>
    )
}

export default Testimonials
