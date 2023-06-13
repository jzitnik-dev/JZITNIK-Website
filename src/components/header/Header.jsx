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
    function hoverEffect(event) {
        let iteration = 0;
        let interval = null;
        clearInterval(interval);
        
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                return event.target.dataset.value[index];
                }
            
                return "abcdefhjijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)]
            })
            .join("");
            
            if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
            }
            
            iteration += 1 / 3;
        }, 30);
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
                    <a href="/blog" className="link">
                        <div className="element" onClick={toggleMenu}>Blog</div>
                    </a>
                    <Link to="/certificates" className="link">
                        <div className="element" onClick={toggleMenu}>{texty["certifikaty"]}</div>
                    </Link>
                </div>
            </div>
            <div className="header">
                <header style={{top: "0px"}}>
                    <Link to="/"><div className="name">Jakub Žitník</div></Link>
                    <div className="elements">
                        <NavLink style={{"width": "50px"}} data-value={texty["domov"]} onMouseOver={hoverEffect} to="/" className="link">{texty["domov"]}</NavLink>
                        <NavLink style={{"width": "70px"}} data-value={texty["O mě"]} onMouseOver={hoverEffect} to="/about" className="link">{texty["O mě"]}</NavLink>
                        <a style={{"width": "33px"}} data-value="Blog" onMouseOver={hoverEffect} href="/blog" className="link">Blog</a>
                        <NavLink style={{"width": "74px"}} data-value={texty["certifikaty"]} onMouseOver={hoverEffect} to="/certificates" className="link">{texty["certifikaty"]}</NavLink>
                    </div>
                    <div className="navIcon" onClick={toggleMenu}></div>
                </header>
            </div>
        </>
    )
}
export default Header;
