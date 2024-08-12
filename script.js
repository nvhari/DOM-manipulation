let logo = document.getElementById("logo")
console.log(logo)

function changelogo() {
     
    logo.src ="img/smile.jpg";
    console.log("yes")
}
function reset() {
     
    logo.src = "img/sad.jpg";
    console.log("no")
}