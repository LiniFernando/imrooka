import * as React from 'react';
import Tech from "../img/home/Technology.jpg";
import LinearProgress from '@mui/material/LinearProgress';

const UnderConstruction = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${Tech})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh',
            }}>

            <div style={{
                width: '100%',
                height: '100vh', background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(20px)",
                paddingTop: 100,
            }}>
                <h1 style={{fontSize: '5vw'}}>UNDER CONSTRUCTION</h1>
                <h1>SITE NEARLY READY</h1>
                <LinearProgress style={{marginTop: 80}}/>
                <LinearProgress/>
                <LinearProgress/>
            </div>
        </div>
    )
}

export default UnderConstruction;
