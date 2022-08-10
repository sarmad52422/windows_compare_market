import './App.css';
import NavHeader from "./client/headers/NavHeader";
import Home from "./client/Home/Index"
import About from "./client/pages/about"
import Partners from "./client/pages/our_partners"
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
