import * as React from 'react';
import homeImage from "../img/home/Slider.png";
import about from "../img/home/welcome tile.png";
import brand1 from "../img/home/logo1.png";
import brand2 from "../img/home/logo2.png";
import brand3 from "../img/home/logo3.png";
import brand4 from "../img/home/logo4.jpg";
import Tech from "../img/home/Technology.jpg";
import apparel from "../img/home/apparel.jpg";
import clinic from "../img/home/clinicSalon.jpg";
import products from "../img/home/products.jpeg";
import travel from "../img/home/travel.jpg";
import environment from "../img/home/environment&Farming.jpg";
import ngo from "../img/home/ngo.jpg";
import education from "../img/home/education.jpg";

import {Button, Grid, Container, Typography, Card, CardActionArea, CardMedia, CardContent} from "@mui/material";
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import {COLORS as Color} from "../Common/Constant/Color";
import {useNavigate} from "react-router-dom";


const Home = () => {
    const brands = [
        {
            url: brand1,
            title: 'brand1',
            width: '40%',
        },
        {
            url: brand2,
            title: 'brand2',
            width: '30%',
        },
        {
            url: brand3,
            title: 'brand3',
            width: '30%',
        },
        {
            url: brand4,
            title: 'brand4',
            width: '30%',
        },
    ];

    const sectors = [
        {
            url: Tech,
            title: 'Technology & Research',
            width: '40%',
        },
        {
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
            url: products,
            title: 'Products',
            width: '40%',
        },
        {
            url: travel,
            title: 'Travel / Transport',
            width: '30%',
        },
        {
            url: environment,
            title: 'Environment / Farming',
            width: '30%',
        },
        {
            url: ngo,
            title: 'NGO',
            width: '30%',
        },
        {
            url: education,
            title: 'Education',
            width: '30%',
        },
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
            <img style={{width: "100%"}} src={homeImage} alt=""/>
            {/*start about*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1} style={{marginTop: "20px"}}>
                <Grid item xs={12} sm={6}>
                    <div style={{textAlign: 'center'}}>
                        <h3 style={{color: Color.black}}>WELCOME TO</h3>
                        <h2 style={{color: Color.theme}}>BEE IN MIND</h2>
                    </div>
                    <p style={{textAlign: 'center', color: Color.black, paddingLeft: 20, paddingRight: 20}}>At SH, we
                        strive to give our students the best
                        experience in
                        hospitality studies in the country, including Hospitality, Culinary Arts, Tourism Studies, and
                        Event Management.</p>
                    <p style={{textAlign: 'center', color: Color.black, paddingLeft: 20, paddingRight: 20}}>
                        More than being just a higher educational institute. We advocate the dedication and sincerity
                        toward hospitality nurturing elites in the industry with comprehensive teaching strategies.</p>
                    <p style={{textAlign: 'center', color: Color.black, paddingLeft: 20, paddingRight: 20}}>
                        More than being just a higher educational institute. We advocate the dedication and sincerity
                        toward hospitality nurturing elites in the industry with comprehensive teaching strategies.</p>
                    <Button variant="contained" style={ButtonStyle} onClick={() => {
                        navigate('/about')
                    }}
                    >Explore Now</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img style={{width: "90%"}} src={about} alt=""/>
                </Grid>
            </Grid>
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
                        <h3 style={{color: 'black'}}>LOREM IPSUM DOLOR SIT</h3>
                        <h2 style={{color: Color.theme}}>BUSINESS SECTORS</h2>
                    </Grid>
                    <Grid style={{alignItem: 'center'}} container spacing={1}>
                        <Grid item xs={12}>
                            <Box sx={{
                                justifyContent: 'center',
                                display: 'flex',
                                flexWrap: 'wrap',
                                minWidth: 300,
                                width: '100%'
                            }}>
                                {sectors.map((image) => (
                                    <ImageButton
                                        focusRipple
                                        key={image.title}
                                        style={{
                                            width: '200px',
                                            borderRadius: '1000px',
                                            margin: 10
                                        }}
                                    >
                                        <ImageSrc
                                            style={{backgroundImage: `url(${image.url})`, borderRadius: '1000px'}}/>
                                        <ImageBackdrop style={{borderRadius: '1000px', height: '200px',}}
                                                       className="MuiImageBackdrop-root"/>
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
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                    <img style={{width: "90%"}} src={sectors} alt=""/>
                </Grid>
            </Grid>
            {/*end sectors*/}

            {/*Start Brands*/}
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
                            <h3 style={{color: 'black'}}>LOREM IPSUM DOLOR SIT</h3>
                            <h2 style={{color: Color.theme}}>OUR BRANDS</h2>
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
                            {brands.map((image) => (
                                <Grid item xs={12} sm={3}>
                                    <img style={{width: "90%"}} src={image.url} alt=""/>
                                </Grid>

                            ))}
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            {/*End Brands*/}

            {/*start news*/}
            <Grid style={{backgroundColor: Color.light, paddingBottom: '20px', marginTop: '50px',}}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item>
                        <h3 style={{color: 'black'}}>LOREM IPSUM DOLOR SIT</h3>
                        <h2 style={{color: Color.theme}}>LATEST NEWS</h2>
                    </Grid>
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
                                <Grid item xs={12} sm={4} style={{marginBottom: 20}}>
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
                            <Button variant="contained" style={ButtonStyle} onClick={() => {
                                navigate('/news')
                            }}
                            >More News</Button>
                        </Grid>
                    </Grid>
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
