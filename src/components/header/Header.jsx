import "./style.css"
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import texty from "../../texty"
function Header() {
    useEffect(() => {
        var previousScroll = 0;
        window.addEventListener("scroll",() => {
            if (window.pageYOffset > previousScroll) {
                document.querySelector("header").style.top = "-50px";
            }
            else {
                document.querySelector("header").style.top = "0"
            }
            previousScroll = window.pageYOffset;
        })
    }, []);
    function toggleMenu() {
        document.querySelector(".nav_mobile").classList.toggle("active")
    }
    
    return (
        <>
            <div className="nav_mobile">
                <div className="elements">
                    <Link to="/" className="link">
                        <div className="element" onClick={toggleMenu}>{texty["domov"]}</div>
                    </Link>
                    <Link to="/about" className="link">
                        <div className="element" onClick={toggleMenu}>{texty["O mě"]}</div>
                    </Link>
                    <Link to="/blog" className="link">
                        <div className="element" onClick={toggleMenu}>Blog</div>
                    </Link>
                    <Link to="/certificates" className="link">
                        <div className="element" onClick={toggleMenu}>{texty["certifikaty"]}</div>
                    </Link>
                </div>
            </div>
            <div className="header">
                <header style={{top: "0px"}}>
                    <Link to="/"><div className="name">Jakub Žitník</div></Link>
                    <div className="elements">
                        <NavLink to="/" className="link">{texty["domov"]}</NavLink>
                        <NavLink to="/about" className="link">{texty["O mě"]}</NavLink>
                        <NavLink to="/blog" className="link">Blog</NavLink>
                        <NavLink to="/certificates" className="link">{texty["certifikaty"]}</NavLink>
                    </div>
                    <div className="navIcon" onClick={toggleMenu}></div>
                </header>
            </div>
        </>
    )
}
export default Header;
