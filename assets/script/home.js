function toggleLogo () {
    let wink= document.getElementById("logo-wink");
    wink.classList.toggle("hidden"); 
}

document.getElementById("images").onmouseover= toggleLogo; 