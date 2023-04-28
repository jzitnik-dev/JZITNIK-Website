import "./style.css"
import texty from "../../texty"
import Loading from "../../components/loading/Loading"
function fourofour() {
    return (
        <>
            <Loading />
            <div className="content" style={{"display":"none"}}>
                <div className="main404">
                    <h1>404</h1>
                    <p>{texty["notfound"]}</p>
                </div>
            </div>
        </>
    )
}
export default fourofour;