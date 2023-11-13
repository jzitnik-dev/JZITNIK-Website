import "./style.css"
import texty from "../../texty"
import { useEffect, useState } from "react";
import ScrollAnimation from "../../scrollAnimation"
import Loading from "../../components/loading/Loading"
import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


var sendMail = () => {
    document.querySelector(".contactElement .messages .load").style.display = "flex";
    setTimeout(() => {
        var name = document.querySelector("#name").value;
        var email = document.querySelector("#email").value;
        var message = document.querySelector("#message").value;

        if (name.length != 0 && message.length != 0 && email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            fetch("https://backend.jzitnik.is-a.dev/jzitnik/sendmail", {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    'name': name,
                    'email': email,
                    'message': message
                }),
            })
                .then(res => res.json())
                .then(res => {
                    setTimeout(() => {
                        if (res["message"] == "success") {
                            document.querySelector(".contactElement .messages .load").style.display = "none";
                            toast.success(texty["bylaodeslanaformular"], {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                            });
                        }
                        else {
                            document.querySelector(".contactElement .messages .load").style.display = "none";
                            toast.error(texty["nastalachybaformular"], {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                            });
                        }
                    }, "1500")
                })
                .catch(() => {
                    document.querySelector(".contactElement .messages .load").style.display = "none";
                    toast.error(texty["nastalachybaformular"], {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                })
        }
        else {
            document.querySelector(".contactElement .messages .load").style.display = "none";
            toast.error(texty["spatneVyplnenyFormular"], {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }, 500);
}

function index() {
    // Load scroll and card animation
    useEffect(() => {
        ScrollAnimation(document.querySelectorAll(".animation"))
        document.querySelectorAll("#cards").forEach(element => {
            element.onmousemove = e => {
                for (const card of document.getElementsByClassName("card")) {
                    const rect = card.getBoundingClientRect(),
                        x = e.clientX - rect.left,
                        y = e.clientY - rect.top;
                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);
                };
            }
        });
    }, []);

    // Load posts
    const [postsjsx, setPostsjsx] = useState([]);
    useEffect(() => {
        setPostsjsx(
            <>
                <Link>
                    <div className="card cardanimation">
                        <div className="card-content">
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <div className="card-info-title">
                                        <h3 className="lod"></h3>
                                        <h4 className="lod first" style={{ margin: 0 }}></h4>
                                        <h4 className="lod second"></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="card cardanimation">
                        <div className="card-content">
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <div className="card-info-title">
                                        <h3 className="lod"></h3>
                                        <h4 className="lod first" style={{ margin: 0 }}></h4>
                                        <h4 className="lod second"></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="card cardanimation">
                        <div className="card-content">
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <div className="card-info-title">
                                        <h3 className="lod"></h3>
                                        <h4 className="lod first" style={{ margin: 0 }}></h4>
                                        <h4 className="lod second"></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </>
        )

        fetch("https://backend.jzitnik.is-a.dev/jzitnik/blog/" + localStorage.getItem("language"))
            .then((response) => response.json())
            .then((response) => {
                if (response.message = "success") {
                    var posts = []
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
                    posts.reverse()
                    setPostsjsx(posts.map((e) => {
                        return (
                            <Link key={e[0]} to={"blog/" + e[0]}>
                                <div className="card cardanimation">
                                    <div className="card-content">
                                        <div className="card-info-wrapper">
                                            <div className="card-info">
                                                <div className="card-info-title">
                                                    <h3>{e[1].nadpis}</h3>
                                                    <h4 style={{ margin: 0 }}>{e[1].user}</h4>
                                                    <h4>{(e[1].text.replace(/<[^>]+>/g, '').trim().split(" ").length > 20) ? (e[1].text.replace(/<[^>]+>/g, '').trim().split(" ", 20).join(" ") + "...") : (e[1].text.replace(/<[^>]+>/g, '').trim())}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }))
                }
            })
            .catch((err) => {
                console.log(err)
            })
        setInterval(() => {
            ScrollAnimation(document.querySelectorAll(".cardanimation"))
        }, 2000);
    }, []);

    return (
        <>
            <Loading />
            <div className="content" style={{ "display": "none" }}>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <main id="particles">
                    <div className="gradient"></div>
                    <section>
                        <p className="hello animation animationStyles">{texty["Ahoj, já jsem"]}</p>
                        <h2 className="animation animationStyles">Jakub Žitník</h2>
                        <p className="miniAbout animation animationStyles">{texty["fullstack"]}</p>
                        <div className="social animation animationStyles">
                            <a href='/link/github'><box-icon type="logo" name="github" color='white'></box-icon></a>
                            <a href='/link/instagram'><box-icon type="logo" name="instagram" color='white'></box-icon></a>
                            <a href='/link/youtube'><box-icon type="logo" name="youtube" color='white'></box-icon></a>
                        </div>
                    </section>
                </main>
                <section id="about" className="about">
                    <div className="element animation">
                        <div className="title">{texty["O mě"]}</div>
                        <hr></hr>
                        <p dangerouslySetInnerHTML={{ __html: texty["aboutme"] }}></p>
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
                                <div className="percentage">80%</div>
                                <div className="slider"><div className="slide css"></div></div>
                            </li>
                            <li>
                                <div className="name">JavaScript</div>
                                <div className="percentage">95%</div>
                                <div className="slider"><div className="slide js"></div></div>
                            </li>
                            <li>
                                <div className="name">React</div>
                                <div className="percentage">95%</div>
                                <div className="slider"><div className="slide react"></div></div>
                            </li>
                            <li>
                                <div className="name">Next.js</div>
                                <div className="percentage">90%</div>
                                <div className="slider"><div className="slide nextjs"></div></div>
                            </li>
                            <li>
                                <div className="name">Python</div>
                                <div className="percentage">95%</div>
                                <div className="slider"><div className="slide python"></div></div>
                            </li>
                            <li>
                                <div className="name">Git</div>
                                <div className="percentage">95%</div>
                                <div className="slider"><div className="slide git"></div></div>
                            </li>
                            <li>
                                <div className="name">Linux</div>
                                <div className="percentage">95%</div>
                                <div className="slider"><div className="slide linux"></div></div>
                            </li>
                            <li>
                                <div className="name">Node.js</div>
                                <div className="percentage">90%</div>
                                <div className="slider"><div className="slide nodejs"></div></div>
                            </li>
                            <li>
                                <div className="name">TypeScript</div>
                                <div className="percentage">85%</div>
                                <div className="slider"><div className="slide typescript"></div></div>
                            </li>
                            <li>
                                <div className="name">Java</div>
                                <div className="percentage">90%</div>
                                <div className="slider"><div className="slide java"></div></div>
                            </li>
                            <li>
                                <div className="name">Spring <span className="ucimse">{texty["ucimse"]}</span></div>
                                <div className="percentage">30%</div>
                                <div className="slider"><div className="slide spring"></div></div>
                            </li>
                            <li>
                                <div className="name">Bash</div>
                                <div className="percentage">70%</div>
                                <div className="slider"><div className="slide bash"></div></div>
                            </li>
                            <li>
                                <div className="name">SQL</div>
                                <div className="percentage">65%</div>
                                <div className="slider"><div className="slide sql"></div></div>
                            </li>
                            <li>
                                <div className="name">PHP</div>
                                <div className="percentage">40%</div>
                                <div className="slider"><div className="slide php"></div></div>
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
                                                        <h3 style={{ "fontSize": "30px" }}>JavaScript</h3>
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
                                                        <h3 style={{ "fontSize": "30px" }}>HTML</h3>
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
                                                        <h3 style={{ "fontSize": "30px" }}>Python</h3>
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
                                <a href="https://github.com/JZITNIK-github/automatic-bio-changer" target="_blank">
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
                                <a href="https://github.com/JZITNIK-github/Languager" target="_blank">
                                    <div className="card animation">
                                        <div className="card-content">

                                            <div className="card-info-wrapper">
                                                <div className="card-info">
                                                    <div className="card-info-title">
                                                        <h3>Languager [English]</h3>
                                                        <h4>{texty["aboutLanguager"]}</h4>
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
                                {postsjsx}
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
                                <input id="name" type="text" placeholder={texty["jmeno"]} />
                                <input id="email" type="text" placeholder="Email" />
                            </div>
                            <textarea id="message" placeholder={texty["zprava"]}></textarea>
                            <div className="messages">
                                <div className="load" style={{ "display": "none" }}>{texty["prosimpockejte"]}</div>
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
