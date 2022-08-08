const buttonA = document.getElementById("version-A");
const buttonB = document.getElementById("version-B");
const buttonC = document.getElementById("version-C");
const buttonD = document.getElementById("version-D");

iconosFondoCircularBlanco = ["https://nemium.netlify.app/assets/images/chrome-white.png",
    "https://nemium.netlify.app/assets/images/vs-code-white.png",
    "https://nemium.netlify.app/assets/images/figma-white.png",
    "https://nemium.netlify.app/assets/images/github-white.png"];
iconosFondoCircularNegro = ["https://nemium.netlify.app/assets/images/chrome-black.png",
    "https://nemium.netlify.app/assets/images/vs-code-black.png",
    "https://nemium.netlify.app/assets/images/figma-black.png",
    "https://nemium.netlify.app/assets/images/github-black.png"];

addEvent();

function addFondo(iconosTipo) {
    document.getElementById("Chrome-Icon").src = iconosTipo[0];
    document.getElementById("VSC-Icon").src = iconosTipo[1];
    document.getElementById("Figma-Icon").src = iconosTipo[2];
    document.getElementById("Git-Icon").src = iconosTipo[3];
}

function addEvent() {
    buttonA.addEventListener("click", () => {
        document.getElementById("temas").href = 'assets/css/nemium-A.css';
        addFondo(iconosFondoCircularNegro)
    });
    buttonB.addEventListener("click", () => {
        document.getElementById("temas").href = 'assets/css/nemium-B.css';
        addFondo(iconosFondoCircularBlanco)
    });
    buttonC.addEventListener("click", () => {
        document.getElementById("temas").href = 'assets/css/nemium-C.css';
        addFondo(iconosFondoCircularNegro)
    });
    buttonD.addEventListener("click", () => {
        document.getElementById("temas").href = 'assets/css/nemium-D.css';
        addFondo(iconosFondoCircularBlanco)
    });
}