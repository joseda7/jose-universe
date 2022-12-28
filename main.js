function init() {    
    events();
}

function events() {
    var btnChangeMode = document.getElementById("btn-change-mode");
    var currentIdNum = 0;
    // var btnChangeMode

    // document.addEventListener("scroll", (event) => {
    //     sectionDots.classList.add("--animate-fadein");
    // });
    
    // portfolio_item--active

    document.querySelectorAll('.portfolioItem').forEach(item => {
        item.addEventListener('click', event => {
            currentIdNum = parseInt(event.target.id.replace( /^\D+/g, ''));
            event.target.classList.toggle("portfolio_item--active");
        })
    }, false);
    
    btnChangeMode.addEventListener('click', event => {
        document.body.classList.toggle("--dark-mode");
    }, false);
}

window.onload = init;