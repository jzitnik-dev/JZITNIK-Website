import "./style.css"
import texty from "../../texty"
import { useEffect, useState } from "react";
import Fourofour from "../../pages/404/404"
import { useParams } from "react-router-dom";

const BACKEND = "https://backend.jzitnik.is-a.dev/jzitnik/geturl/"

function Redirect() {
    const [message, setMessage] = useState(texty["pockejte"])
    const [content, setContent] = useState()
    var { link } = useParams();

    useEffect(() => {
        fetch(BACKEND + link)
            .then(res => res.json())
            .then(res => {
                if (res["message"] == "success") {
                    window.location.replace(res.url)
                    setTimeout(() => {
                        setMessage(texty["souborstazen"])
                    }, 3000);
                }
                else {
                    setContent(<Fourofour />)
                }
            })
    }, [])

    useEffect(() => {
        setContent(
            <div className="redirectmain content">
                <h1 className="message">{message}</h1>
                <p className="additionalMessage"></p>
                <div className="footerUrlshotener">
                    <small><a href='https://github.com/JZITNIK-github/url-shortener'>Url Shortener v1.1</a></small>
                </div>
            </div>
        );
    }, [message]);


    return (
        <>
            {content}
        </>
    )
}

export default Redirect;