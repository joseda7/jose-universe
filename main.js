const CONSOLE_MSG = [
    "I've had a great time creating and building cool projects with amazing people. Check out some of them",
    "Both illustration and animation have been around since I was a kid",
    "If you think we can collaborate together feel free to send me a message. It will be a massive honor to hear from you"
]

function init() {    
    events();
}

function events() {
    var btnChangeMode = document.getElementById("btn-change-mode");
    var consoleTxtElement1 = document.getElementById("console-text-1");
    var consoleTxtElement2 = document.getElementById("console-text-2");
    var consoleTxtElement3 = document.getElementById("console-text-3");
    
    document.addEventListener("scroll", () => {
        if (window.scrollY > 250) {
            consoleTxtElement1.innerHTML = CONSOLE_MSG[0] + "<span>_</span>";
            consoleTxtElement1.classList.add("--animate-typing");
        }
        if (window.scrollY > 700) {
            consoleTxtElement2.innerHTML = CONSOLE_MSG[1] + "<span>_</span>";
            consoleTxtElement2.classList.add("--animate-typing");{}
        }
        if (window.scrollY > 1200) {
            consoleTxtElement3.innerHTML = CONSOLE_MSG[2] + "<span>_</span>";
            consoleTxtElement3.classList.add("--animate-typing");
        } 
    }, false);

    document.querySelectorAll('.portfolio_item').forEach(item => {
        item.addEventListener('click', event => {
            event.target.classList.toggle("portfolio_item--active");
        })
    }, false);
    
    btnChangeMode.addEventListener('click', () => {
        document.body.classList.toggle("--dark-mode");
    }, false);
}

window.onload = init;