import "./style.css"
import texty from "../../texty"
import { useEffect } from "react";
export default (params) => {
    useEffect(() => {
        window.location.replace(params.url)
        setTimeout(() => {
            document.querySelector(".message").textContent = texty["souborstazen"]
        }, 3000);
    }, []);
    return (
        <div className="redirectmain content">
            <h1 className="message">{texty["pockejte"]}</h1>
            <p className="additionalMessage"></p>
        </div>
    );
}