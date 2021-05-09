import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header'
import HeaderButton from '../components/header/HeaderButton'
import HeaderNav from '../components/header/HeaderNav'
import Hero from '../components/Hero'
import HeroText from '../components/hero/HeroText'
import HeroIMG from '../components/hero/HeroIMG'
import Services from '../components/Services'
import ServicesDesign from '../components/services/ServicesDesign'
import ServicesDevelopment from '../components/services/ServicesDevelopment';
import ServicesBrand from '../components/services/ServicesBrand';
import Img from '../components/Img';
import Contact from '../components/Contact';
import ContactText from '../components/contact/ContactText';
import ContactForm from '../components/contact/ContactForm';
import Footer from '../components/Footer';
import FooterLogo from '../components/footer/FooterLogo';
import FooterText from '../components/footer/FooterText';
import FooterSocial from '../components/footer/FooterSocial';
import Testimonials from '../components/Testimonials';


const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #0F0E17;
    }  
`;

const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Header>
                <HeaderNav />
                <HeaderButton />
            </Header>
            <Hero>
                <HeroText />
                <HeroIMG />
            </Hero>
            <Services>
                <ServicesDesign />
                <ServicesDevelopment />
                <ServicesBrand />
            </Services>
            <Testimonials />
            <Img  />
            <Contact>
                <ContactText />
                <ContactForm />
            </Contact>
            <Footer>
                <FooterLogo />
                <FooterText />
                <FooterSocial />
            </Footer>
        </Fragment>
    )
}

export default App
