const CONSOLE_MESSAGES = [
    "Qué más pues. I'm from Medellín, Colombia",
    // "It's a pleasure to have you here",
    // "Welcome to my stuff",
    // '"There is art to science, and a science in art"',
    "I learn to share, and share to learn... (bis)",
    "I've met amazing humans from all over the world'",
];

var messageQueue = [];
var firstMessageShown = false;

function getNextMessage() {
    if (!firstMessageShown) {
        firstMessageShown = true;
        return CONSOLE_MESSAGES[0];
    }
    if (messageQueue.length === 0) {
        messageQueue = CONSOLE_MESSAGES.slice().sort(function() { return Math.random() - 0.5; });
    }
    return messageQueue.pop();
}

function init() {
    events();
}

function events() {
    var btnChangeMode         = document.getElementById("btn-change-mode");
    var consoleEl             = document.getElementById("console-float");
    var consoleTxt            = document.getElementById("console-float-text");
    var activeSection         = null;
    var currentTypingInterval = null;
    var showTimeout           = null;
    var hideTimeout           = null;

    function clearAllTimers() {
        if (showTimeout)           { clearTimeout(showTimeout);            showTimeout = null; }
        if (hideTimeout)           { clearTimeout(hideTimeout);            hideTimeout = null; }
        if (currentTypingInterval) { clearInterval(currentTypingInterval); currentTypingInterval = null; }
    }

    function hideConsole() {
        if (currentTypingInterval) { clearInterval(currentTypingInterval); currentTypingInterval = null; }
        consoleEl.classList.add("console--hiding");
        setTimeout(function() {
            consoleEl.classList.remove("console--visible");
            consoleEl.classList.remove("console--hiding");
        }, 420);
    }

    function startTyping(text) {
        consoleTxt.innerHTML = '<span>_</span>';
        var i = 0;
        currentTypingInterval = setInterval(function() {
            if (i < text.length) {
                consoleTxt.innerHTML = text.substring(0, i + 1) + '<span>_</span>';
                i++;
            } else {
                clearInterval(currentTypingInterval);
                currentTypingInterval = null;
            }
        }, 40);
    }

    var consoleSections = ["development", "illustration", "music", "shared"];

    function setSection(id) {
        if (id === activeSection) return;
        activeSection = id;

        var isConsoleSec = consoleSections.indexOf(id) !== -1;
        var isVisible    = consoleEl.classList.contains("console--visible");
        var isPending    = showTimeout !== null;

        if (!isConsoleSec) {
            if (isPending)  { clearAllTimers(); }
            if (isVisible)  { clearAllTimers(); hideTimeout = setTimeout(hideConsole, 1000); }
            return;
        }

        // console section: don't interrupt a cycle already running
        if (isVisible || isPending) return;

        showTimeout = setTimeout(function() {
            showTimeout = null;
            consoleEl.classList.remove("console--hiding", "console--visible");
            consoleEl.classList.add("console--visible");
            startTyping(getNextMessage());

            hideTimeout = setTimeout(function() {
                hideTimeout = null;
                hideConsole();
                activeSection = null;
            }, 7000);
        }, 2000);
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