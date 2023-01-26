import * as React from 'react';
import homeImage from "../img/home/Slider.png";
import about from "../img/home/welcome tile.png";
import sectors from "../img/home/Sectors.png";
import brand1 from "../img/home/logo1.png";
import brand2 from "../img/home/logo2.png";
import brand3 from "../img/home/logo3.png";
import brand4 from "../img/home/logo4.jpg";
import {Button, Grid, Container} from "@mui/material";


const Home = () => {
    return (
        <div style={{backgroundColor: '#FFFFFF',fontSize:' calc(10px + 2vmin)',
            color: 'white',marginTop: '80px'}}>
            <img style={{width: "100%"}} src={homeImage} alt=""/>
            {/*start about*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1} style={{marginTop: "20px"}}>
                <Grid item xs={12} sm={6}>
                    <div style={{textAlign: 'center'}}>
                        <h2 style={{color:'#000000'}}>WELCOME TO</h2>
                        <h1 style={{color: '#10728D'}}>BEE IN MIND</h1>
                    </div>
                    <p style={{textAlign: 'center',color:'#000000'}}>At SH, we strive to give our students the best experience in
                        hospitality studies in the country, including Hospitality, Culinary Arts, Tourism Studies, and
                        Event Management.</p>
                    <p style={{textAlign: 'center',color:'#000000'}}>
                        More than being just a higher educational institute. We advocate the dedication and sincerity
                        toward hospitality nurturing elites in the industry with comprehensive teaching strategies.</p>
                    <p style={{textAlign: 'center',color:'#000000'}}>
                        More than being just a higher educational institute. We advocate the dedication and sincerity
                        toward hospitality nurturing elites in the industry with comprehensive teaching strategies.</p>
                    <Button variant="contained" style={{backgroundColor: '#10728D', color: 'white'}}
                            onClick={() => {
                                // navigate('/about')
                            }}
                    >Explore Now</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img style={{width: "100%"}} src={about} alt=""/>
                </Grid>
            </Grid>
            {/*end about*/}

            {/*start sectors*/}
            <Grid style={{backgroundColor: '#C6ECE5',paddingBottom: '20px',marginTop: '50px',}}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item>
                        <h2 style={{color:'black'}}>LOREM IPSUM DOLOR SIT</h2>
                        <h1 style={{color: '#10728D'}}>BUSINESS SECTORS</h1>
                    </Grid>
                    <img style={{width: "90%"}} src={sectors} alt=""/>
                </Grid>
            </Grid>
            {/*end sectors*/}

            {/*Start Brands*/}
            <Grid>
                <Grid style={{paddingBottom: '20px',marginTop: '50px',}}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <Grid item>
                            <h2 style={{color:'black'}}>LOREM IPSUM DOLOR SIT</h2>
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

export default Home;
