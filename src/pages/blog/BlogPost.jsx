import "./blog.css"
import Loading from "../../components/loading/Loading"
import texty from "../../texty"
import ScrollAnimation from "../../scrollAnimation"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Config from "../../config"
import { Interweave } from 'interweave';
function Blog() {
    useEffect(() => {
        ScrollAnimation(document.querySelectorAll(".animation"))
    },);
    const [postsjsx, setPostsjsx] = useState()
    var { blog } = useParams();
    useEffect(() => {
        fetch(Config.backend + "jzitnik/blog/"+localStorage.getItem("language"))
        .then(res=>res.json())
        .then(response=> {
            var content = response.data[blog]
            if (!content) {
                setPostsjsx(
                    <>
                        <div className="title">{texty["prispevekNeexistuje"]}</div>
                        <p>Jakub Žitník</p>
                        <div className="content">{texty["prispevekNeexistujeMore"]}</div>
                    </>
                )
            }
            else {
                setPostsjsx (
                    <>
                        <div className="title">{content.nadpis}</div>
                        <p>{content.user+" "+content.created}</p>
                        <div className="content">
                          <Interweave content={content.text}></Interweave>
                        </div>
                    </>
                )
            } 
        })
    },[])
    return (
        <>
            <Loading />
            <main className="content blogmain" style={{"display": "none"}}>
                <div className="monkey">
                    <div className="element">
                        {postsjsx}
                    </div>
                </div>
            </main>
        </>
    )
}
export default Blog
