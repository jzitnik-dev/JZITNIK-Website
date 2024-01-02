import "./style.css";
import Loading from "../../components/loading/Loading";
import ScrollAnimation from "../../scrollAnimation"
import { useEffect } from "react";
function health() {
  useEffect(() => {
    ScrollAnimation(document.querySelectorAll(".animation"));
  }, []);

  return (
    <>
      <Loading />
      <div className="mainAbout content">
        <div className="aboutmeStarting">
          <div className="aboutmeContent animation">
            <h1>...</h1>
            <p>I just don't wanna live. Just livin' for others rn.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default health;
