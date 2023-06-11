import "./blog.css"
import Loading from "../../components/loading/Loading"
import texty from "../../texty"
import ScrollAnimation from "../../scrollAnimation"
import { useEffect, useState } from "react"
function Blog() {
    useEffect(() => {
        ScrollAnimation(document.querySelectorAll(".animation"))
    },);
    const [postsjsx, setPostsjsx] = useState([])
    useEffect(() => {
        var url = window.location.href.replaceAll("/","").split("blog")[1]
        fetch("https://anxious-tick-onesies.cyclic.app/jzitnik/blog/"+localStorage.getItem("language"))
        .then(res=>res.json())
        .then(response=> {
            if (url == "") {
                var posts = []
                for (var i in response.data) {
                    var id = i
                    var content = response.data[i]
                    posts.push([id, content])
                }
                posts.reverse()
                setPostsjsx(
                    <>
                        <div className="title">{texty["prispevky"]}</div>
                        <div className="prispevky">
                            {posts.map((e) => {
                                return (<a key={e[0]} href={'/blog/'+e[0]}>
                                    <div className="prispevek animation" style={{transition: "ease 0.5s "+(0.2+(0.2/e[0]))+"s all"}}>
                                        <div className="nadpis">{e[1].nadpis}</div>
                                        <div className="info">
                                            <small className="vytvoril">{e[1].user}</small>
                                            <small className="vytvoreno">{e[1].created}</small>
                                        </div>
                                        <div className="text">{e[1].text.split(" ").length > 40 ? e[1].text.replace(/<[^>]+>/g,'').trim().split(" ", 40).join(" ")+"..." : e[1].text.replace(/<[^>]+>/g,'')}</div>
                                    </div>
                                </a>)
                            })}
                        </div>
                    </>    
                )
            }
            else {
                var content = response.data[url]
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
                            <div className="content" dangerouslySetInnerHTML={{__html: content.text}}></div>
                        </>
                    )
                }
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