const btn = document.querySelector(".share-button");
const divContent = document.getElementById("michelle-info");
const divGeneral = document.getElementById("container-info")

const content = {
    original: `
    <img class="michelle-photo" src="images/avatar-michelle.jpg" alt="Perfil Michelle">
    <p class="michelle-info"><span class="michelle-name">Michelle Appleton</span><br>28 Jun 2020</p>
`,

    mobile: `
    <p>SHARE</p>
    <img src="images/icon-facebook.svg" alt="Facebook">
    <img src="images/icon-twitter.svg" alt="Twitter"> 
    <img src="images/icon-pinterest.svg" alt="Pinterest">
`,
    desktop: `
    <p>SHARE</p>
    <img src="images/icon-facebook.svg" alt="Facebook">
    <img src="images/icon-twitter.svg" alt="Twitter"> 
    <img src="images/icon-pinterest.svg" alt="Pinterest">
`
};

let popup;

btn.addEventListener("click", () => {
    if (window.innerWidth < 1440) {
        const redesMobile = divContent.classList.toggle("redesMobile");
        divGeneral.style.backgroundColor = redesMobile ? "hsl(217, 19%, 35%)" : "#fff";
        divContent.innerHTML = redesMobile? content.mobile : content.original;
        btn.classList.toggle("activo");
    } else {

        btn.classList.toggle("activo");
        
        if(popup) {
            popup.remove()
            popup = null
        } else {
            popup = document.createElement("div");
            popup.classList.add("popup");
            popup.innerHTML = content.desktop;
            divGeneral.appendChild(popup);
        }
    }
});