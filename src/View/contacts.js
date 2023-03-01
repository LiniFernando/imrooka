import * as React from 'react';
import homeImage from "../img/contact/contactSlide.jpg";
import {Button, Container, Grid, Typography} from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import {COLORS as Color} from "../Common/Constant/Color";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Contacts = () => {
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
                      spacing={3} xs={10} sm={5}>
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
                    <div style={{width: '100%'}}>
                        <OutlinedInput style={{
                            backgroundColor: Color.light,
                            width: '49%',
                            borderRadius: 10,
                            margin: '5px 5px 5px 0'
                        }}
                                       placeholder="Email"/>
                        <OutlinedInput style={{
                            backgroundColor: Color.light,
                            width: '49%',
                            borderRadius: 10,
                            margin: '5px 0 5px 5px'
                        }}
                                       placeholder="Telephone"/>
                    </div>
                    <OutlinedInput style={{
                        backgroundColor: Color.light,
                        width: '100%',
                        borderRadius: 10,
                        margin: '5px 0'
                    }}
                                   placeholder="Subject"/>
                    <OutlinedInput style={{
                        backgroundColor: Color.light,
                        width: '100%',
                        borderRadius: 10,
                        margin: '5px 0'
                    }} multiline
                                   rows={4}
                                   placeholder="Message"/>
                    <Button variant="contained" style={ButtonStyle} onClick={() => {
                        // navigate('/about')
                    }}
                    >Send Now</Button>
                </Grid>

                <Grid item justifyContent="center"
                      alignItems="center" xs={10} sm={5}>
                    <Container style={{
                        display: 'flex',
                        padding: '20px 0',
                        backgroundColor: Color.light,
                        borderRadius: '0 50px',
                        margin: '20px 0'
                    }}>
                        <LocationOnIcon sx={{color: Color.theme, fontSize: 50, marginLeft: 10}}/>
                        <Container>
                            No: 99/01, Parakandeniya,
                            Imbulgoda, Sri Lanka
                        </Container>
                    </Container>
                    <Container style={{
                        display: 'flex',
                        padding: '20px 0',
                        backgroundColor: Color.light,
                        borderRadius: '50px 0',
                        margin: '20px 0'
                    }}>
                        <Container>
                            info@imrookaglobalgroup.com
                        </Container>
                        <EmailIcon sx={{color: Color.theme, fontSize: 50, marginRight: 10}}/>
                    </Container>
                    <Container style={{
                        display: 'flex',
                        padding: '20px 0',
                        backgroundColor: Color.light,
                        borderRadius: '0 50px',
                        margin: '20px 0'
                    }}>
                        <PhoneIcon sx={{color: Color.theme, fontSize: 50, marginLeft: 10}}/>
                        <Container>
                            <Typography style={{color: Color.black, fontSize: 23, fontFamily: 'Baskervville'}}> +65 93
                                52 35 00</Typography>
                            <Typography style={{color: Color.black, fontSize: 23, fontFamily: 'Baskervville'}}> +94 773
                                631 343</Typography>
                        </Container>
                    </Container>
                </Grid>
            </Grid>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.086202234179!2d79.96851566618201!3d7.03611441489238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f91b752aa559%3A0x488ff29b094d8807!2sParakandeniya!5e0!3m2!1sen!2slk!4v1677677659704!5m2!1sen!2slk"
                width="600" height="450" style={{border: 0, width: '100%'}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
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
