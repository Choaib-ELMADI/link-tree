const nav = document.getElementById("navigation");
const mypic = document.querySelector(".miniLogo");
const sides = document.querySelectorAll(".sides");
const star = document.querySelector(".star");
const copyBtns = document.querySelectorAll("#copy");

window.onscroll = function(){
    if (window.scrollY >= 30) {
        nav.style.backgroundImage = "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8))";
        nav.style.backdropFilter = "blur(3px)"
        nav.style.border = "0.5px solid rgba(0, 0, 0, 0.37)";
        mypic.style.width = "50px";
        sides.forEach(function(el){
            el.style.color = 'white';
            el.style.background = 'black';
        })
    }
    else {
        nav.style.backgroundImage = "linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0))";
        nav.style.backdropFilter = "blur(0)";
        nav.style.border = "none";
        mypic.style.width = "0";
        sides.forEach(function(el){
            el.style.color = 'black';
            el.style.background = 'rgba(72, 70, 70, 0.9)';
        })
    }
}

star.onclick = function (){
    star.style.color = "red";
    alert("Thanks");
}

async function copyText(e) {
    e.preventDefault();
    url = this.parentElement.getAttribute("href");
    try {
        await navigator.clipboard.writeText(url);
        alert("Copied ✔️ : "+url);
    } catch (err) {
        console.error(err);
    }
};

copyBtns.forEach(copyBtn => { copyBtn.addEventListener('click', copyText) });