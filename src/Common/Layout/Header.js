import * as React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LOGO from "../../img/home/IMROOKA GLOBAL GROUP LOGO.png";
import {Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {useNavigate} from "react-router-dom";

const navItems = [
    {name: 'Home', nav: '/'},
    {name: 'About', nav: '/about'},
    {name: 'Sectors', nav: '/sectors'},
    {name: 'Investor Relations', nav: '/investorRelations'},
    {name: 'Careers', nav: '/careers'},
    {name: 'News Rooms', nav: '/news'},
    {name: 'Contacts', nav: '/contact'},]

const Header = () => {
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>

            <Typography style={{backgroundColor: '#10728D'}} variant="h6" sx={{my: 2}}>
                <img src={LOGO} style={{width: '80px'}} alt={'logo'}/>
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name}>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText style={{color: '#FAAC16'}} primary={item.name} onClick={() => {
                                navigate(item.nav)
                            }}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{display: "flex", backgroundColor: '#10728D'}}>
            <AppBar component="nav" style={{backgroundColor: '#10728D', boxShadow: '0px 0px 50px #000000'}}>
                <Toolbar style={{display: "flex", justifyContent: "space-between", backgroundColor: '#10728D'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon style={{color: '#8DDACC'}}/>
                    </IconButton>
                    <img src={LOGO} style={{width: '80px'}} alt={'logo'}/>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map((item) => (
                            <Button style={{color: '#8DDACC'}} key={item.name} onClick={() => {
                                navigate(item.nav)
                            }} children={item.name}/>
                        ))}
                    </Box>
                    {/*<Button>
                        <SearchIcon sx={{color: "#8DDACC"}}/>
                    </Button>*/}
                </Toolbar>
            </AppBar>
            <Box component="nav" style={{backgroundColor: '#10728D'}}>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 240, backgroundColor: '#10728D'},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Header;
