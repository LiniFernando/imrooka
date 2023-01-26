import * as React from 'react';
import homeImage from "../img/investors/slide.png";
import about from "../img/home/welcome tile.png";
import report from "../img/investors/report1.jpg";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Grid, Container, Typography, Accordion, AccordionSummary, AccordionDetails} from "@mui/material";

const InvestorRelations = () => {
    return (
        <div style={{
            backgroundColor: 'white', fontSize: ' calc(10px + 2vmin)',
            color: 'black', marginTop: '80px'
        }}>
            <img style={{width: "100%"}} src={homeImage} alt=""/>
            <div style={{textAlign: 'center'}}>
                <h1 style={{color: '#10728D'}}>CORPORATE INFORMATION</h1>
                <h2>The World of Bee. A journey spanning over 100 years</h2>
            </div>
            {/*start information*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1} style={{marginTop: "20px"}}>
                <Grid item xs={10} sm={5}>
                    <img style={{width: "100%"}} src={about} alt=""/>
                </Grid>
                <Grid item xs={10} sm={5} style={{textAlign: 'left'}}>
                    <Container style={{padding: '20px 0'}}>
                        <Typography style={{color: '#10728D'}}>Name</Typography>
<Typography style={{fontSize: 20}}>BEE IN MIND</Typography>
                    </Container>
                    <Container style={{padding: '20px 0'}}>
                        <Typography style={{color: '#10728D'}}>Registration Number</Typography>
                        <Typography style={{fontSize: 20}}>AB 1234 FG/HJ</Typography>
                    </Container>
                    <Container style={{padding: '20px 0'}}>
                        <Typography style={{color: '#10728D'}}>Registration Address</Typography>
                        <Typography style={{fontSize: 20}}>BLACK BRIGHT, ORUTOTA RD, GAMPAHA, SRI
                            LANKA</Typography>
                    </Container>
                    <Container style={{padding: '20px 0'}}>
                        <Typography style={{color: '#10728D'}}>Date of incorporation</Typography>
                        <Typography style={{fontSize: 20}}>09TH OF APRIL 1988</Typography>
                    </Container>
                </Grid>
            </Grid>
            {/*end information*/}

            {/*start reports*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1}
                  style={{backgroundColor: '#C6ECE5', paddingBottom: '20px', marginTop: '50px',}}>
                <Grid style={{paddingBottom: '20px', marginTop: '50px',}}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <Grid item>
                            <h1 style={{color: '#10728D'}}>FINANCIAL REPORTS</h1>
                        </Grid>
                    </Grid>
                    <Container style={{
                        marginTop: 20, marginBottom: 20, width: '100%',
                    }}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={3}
                        >
                            <Grid item xs={12} sm={3}>
                                <img style={{width: "90%"}} src={report} alt=""/>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <img style={{width: "90%"}} src={report} alt=""/>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <img style={{width: "90%"}} src={report} alt=""/>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <img style={{width: "90%"}} src={report} alt=""/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            {/*end reports*/}

            {/*start investor contact*/}
            <h1 style={{color: '#10728D'}}>INVESTOR CONTACTS</h1>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1} style={{marginTop: "20px"}}>
                <Grid item xs={10} sm={5}>
                    <Typography style={{color: '#10728D', fontSize: 20}}>Lakshan Kumara</Typography>
                    <Typography style={{fontSize: 20}}>Head, Strategic Business Development
                        Unit</Typography>
                    <Typography style={{fontSize: 20}}>asdfhb@bee.com</Typography>
                    <Typography style={{fontSize: 20}}>+94 112 123 123</Typography>
                </Grid>
                <Grid item xs={10} sm={5}>
                    <Typography style={{color: '#10728D', fontSize: 20}}>Lakshan Kumara</Typography>
                    <Typography style={{fontSize: 20}}>Head, Strategic Business Development
                        Unit</Typography>
                    <Typography style={{fontSize: 20}}>asdfhb@bee.com</Typography>
                    <Typography style={{fontSize: 20}}>+94 112 123 123</Typography>
                </Grid>
            </Grid>
            {/*end investor contact*/}

            {/*Start FAQ*/}
            <Grid container
                  justifyContent="center"
                  alignItems="center" spacing={1}
                  style={{backgroundColor: '#C6ECE5', paddingBottom: '20px', marginTop: '50px',}}>
                <Grid style={{paddingBottom: '20px', marginTop: '50px',}}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <Grid item>
                            <h1 style={{color: '#10728D'}}>INVESTOR FAQS</h1>
                        </Grid>
                    </Grid>
                    <Container style={{
                        marginTop: 20, marginBottom: 20, width: '80%',
                    }}>
                        <Accordion style={{backgroundColor: '#8DD9CC', borderRadius: 10, margin: '5px 0'}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{fontSize: 50}}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>When will BIM release its quarterly
                                    results?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{backgroundColor: '#8DD9CC', borderRadius: 10, margin: '5px 0'}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{fontSize: 50}}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>When will BIM release its quarterly
                                    results?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{backgroundColor: '#8DD9CC', borderRadius: 10, margin: '5px 0'}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{fontSize: 50}}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>When will BIM release its quarterly
                                    results?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{backgroundColor: '#8DD9CC', borderRadius: 10, margin: '5px 0'}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{fontSize: 50}}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>When will BIM release its quarterly
                                    results?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{backgroundColor: '#8DD9CC', borderRadius: 10, margin: '5px 0'}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{fontSize: 50}}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>When will BIM release its quarterly
                                    results?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Container>
                </Grid>
            </Grid>
            {/*End FAQ*/}
        </div>
    )
}

export default InvestorRelations;
