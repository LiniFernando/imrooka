import * as React from 'react';
import './css/about.css';
import homeImage from "../img/about/aboutSlide.jpg";
import blackBackground from "../img/about/blackBackground.png";
import vision from "../img/about/vision.png";
import mission from "../img/about/mission.png";
import boardMember from "../img/about/boardMember.jpg";
import brand1 from "../img/home/logo1.png";
import brand2 from "../img/home/logo2.png";
import brand3 from "../img/home/logo3.png";
import brand4 from "../img/home/logo4.jpg";
import {Grid, Container} from "@mui/material";
import {COLORS as Color} from "../Common/Constant/Color";
import {AnimationOnScroll} from 'react-animation-on-scroll';
import brand5 from "../img/home/logo5.jpg";
import brand6 from "../img/home/logo6.jpg";
import Carousel from 'better-react-carousel'

const About = () => {
    const brands = [
        {
            url: brand1,
            title: 'brand1',
            width: '20%',
        },
        {
            url: brand2,
            title: 'brand2',
            width: '20%',
        },
        {
            url: brand3,
            title: 'brand3',
            width: '20%',
        },
        {
            url: brand4,
            title: 'brand4',
            width: '20%',
        },
        {
            url: brand5,
            title: 'brand5',
            width: '20%',
        },
        {
            url: brand6,
            title: 'brand6',
            width: '20%',
        },
        {
            url: brand6,
            title: 'brand6',
            width: '20%',
        },
        {
            url: brand5,
            title: 'brand5',
            width: '20%',
        },
        {
            url: brand4,
            title: 'brand4',
            width: '20%',
        },
        {
            url: brand1,
            title: 'brand1',
            width: '20%',
        },
        {
            url: brand2,
            title: 'brand2',
            width: '20%',
        },
    ];
    const boardMembers = [
        {
            url: boardMember,
            position: 'CHAIRMAN',
            name: 'Mr.Sarath Kumara',
        },
        {
            url: boardMember,
            position: 'CHAIRMAN',
            name: 'Mr.Sarath Kumara',
        },
        {
            url: boardMember,
            position: 'CHAIRMAN',
            name: 'Mr.Sarath Kumara',
        },
        {
            url: boardMember,
            position: 'CHAIRMAN',
            name: 'Mr.Sarath Kumara',
        },
        {
            url: boardMember,
            position: 'CHAIRMAN',
            name: 'Mr.Sarath Kumara',
        },
    ];
    return (
        <div style={{
            backgroundColor: 'white', fontSize: ' calc(10px + 2vmin)',
            color: 'white', marginTop: '80px'
        }}>
            <div>
                <img style={{width: "100%", height: '300px', objectFit: 'cover'}}
                     src={homeImage} alt=""/>
            </div>
            <h3 style={{color: Color.white, position: 'absolute', left: 0, right: 0, top: 100}}>Transforming Lives,
                Empowering Wellness</h3>
            <h1 style={{
                color: Color.black,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 150,
                textShadow: '0 7px 7px white'
            }}>ABOUT US</h1>
            {/*start about*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1} style={{marginTop: "20px", padding: "0 15% 0 15%"}}>
                <Grid item>
                    <div style={{textAlign: 'center'}}>
                        <h2 style={{color: Color.theme}}>OUR STORY</h2>
                    </div>
                    <p style={{textAlign: 'center', color: 'black'}}>At Imrooka Global, we are committed to empowering
                        healthy, eco-friendly living. As a diversified organization, we offer a range of services that
                        cater to various health and wellness needs. Our organic agricultural products are grown using
                        sustainable farming practices, ensuring that our customers receive the purest and most natural
                        products. Our services also include healthy Ayurvedic medicinal products and treatment centres,
                        providing natural remedies for a variety of ailments.</p>
                    <p style={{textAlign: 'center', color: 'black'}}>
                        In addition to our health and wellness services, we offer modern IT solutions and marketing
                        services to help businesses grow and thrive. Our team of experts can provide customized
                        solutions to meet your specific needs and help you achieve your business goals.</p>
                    <p style={{textAlign: 'center', color: 'black'}}>
                        As a socially responsible organization, we also operate a non-profit organization dedicated to
                        improving the welfare of children in need. We believe that by taking care of ourselves and the
                        planet, we can create a better future for all.
                        Our team comprises passionate individuals with diverse backgrounds and skill sets, including
                        experts in organic farming, Ayurveda, IT, and marketing. We are dedicated to providing
                        high-quality services that promote healthy living and sustainable practices.</p>
                </Grid>
            </Grid>
            {/*end about*/}

            {/*start vision & mission*/}
            <AnimationOnScroll animateIn="animate__fadeIn"
                               style={{marginTop: '100px',}}>
                <Grid container
                      direction="row"
                      justifyContent="center"
                      alignItems="stretch"
                      spacing={10}
                      className={'cards'}
                      style={{
                          backgroundImage: `url(${blackBackground})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                      }}>
                    <Grid item xs={12} sm={6} justifyContent="center"
                          alignItems="center" className={'wrapper'}>
                        <div className={'box'}>
                            <h2>VISION</h2>
                            <div style={{
                                backgroundImage: `url(${vision})`,
                                backgroundPosition: 'center',
                                backgroundSize: '56%',
                                backgroundRepeat: 'no-repeat',
                            }}>
                                <p>To be a global leader in promoting healthy, sustainable living practices that
                                    empower individuals and contribute to a healthier planet.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} justifyContent="center"
                          alignItems="center" className={'wrapper'}>
                        <div className={'box'}>
                            <h2>Mission</h2>
                            <div style={{
                                backgroundImage: `url(${mission})`,
                                backgroundPosition: 'center',
                                backgroundSize: '56%',
                                backgroundRepeat: 'no-repeat',
                            }}>
                                <p>At Imrooka Global, our mission is to empower individuals to live healthier, more
                                    sustainable lives by providing high-quality, natural products and services. We
                                    strive to make a positive impact in the world through our commitment to
                                    sustainability and social responsibility. Our team is dedicated to providing
                                    excellent customer service and promoting overall well-being for all.</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </AnimationOnScroll>
            {/*end vission & mission*/}


            {/*Start Directors' board*/}
            {/*<Grid>
                <Grid style={{paddingBottom: '20px', marginTop: '50px',}}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <AnimationOnScroll animateIn="animate__fadeInDown">
                            <Grid item>
                                <h2 style={{color: Color.theme}}>BOARD OF DIRECTORS</h2>
                            </Grid>
                        </AnimationOnScroll>
                    </Grid>
                    <AnimationOnScroll animateIn="animate__fadeIn" style={{width: '100%'}}>
                        <Container style={{
                            marginTop: 20, marginBottom: 20, width: '100%',
                        }}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={3}
                            >
                                {boardMembers.map((member) => (
                                    <Grid item xs={12} sm={4}>
                                        <img style={{width: "60%"}} src={member.url} alt=""/>
                                        <div style={{
                                            backgroundColor: Color.light,
                                            borderRadius: 100,
                                        }}>
                                            <h5 style={{
                                                margin: 0,
                                                paddingTop: '5px',
                                                color: Color.theme
                                            }}>{member.position}</h5>
                                            <h6 style={{
                                                margin: 0,
                                                paddingBottom: '10px',
                                                color: 'black'
                                            }}>{member.name}</h6>
                                        </div>
                                    </Grid>

                                ))}
                            </Grid>
                        </Container>
                    </AnimationOnScroll>
                </Grid>
            </Grid>*/}
            {/*End Directors' board*/}

            {/*Start companies*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1}
                  style={{paddingBottom: '20px', marginTop: '50px',}}>
                <Grid style={{paddingBottom: '20px', marginTop: '50px',}}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <AnimationOnScroll animateIn="animate__fadeInDown">
                            <Grid item>
                                <h2 style={{color: Color.theme}}>OUR ENTITIES</h2>
                            </Grid>
                        </AnimationOnScroll>
                    </Grid>
                    <AnimationOnScroll animateIn="animate__fadeIn" style={{width: '100%'}}>
                        <Container style={{
                            marginTop: 20, marginBottom: 20, width: '100%',
                        }}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={3}
                            >
                                {brands.map((image) => (
                                    <Grid item xs={6} sm={2}>
                                        <img style={{width: "100%"}} src={image.url} alt=""/>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </AnimationOnScroll>
                </Grid>
            </Grid>
            {/*End companies*/}

            {/*Start Brands*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1}
                  style={{backgroundColor: Color.light, paddingBottom: '20px', marginTop: '50px',}}>
                <Grid style={{paddingBottom: '20px', marginTop: '50px',}}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <AnimationOnScroll animateIn="animate__fadeInDown">
                            <Grid item>
                                <h2 style={{color: Color.theme}}>OUR BRANDS</h2>
                            </Grid>
                        </AnimationOnScroll>
                    </Grid>
                    <AnimationOnScroll animateIn="animate__fadeIn" style={{width: '100%'}}>
                        <Container style={{
                            marginTop: 20, marginBottom: 20, width: '100%',
                        }}>
                            <Carousel cols={1} rows={1} gap={10} hideArrow loop>
                                <Carousel.Item>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={3}
                                    >
                                        {brands.map((image) => (
                                            <Grid item xs={6} sm={2} key={image.url}>
                                                <img style={{width: "100%"}} src={image.url} alt=""/>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={3}
                                    >
                                        {brands.map((image) => (
                                            <Grid item xs={6} sm={2} key={image.url}>
                                                <img style={{width: "100%"}} src={image.url} alt=""/>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Carousel.Item>
                            </Carousel>
                        </Container>
                    </AnimationOnScroll>
                </Grid>
            </Grid>
            {/*End Brands*/}
        </div>
    )
}

export default About;
