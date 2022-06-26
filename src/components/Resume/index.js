import React from "react";
import SideNav from "../Nav";

function Resume() {
    return (
        <>
        <SideNav />
        <section id="Resume">
            <h1>My Resume</h1>
            <li>
            <a href="https://docs.google.com/document/d/e/2PACX-1vQQJWBtQYqChRTU08jhuTfv2P9IpKiUVoOJeWViEuWynrD61VMGKDoOs6z18yUWLujJs_u2tCfRhVtg/pub" target="_blank" rel="noopener noreferrer" >
                <img className="img-resume" alt="resume" src={require('../../assets/images/Resume.png')} />    
            </a>
            </li>
            <div>
                <h1> My Skills </h1>
                <ul className="skills">
                    <li>
                        <img className="img" alt="js" src={require("../../assets/images/JS.png")} />
                    </li>
                    <li>
                        <img className="img" alt="html" src={require("../../assets/images/HTML.png")} />
                    </li>
                    <li>
                        <img className="img" alt="css" src={require("../../assets/images/CSS.png")} />
                    </li>
                    <li>
                        <img className="img" alt="Bootstrap" src={require("../../assets/images/Bootstrap.png")} />
                    </li>
                    <li>
                        <img className="img" alt="Bulma" src={require("../../assets/images/Bulma.png")} />
                    </li>
                    <li>
                        <img className="img" alt="Git" src={require("../../assets/images/Git.png")} />
                    </li>
                    <li>
                        <img className="img" alt="jQuery" src={require("../../assets/images/Jquery.png")} />
                    </li>
                    <li>
                        <img className="img" alt="mongodb" src={require("../../assets/images/mongodb.png")} />
                    </li>
                    <li>
                        <img className="img" alt="MySQL" src={require("../../assets/images/MySQL.png")} />
                    </li>
                    <li>
                        <img className="img" alt="Node" src={require("../../assets/images/Node.png")} />
                    </li>
                    <li>
                        <img className="img" alt="React" src={require("../../assets/images/React.png")} />
                    </li>
                    <li>
                        <img className="img" alt="Rest" src={require("../../assets/images/REST.png")} />
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Resume