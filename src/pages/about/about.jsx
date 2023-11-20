import "./styles.css"
import Loading from "../../components/loading/Loading"
import { useEffect } from "react";
import ScrollAnimation from "../../scrollAnimation"
import texty from "../../texty"
function about() {
    useEffect(() => {
        ScrollAnimation(document.querySelectorAll(".animation"))
    }, []);
    useEffect(() => {
        let index = 0,
            interval = 1000;

        const rand = (min, max) => 
        Math.floor(Math.random() * (max - min + 1)) + min;

        const animate = star => {
        star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
        star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

        star.style.animation = "none";
        star.offsetHeight;
        star.style.animation = "";
        }

         let timeouts = [],
             intervals = [];

         const magic = document.querySelector(".magic");

         magic.onmouseenter = () => {
           let index = 1;
        
           for(const star of document.getElementsByClassName("magic-star")) {
             timeouts.push(setTimeout(() => {  
               animate(star);
            
               intervals.push(setInterval(() => animate(star), 1000));
             }, index++ * 300));
           };
         }

         magic.onmouseleave = () => {
           for(const t of timeouts) clearTimeout(t);  
           for(const i of intervals) clearInterval(i);
        
           timeouts = [];
           intervals = [];
         }
    }, []);
    return (
        <>
            <Loading />
            <div className="mainAbout content">
                <div className="aboutmeStarting">
                    <div className="aboutmeContent animation">

                        <h1>{texty["O mě"]}</h1>
                        <h2>{texty["cemusevenuji"]}</h2>
                        <p>{texty["cemusevenujimore"]}</p>

                        <h2>{texty["zacatky"]}</h2>
                        <p dangerouslySetInnerHTML={{ "__html": texty["longZacatkyAboutMe"] }}></p>
                        <h2>Web development</h2>
                        <p dangerouslySetInnerHTML={{ "__html": texty["webdevelAboutMe"] }}></p>
                        <h2>JavaScript</h2>
                        <p dangerouslySetInnerHTML={{ "__html": texty["JavaScriptAboutMe"] }}></p>
                        <h2>{texty["webdevelopment"]}</h2>
                        <p dangerouslySetInnerHTML={{ "__html": texty["webdevelopmentmore"] }}></p>
                        <h2>QPlay.cz</h2>
                        <p dangerouslySetInnerHTML={{ "__html": texty["qplaymore"] }}></p>
                        <h2>{texty["avice"]}</h2>
                        <p>
                          <span>{texty["avicemore"]}</span>
                          <span className="magic">
                            <span className="magic-star">
                                <svg viewBox="0 0 512 512">
                                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                                </svg>
                            </span>
                            <span className="magic-star">
                                <svg viewBox="0 0 512 512">
                                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                                </svg>
                            </span>
                            <span className="magic-star">
                                <svg viewBox="0 0 512 512">
                                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                                </svg>
                            </span>
                            <span className="magic-text">{texty["star"]}</span>
                            </span>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default about;
