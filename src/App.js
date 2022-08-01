import logo from './logo.svg';
import './App.css';
import NavHeader from "./headers/NavHeader";
import Home from "./Home/Index"
import About from "./pages/about"
import Partners from "./pages/our_partners"
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <NavHeader/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/our_partners" element={<Partners/>}/>

                </Routes>
            </div>
        </>
    );
}

export default App;
