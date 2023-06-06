import "./style.css"
import texty from "../../texty"
import { useEffect } from "react";
import ScrollAnimation from "../../scrollAnimation"
import sendMail from "./sendMail"
import Loading from "../../components/loading/Loading"
import { Link } from "react-router-dom";
function index() {
    useEffect(() => {
        ScrollAnimation(document.querySelectorAll(".animation"))
    },);
    useEffect(() => {
        document.querySelectorAll("#cards").forEach(element => {
            element.onmousemove = e => {
                for(const card of document.getElementsByClassName("card")) {
                    const rect = card.getBoundingClientRect(),
                        x = e.clientX - rect.left,
                        y = e.clientY - rect.top;
              
                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);
                };
            }
        });

    }, []);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://anxious-tick-onesies.cyclic.app/jzitnik/blog/"+localStorage.getItem("language"), false ); 
    xmlHttp.send( null );
    var response = JSON.parse(xmlHttp.responseText)
    var posts = []
    if (response.message = "success") {
        var counter = 0;
        for (var i in response.data) {
            counter++
            if (counter > 3) {
                break
            }
            var id = i
            var content = response.data[i]
            posts.push([id, content])
        }
    }
    posts.reverse()
    return (
        <>
            <Loading />
            <div className="content" style={{"display": "none"}}>
                <main id="particles">
                    <div className="gradient"></div>
                    <section>
                        <p className="hello animation animationStyles">{texty["Ahoj, já jsem"]}</p>
                        <h2 className="animation animationStyles">Jakub Žitník</h2>
                        <p className="miniAbout animation animationStyles">Full Stack Web Developer</p>
                        <div className="social animation animationStyles">
                            <a href='/link/github'><box-icon type="logo" name="github" color='white'></box-icon></a>
                        </div>
                    </section>
                </main>
                <section id="about" className="about">
                    <div className="element animation">
                        <div className="title">{texty["O mě"]}</div>
                        <hr></hr>
                        <p dangerouslySetInnerHTML={{__html: texty["aboutme"]}}></p>
                        <div className="button"><Link to="/about" className="buttonContainer animation">{texty["more"]}</Link></div>
                    </div>
                </section>
                <section id="skills" className="skills">
                    <div className="element animation">
                        <div className="title">{texty["zkusenosti"]}</div>
                        <ul className="skillsGrid animation">
                            <li>
                                <div className="name">HTML</div>
                                <div className="percentage">95%</div>
                                <div className="slider"><div className="slide html"></div></div>
                            </li>
                            <li>
                                <div className="name">CSS</div>
                                <div className="percentage">70%</div>
                                <div className="slider"><div className="slide css"></div></div>
                            </li>
                            <li>
                                <div className="name">JavaScript</div>
                                <div className="percentage">95%</div>
                                <div className="slider"><div className="slide js"></div></div>
                            </li>
                            <li>
                                <div className="name">React<span className="ucimse">{texty["ucimse"]}</span></div>
                                <div className="percentage">85%</div>
                                <div className="slider"><div className="slide react"></div></div>
                            </li>
                            <li>
                                <div className="name">Bash</div>
                                <div className="percentage">70%</div>
                                <div className="slider"><div className="slide bash"></div></div>
                            </li>
                            <li>
                                <div className="name">Linux</div>
                                <div className="percentage">95%</div>
                                <div className="slider"><div className="slide linux"></div></div>
                            </li>
                            <li>
                                <div className="name">Java<span className="ucimse">{texty["ucimse"]}</span></div>
                                <div className="percentage">80%</div>
                                <div className="slider"><div className="slide java"></div></div>
                            </li>
                            <li>
                                <div className="name">Python</div>
                                <div className="percentage">95%</div>
                                <div className="slider"><div className="slide python"></div></div>
                            </li>
                            <li>
                                <div className="name">PHP</div>
                                <div className="percentage">50%</div>
                                <div className="slider"><div className="slide php"></div></div>
                            </li>
                            <li>
                                <div className="name">TypeScript</div>
                                <div className="percentage">85%</div>
                                <div className="slider"><div className="slide typescript"></div></div>
                            </li>
                            <li>
                                <div className="name">Git</div>
                                <div className="percentage">95%</div>
                                <div className="slider"><div className="slide git"></div></div>
                            </li>
                            <li>
                                <div className="name">SQL</div>
                                <div className="percentage">65%</div>
                                <div className="slider"><div className="slide sql"></div></div>
                            </li>
                            <li>
                                <div className="name">Node JS</div>
                                <div className="percentage">80%</div>
                                <div className="slider"><div className="slide nodejs"></div></div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="certifikaty" id="certification">
                    <div className="element">
                        <div className="title">{texty["certifikaty"]}</div>
                        <div className="certifikats">
                            <div id="cards">
                                <Link to="/certificates/js">
                                    <div className="card animation">
                                        <div className="card-content">
                                        <div className="card-image">
                                            <img src="/images/js_code.png"></img>
                                        </div>
                                        <div className="card-info-wrapper">
                                            <div className="card-info">
                                            <div className="card-info-title">
                                                <h3 style={{"fontSize": "30px"}}>JavaScript</h3>
                                            </div>    
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/certificates/html">
                                    <div className="card animation">
                                        <div className="card-content">
                                        <div className="card-image">
                                            <img src="/images/html_code.png"></img>
                                        </div>
                                        <div className="card-info-wrapper">
                                            <div className="card-info">
                                            <div className="card-info-title">
                                                <h3 style={{"fontSize": "30px"}}>HTML</h3>
                                            </div>    
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/certificates/python">
                                    <div className="card animation">
                                        <div className="card-content">
                                        <div className="card-image">
                                            <img src="/images/python_code.png"></img>
                                        </div>
                                        <div className="card-info-wrapper">
                                            <div className="card-info">
                                            <div className="card-info-title">
                                                <h3 style={{"fontSize": "30px"}}>Python</h3>
                                            </div>    
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="button"><Link to="/certificates" className="buttonContainer animation">{texty["zobrazitVse"]}</Link></div>
                    </div>
                </section>
                <section className="projekty" id="projects">
                    <div className="element">
                        <div className="title">{texty["projekty"]}</div>
                        <p>{texty["totoProjekty"]}</p>
                        <div className="projects">
                            <div id="cards">
                                <a href="https://klindos.jzitnik.is-a.dev" target="_blank">
                                    <div className="card animation">
                                        <div className="card-content">
                                        <div className="card-image">
                                            <img src="/images/klindos.jpg"></img>
                                        </div>
                                        <div className="card-info-wrapper">
                                            <div className="card-info">
                                            <div className="card-info-title">
                                                <h3>KLIND OS [Czech]</h3>  
                                                <h4>{texty["aboutKLINDOS"]}</h4>
                                            </div>    
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://github.com/JZITNIK-github/automatic-bio-changer"  target="_blank">
                                    <div className="card animation">
                                        <div className="card-content">
                                        
                                        <div className="card-info-wrapper">
                                            <div className="card-info">
                                            <div className="card-info-title">
                                                <h3>Automatic bio changer [English]</h3>  
                                                <h4>{texty["aboutABC"]}</h4>
                                            </div>    
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog" id="posts">
                    <div className="element">
                        <div className="title">{texty["prispevky"]}</div>
                        <p>{texty["someblog"]}</p>
                        <div className="posts">
                            <div id="cards">
                                {posts.map((e) => {
                                    return (
                                        <Link key={e[0]} to={"blog/"+e[0]}>
                                            <div className="card animation">
                                                <div className="card-content">
                                                    <div className="card-info-wrapper">
                                                        <div className="card-info">
                                                        <div className="card-info-title">
                                                            <h3>{e[1].nadpis}</h3>
                                                            <h4 style={{margin: 0}}>{e[1].user}</h4>
                                                            <h4>{ (e[1].text.replace(/<[^>]+>/g,'').trim().split(" ").length > 20) ?(e[1].text.replace(/<[^>]+>/g,'').trim().split(" ", 20).join(" ")+"...") : (e[1].text.replace(/<[^>]+>/g,'').trim())}</h4>
                                                        </div>    
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="status" id="">
                    <div className="element">
                        <div className="title">{texty["statuspage"]}</div>
                        <p>{texty["aboutstatus"]}</p>
                        <div className="button"><a href="https://status.jzitnik.is-a.dev" target="_blank" className="buttonContainer animation">{texty["open"]}</a></div>
                    </div>
                </section>
                <section className="kontakt" id="contact">
                    <div className="element animation">
                        <div className="title">{texty["kontakt"]}</div>
                        <p>{texty["totoKontakt"]}</p>
                        <div className="contactElement">
                            <div className="row">
                                <input id="name" type="text" placeholder={texty["jmeno"]}/>
                                <input id="email" type="text" placeholder="Email"/>
                            </div>
                            <textarea id="message" placeholder={texty["zprava"]}></textarea>
                            <div className="messages">
                                <div className="load" style={{"display": "none"}}>{texty["prosimpockejte"]}</div>
                                <div className="success" style={{"display": "none"}}>{texty["bylaodeslanaformular"]}</div>
                                <div className="error" errorspatnevyplneny={texty["spatneVyplnenyFormular"]} errorother={texty["nastalachybaformular"]} style={{"display": "none"}}>error</div>
                            </div>
                            <input onClick={sendMail} className="submit" type="submit" value={texty["submit"]} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default index;