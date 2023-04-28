import "./style.css"
import texty from "../../texty"
import { useEffect } from "react";
import ScrollAnimation from "../../scrollAnimation"
import sendMail from "./sendMail"
import Loading from "../../components/loading/Loading"
import { Link } from "react-router-dom";
function index() {
    useEffect(() => {
            var els = document.querySelectorAll(".hover3d")
            els.forEach(el=> {
                el.addEventListener('mousemove', handleMove)

                /* Define function a */
                function handleMove(e) {
                    /* Get the height and width of the element */
                    const height = el.offsetHeight
                    const width = el.offsetWidth
                    /* Store the x position */
                    const xVal = e.layerX
                    /* Store the y position */
                    const yVal = e.layerY

                    
                    const yRotation = 10 * ((xVal - width / 2) / width)
                    const xRotation = -10 * ((yVal - height / 2) / height)

                    
                    const string = 'perspective(500px) scale(1.09) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
                    el.style.transform = string
                }

                el.addEventListener('mouseout', function() {
                    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
                })

                /* Add listener for mousedown event, to simulate click */
                el.addEventListener('mousedown', function() {
                    el.style.transform = 'perspective(500px) scale(0.95) rotateX(0) rotateY(0)'
                })

                /* Add listener for mouseup, simulate release of mouse click */
                el.addEventListener('mouseup', function() {
                    el.style.transform = 'perspective(500px) scale(1.05) rotateX(0) rotateY(0)'
                })
            })
    }, []);
    useEffect(() => {
        ScrollAnimation(document.querySelectorAll(".animation"))
        
    }, );
    return (
        <>
            <Loading />
            <div className="content" style={{"display": "none"}}>
                <main id="particles">
                    <section>
                        <p className="hello animation animationStyles">{texty["Ahoj, já jsem"]}</p>
                        <h2 className="animation animationStyles">Jakub Žitník</h2>
                        <p className="miniAbout animation animationStyles">Full Stack Web Developer</p>
                    </section>
                </main>
                <section id="about" className="about">
                    <div className="element animation">
                        <div className="title">{texty["O mě"]}</div>
                        <hr></hr>
                        <p dangerouslySetInnerHTML={{__html: texty["aboutme"]}}></p>
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
                                <div className="percentage">40%</div>
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
                                <div className="percentage">20%</div>
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
                                <div className="name">Git<span className="ucimse">{texty["ucimse"]}</span></div>
                                <div className="percentage">40%</div>
                                <div className="slider"><div className="slide git"></div></div>
                            </li>
                            <li>
                                <div className="name">SQL</div>
                                <div className="percentage">65%</div>
                                <div className="slider"><div className="slide sql"></div></div>
                            </li>
                            <li>
                                <div className="name">Node JS<span className="ucimse">{texty["ucimse"]}</span></div>
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
                            <Link to="/certificates/js">
                                <div className="certifikat animation hover3d" style={{"backgroundImage": "url(/images/js_code.png)"}}>
                                    <p>JavaScript</p>
                                </div>
                            </Link>
                            <Link to="/certificates/html">
                                <div className="certifikat animation hover3d" style={{"backgroundImage": "url(/images/html_code.png)"}}>
                                    <p>HTML</p>
                                </div>
                            </Link>
                            <Link to="/certificates/python">
                                <div className="certifikat animation hover3d" style={{"backgroundImage": "url(/images/python_code.png)"}}>
                                    <p>Python</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="projekty" id="projects">
                    <div className="element">
                        <div className="title">{texty["projekty"]}</div>
                        <p>{texty["totoProjekty"]}</p>
                        <div className="projects">
                            <a href="https://klindos.jzitnik.is-a.dev" target="_blank">
                                <div className="project hover3d animation" style={{"backgroundImage": "url(/images/klindos.jpg)"}}>
                                    <p>KLIND OS</p>
                                </div>
                            </a>
                            <a href="https://github.com/JZITNIK-github/automatic-bio-changer" target="_blank">
                                <div className="project hover3d animation">
                                    <p style={{"fontSize": "40px"}}>Automatic bio changer</p>
                                </div>
                            </a>
                        </div>
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