import "./style.css"
import texty from "../../texty"
export default (params) => {
    window.location.replace(params.url)
    return (
        <div className="redirectmain content">
            <h1>{texty["pockejte"]}</h1>
            <p></p>
        </div>
    );
}