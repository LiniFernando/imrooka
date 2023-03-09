import * as React from 'react';
import Carousel from 'better-react-carousel'
import about from "../img/home/welcome tile.png";
import brand1 from "../img/home/logo1.png";
import brand2 from "../img/home/logo2.png";
import brand3 from "../img/home/logo3.png";
import brand4 from "../img/home/logo4.jpg";
import brand5 from "../img/home/logo5.jpg";
import brand6 from "../img/home/logo6.jpg";
import Homepage from "../img/home/Homepage.jpg";
import slide2 from "../img/home/slide2.jpg";
import slide3 from "../img/home/slide3.png";
import slide4 from "../img/home/slide4.jpg";
import slide5 from "../img/home/slide5.jpg";
import Ayur from "../img/home/ayur&Beauty.jpg";
import Tech from "../img/home/Technology.jpg";
import apparel from "../img/home/apparel.jpg";
import clinic from "../img/home/clinicSalon.jpg";
import products from "../img/home/products.jpeg";
import environment from "../img/home/environment&Farming.jpg";
import ngo from "../img/home/ngo.jpg";
import {Button, Grid, Container, Typography, Card, CardActionArea, CardMedia, CardContent} from "@mui/material";
import {styled} from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import {COLORS as Color} from "../Common/Constant/Color";
import {useNavigate} from "react-router-dom";
import {AnimationOnScroll} from 'react-animation-on-scroll';

