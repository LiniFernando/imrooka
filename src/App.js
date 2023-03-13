import './App.css';
import {Route, Routes, HashRouter} from 'react-router-dom';
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
            <HashRouter>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route exact path={"/about"} element={<About/>}/>
                    <Route path={"/sectors"} element={<Sectors/>}/>
                    <Route path={"/career"} element={<Career/>}/>
                    <Route exact path="/sectors/:name" element={<Sector/>}/>
                    <Route path={"/investorRelations"} element={<InvestorRelations/>}/>
                    <Route path={"/news"} element={<News/>}/>
                    <Route exact path={"/contact"} element={<Contacts/>}/>
                    <Route path={"/underConstruction"} element={<UnderConstruction/>}/>
                </Routes>
                <Footer/>
            </HashRouter>
        </div>
    );
}

export default App;

