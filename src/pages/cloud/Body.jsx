import "./style.css";
import Loading from "../../components/loading/Loading";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Config from "../../config";
function cloud() {
  const shouldDownload = useRef(true);
  const { file } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const [content, setContent] = useState(<Loading fallback />);

  useEffect(() => {
    function humanFileSize(bytes, si = false, dp = 1) {
      const thresh = si ? 1000 : 1024;

      if (Math.abs(bytes) < thresh) {
        return bytes + " B";
      }

      const units = si
        ? ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
        : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
      let u = -1;
      const r = 10 ** dp;

      do {
        bytes /= thresh;
        ++u;
      } while (
        Math.round(Math.abs(bytes) * r) / r >= thresh &&
        u < units.length - 1
      );

      return bytes.toFixed(dp) + " " + units[u];
    }
    if (!shouldDownload.current) return;
    shouldDownload.current = false;
    (async () => {
      if (file) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `${Config.backend}uploads/${file}?token=${token}`);
        xhr.responseType = "blob";
        let totalSize = 0;
        let downloadedSize = 0;

        xhr.onprogress = function (event) {
          if (event.lengthComputable) {
            totalSize = event.total;
            downloadedSize = event.loaded;

            const percentage = (downloadedSize / totalSize) * 100;
            setContent(
              <div className="aboutmeStarting">
                <div className="aboutmeContent">
                  <h1>{`${percentage.toFixed(2)}%`}</h1>
                  <p>Právě probíhá stahování</p>
                  <hr />
                  <p>Název souboru: {file}</p>
                  <p>Velikost souboru: {humanFileSize(totalSize)}</p>
                </div>
              </div>,
            );
          } else {
            setContent(
              <div className="aboutmeStarting">
                <div className="aboutmeContent">
                  <p>Právě probíhá stahování</p>
                  <hr />
                  <p>Název souboru: {file}</p>
                  <p>Velikost souboru: {humanFileSize(totalSize)}</p>
                </div>
              </div>,
            );
          }
        };

        xhr.onload = function () {
          if (xhr.status === 200) {
            const blob = xhr.response;

            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = file;
            link.style.display = "none";
            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);

            setContent(
              <div className="aboutmeStarting">
                <div className="aboutmeContent">
                  <h1>Staženo!</h1>
                  <p>Soubor byl úspěšně stažen!</p>
                </div>
              </div>,
            );
          } else if (xhr.status === 403) {
            setContent(
              <div className="aboutmeStarting">
                <div className="aboutmeContent">
                  <h1>Chyba!</h1>
                  <p>K tomuto souboru nemáte přístup!</p>
                </div>
              </div>,
            );
          } else if (xhr.status === 404) {
            setContent(
              <div className="aboutmeStarting">
                <div className="aboutmeContent">
                  <h1>Chyba!</h1>
                  <p>Tento soubor nebyl nalezen!</p>
                </div>
              </div>,
            );
          } else if (xhr.status === 410) {
            setContent(
              <div className="aboutmeStarting">
                <div className="aboutmeContent">
                  <h1>Pozor!</h1>
                  <p>Platnost odkazu vypršela.</p>
                  <p>Kontaktujte majitele obsahu pro obnovení odkazu.</p>
                </div>
              </div>,
            );
          } else {
            setContent(
              <div className="aboutmeStarting">
                <div className="aboutmeContent">
                  <h1>Chyba!</h1>
                  <p>Kód chyby: {xhr.status}</p>
                  <p>Text: {xhr.statusText}</p>
                </div>
              </div>,
            );
          }
        };

        xhr.send();
      }
    })();
  }, []);

  return (
    <>
      <div className="mainCloud content">{content}</div>
    </>
  );
}
export default cloud;
