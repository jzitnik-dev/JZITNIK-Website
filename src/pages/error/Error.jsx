import "./style.css"
import Loading from "../../components/loading/Loading"
function Error() {
    return (
        <>
            <Loading />
            <div className="content" style={{"display":"none"}}>
                <div className="mainerror">
                    <h1>Error!</h1>
                    <p>EN: Error occured while loading the page.</p>
                    <p>CS: Nastala chyba při načítání stránky.</p>
                </div>
            </div>
        </>
    )
}
export default Error;