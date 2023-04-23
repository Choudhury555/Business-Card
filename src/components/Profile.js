import React from "react"

export default function Profile(){
    return (
        <div className="profile-fact">
            <div className="profile-header">
                <h2>Choudhury Abhisek Panda</h2>
                <h3>Software Engineer</h3>
                <p>Odisha,India</p>
            </div>
            <div className="profile-social">
                <a href = "mailto: choudhurypanda555@gmail.com" className="underline"><button className="email"><i className="fa-solid fa-envelope"></i>Email</button></a>
                <a href="https://www.linkedin.com/in/choudhury-abhisek-panda-433100171/" target="_blank" className="underline"><button className="linkedin"><i className="fa-brands fa-linkedin"></i>LinkedIn</button></a>
            </div>
            <div className="profile-about">
                <h3>About</h3>
                <p>I am an Engineer trying to make things simpler with <b className="bold-red">0's</b> and <b className="bold-red">1's</b>.I love to solve problems in various platform. I am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p>I love travelling,Music,watching Sci-fi movies and series,watching and playing Cricket,Investing in stocks </p>                
            </div>
        </div>
    )
}