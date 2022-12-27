function init() {    
    events();
}

function events() {
    var btnChangeMode = document.getElementById("btn-change-mode");

    // document.addEventListener("scroll", (event) => {
    //     sectionDots.classList.add("--animate-fadein");
    // });

    btnChangeMode.addEventListener('click', event => {
        console.log (event.target.id);
        document.body.classList.toggle("--light-mode");
    }, false);
}

window.onload = init;