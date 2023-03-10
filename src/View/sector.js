import * as React from 'react';
import homeImage from "../img/sectors/slide.png";
import director from "../img/about/boardMember.jpg";
import {Card, CardActionArea, CardContent, CardMedia, Container, Grid} from "@mui/material";
import {COLORS as Color} from "../Common/Constant/Color";
import Ayur from "../img/home/ayur&Beauty.jpg";
import Tech from "../img/home/Technology.jpg";
import apparel from "../img/home/apparel.jpg";
import clinic from "../img/home/clinicSalon.jpg";
import products from "../img/home/products.jpeg";
import environment from "../img/home/environment&Farming.jpg";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import about from "../img/home/welcome tile.png";
import brand1 from "../img/home/logo1.png";
import brand2 from "../img/home/logo2.png";
import brand3 from "../img/home/logo3.png";
import brand4 from "../img/home/logo4.jpg";
import brand5 from "../img/home/logo5.jpg";
import brand6 from "../img/home/logo6.jpg";
import ayurvedicProducts from "../img/sectors/ayurvedicProducts.jpg";
import MedicalServices from "../img/sectors/MedicalServices.jpg";
import Marketing from "../img/sectors/marketing.jpg";

const Sector = () => {
    let {name} = useParams();
    const [homeImg, setHomeImg] = React.useState();
    const [paragraph, setParagraph] = React.useState("");
    useEffect(() => {
        switch (name) {
            case 'Organic Agricultural Products':
                setHomeImg(environment);
                setParagraph("Welcome to Imrooka Global's Organic Agricultural Products section, where we're committed to bringing you the highest quality and healthiest food options available. Our subsidiary, Imrooka Green, was established in 2022 with the mission to empower healthy and eco-friendly living through sustainable organic farming practices.\n" +
                    "We believe that what we put into our bodies is as important as how we treat our planet. That's why we take pride in producing only the best organic crops that are free from synthetic pesticides, chemical fertilizers, and GMOs. Our products are grown with care, and we use only natural and organic methods to enhance soil fertility, control pests, and promote plant growth.\n" +
                    "Our organic agricultural products are not only healthier for you, but they're also good for the environment. By choosing organic, you're supporting a sustainable and ethical farming system that prioritizes the health of our planet and our communities.\n" +
                    "We offer a wide range of fresh, seasonal fruits, vegetables, and grains that are packed with essential nutrients, minerals, and vitamins. Our products are perfect for those who care about what they eat and want to make a positive impact on their health and the environment.\n" +
                    "Browse our collection today and taste the difference that organic farming can make. With Imrooka Green, you can be confident that you're getting the highest quality and healthiest organic agricultural products available.\n" +
                    "(Same Template as the above service)\n" +
                    "Discover natural healing with Imrooka Global.");
                break;
            case 'Ayurvedic Medicinal Products & Treatment Centres':
                setHomeImg(ayurvedicProducts);
                setParagraph("Welcome to Imrooka Global's Ayurvedic Medicinal Products and Treatment Centres, where ancient Ayurvedic wisdom meets modern medicine. Our journey began in 2011 with a humble Ayurvedic medicinal clinic, and since then, we've expanded our services to heal countless patients with our natural remedies and treatments.\n" +
                    "At Imrooka Global, we believe that healing should be holistic and natural, which is why we offer a wide range of Ayurvedic medicinal products and treatments that are safe, effective, and sustainable. Our products and treatments are derived from natural ingredients, with no synthetic chemicals or harmful preservatives, ensuring that you receive the best of what nature has to offer.\n" +
                    "Whether you're looking for treatments to improve your physical health, mental wellbeing, or spiritual balance, we have a range of options to suit your needs. Our experienced practitioners and therapists are dedicated to providing personalized care and attention to every patient, ensuring that you receive the best possible care.\n" +
                    "Explore our Ayurvedic Medicinal Products and Treatment Centres today and discover a path towards natural healing and wellness.");
                break;
            case 'Medical Services':
                setHomeImg(MedicalServices);
                setParagraph("Welcome to Imrooka Global's Medical Services, where compassionate care meets advanced medical expertise. Our team of highly skilled doctors, nurses, and healthcare professionals are dedicated to providing the highest quality of care to our patients.\n" +
                    "At Imrooka Global, we believe that healthcare should be accessible to everyone, which is why we offer a wide range of medical services, including diagnostic tests, medical consultations, treatments, and surgeries. Our services are designed to address a wide range of medical conditions, from minor illnesses to complex medical issues.\n" +
                    "We use the latest medical technology and equipment to ensure accurate diagnoses and effective treatments, and our team of medical professionals are constantly updating their knowledge and skills to stay up-to-date with the latest medical advancements.\n" +
                    "Whether you need routine medical check-ups, specialized treatments, or surgical procedures, our team is here to provide you with personalized care and attention, ensuring that you receive the best possible medical care.\n" +
                    "Explore our Medical Services today and take the first step towards a healthier, happier you.");
                break;
            case 'Cosmetics':
                setHomeImg(products);
                setParagraph("Welcome to Imrooka Global's Cosmetics, where natural beauty meets advanced Ayurvedic skincare. Our cosmetic line was introduced to the market in 2018, and since then, we've been committed to providing our customers with the highest quality of natural skincare products.\n" +
                    "Our Ayurvedic cosmetic products are formulated using natural ingredients that are gentle on your skin, while also delivering powerful results. We believe that skincare should be more than just a daily routine, it should be an opportunity to nourish your skin and enhance your natural beauty.\n" +
                    "At Imrooka Global, we're committed to sustainability, which is why we use eco-friendly packaging and ingredients that are responsibly sourced. We believe in harnessing the power of nature to deliver skincare products that are good for you and good for the planet.\n" +
                    "Explore our Cosmetics line today and experience the benefits of natural skincare with Imrooka Global.");
                break;
            case 'IT Solutions':
                setHomeImg(Tech);
                setParagraph("Innovative IT solutions tailored to your business needs.\n" +
                    "We are a leading provider of comprehensive IT solutions that help businesses and organizations of all sizes achieve their goals. Our IT solutions are designed to meet the unique needs of your business and help you stay ahead of the competition.\n" +
                    "Our IT solutions are powered by three innovative subsidiaries: Lyxux, Avacdro, and Fedoax. Each of these subsidiaries has its own strengths and expertise, but they work together seamlessly to provide you with the best possible IT solutions.\n" +
                    "Whether you need software development, cybersecurity, cloud computing, IT consulting, or other IT services, Imrooka Global has the expertise and experience to help you. We have a team of highly skilled IT professionals who are dedicated to providing you with the highest quality services that are tailored to your specific needs.\n" +
                    "At Imrooka Global, we understand that technology is constantly evolving, and we make it our mission to stay ahead of the curve. We use the latest tools, technologies, and best practices to ensure that our clients receive the most innovative and reliable IT solutions possible.\n" +
                    "Contact us today to learn more about how our subsidiaries Lyxux, Avacdro, and Fedoax can help you achieve your IT goals. We look forward to working with you!");
                break;
            case 'Marketing Solutions':
                setHomeImg(Marketing);
                setParagraph("We understand that in today's world, effective marketing is key to growing any business. That's why we offer a wide range of marketing solutions tailored to meet your specific needs.\n" +
                    "Our team of experts specializes in crafting creative and innovative marketing strategies to help your business stand out in a crowded marketplace. Whether you're looking to build your brand, increase your online presence, or drive more traffic to your website, we have the tools and expertise to make it happen.\n" +
                    "Our marketing services include search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, email marketing, and content marketing. We take a data-driven approach to every campaign, analyzing key metrics and making data-backed decisions to optimize your results.\n" +
                    "At Imrooka Global, we believe in transparency and accountability. That's why we provide regular reports and updates on your campaign's performance, so you can track your progress and see the impact of our work firsthand.\n" +
                    "We take pride in our ability to deliver high-quality marketing solutions that drive results. Let us help you take your business to the next level with our comprehensive marketing services. Contact us today to learn more!");
                break;
            case 'Beauty & Wellness Centres':
                setHomeImg(Ayur);
                setParagraph("Welcome to Imrooka Global's Beauty and Wellness Centres page, where we are committed to helping you achieve your health and beauty goals. Our luxurious spas and resorts are designed to provide you with an unforgettable experience of rejuvenation and relaxation.\n" +
                    "At Imrooka Global, we believe that beauty comes from within. That's why our holistic approach to wellness combines the best of modern and traditional practices to promote overall well-being. Whether you're looking for a pampering spa day or a transformative wellness retreat, we have something to offer.\n" +
                    "Our beauty and wellness services include massages, facials, body treatments, yoga, meditation, Ayurvedic treatments, and more. Our highly trained and experienced staff use only the highest quality products to ensure that you receive the best possible care and attention.\n" +
                    "In addition to our services, we offer a range of amenities to enhance your experience, including swimming pools, saunas, hot tubs, and fitness centers. Our goal is to provide you with an all-encompassing experience that nourishes your body, mind, and spirit.\n" +
                    "Experience the ultimate in beauty and wellness at Imrooka Global's spas and resorts. Contact us today to schedule your appointment and start your journey toward a healthier, happier you!");
                break;
            default:
                setHomeImg(homeImage);
                setParagraph("");
        }
    }, []);
    const brands = [
        {
            url: brand1,
            title: 'brand1',
            width: '20%',
        },
        {
            url: brand2,
            title: 'brand2',
            width: '20%',
        },
        {
            url: brand3,
            title: 'brand3',
            width: '20%',
        },
        {
            url: brand4,
            title: 'brand4',
            width: '20%',
        },
        {
            url: brand5,
            title: 'brand5',
            width: '20%',
        },
        {
            url: brand6,
            title: 'brand6',
            width: '20%',
        },
    ];
    const companies = [
        {
            url: Tech,
            title: 'Technology & Research',
            discription: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            width: '40%',
        },
        {
            url: apparel,
            title: 'Apparel',
            discription: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            width: '30%',
        },
        {
            url: clinic,
            title: 'Clinic & Saloon',
            discription: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            width: '30%',
        },
    ];
    return (
        <div style={{
            backgroundColor: 'white', fontSize: ' calc(10px + 2vmin)',
            color: 'white', marginTop: '80px'
        }}>
            <div>
                <img style={{width: "100%", height: '300px', objectFit: 'cover'}}
                     src={homeImg} alt=""/>
            </div>
            <h3 style={{color: Color.white, position: 'absolute', left: 0, right: 0, top: 100}}>The World of Bee. A
                journey spanning over 100 years</h3>
            <h1 style={{
                color: Color.black,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 150,
                textShadow: '0 7px 7px white'
            }}>{name}</h1>
            {/*<AnimationOnScroll animateIn="animate__fadeInUp">*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1} style={{marginTop: "20px"}}>
                <Grid item xs={12} sm={6}>
                    <div style={{textAlign: 'center'}}>
                        <h2 style={{color: Color.theme}}>{name}</h2>
                    </div>
                    <p style={{
                        textAlign: 'center',
                        color: Color.black,
                        paddingLeft: 20,
                        paddingRight: 20
                    }}>{paragraph}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img style={{width: "90%"}} src={about} alt=""/>
                </Grid>
            </Grid>
            {/*</AnimationOnScroll>*/}
            {/*end sectors*/}

            {/*<Grid style={{paddingBottom: '20px', marginTop: '50px',}}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item>
                        <AnimationOnScroll animateIn="animate__fadeInRight">
                            <h2 style={{color: Color.theme}}>OUR SERVICES</h2>
                        </AnimationOnScroll>
                    </Grid>
                    <img style={{width: "75%"}} src={services} alt=""/>
                </Grid>
            </Grid>*/}

            {/*start Brands*/}
            <Grid>
                <Grid style={{backgroundColor: Color.light, paddingBottom: '20px', marginTop: '50px',}}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <Grid item>
                            <h2 style={{color: Color.theme}}>OUR BRANDS</h2>
                        </Grid>
                    </Grid>
                    <Container style={{
                        marginBottom: 10, width: '100%',
                    }}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={3}
                        >
                            {brands.map((image) => (
                                <Grid item xs={12} sm={2} key={image.url}>
                                    <img style={{width: "100%"}} src={image.url} alt=""/>
                                </Grid>

                            ))}
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            {/*end brands*/}

            {/*start companies*/}
            <Grid style={{paddingBottom: '20px', paddingTop: '20px',}}>
                <Grid item
                      justifyContent="center"
                      alignItems="center"
                      xs={6}>
                    <h2 style={{color: Color.theme}}>OUR COMPANIES</h2>
                    <Grid style={{alignItem: 'center'}} container spacing={1}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={3}
                            style={{paddingLeft: '10%', paddingRight: '10%', paddingBottom: 50}}
                        >
                            {companies.map((companiesDetail) => (
                                <Grid key={companiesDetail.url} item xs={12} sm={4} style={{marginBottom: 20}}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={companiesDetail.url}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <h2 style={{
                                                    color: Color.theme,
                                                    margin: 0,
                                                    fontFamily: 'Baskervville'
                                                }}>
                                                    ASDF(Pvt)Ltd
                                                </h2>
                                                <h2 style={{fontFamily: 'Baskervville'}}>
                                                    {companiesDetail.discription}
                                                </h2>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/*end companies*/}

            {/*director*/}
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={1} style={{backgroundColor: Color.light, marginTop: "20px"}}>
                <Grid item xs={12} sm={6}>
                    <img style={{width: "40%"}} src={director} alt=""/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div style={{
                        backgroundColor: Color.regular,
                        borderRadius: 100,
                        width: '70%'
                    }}>
                        <h5 style={{
                            margin: 0,
                            padding: '10px 0',
                            color: 'black'
                        }}>Mr.Saman Kumara</h5>
                        <h5 style={{
                            margin: 0,
                            padding: '10px 0',
                            color: Color.theme
                        }}>Managing Director</h5>
                    </div>
                </Grid>

            </Grid>

        </div>
    )
}

export default Sector;
