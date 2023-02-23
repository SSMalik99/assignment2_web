import React, { Component, ReactPropTypes, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Contact from "../Content/Contact";
// import Home from "../Content/Home";
// import Services from "../Content/Services";
// import Team from "../Content/Team";
// import Work from "../Content/Work";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import About from "./About";
import Home from "./Home";
import Note from "./Note";
import Services from "./Services";
import Tools from "./Tool";
import Weather from "./Weather";
// import "../Style/main.css"
// import SiteMap from "../Content/SiteMap";



const Main = () => {
    

    return (
        <main className=" bg-gray-300">
            <BrowserRouter>
            <Navbar/>
            
            
            {/* Client side navigation */}
            <div className={"container mx-auto px-4 py-4"} >
                
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/tools' element={<Tools />} />
                <Route path='/services' element={<Services />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/notes" element={<Note />} />
            </Routes>
            </div>

            <Footer />
            </BrowserRouter>
        </main>
    )
}

export default Main