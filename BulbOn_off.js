function switchOff() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("onSwitch").style.backgroundColor = "Red";
    document.getElementById("switchStatus").textContent = "switchOff";
}

function switchOn() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("offSwitch").style.backgroundColor = "red";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("switchStatus").textContent = "switchOn";
}