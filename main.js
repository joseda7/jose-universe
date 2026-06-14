const CONSOLE_MESSAGES = {
    development: "Games, pixels and broken toys — that's how the frontend journey started.",
    illustration: "Drawing pixels, characters, and worlds — a creative side that runs parallel to the code.",
    music: "Sound is just another dimension of creativity — here's something I made.",
    shared: "I share to learn and then I learn to keep sharing. *The content here is in pure honest Spanish :)",
};

function init() {
    events();
}

function events() {
    var btnChangeMode = document.getElementById("btn-change-mode");
    var consoleEl     = document.getElementById("console-float");
    var consoleTxt    = document.getElementById("console-float-text");
    var activeSection = null;

    function setSection(id) {
        if (id === activeSection) return;
        activeSection = id;

        if (!CONSOLE_MESSAGES[id]) {
            consoleEl.classList.remove("console--visible");
            return;
        }

        consoleTxt.classList.remove("--animate-typing");
        void consoleTxt.offsetWidth; // force reflow to restart animation
        consoleTxt.innerHTML = CONSOLE_MESSAGES[id] + "<span>_</span>";
        consoleTxt.classList.add("--animate-typing");
        consoleEl.classList.add("console--visible");
    }

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) setSection(entry.target.id);
        });
    }, { rootMargin: "-30% 0px -30% 0px", threshold: 0 });

    ["about", "development", "illustration", "music", "shared", "contact"].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) observer.observe(el);
    });

    document.querySelectorAll('.gallery').forEach(function(gallery) {
        var mainImg = gallery.querySelector('.gallery__main');
        var titleEl = gallery.querySelector('.gallery__title');
        var descEl  = gallery.querySelector('.gallery__desc');
        var thumbs  = gallery.querySelectorAll('.gallery__thumb');

        thumbs.forEach(function(btn) {
            btn.addEventListener('click', function() {
                mainImg.src          = btn.dataset.full;
                mainImg.alt          = btn.querySelector('img').alt;
                titleEl.textContent  = btn.dataset.title || '';
                descEl.textContent   = btn.dataset.desc  || '';
                thumbs.forEach(function(b) { b.setAttribute('aria-selected', 'false'); });
                btn.setAttribute('aria-selected', 'true');
            });
        });
    });

    btnChangeMode.addEventListener('click', function() {
        document.body.classList.toggle("--dark-mode");
    });
}

window.onload = init;