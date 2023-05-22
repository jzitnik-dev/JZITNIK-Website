import "./style.css"
import texty from "../../texty"
import { useEffect } from "react";
import Fourofour from "../../pages/404/404"
export default (params) => {
    if (params["url-shortener"]) {
        var urlList = window.location.href.split("/")
        var url = urlList[urlList.length - 1] == "" ? urlList[urlList.length - 2] : urlList[urlList.length - 1]
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://anxious-tick-onesies.cyclic.app/jzitnik/geturl/"+url, false ); 
        xmlHttp.send( null );
        var res = JSON.parse(xmlHttp.responseText)
        if (res["message"] == "success") {
            useEffect(() => {
                window.location.replace(res.url)
                setTimeout(() => {
                    document.querySelector(".message").textContent = texty["souborstazen"]
                }, 3000);
            }, []);
            return (
                <div className="redirectmain content">
                    <h1 className="message" style={{color: "white"}}>{texty["pockejte"]}</h1>
                    <p className="additionalMessage"></p>
                </div>
            );
        }
        else {
            return (<Fourofour />)
        }
    }
}