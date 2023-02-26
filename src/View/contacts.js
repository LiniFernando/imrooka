import * as React from 'react';
import homeImage from "../img/contact/contactSlide.jpg";
import polygons from "../img/contact/polygons.png";
import {Button, Grid} from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import {COLORS as Color} from "../Common/Constant/Color";

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
            {/*<img style={{width: "100%"}} src={oldhomeImage} alt=""/>*/}
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
                    <img style={{width: "80%"}} src={polygons} alt=""/>
                </Grid>
            </Grid>
            <iframe
                title={'location'}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.086209797346!2d79.96036142036846!3d7.036114193228452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f91b752aa559%3A0x488ff29b094d8807!2sParakandeniya!5e0!3m2!1ssi!2slk!4v1677424176920!5m2!1ssi!2slk"
                width="600" height="400" style={{border: 0, width: '100%'}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
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
