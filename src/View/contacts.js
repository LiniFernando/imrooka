import * as React from 'react';
import homeImage from "../img/contact/contactSlide.jpg";
import {Button, Grid, Link, Typography} from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import {COLORS as Color} from "../Common/Constant/Color";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './css/career.css';

const Contacts = () => {
    const [message, setMessage] = React.useState("");
    const [subject, setSubject] = React.useState("");
    return (
        <div style={{
            backgroundColor: 'white', fontSize: ' calc(10px + 2vmin)',
            color: 'black', marginTop: '80px'
        }}>

            <div style={{backgroundColor: Color.theme}}>
                <img style={{width: "100%", height: '300px', objectFit: 'cover', opacity: 0.5}}
                     src={homeImage} alt=""/>
            </div>
            <h3 style={{color: Color.white, position: 'absolute', left: 0, right: 0, top: 100}}>Stay Connected With
                Us</h3>
            <h1 style={{
                color: Color.black,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 150,
                textShadow: '0 7px 7px white'
            }}>CONTACT US</h1>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
            >
                <Grid item
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={3} xs={10} md={5}>
                    <h2 style={{color: Color.theme}}>INQUIRE NOW</h2>
                    <OutlinedInput style={{
                        backgroundColor: Color.light,
                        width: '100%',
                        borderRadius: 10,
                        margin: '5px 0'
                    }}
                                   placeholder="First Name"/>
                    <OutlinedInput style={{
                        backgroundColor: Color.light,
                        width: '100%',
                        borderRadius: 10,
                        margin: '5px 0'
                    }}
                                   placeholder="Surname"/>
                    <OutlinedInput style={{
                        backgroundColor: Color.light,
                        width: '100%',
                        borderRadius: 10,
                        margin: '5px 0'
                    }}
                                   placeholder="Organization"/>
                    {/*<div style={{width: '100%'}}>*/}
                    <OutlinedInput style={{
                        backgroundColor: Color.light,
                        // width: '49%',
                        width: '100%',
                        borderRadius: 10,
                        margin: '5px 0'
                        // margin: '5px 5px 5px 0'
                    }}
                                   placeholder="Email"/>
                    <PhoneInput style={{
                        backgroundColor: Color.light,
                        // width: '49%',
                        width: '100%',
                        height: 50,
                        borderRadius: 10,
                        margin: '5px 0'
                        // margin: '5px 5px 5px 0'
                    }}
                                country={'lk'}
                        // value={this.state.phone}
                        // onChange={phone => this.setState({ phone })}
                    />
                    {/*<OutlinedInput style={{
                            backgroundColor: Color.light,
                            width: '49%',
                            borderRadius: 10,
                            margin: '5px 0 5px 5px'
                        }}
                                       placeholder="Telephone"/>*/}
                    {/*</div>*/}
                    <OutlinedInput style={{
                        backgroundColor: Color.light,
                        width: '100%',
                        borderRadius: 10,
                        margin: '5px 0'
                    }}
                                   placeholder="Subject"
                                   value={subject}
                                   onChange={(e) => setSubject(e.target.value)}/>
                    <OutlinedInput style={{
                        backgroundColor: Color.light,
                        width: '100%',
                        borderRadius: 10,
                        margin: '5px 0'
                    }} multiline
                                   rows={4}
                                   placeholder="Message"
                                   value={message}
                                   onChange={(e) => setMessage(e.target.value)}/>
                    <Button variant="contained" style={ButtonStyle} onClick={() => {
                        window.location.href = `mailto:info@imrookaglobalgroup.com?subject=${subject}&body=${message}`;
                    }}
                    >Contact Now</Button>
                </Grid>

                <Grid item justifyContent="center"
                      alignItems="center" xs={10} md={5} spacing={3}>
                    <Grid
                        container style={{
                        padding: '20px 0',
                        backgroundColor: Color.light,
                        borderRadius: '0 50px',
                        margin: '5px 0'
                    }}>
                        <Grid xs={12} item justifyContent="center">
                            <LocationOnIcon sx={{color: Color.theme, fontSize: 50}}/>
                        </Grid>
                        <Grid item justifyContent="center"
                              alignItems="center" xs={12}>
                            No: 99/01, Parakandeniya,
                            Imbulgoda, Sri Lanka
                        </Grid>
                    </Grid>
                    <Grid
                        container style={{
                        padding: '20px 0',
                        backgroundColor: Color.light,
                        borderRadius: '50px 0',
                        margin: '5px 0'
                    }}>
                        <Grid item justifyContent="center"
                              alignItems="center" xs={12}>
                            <EmailIcon sx={{color: Color.theme, fontSize: 50}}/>
                        </Grid>
                        <Grid item justifyContent="center"
                              alignItems="center" xs={12}>
                            info@imrookaglobalgroup.com
                        </Grid>
                    </Grid>
                    <Grid
                        container style={{
                        padding: '20px 0',
                        backgroundColor: Color.light,
                        borderRadius: '0 50px',
                        margin: '5px 0'
                    }}>
                        <Grid item justifyContent="center"
                              alignItems="center" xs={12}>
                            <PhoneIcon sx={{color: Color.theme, fontSize: 50}}/>
                        </Grid>
                        <Grid item justifyContent="center"
                              alignItems="center" xs={12}>
                            <Typography style={{color: Color.black, fontSize: 23}}> +65 93
                                52 35 00</Typography>
                            <Typography style={{color: Color.black, fontSize: 23}}> +94 773
                                631 343</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.086202234179!2d79.96851566618201!3d7.03611441489238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f91b752aa559%3A0x488ff29b094d8807!2sParakandeniya!5e0!3m2!1sen!2slk!4v1677677659704!5m2!1sen!2slk"
                width="600" height="450" style={{border: 0, width: '100%'}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            <h2 style={{color: Color.theme}}>Connect with us</h2>
            <p>We're always looking to connect with those who share an interest in a sustainable future.</p>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" style={{width: '100%', marginTop: '20px'}}>
                <LinkedInIcon sx={{color: Color.theme, fontSize: 40, margin: '0 10px'}}/>
                <TwitterIcon sx={{color: Color.theme, fontSize: 40, margin: '0 10px'}}/>
                <Link href="https://www.facebook.com/profile.php?id=100090551148484&is_tour_dismissed=true"
                      underline="none" color="inherit">
                    <FacebookIcon sx={{color: Color.theme, fontSize: 40, margin: '0 10px'}}/>
                </Link>
                <Link href="https://instagram.com/imrooka_global_group?igshid=YmMyMTA2M2Y=" underline="none"
                      color="inherit">
                    <InstagramIcon sx={{color: Color.theme, fontSize: 40, margin: '0 10px'}}/>
                </Link>
                <YouTubeIcon sx={{color: Color.theme, fontSize: 40, margin: '0 10px'}}/>
            </Grid>
        </div>
    )
}
const ButtonStyle = {
    backgroundColor: Color.theme,
    margin: '5px 0 20px 0',
    color: Color.white,
    fontFamily: 'Baskervville',
    fontSize: 15,
    padding: 15,
    borderRadius: 100
};

export default Contacts;
