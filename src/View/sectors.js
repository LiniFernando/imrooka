import * as React from 'react';
import homeImage from "../img/sectors/slide.png";
import {Grid, Typography} from "@mui/material";
import {COLORS as Color} from "../Common/Constant/Color";
import Tech from "../img/home/Technology.jpg";
import apparel from "../img/home/apparel.jpg";
import clinic from "../img/home/clinicSalon.jpg";
import products from "../img/home/products.jpeg";
import travel from "../img/home/travel.jpg";
import environment from "../img/home/environment&Farming.jpg";
import ngo from "../img/home/ngo.jpg";
import education from "../img/home/education.jpg";
import {styled} from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";

const Sectors = () => {
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
    return (
        <div style={{
            backgroundColor: 'white', fontSize: ' calc(10px + 2vmin)',
            color: 'white', marginTop: '80px'
        }}>
            <img style={{width: "100%"}} src={homeImage} alt=""/>
            <Grid item
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1} style={{marginTop: "20px"}} xs={6}>
                <h2 style={{color: Color.theme}}>OUR DIVERSITY</h2>
                <h3 style={{color: 'black'}}>The World of Bee. A journey spanning over 100 years</h3>
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
            </Grid>
            {/*end sectors*/}
        </div>
    )
}

export default Sectors;
