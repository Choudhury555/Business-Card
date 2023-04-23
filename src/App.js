import './App.css';
import React from "react"
import Dp from "../src/components/Dp"
import Profile from "../src/components/Profile"
import Footer from "../src/components/Footer"

export default function App(){
    return (
        <div className="container">
            <div className="card">
                <Dp/>
                <Profile/>
                <Footer/>
            </div>
        </div>
    )
}
