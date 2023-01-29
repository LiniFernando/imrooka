import * as React from 'react';
import homeImage from "../img/investors/slide.png";
import about from "../img/home/welcome tile.png";
import report from "../img/investors/report1.jpg";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Grid, Container, Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import {COLORS as Color} from "../Common/Constant/Color";

const InvestorRelations = () => {
    const reports = [
        {
            url: report,
            title: 'brand1',
            width: '40%',
        },
        {
            url: report,
            title: 'brand2',
            width: '30%',
        },
        {
            url: report,
            title: 'brand3',
            width: '30%',
        },
        {
            url: report,
            title: 'brand4',
            width: '30%',
        },
    ];
    const QandA = [
        {
            question: 'When will BIM release its quarterly results?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis semalesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
            question: 'When will BIM release its quarterly results?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis semalesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
            question: 'When will BIM release its quarterly results?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis semalesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
            question: 'When will BIM release its quarterly results?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis semalesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
            question: 'When will BIM release its quarterly results?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis semalesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
    ];
    return (
        <div style={{
            backgroundColor: 'white', fontSize: ' calc(10px + 2vmin)',
            color: 'black', marginTop: '80px'
        }}>
            <img style={{width: "100%"}} src={homeImage} alt=""/>
            <div style={{textAlign: 'center'}}>
                <h2 style={{color: Color.theme}}>CORPORATE INFORMATION</h2>
                <h3>The World of Bee. A journey spanning over 100 years</h3>
            </div>
            {/*start information*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1} style={{marginTop: "20px"}}>
                <Grid item xs={10} sm={5}>
                    <img style={{width: "100%"}} src={about} alt=""/>
                </Grid>
                <Grid item xs={10} sm={5} style={{textAlign: 'left', marginLeft: 20}}>

                    <h3 style={{color: Color.theme, margin: 0}}>Name</h3>
                    <h3 style={{fontSize: 20, margin: 0}}>BEE IN MIND</h3>
                    <Container style={{padding: '20px 0'}}>
                        <h3 style={{color: Color.theme, margin: 0}}>Registration Number</h3>
                        <h3 style={{fontSize: 20, margin: 0}}>AB 1234 FG/HJ</h3>
                    </Container>
                    <Container style={{padding: '20px 0'}}>
                        <h3 style={{color: Color.theme, margin: 0}}>Registration Address</h3>
                        <h3 style={{fontSize: 20, margin: 0}}>BLACK BRIGHT, ORUTOTA RD, GAMPAHA, SRI
                            LANKA</h3>
                    </Container>
                    <Container style={{padding: '20px 0'}}>
                        <h3 style={{color: Color.theme, margin: 0}}>Date of incorporation</h3>
                        <h3 style={{fontSize: 20, margin: 0}}>09TH OF APRIL 1988</h3>
                    </Container>
                </Grid>
            </Grid>
            {/*end information*/}

            {/*start reports*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1}
                  style={{backgroundColor: Color.light, paddingBottom: '20px', marginTop: '50px',}}>
                <Grid style={{paddingBottom: '20px', marginTop: '50px',}}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <Grid item>
                            <h2 style={{color: Color.theme}}>FINANCIAL REPORTS</h2>
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
                            {reports.map((image) => (
                                <Grid item xs={12} sm={3}>
                                    <img style={{width: "70%"}} src={image.url} alt=""/>
                                </Grid>

                            ))}
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            {/*end reports*/}

            {/*start investor contact*/}
            <h2 style={{color: Color.theme}}>INVESTOR CONTACTS</h2>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1} style={{marginTop: "20px"}}>
                <Grid item xs={10} sm={5}>
                    <h3 style={{color: Color.theme, fontSize: 20}}>Lakshan Kumara</h3>
                    <h3 style={{fontSize: 20}}>Head, Strategic Business Development
                        Unit</h3>
                    <h3 style={{fontSize: 20}}>asdfhb@bee.com</h3>
                    <h3 style={{fontSize: 20}}>+94 112 123 123</h3>
                </Grid>
                <Grid item xs={10} sm={5}>
                    <h3 style={{color: Color.theme, fontSize: 20}}>Lakshan Kumara</h3>
                    <h3 style={{fontSize: 20}}>Head, Strategic Business Development
                        Unit</h3>
                    <h3 style={{fontSize: 20}}>asdfhb@bee.com</h3>
                    <h3 style={{fontSize: 20}}>+94 112 123 123</h3>
                </Grid>
            </Grid>
            {/*end investor contact*/}

            {/*Start FAQ*/}
            <Grid container
                  justifyContent="center"
                  alignItems="center" spacing={1}
                  style={{backgroundColor: Color.light, paddingBottom: '20px', marginTop: '50px',}}>
                <Grid style={{paddingBottom: '20px', marginTop: '50px',}}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <Grid item>
                            <h2 style={{color: Color.theme}}>INVESTOR FAQS</h2>
                        </Grid>
                    </Grid>
                    <Container style={{
                        marginTop: 20, marginBottom: 20, width: '80%',
                    }}>
                        {QandA.map((qa) => (
                            <Accordion style={{backgroundColor: Color.regular, borderRadius: 10, margin: '5px 0'}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{fontSize: 50}}/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <h4 style={{margin: 0}}>{qa.question}</h4>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <h4 style={{margin: 0}}>
                                        {qa.answer}</h4>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Container>
                </Grid>
            </Grid>
            {/*End FAQ*/}
        </div>
    )
}

export default InvestorRelations;
