import "./style.css"
import { useEffect } from "react";
function Loading() {
    useEffect(() => {
        document.querySelector(".loader").classList.add("show")
        setTimeout(() => {
            document.querySelector(".loader").classList.remove("show")
            setTimeout(() => {
                document.querySelector(".content").style.display = "block"
                document.querySelector(".loading").classList.remove("show")
                setTimeout(() => {
                    document.querySelector(".loading").style.display = "none"
                }, 500);
            }, 300);
        }, 700);
    }, []);
    return (
        <div className="loading show">

            <div className="loader">
                <svg version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                <circle fill="none" stroke="#fff" strokeWidth="3" strokeMiterlimit="10" cx="50" cy="50" r="48"/>
                <line fill="none" srokelinecap="round" stroke="#fff" strokeWidth="3" strokeMiterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
                <animateTransform 
                    attributeName="transform" 
                    dur="2s"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite" />
                </line>
                <line fill="none" srokelinecap="round" stroke="#fff" strokeWidth="3" strokeMiterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
                <animateTransform 
                    attributeName="transform" 
                    dur="15s"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite" />
                </line>
                </svg>
            </div>
        </div>
    )
}
export default Loading;