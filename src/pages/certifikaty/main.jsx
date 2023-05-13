import "./style.css"
import texty from "../../texty"
import Loading from "../../components/loading/Loading"
function certifikaty(contain) {
    return (
        <>
            <Loading />
            <div className="content" style={{"display": "none"}}>
                <div className="certifikatyMain" >
                    <div className="element">
                        <div className="title"><strong>{texty["certifikaty"]}</strong></div>
                        <p>{texty["mamcertifikaty"]}</p>
                        <div className="certifikatyList">
                            {contain["js"]? <Js /> :null}
                            {contain["html"]? <Html /> :null}
                            {contain["python"]? <Python /> :null}
                            {contain["linux"]? <Linux /> :null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
function Js() {
    return (
        <>
            <h2>JavaScript</h2>
            <a target="_blank" href="https://www.freecodecamp.org/certification/jzitnik/javascript-algorithms-and-data-structures">JavaScript Algorithms and Data Structures</a><br></br>
            <a target="_blank" href="https://www.freecodecamp.org/certification/jzitnik/back-end-development-and-apis">JavaScript Back End Development and APIs</a><br></br>
            <a target="_blank" href="/certifikaty/js/1.pdf">JavaScript (advanced)</a>
        </>
    )
}
function Python() {
    return (
        <>
            <h2>Python</h2>
            <a target="_blank" href="/certifikaty/python/1.pdf">Python (advanced)</a>
        </>
    )
}
function Linux() {
    return (
        <>
            <h2>Linux</h2>
            <a target="_blank" href="/certifikaty/linux/1.pdf">Linux Operating System</a>
        </>
    )
}
function Html() {
    return (
        <>
            <h2>HTML</h2>
            <a target="_blank" href="https://www.freecodecamp.org/certification/jzitnik/responsive-web-design">Responsive Web Design</a>
        </>
    )
}
export default certifikaty;