import React from "react";
import "./style.css"
import texty, {switchLanguage} from "../../texty"
import {Link} from "react-router-dom"
function Footer() {
    return (
        <footer>
            <h1>Jakub Žitník</h1>
            <p>© Copyright <strong>Jakub Žitník</strong>. {texty["pravavyhrazena"]}.</p>
            <Link to="/legal">{texty["legalniinfo"]}</Link>
            <div className="languageSelect">
                <a onClick={()=>{switchLanguage("english")}}>English</a>
                <a onClick={()=>{switchLanguage("czech")}}>Czech</a>
            </div>
        </footer>
    )
}
export default Footer;