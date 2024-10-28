const btn = document.getElementsByTagName("button");

function saltaAlert() {
    alert("HAS CLICKADO");
}

btn[0].addEventListener("mouseover", ()=>document.body.style.backgroundColor="red");
btn[0].addEventListener("mouseout", () => document.body.style.backgroundColor="white");
btn[0].addEventListener("click", saltaAlert);
btn[1].addEventListener("click", () => btn[0].removeEventListener("click", saltaAlert));






