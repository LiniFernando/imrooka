import * as React from 'react';
import homeImage from "../img/news/slide.png";
import {Card, CardActionArea, CardContent, CardMedia, Grid} from "@mui/material";
import {COLORS as Color} from "../Common/Constant/Color";
import Tech from "../img/home/Technology.jpg";
import apparel from "../img/home/apparel.jpg";
import clinic from "../img/home/clinicSalon.jpg";
import products from "../img/home/products.jpeg";
import travel from "../img/home/travel.jpg";
import environment from "../img/home/environment&Farming.jpg";
import ngo from "../img/home/ngo.jpg";
import education from "../img/home/education.jpg";

const News = () => {
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
        {
            url: products,
            title: 'Products',
            discription: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            width: '40%',
        },
        {
            url: travel,
            title: 'Travel / Transport',
            discription: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            width: '30%',
        },
        {
            url: environment,
            title: 'Environment / Farming',
            discription: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            width: '30%',
        },
        {
            url: ngo,
            title: 'NGO',
            discription: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            width: '30%',
        },
        {
            url: education,
            title: 'Education',
            discription: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            width: '30%',
        },
    ];

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
                <h3 style={{color: 'black'}}>The World of Bee. A journey spanning over 100 years</h3>
                <h2 style={{color: Color.theme}}>LATEST NEWS</h2>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                    style={{paddingLeft: '10%', paddingRight: '10%', paddingBottom: 50}}
                >
                    {news.map((newsDetail) => (
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={newsDetail.url}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <h2 style={{color: Color.theme, margin: 0, fontFamily: 'Baskervville'}}>
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
                </Grid>
            </Grid>
            {/*end sectors*/}
        </div>
    )
}

export default News;
