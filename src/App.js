import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Common/Layout/Header";
import Home from "./View";
import Footer from "./Common/Layout/Footer";
import About from "./View/about";
import Sectors from "./View/sectors";
import InvestorRelations from "./View/investorRelations";
import Contacts from "./View/contacts";
import News from "./View/news";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/sectors"} element={<Sectors/>}/>
                    <Route path={"/investorRelations"} element={<InvestorRelations/>}/>
                    <Route path={"/news"} element={<News/>}/>
                    <Route path={"/contact"} element={<Contacts/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
