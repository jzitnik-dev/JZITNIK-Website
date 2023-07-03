import "./style.css"
import texty from "../../texty"
import Loading from "../../components/loading/Loading"
function Error() {
    return (
        <>
            <Loading />
            <div className="content" style={{"display":"none"}}>
                <div className="mainerror">
                    <h1>{texty["error"]}</h1>
                    <p>{texty["errormore"]}</p>
                </div>
            </div>
        </>
    )
}
export default Error;