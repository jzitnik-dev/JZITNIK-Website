import "./style.css"
import { useEffect } from "react";
function Loading({fallback}) {
    useEffect(() => {
        document.querySelectorAll(".loader").forEach(el => el.classList.add("show"))
        if (fallback !== true) {
            setTimeout(() => {
                document.querySelector(".loader").classList.remove("show")
                setTimeout(() => {
                    document.querySelector(".content").style.display = "block"
                    document.querySelector(".loading").classList.remove("show")
                    setTimeout(() => {
                        document.querySelector(".loading").style.display = "none"
                    }, 500);
                }, 300);
            }, 400);
        }
    }, []);
    return (
        <div className="loading show">
            <div className="loader"></div>
        </div>
    )
}
export default Loading;
