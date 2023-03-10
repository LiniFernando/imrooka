import {Container, Grid, Link, Typography} from "@mui/material";
import * as React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LOGO from "../../img/home/IMROOKA GLOBAL GROUP LOGO.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {COLORS as Color} from "../Constant/Color";

const Footer = () => {
    return (
        <footer style={{marginTop: '25px', backgroundColor: Color.theme, boxShadow: '0px 0px 50px #000000'}}>
            <Grid style={{maxWidth: '100%'}}>
                <Grid
                    container
                    direction="row"
                    spacing={1}
                >
                    <Grid container
                          direction="column"
                          justifyContent="center"
                          alignItems="center" item xs={12} sm={5} md={2} style={{textAlign: 'left', width: '100%'}}>
                        <img src={LOGO} style={{width: '80%'}} alt={'logo'}/>

                        <Grid container
                              direction="row"
                              justifyContent="center"
                              alignItems="center" style={{width: '80%', marginTop: '20px'}}>
                            <LinkedInIcon sx={{color: Color.white, fontSize: 40, margin: '0 5px'}}/>
                            <TwitterIcon sx={{color: Color.white, fontSize: 40, margin: '0 5px'}}/>
                            <Link href="https://www.facebook.com/profile.php?id=100090551148484&is_tour_dismissed=true"
                                  underline="none" color="inherit">
                                <FacebookIcon sx={{color: Color.white, fontSize: 40, margin: '0 5px'}}/>
                            </Link>
                            <Link href="https://instagram.com/imrooka_global_group?igshid=YmMyMTA2M2Y=" underline="none"
                                  color="inherit">
                                <InstagramIcon sx={{color: Color.white, fontSize: 40, margin: '0 5px'}}/>
                            </Link>
                            <YouTubeIcon sx={{color: Color.white, fontSize: 40, margin: '0 5px'}}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={7} md={2}>
                        <h2 style={{color: Color.white}}>QUICK LINKS</h2>
                        <Container
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                color: Color.regular,
                                fontSize: 20,
                                fontFamily: 'Roboto'
                            }}>
                            <i>
                                <Link href="/" underline="none" color="inherit">Home</Link>
                            </i>
                            <i>
                                <Link href="/about" underline="none" color="inherit">About Us</Link>
                            </i>
                            <i>
                                <Link href="/sectors" underline="none" color="inherit">Sectors</Link>
                            </i>
                            <i>
                                {/*<Link href="/investorRelations" underline="none" color="inherit">Investor Relations</Link>*/}
                                <Link href="/career" underline="none" color="inherit">Careers</Link>
                            </i>
                            {/*<Link href="/news" underline="none" color="inherit">News</Link>*/}
                            <i>
                                <Link href="/contact" underline="none" color="inherit">Contact Us</Link>
                            </i>
                        </Container>
                    </Grid>

                    <Grid item xs={12} sm={5} md={4}>
                        <h2 style={{color: Color.white}}>OUR SECTORS</h2>
                        <Container
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                color: Color.regular,
                                fontSize: 20,
                                fontFamily: 'Roboto'
                            }}>
                            <i>
                                <Link href="/sectors/Ayurvedic & Beauty" underline="none" color="inherit">Ayurvedic &
                                    Beauty</Link>
                            </i>
                            <i>
                                <Link href="/sectors/Products" underline="none" color="inherit">Products</Link>
                            </i>
                            <i>
                                <Link href="/sectors/Technology & Research" underline="none" color="inherit">Technology
                                    &
                                    Research</Link>
                            </i>
                            <i>
                                <Link href="/sectors/Environment & Farming" underline="none" color="inherit">Environment
                                    &
                                    Farming</Link>
                            </i>
                            <i>
                                <Link href="/sectors/NGO" underline="none" color="inherit">NGO</Link>
                                {/*<Link href="" underline="none" color="inherit">Education</Link>*/}
                                {/*<Link href="" underline="none" color="inherit">Apparel</Link>*/}
                                {/*<Link href="" underline="none" color="inherit">Travel / Transport</Link>*/}
                            </i>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={7} md={4}>
                        <Grid container
                              direction="row" style={{padding: '20px 0'}}>
                            <Grid item xs={12} sm={2}>
                                <LocationOnIcon sx={{color: Color.white, fontSize: 50}}/>
                            </Grid>
                            <Grid item xs={12} sm={10}
                                  style={{color: Color.regular, fontSize: 20, fontFamily: 'Roboto'}}><i>Colombo, Sri
                                Lanka</i></Grid>
                        </Grid>
                        <Grid container
                              direction="row" style={{padding: '20px 0'}}>
                            <Grid item xs={12} sm={2}>
                                <EmailIcon sx={{color: Color.white, fontSize: 50}}/>
                            </Grid>
                            <Grid item xs={12} sm={10}
                                  style={{
                                      color: Color.regular,
                                      fontSize: 20,
                                      fontFamily: 'Roboto'
                                  }}><i>info@imrookaglobalgroup.com</i>
                            </Grid>
                        </Grid>
                        <Grid container
                              direction="row" style={{padding: '20px 0'}}>
                            <Grid item xs={12} sm={2}>
                                <PhoneIcon sx={{color: Color.white, fontSize: 50}}/>
                            </Grid>
                            <Grid item xs={12} sm={10}
                                  style={{color: Color.regular, fontSize: 20}}>
                                <Typography style={{color: Color.regular, fontSize: 20, fontFamily: 'Roboto'}}><i>+65 93
                                    52 35 00</i></Typography>
                                <Typography style={{color: Color.regular, fontSize: 20, fontFamily: 'Roboto'}}> <i>+94
                                    773
                                    631 343</i></Typography>
                            </Grid>
                        </Grid>
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
