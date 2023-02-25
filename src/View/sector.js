import * as React from 'react';
import homeImage from "../img/sectors/slide.png";
import services from "../img/sectors/services.png";
import director from "../img/about/boardMember.jpg";
import {Card, CardActionArea, CardContent, CardMedia, Container, Grid} from "@mui/material";
import {COLORS as Color} from "../Common/Constant/Color";
import Ayur from "../img/home/ayur&Beauty.jpg";
import Tech from "../img/home/Technology.jpg";
import apparel from "../img/home/apparel.jpg";
import clinic from "../img/home/clinicSalon.jpg";
import products from "../img/home/products.jpeg";
import environment from "../img/home/environment&Farming.jpg";
import ngo from "../img/home/ngo.jpg";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import about from "../img/home/welcome tile.png";
import {AnimationOnScroll} from "react-animation-on-scroll";
import brand1 from "../img/home/logo1.png";
import brand2 from "../img/home/logo2.png";
import brand3 from "../img/home/logo3.png";
import brand4 from "../img/home/logo4.jpg";
import brand5 from "../img/home/logo5.jpg";
import brand6 from "../img/home/logo6.jpg";

const Sector = () => {
    let {name} = useParams();
    const [homeImg, setHomeImg] = React.useState();
    useEffect(() => {
        switch (name) {
            case 'Ayurvedic & Beauty':
                setHomeImg(Ayur);
                break;
            case 'Products':
                setHomeImg(products);
                break;
            case 'Technology & Research':
                setHomeImg(Tech);
                break;
            case 'Environment & Farming':
                setHomeImg(environment);
                break;
            case 'NGO':
                setHomeImg(ngo);
                break;
            default:
                setHomeImg(homeImage);
        }
    }, []);
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
    ];
    const companies = [
        {
            url: Tech,
            title: 'Technology & Research',
            discription: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            width: '40%',
        },
        {
            url: apparel,
            title: 'Apparel',
            discription: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            width: '30%',
        },
        {
            url: clinic,
            title: 'Clinic & Saloon',
            discription: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            width: '30%',
        },
    ];
    return (
        <div style={{
            backgroundColor: 'white', fontSize: ' calc(10px + 2vmin)',
            color: 'white', marginTop: '80px'
        }}>
            <div style={{backgroundColor: Color.theme}}>
                <img style={{width: "100%", height: '300px', objectFit: 'cover', opacity: 0.5}}
                     src={homeImg} alt=""/>
            </div>
            <h3 style={{color: Color.white, position: 'absolute', left: 0, right: 0, top: 100}}>The World of Bee. A
                journey spanning over 100 years</h3>
            <h1 style={{
                color: Color.black,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 150,
                textShadow: '0 7px 7px white'
            }}>{name}</h1>
            {/*<AnimationOnScroll animateIn="animate__fadeInUp">*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1} style={{marginTop: "20px"}}>
                <Grid item xs={12} sm={6}>
                    <div style={{textAlign: 'center'}}>
                        <h2 style={{color: Color.theme}}>{name}</h2>
                    </div>
                    <p style={{textAlign: 'center', color: Color.black, paddingLeft: 20, paddingRight: 20}}>At SH,
                        we
                        strive to give our students the best
                        experience in
                        hospitality studies in the country, including Hospitality, Culinary Arts, Tourism Studies,
                        and
                        Event Management.</p>
                    <p style={{textAlign: 'center', color: Color.black, paddingLeft: 20, paddingRight: 20}}>
                        More than being just a higher educational institute. We advocate the dedication and
                        sincerity
                        toward hospitality nurturing elites in the industry with comprehensive teaching
                        strategies.</p>
                    <p style={{textAlign: 'center', color: Color.black, paddingLeft: 20, paddingRight: 20}}>
                        More than being just a higher educational institute. We advocate the dedication and
                        sincerity
                        toward hospitality nurturing elites in the industry with comprehensive teaching
                        strategies.</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img style={{width: "90%"}} src={about} alt=""/>
                </Grid>
            </Grid>
            {/*</AnimationOnScroll>*/}
            {/*end sectors*/}

            <Grid style={{paddingBottom: '20px', marginTop: '50px',}}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item>
                        <AnimationOnScroll animateIn="animate__fadeInRight">
                            <h2 style={{color: Color.theme}}>OUR SERVICES</h2>
                        </AnimationOnScroll>
                    </Grid>
                    <img style={{width: "75%"}} src={services} alt=""/>
                </Grid>
            </Grid>

            {/*start Brands*/}
            <Grid>
                <Grid style={{backgroundColor: Color.light, paddingBottom: '20px', marginTop: '50px',}}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <Grid item>
                            <h2 style={{color: Color.theme}}>OUR BRANDS</h2>
                        </Grid>
                    </Grid>
                    <Container style={{
                        marginBottom: 10, width: '100%',
                    }}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={3}
                        >
                            {brands.map((image) => (
                                <Grid item xs={12} sm={2} key={image.url}>
                                    <img style={{width: "100%"}} src={image.url} alt=""/>
                                </Grid>

                            ))}
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            {/*end brands*/}

            {/*start companies*/}
            <Grid style={{paddingBottom: '20px', paddingTop: '20px',}}>
                <Grid item
                      justifyContent="center"
                      alignItems="center"
                      xs={6}>
                    <h2 style={{color: Color.theme}}>OUR COMPANIES</h2>
                    <Grid style={{alignItem: 'center'}} container spacing={1}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={3}
                            style={{paddingLeft: '10%', paddingRight: '10%', paddingBottom: 50}}
                        >
                            {companies.map((companiesDetail) => (
                                <Grid key={companiesDetail.url} item xs={12} sm={4} style={{marginBottom: 20}}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={companiesDetail.url}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <h2 style={{
                                                    color: Color.theme,
                                                    margin: 0,
                                                    fontFamily: 'Baskervville'
                                                }}>
                                                    ASDF(Pvt)Ltd
                                                </h2>
                                                <h2 style={{fontFamily: 'Baskervville'}}>
                                                    {companiesDetail.discription}
                                                </h2>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/*end companies*/}

            {/*director*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1} style={{backgroundColor: Color.light, marginTop: "20px"}}>
                <Grid item xs={12} sm={6}>
                    <img style={{width: "40%"}} src={director} alt=""/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div style={{
                        backgroundColor: Color.regular,
                        borderRadius: 100,
                        width: '70%'
                    }}>
                        <h5 style={{
                            margin: 0,
                            padding: '10px 0',
                            color: 'black'
                        }}>Mr.Saman Kumara</h5>
                        <h5 style={{
                            margin: 0,
                            padding: '10px 0',
                            color: Color.theme
                        }}>Managing Director</h5>
                    </div>
                </Grid>

            </Grid>

        </div>
    )
}

export default Sector;
