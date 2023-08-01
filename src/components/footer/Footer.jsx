import React from "react";
import "./style.css"
import texty, {switchLanguage} from "../../texty"
import {Link} from "react-router-dom"
function Footer() {
    return (
        <footer>
            <div className="gradient"></div>
            <div className="elements">
                <div className="left">
                    <h1 className="name">Jakub Žitník</h1>
                    <p className="vytvoril">
                        {texty["madewith"]}
                        <box-icon name='heart' type='solid' color="red" style={{position: "relative",top: "5px", marginLeft: "2px", marginRight: "2px"}}></box-icon>
                        {texty["inczechia"]}
                    </p>
                    <div className="kontakty">
                        <h2>{texty["kontakt"]}</h2>
                        <p style={{"marginTop": "2px"}}>Email: <a href="emailto:email@jzitnik.is-a.dev">email@jzitnik.is-a.dev</a></p>
                        <p>Github: <Link to="/link/github">JZITNIK-github</Link></p>
                    </div>

                    <p className="copyright">© Copyright <strong>Jakub Žitník</strong>. {texty["pravavyhrazena"]}.</p>
                </div>
                <div className="right">
                    
                    <div className="languagechange">
                        <h2 style={{"margin": "0"}}>{texty["zmenitJazyky"]}</h2>
                        <div className="languageSelect">
                            <a href="#" onClick={()=>{switchLanguage("english")}}>English</a>
                            <a href="#" onClick={()=>{switchLanguage("czech")}}>Čeština</a>
                        </div>
                    </div>

                    <div className="pages">
                        <h2>{texty["pages"]}</h2>
                        <div className="pagesSelect">
                            <Link to="/">{texty["domov"]}</Link>
                            <Link to="/about">{texty["O mě"]}</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/certificates">{texty["certifikaty"]}</Link>
                            <Link to="/technologies">{texty["technologie"]}</Link>
                        </div>
                    </div>

                    <div className="legal">
                        <h2>Legal</h2>
                        <Link to="/legal">{texty["legalniinfo"]}</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
