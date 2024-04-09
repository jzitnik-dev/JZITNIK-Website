var currentQuestion;

function openQuestion(num) {
  const el = document.querySelector(".question");
  el.querySelector(".number").textContent = `${num}.`;
  el.querySelector(".reseni").style.display = "none";
  el.querySelector(".button.resenibutton").style.display = "flex";
  el.querySelector(".button.backbutton").style.display = "none";
  Array.from(el.querySelector(".questions").children).forEach((element) => {
    if (element.classList.contains(num)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });

  Array.from(el.querySelector(".reseniList").children).forEach((element) => {
    if (element.classList.contains(num)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });

  el.style.display = "block";
  currentQuestion = num;
}

function showReseni() {
  document.querySelector(".reseni").style.display = "block";
  document.querySelector(".button.resenibutton").style.display = "none";
  document.querySelector(".button.backbutton").style.display = "flex";
}

function back() {
  document.querySelector(".question").style.display = "none";
  getEl(currentQuestion).classList.add("gray");
}

function getEl(num) {
  const el = document.querySelector(".main");
  const els = Array.from(el.querySelectorAll(".hex"));

  const element = els.filter(
    (el) => el.querySelector("span").textContent.trim() == num,
  )[0];

  return element;
}

function tym(tymnum) {
  if (!currentQuestion) {
    return;
  }
  const el = getEl(currentQuestion);
  el.classList.remove("gray");

  if (tymnum == 1) {
    el.classList.remove("blue");
    el.classList.add("red");
  } else {
    el.classList.add("blue");
    el.classList.remove("red");
  }
}
