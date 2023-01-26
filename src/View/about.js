import * as React from 'react';
import homeImage from "../img/about/slide.png";
import vision from "../img/about/vision.png";
import mission from "../img/about/mission.png";
import boardMember from "../img/about/boardMember.png";
import nameTag from "../img/about/nameTag.png";
import brand1 from "../img/home/logo1.png";
import brand2 from "../img/home/logo2.png";
import brand3 from "../img/home/logo3.png";
import brand4 from "../img/home/logo4.jpg";
import {Grid, Container} from "@mui/material";


const About = () => {
    return (
        <div style={{
            backgroundColor: 'white', fontSize: ' calc(10px + 2vmin)',
            color: 'white', marginTop: '80px'
        }}>
            <img style={{width: "100%"}} src={homeImage} alt=""/>
            {/*start about*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1} style={{marginTop: "20px"}}>
                <Grid item xs={6}>
                    <div style={{textAlign: 'center'}}>
                        <h1 style={{color: '#10728D'}}>OUR STORY</h1>
                    </div>
                    <p style={{textAlign: 'center',color:'black'}}>At SH, we strive to give our students the best experience in
                        hospitality studies in the country, including Hospitality, Culinary Arts, Tourism Studies, and
                        Event Management.</p>
                    <p style={{textAlign: 'center',color:'black'}}>
                        More than being just a higher educational institute. We advocate the dedication and sincerity
                        toward hospitality nurturing elites in the industry with comprehensive teaching strategies.</p>
                    <p style={{textAlign: 'center',color:'black'}}>
                        More than being just a higher educational institute. We advocate the dedication and sincerity
                        toward hospitality nurturing elites in the industry with comprehensive teaching strategies.</p>
                </Grid>
            </Grid>
            {/*end about*/}

            {/*start vision & mission*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1}
                  style={{backgroundColor: '#C6ECE5', paddingBottom: '20px', marginTop: '50px',}}>

                <Grid item xs={12} sm={6} justifyContent="center"
                      alignItems="center">
                    <div style={{textAlign: 'center'}}>
                        <h1 style={{color: '#10728D'}}>VISION</h1>
                    </div>
                    <div style={{
                        backgroundImage: `url(${vision})`,
                        backgroundPosition: 'center',
                        // backgroundSize: 'cover',
                        backgroundSize: '56%',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <p style={{textAlign: 'center',color:'black'}}>At SH, we strive to give our students the best experience in
                            hospitality studies in the country, including Hospitality, Culinary Arts, Tourism Studies,
                            and
                            Event Management.</p>
                        <p style={{textAlign: 'center',color:'black'}}>
                            More than being just a higher educational institute. We advocate the dedication and
                            sincerity
                            toward hospitality nurturing elites in the industry with comprehensive teaching
                            strategies.</p>
                        <p style={{textAlign: 'center',color:'black'}}>
                            More than being just a higher educational institute. We advocate the dedication and
                            sincerity
                            toward hospitality nurturing elites in the industry with comprehensive teaching
                            strategies.</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div style={{textAlign: 'center'}}>
                        <h1 style={{color: '#10728D'}}>MISSION</h1>
                    </div>
                    <div style={{
                        backgroundImage: `url(${mission})`,
                        backgroundPosition: 'center',
                        // backgroundSize: 'cover',
                        backgroundSize: '56%',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <p style={{textAlign: 'center',color:'black'}}>At SH, we strive to give our students the best experience in
                            hospitality studies in the country, including Hospitality, Culinary Arts, Tourism Studies,
                            and
                            Event Management.</p>
                        <p style={{textAlign: 'center',color:'black'}}>
                            More than being just a higher educational institute. We advocate the dedication and
                            sincerity
                            toward hospitality nurturing elites in the industry with comprehensive teaching
                            strategies.</p>
                        <p style={{textAlign: 'center',color:'black'}}>
                            More than being just a higher educational institute. We advocate the dedication and
                            sincerity
                            toward hospitality nurturing elites in the industry with comprehensive teaching
                            strategies.</p>
                    </div>
                </Grid>
            </Grid>
            {/*end vission & mission*/}

            {/*Start Directors' board*/}
            <Grid>
                <Grid style={{paddingBottom: '20px', marginTop: '50px',}}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <Grid item>
                            <h1 style={{color: '#10728D'}}>BOARD OF DIRECTORS</h1>
                        </Grid>
                    </Grid>
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
                            <Grid item xs={12} sm={4}>
                                <img style={{width: "90%"}} src={boardMember} alt=""/>
                                <div style={{
                                    backgroundImage: `url(${nameTag})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                }}>
                                    <h5 style={{margin: 0, paddingTop: '5px', color: '#10728D'}}>CHAIRMAN</h5>
                                    <h6 style={{margin: 0, paddingBottom: '10px',color:'black'}}>Mr.Sarath Kumara</h6>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <img style={{width: "90%"}} src={boardMember} alt=""/>
                                <div style={{
                                    backgroundImage: `url(${nameTag})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                }}>
                                    <h5 style={{margin: 0, paddingTop: '5px', color: '#10728D'}}>CHAIRMAN</h5>
                                    <h6 style={{margin: 0, paddingBottom: '10px',color:'black'}}>Mr.Sarath Kumara</h6>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <img style={{width: "90%"}} src={boardMember} alt=""/>
                                <div style={{
                                    backgroundImage: `url(${nameTag})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                }}>
                                    <h5 style={{margin: 0, paddingTop: '5px', color: '#10728D'}}>CHAIRMAN</h5>
                                    <h6 style={{margin: 0, paddingBottom: '10px',color:'black'}}>Mr.Sarath Kumara</h6>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            {/*End Directors' board*/}

            {/*Start Brands*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1}
                  style={{backgroundColor: '#C6ECE5', paddingBottom: '20px', marginTop: '50px',}}>
                <Grid style={{paddingBottom: '20px', marginTop: '50px',}}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <Grid item>
                            <h1 style={{color: '#10728D'}}>OUR BRANDS</h1>
                        </Grid>
                    </Grid>
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
                            <Grid item xs={12} sm={3}>
                                <img style={{width: "90%"}} src={brand1} alt=""/>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <img style={{width: "90%"}} src={brand2} alt=""/>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <img style={{width: "90%"}} src={brand3} alt=""/>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <img style={{width: "90%"}} src={brand4} alt=""/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            {/*End Brands*/}
        </div>
    )
}

export default About;
