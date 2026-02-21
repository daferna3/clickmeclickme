const button = document.getElementById("one");
const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");
const popup4 = document.getElementById("popup4");

const yesB1 = document.getElementById("close"); // close
const noB1 = document.getElementById("free1"); // not procrastinating
const yesB2 = document.getElementById("close2"); // close
const noB2 = document.getElementById("free2"); // not procrastinating
const yesB3 = document.getElementById("close3"); // close
const noB3 = document.getElementById("free3"); // not procrastinating
const linkB = document.getElementById("linkB");

button.addEventListener("click", () => {
    popup1.style.display = "flex";
});

function closePage() {
    window.location.href = "about:blank";
}

yesB1.addEventListener("click", closePage);

noB1.addEventListener("click", () => {
    popup1.style.display = "none";
    popup2.style.display = "flex";
});

yesB2.addEventListener("click", closePage);

noB2.addEventListener("click", () => {
    popup2.style.display = "none";
    popup3.style.display = "flex";
});

yesB3.addEventListener("click", closePage);

noB3.addEventListener("click", () => {
    popup3.style.display = "none";
    popup4.style.display = "flex";
});

linkB.addEventListener("click", () => {
    window.open("https://github.com/daferna3/clickmeclickme", "_blank");
});