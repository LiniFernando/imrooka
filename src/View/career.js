import * as React from 'react';
import './css/career.css';
import homeImage from "../img/careers/careerSlide.jpg";
import career from "../img/careers/career.jpg";
import {COLORS as Color} from "../Common/Constant/Color";
import {Button, Grid} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Career = () => {
    return (
        <div style={{
            backgroundColor: Color.white, fontSize: ' calc(10px + 2vmin)',
            color: 'white', marginTop: '80px'
        }}>
            <div style={{backgroundColor: Color.theme}}>
                <img style={{width: "100%", height: '300px', objectFit: 'cover', opacity: 0.5}}
                     src={homeImage} alt=""/>
            </div>
            <h3 style={{color: Color.white, position: 'absolute', left: 0, right: 0, top: 100}}>We Believe in Our
                People. Their Success is Our Success.</h3>
            <h1 style={{
                color: Color.black,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 150,
                textShadow: '0 7px 7px white'
            }}>CAREERS</h1>
            {/*<img style={{width: "100%"}} src={oldhomeImage} alt=""/>*/}
            {/*start about*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1} style={{marginTop: "20px"}}>
                <Grid item xs={12}>
                    <h2 style={{color: Color.theme}}>VACANCIES</h2>
                    <h3 style={{color: 'black'}}>Thank you for your interest in working with us.</h3>
                    <h3 style={{color: 'black'}}>At the moment we do not have any job vacancies.</h3>
                    <h3 style={{color: 'black'}}>We are happy to receive your blind application.</h3>
                </Grid>
                <Grid item
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={3} xs={10} md={5}>
                    <h2 style={{color: Color.theme}}>APPLY NOW</h2>
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
                    >Apply Now</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img style={{width: "90%"}} src={career} alt=""/>
                </Grid>
            </Grid>
            {/*end about*/}
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


export default Career;
