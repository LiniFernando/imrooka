import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./Common/Layout/Header";
import Home from "./View";
import Footer from "./Common/Layout/Footer";
import About from "./View/about";
import Sectors from "./View/sectors";
import InvestorRelations from "./View/investorRelations";
import Contacts from "./View/contacts";
import News from "./View/news";

import Sector from "./View/sector";
import Career from "./View/career";
import UnderConstruction from "./View/underConstruction";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route index element={<Home/>}/>
                    {/*<Route path={"/"} element={<Home/>}/>*/}
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/sectors"} element={<Sectors/>}/>
                    <Route path={"/career"} element={<Career/>}/>
                    <Route exact path="/sectors/:name" element={<Sector/>}/>
                    <Route path={"/investorRelations"} element={<InvestorRelations/>}/>
                    <Route path={"/news"} element={<News/>}/>
                    <Route path={"/contact"} element={<Contacts/>}/>
                    <Route path="*" element={<UnderConstruction/>}/>
                    <Route path={"/underConstruction"} element={<UnderConstruction/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
