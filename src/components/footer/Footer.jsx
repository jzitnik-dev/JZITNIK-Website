import React from "react";
import "./style.css"
import texty, {switchLanguage} from "../../texty"
import {Link} from "react-router-dom"
function Footer() {
    return (
        <footer>
            <div className="gradient"></div>
            <div className="elements">
                <h1>Jakub Žitník</h1>
                <p>© Copyright <strong>Jakub Žitník</strong>. {texty["pravavyhrazena"]}.</p>
                <Link to="/legal">{texty["legalniinfo"]}</Link>
                <h2>{texty["zmenitJazyky"]}</h2>
                <div className="languageSelect">
                    <a href="#" onClick={()=>{switchLanguage("english")}}>English</a>
                    <a href="#" onClick={()=>{switchLanguage("czech")}}>Čeština</a>
                </div>
                
                <p className="vytvoril">
                    {texty["madewith"]}
                    <box-icon name='heart' type='solid' color="red" style={{position: "relative",top: "5px", marginLeft: "2px", marginRight: "2px"}}></box-icon>
                    {texty["inczechia"]}
                    
                    <p style={{top: 2, position: "relative"}}>{texty["vytvoril"]} <span style={{color: "#57cbff"}}>Jakub Žitník</span></p>
                </p>
            </div>
        </footer>
    )
}
export default Footer;
