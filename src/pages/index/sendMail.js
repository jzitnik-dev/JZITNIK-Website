var sendMail = () => {
    document.querySelector(".contactElement .messages .load").style.display = "flex";
    document.querySelector(".contactElement .messages .error").style.display = "none";
    document.querySelector(".contactElement .messages .success").style.display = "none";
    setTimeout(() => {
        var name = document.querySelector("#name").value;
        var email = document.querySelector("#email").value;
        var message = document.querySelector("#message").value;

        if(name.length != 0 && message.length != 0 && email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            fetch("https://jzitnik-backend.onrender.com/jzitnik/sendmail", {
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
            .then(res=>res.json())
            .then(res=> {
                setTimeout(() => {
                    if (res["message"] == "success") {
                        document.querySelector(".contactElement .messages .load").style.display = "none";
                        document.querySelector(".contactElement .messages .success").style.display = "flex";
                    }
                    else {
                        document.querySelector(".contactElement .messages .load").style.display = "none";
                        document.querySelector(".contactElement .messages .error").style.display = "flex";
                        document.querySelector(".contactElement .messages .error").textContent = document.querySelector(".contactElement .messages .error").getAttribute("errorother")
                    }
                }, "1500")
            })
        }
        else {
            document.querySelector(".contactElement .messages .load").style.display = "none";
            document.querySelector(".contactElement .messages .error").style.display = "flex";
            document.querySelector(".contactElement .messages .error").textContent = document.querySelector(".contactElement .messages .error").getAttribute("errorspatnevyplneny")
        }
    }, 500);
}
export default sendMail;