import React from "react";
import SideNav from "../Nav";

function About() {
    return (
        <>
        <SideNav />
        <section className="aboutMe" id="About">
            <h1>About Me</h1>
            <p>Software Engineer adept in all stages of advanced web development. Knowledgeable in the user interface, testing, and debugging processes. Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, including JavaScript,  REACT,  MERN, and MySQL. Able to effectively self-manage during independent projects and collaborate in a team setting.</p>
        </section>
        <div className="avatar">
            <img alt="avatar" className="avatar" src={require('../../assets/images/profile.jpg')}/>
        </div>
        </>
    )
}

export default About