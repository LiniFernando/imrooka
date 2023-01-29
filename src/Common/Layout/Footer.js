import {Container, Grid, Link, Typography} from "@mui/material";
import * as React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LOGO from "../../img/home/IMROOKA GLOBAL GROUP LOGO.png";
import facebook from "../../img/home/facebook.png";
import youtube from "../../img/home/youtube.png";
import twitter from "../../img/home/twitter.png";
import {COLORS as Color} from "../Constant/Color";

const Footer = () => {
    return (
        <footer style={{marginTop: '25px', backgroundColor: Color.theme, boxShadow: '0px 0px 50px #000000'}}>
            <Grid style={{maxWidth: '100%'}}>
                <Grid
                    container
                    direction="row"
                    spacing={3}
                >
                    <Grid container
                          direction="column"
                          justifyContent="center"
                          alignItems="center" item xs={12} sm={3} style={{textAlign: 'left', width: '100%'}}>
                        <img src={LOGO} style={{width: '80%'}} alt={'logo'}/>
                        <Grid container
                              direction="row"
                              justifyContent="center"
                              alignItems="center" style={{width: '80%', marginTop: '20px'}}>
                            <Grid item justifyContent="center"
                                  alignItems="center" xs={12} sm={4}
                                  style={{display: 'flex', paddingBottom: '10px'}}>
                                <img src={facebook} style={{width: '80%'}} alt={'logo'}/>
                            </Grid>
                            <Grid item justifyContent="center"
                                  alignItems="center" xs={12} sm={4}
                                  style={{display: 'flex', paddingBottom: '10px'}}>
                                <img src={youtube} style={{width: '80%'}} alt={'logo'}/>
                            </Grid>
                            <Grid item justifyContent="center"
                                  alignItems="center" xs={12} sm={4}
                                  style={{display: 'flex', paddingBottom: '10px'}}>
                                <img src={twitter} style={{width: '80%'}} alt={'logo'}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{textAlign: 'left'}}>
                        <h2 style={{color: Color.white}}>QUICK LINKS</h2>
                        <Container
                            style={{display: 'flex', flexDirection: 'column', color: Color.regular, fontSize: 20}}>
                            <Link href="" underline="none" color="inherit">Home</Link>
                            <Link href="/about" underline="none" color="inherit">About Us</Link>
                            <Link href="/sectors" underline="none" color="inherit">Sectors</Link>
                            <Link href="/investorRelations" underline="none" color="inherit">Investor Relations</Link>
                            <Link href="/careers" underline="none" color="inherit">Careers</Link>
                            <Link href="/news" underline="none" color="inherit">News</Link>
                            <Link href="/contact" underline="none" color="inherit">Contact Us</Link>
                        </Container>
                    </Grid>

                    <Grid item xs={12} sm={3} style={{textAlign: 'left'}}>
                        <h2 style={{color: Color.white}}>OUR SECTORS</h2>
                        <Container
                            style={{display: 'flex', flexDirection: 'column', color: Color.regular, fontSize: 20}}>
                            <Link href="" underline="none" color="inherit">Technology &
                                Research</Link>
                            <Link href="" underline="none" color="inherit">Apparel</Link>
                            <Link href="" underline="none" color="inherit">Clinic & Saloon</Link>
                            <Link href="" underline="none" color="inherit">Products</Link>
                            <Link href="" underline="none" color="inherit">Travel / Transport</Link>
                            <Link href="" underline="none" color="inherit">Environment/
                                Farming</Link>
                            <Link href="" underline="none" color="inherit">NGO</Link>
                            <Link href="" underline="none" color="inherit">Education</Link>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={4} style={{textAlign: 'left'}}>
                        <Container style={{display: 'flex', padding: '20px 0'}}>
                            <LocationOnIcon sx={{color: Color.white, fontSize: 50}}/>
                            <Typography style={{color: Color.regular, fontSize: 20}}> Black Bridge, Orutota Rd, Gampaha,
                                Sri
                                Lanka</Typography>
                        </Container>
                        <Container style={{display: 'flex', padding: '20px 0'}}>
                            <EmailIcon sx={{color: Color.white, fontSize: 50}}/>
                            <Typography style={{color: Color.regular, fontSize: 20}}> info@beeinmind.com</Typography>
                        </Container>
                        <Container style={{display: 'flex', padding: '20px 0'}}>
                            <PhoneIcon sx={{color: Color.white, fontSize: 50}}/>
                            <Typography style={{color: Color.regular, fontSize: 20}}> +94 123 123 123</Typography>
                        </Container>
                    </Grid>
                </Grid>
            </Grid>
            <Container style={{backgroundColor: Color.dark, minWidth: '100%', margin: '10px 0 0 0'}}>
                <Typography style={{color: Color.white, width: '100%'}}>© All Rights Reserved</Typography>
            </Container>
        </footer>
    )
}

export default Footer;