const Home = () => {
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
    const mainSliders = [
        {
            url: Homepage,
            title: 'brand1',
            width: '20%',
        },
        {
            url: slide2,
            title: 'brand2',
            width: '20%',
        },
        {
            url: slide3,
            title: 'brand3',
            width: '20%',
        },
        {
            url: slide4,
            title: 'brand4',
            width: '20%',
        },
        {
            url: slide5,
            title: 'brand5',
            width: '20%',
        },
    ];
    const sectors = [
        {
            url: Ayur,
            title: 'Ayurvedic & Beauty',
            width: '30%',
        },
        {
            url: products,
            title: 'Products',
            width: '30%',
        },
        {
            url: Tech,
            title: 'Technology & Research',
            width: '30%',
        },
        {
            url: environment,
            title: 'Environment & Farming',
            width: '30%',
        },
        {
            url: ngo,
            title: 'NGO',
            width: '30%',
        },
        /*{
            url: apparel,
            title: 'Apparel',
            width: '30%',
        },
        {
            url: clinic,
            title: 'Clinic & Saloon',
            width: '30%',
        },
        {
            url: travel,
            title: 'Travel / Transport',
            width: '30%',
        },
        {
            url: education,
            title: 'Education',
            width: '30%',
        },*/
    ];
    const news = [
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

    const ImageButton = styled(ButtonBase)(({theme}) => ({
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('sm')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &.Mui-focusVisible': {
            zIndex: 1,
            '& .MuiImageBackdrop-root': {
                opacity: 0.15,
            },
            '& .MuiImageMarked-root': {
                opacity: 0,
            },
            '& .MuiTypography-root': {
                border: '4px solid currentColor',
            },
        },
    }));

    const ImageSrc = styled('span')({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    });

    const Image = styled('span')(({theme}) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    }));

    const ImageBackdrop = styled('span')(({theme}) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    }));

    const ImageMarked = styled('span')(({theme}) => ({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    }));
    const navigate = useNavigate();
    return (
        <div style={{
            backgroundColor: Color.white, fontSize: ' calc(10px + 2vmin)',
            color: 'white', marginTop: '80px'
        }}>
            <div style={{backgroundColor: Color.theme}}>

                <Carousel cols={1} rows={1} gap={0} loop>
                    {mainSliders.map((image) => (
                        <Carousel.Item style={{marginLeft: '0 !important'}}>

                            <img style={{width: "100%", height: '500px', objectFit: 'cover', opacity: 0.5}}
                                 src={image.url} alt=""/>
                            {/*<img style={{width: "100%"}} src={image.url} alt=""/>*/}

                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <h3 style={{color: Color.white, position: 'absolute', left: 0, right: 0, top: 100}}>
                Pioneering the way for sustainable and eco-friendly living.</h3>
            <h1 style={{
                color: Color.black,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 150,
                textShadow: '0 7px 7px white',
                textAlign: 'right',
                marginRight: 45
            }}>Pioneering</h1>
            <h1 style={{
                color: Color.black,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 220,
                textShadow: '0 7px 7px white',
                textAlign: 'right',
                marginRight: 45
            }}>
                The Way For </h1>
            <h1 style={{
                color: Color.black,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 290,
                textShadow: '0 7px 7px white',
                textAlign: 'right',
                marginRight: 45
            }}>
                Sustainable And</h1>
            <h1 style={{
                color: Color.black,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 360,
                textShadow: '0 7px 7px white',
                textAlign: 'right',
                marginRight: 45
            }}>
                Eco-Friendly Living</h1>
            {/*<img style={{width: "100%"}} src={homeImage} alt=""/>*/}
            {/*start about*/}
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <Grid container
                      direction="row"
                      justifyContent="center"
                      alignItems="center" spacing={1} style={{marginTop: "20px"}}>
                    <Grid item xs={12} sm={6}>
                        <div style={{textAlign: 'center'}}>

                            <h3 style={{color: Color.black}}>WELCOME TO</h3>

                            <h2 style={{color: Color.theme}}>IMROOKA GLOBAL GROUP</h2>
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
                        <Button variant="contained" style={ButtonStyle} onClick={() => {
                            window.scrollTo(0, 0);
                            navigate('/about')
                        }}
                        >Explore Now</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img style={{width: "90%"}} src={about} alt=""/>
                    </Grid>
                </Grid>
            </AnimationOnScroll>
            {/*end about*/}

            {/*start sectors*/}
            <Grid style={{backgroundColor: Color.light, paddingBottom: '20px', marginTop: '50px',}}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item>
                        <AnimationOnScroll animateIn="animate__fadeInLeft">
                            <h3 style={{color: 'black'}}>LOREM IPSUM DOLOR SIT</h3>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInRight">
                            <h2 style={{color: Color.theme}}>BUSINESS SECTORS</h2>
                        </AnimationOnScroll>
                    </Grid>
                    <AnimationOnScroll animateIn="animate__fadeIn" style={{width: '100%'}}>
                        <Grid sx={{
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }} container spacing={1}>
                            {sectors.map((image) => (
                                <Grid item xs={12} sm={4}>
                                    <ImageButton
                                        focusRipple
                                        key={image.title}
                                        style={{
                                            width: '100%',
                                        }}
                                        onClick={() => {
                                            window.scrollTo(0, 0);
                                            navigate(`/sectors/${image.title}`)
                                        }}
                                    >
                                        <ImageSrc style={{backgroundImage: `url(${image.url})`}}/>
                                        <ImageBackdrop className="MuiImageBackdrop-root"/>
                                        <Image>
                                            <Typography
                                                component="span"
                                                variant="subtitle1"
                                                color="inherit"
                                                sx={{
                                                    position: 'relative',
                                                    p: 4,
                                                    pt: 2,
                                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                                }}
                                            >
                                                {image.title}
                                                <ImageMarked className="MuiImageMarked-root"/>
                                            </Typography>
                                        </Image>
                                    </ImageButton>
                                </Grid>
                            ))}
                        </Grid>
                    </AnimationOnScroll>
                </Grid>
            </Grid>
            {/*end sectors*/}

            {/*Start Companies*/}
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
                            <AnimationOnScroll animateIn="animate__fadeInLeft">
                                <h3 style={{color: 'black'}}>LOREM IPSUM DOLOR SIT</h3>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInRight">
                                <h2 style={{color: Color.theme}}>OUR COMPANIES</h2>
                            </AnimationOnScroll>
                        </Grid>
                    </Grid>
                    <AnimationOnScroll animateIn="animate__fadeIn" style={{width: '100%'}}>
                        <Container style={{
                            marginBottom: 10, width: '100%',
                        }}>
                            <Carousel cols={1} rows={1} gap={10} loop>
                                <Carousel.Item>
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
                                            <Grid item xs={12} sm={2} key={image.url}>
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
            {/*End Companies*/}

            {/*Start Brands*/}
            <Grid style={{backgroundColor: Color.light, paddingBottom: '20px', paddingTop: '20px',}}>
                <Grid style={{paddingBottom: '20px', marginTop: '50px',}}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <Grid item>
                            <AnimationOnScroll animateIn="animate__fadeInLeft">
                                <h3 style={{color: 'black'}}>LOREM IPSUM DOLOR SIT</h3>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInRight">
                                <h2 style={{color: Color.theme}}>OUR BRANDS</h2>
                            </AnimationOnScroll>
                        </Grid>
                    </Grid>
                    <AnimationOnScroll animateIn="animate__fadeIn" style={{width: '100%'}}>
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
                    </AnimationOnScroll>
                </Grid>
            </Grid>
            {/*End Brands*/}

            {/*start news*/}
            <Grid>
                <Grid item
                      justifyContent="center"
                      alignItems="center"
                    // spacing={1}
                      xs={6}>
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <h3 style={{color: 'black'}}>LOREM IPSUM DOLOR SIT</h3>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInRight">
                        <h2 style={{color: Color.theme}}>LATEST NEWS</h2>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <Grid style={{alignItem: 'center'}} container spacing={1}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={3}
                                style={{paddingLeft: '10%', paddingRight: '10%', paddingBottom: 50}}
                            >
                                {news.map((newsDetail) => (
                                    <Grid key={newsDetail.url} item xs={12} sm={4} style={{marginBottom: 20}}>
                                        <Card>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={newsDetail.url}
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <h2 style={{
                                                        color: Color.theme,
                                                        margin: 0,
                                                        fontFamily: 'Baskervville'
                                                    }}>
                                                        {newsDetail.title}
                                                    </h2>
                                                    <h2 style={{fontFamily: 'Baskervville'}}>
                                                        {newsDetail.discription}
                                                    </h2>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))}
                                {/*<Button variant="contained" style={ButtonStyle} onClick={() => {
                                navigate('/news')
                            }}
                            >More News</Button>*/}
                            </Grid>
                        </Grid>
                    </AnimationOnScroll>
                </Grid>
            </Grid>
            {/*end news*/}
        </div>
    )
}

const ButtonStyle = {
    backgroundColor: Color.theme,
    color: Color.white,
    fontFamily: 'Baskervville',
    fontSize: 15,
    padding: 15,
    borderRadius: 100
};

export default Home;
