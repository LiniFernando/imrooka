import * as React from 'react';
import homeImage from "../img/sectors/slide.png";
import sectors from "../img/sectors/Sectors.png";
import {Grid} from "@mui/material";

const Sectors = () => {
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
                <h1 style={{color: '#10728D'}}>OUR DIVERSITY</h1>
                <h2 style={{color:'black'}}>The World of Bee. A journey spanning over 100 years</h2>
                <img style={{width: "60%"}} src={sectors} alt=""/>
            </Grid>
            {/*end sectors*/}
        </div>
    )
}

export default Sectors;
