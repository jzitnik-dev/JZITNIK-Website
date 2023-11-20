import "./style.css"
import Loading from "../../components/loading/Loading"
import texty from "../../texty"
function hover(e) {
    var element = e.target
    element.style.transform = "scale(1)"
}
function hoverout(e) {
    var element = e.target
    element.style.transform = "scale(0.9)"
}
function Technologie() {
    var allTechnologies = {
        "androidstudio": "https://developer.android.com/studio",
        "arduino": "https://www.arduino.cc/",
        "babel": "https://babeljs.io/",
        "bash": "https://cs.wikipedia.org/wiki/Bash",
        "bootstrap": "https://getbootstrap.com/",
        "cloudflare": "https://www.cloudflare.com/",
        "codepen": "https://codepen.io/",
        "css": "https://cs.wikipedia.org/wiki/Kask%C3%A1dov%C3%A9_styly",
        "discord": "https://discord.com/",
        "docker": "https://www.docker.com/",
        "electron": "https://www.electronjs.org/",
        "express": "https://expressjs.com/",
        "flask": "https://flask.palletsprojects.com/en/2.3.x/",
        "git": "https://git-scm.com/",
        "github": "https://github.com/",
        "html": "https://cs.wikipedia.org/wiki/Hypertext_Markup_Language",
        "java": "https://www.java.com/en/",
        "js": "https://www.javascript.com/",
        "linux": "https://cs.wikipedia.org/wiki/Linux",
        "md": "https://en.wikipedia.org/wiki/Markdown",
        "mongodb": "https://www.mongodb.com/",
        "mysql": "https://www.mysql.com/",
        "neovim": "https://neovim.io/",
        "nextjs": "https://nextjs.org/",
        "nodejs": "https://www.nodejs.org/",
        "php": "https://www.php.net/",
        "py": "https://python.org/",
        "raspberrypi": "https://www.raspberrypi.com/",
        "react": "https://react.dev/",
        "sass": "https://sass-lang.com/",
        "stackoverflow": "https://stackoverflow.com/",
        "tailwind": "https://tailwindcss.com/",
        "ts": "https://www.typescriptlang.org/",
        "vim": "https://www.vim.org/",
        "vite": "https://vitejs.dev/",
        "vscode": "https://code.visualstudio.com/",
    }
    return (
        <>
            <Loading />
            <div className="content" style={{"display": "none"}}>
                <div className="techmologieMain" >
                    <div className="element">
                        <div className="title">{texty["technologie"]}</div>
                        <p>{texty["technologiepouzivam"]}</p>
                        <div className="list">
                            {
                                Object.keys(allTechnologies).map((e) => {
                                    return (
                                        <a href={allTechnologies[e]} key={e} target="_blank">
                                            <img onMouseOver={hover} onMouseOut={hoverout} src={"https://skillicons.dev/icons?i="+e}></img>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Technologie;
