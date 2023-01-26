import * as React from 'react';
import homeImage from "../img/contact/slide.png";
import polygons from "../img/contact/polygons.png";
import {Button, Grid} from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';

const Contacts = () => {
    return (
        <div style={{
            backgroundColor: 'white', fontSize: ' calc(10px + 2vmin)',
            color: 'black', marginTop: '80px'
        }}>
            <img style={{width: "100%"}} src={homeImage} alt=""/>

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
                    <h1 style={{color: '#10728D'}}>INQUIRE NOW</h1>
                    <OutlinedInput style={{
                        backgroundColor: "#C6ECE5",
                        width: '100%',
                        borderRadius: 10,
                        margin: '5px 0'
                    }}
                                   placeholder="First Name"/>
                    <OutlinedInput style={{
                        backgroundColor: "#C6ECE5",
                        width: '100%',
                        borderRadius: 10,
                        margin: '5px 0'
                    }}
                                   placeholder="Surname"/>
                    <OutlinedInput style={{
                        backgroundColor: "#C6ECE5",
                        width: '100%',
                        borderRadius: 10,
                        margin: '5px 0'
                    }}
                                   placeholder="Organization"/>
                    <div style={{width: '100%'}}>
                        <OutlinedInput style={{
                            backgroundColor: "#C6ECE5",
                            width: '49%',
                            borderRadius: 10,
                            margin: '5px 5px 5px 0'
                        }}
                                       placeholder="Email"/>
                        <OutlinedInput style={{
                            backgroundColor: "#C6ECE5",
                            width: '49%',
                            borderRadius: 10,
                            margin: '5px 0 5px 5px'
                        }}
                                       placeholder="Telephone"/>
                    </div>
                    <OutlinedInput style={{
                        backgroundColor: "#C6ECE5",
                        width: '100%',
                        borderRadius: 10,
                        margin: '5px 0'
                    }}
                                   placeholder="Subject"/>
                    <OutlinedInput style={{
                        backgroundColor: "#C6ECE5",
                        width: '100%',
                        borderRadius: 10,
                        margin: '5px 0'
                    }} multiline
                                   rows={4}
                                   placeholder="Message"/>
                    <Button variant="contained"
                            style={{
                                margin: '5px 0 20px 0',
                                backgroundColor: '#10728D',
                                borderRadius: 10,
                                color: 'black'
                            }}>Send
                        Now</Button>
                </Grid>

                <Grid item justifyContent="center"
                      alignItems="center" xs={10} sm={5}>
                    <img style={{width: "80%"}} src={polygons} alt=""/>
                </Grid>
            </Grid>
            <iframe
                title={'location'}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.638463201407!2d79.908075!3d6.7197677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2460f9825efcd%3A0x4edf70b9ccff9fc3!2z4La04LeP4Lax4Lav4LeU4La7IOC2uOC3luC2veC3kuC2miDgtrvgt53gt4Tgtr0!5e0!3m2!1ssi!2slk!4v1658444764386!5m2!1ssi!2slk"
                width="600" height="400" style={{border: 0, width: '100%'}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
        </div>
    )
}

export default Contacts;
