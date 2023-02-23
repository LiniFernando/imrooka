import * as React from 'react';
import homeImage from "../img/careers/slide.png";
import career from "../img/careers/career.jpg";
import {COLORS as Color} from "../Common/Constant/Color";
import {Grid} from "@mui/material";

const Career = () => {
    return (
        <div style={{
            backgroundColor: Color.white, fontSize: ' calc(10px + 2vmin)',
            color: 'white', marginTop: '80px'
        }}>
            <img style={{width: "100%"}} src={homeImage} alt=""/>
            {/*start about*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1} style={{marginTop: "20px"}}>
                <Grid item xs={12} sm={6}>
                    <h2 style={{color: Color.theme}}>VACANCIES</h2>
                    <h3 style={{color: 'black'}}>Thank you for your interest in working with us.</h3>
                    <h3 style={{color: 'black'}}>At the moment we do not have any job vacancies.</h3>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img style={{width: "90%"}} src={career} alt=""/>
                </Grid>
            </Grid>
            {/*end about*/}
        </div>
    )
}

export default Career;
