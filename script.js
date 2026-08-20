/* =========================================
   COSMO VISION - SCRIPT.JS
   ========================================= */


/* ---------- SHOW HOME ---------- */

function goHome() {

    document.querySelectorAll(".screen").forEach(function(screen) {
        screen.classList.remove("active");
    });

    document.getElementById("home").style.display = "flex";
}


/* ---------- SKY MAP ---------- */

function openSkyMap() {

    window.location.href = "skymap.html";

}


/* ---------- PREMIUM ---------- */

function openPremium() {

    document.getElementById("home").style.display = "none";

    document.querySelectorAll(".screen").forEach(function(screen) {
        screen.classList.remove("active");
    });

    document.getElementById("premium").classList.add("active");
}


/* ---------- PREMIUM LOCK MESSAGE ---------- */

function showPremiumMessage() {

    document.getElementById("premiumMessage").style.display = "flex";

}


function closePremiumMessage() {

    document.getElementById("premiumMessage").style.display = "none";

}


/* ---------- ABOUT ---------- */

function openAbout() {

    document.getElementById("home").style.display = "none";

    document.querySelectorAll(".screen").forEach(function(screen) {
        screen.classList.remove("active");
    });

    document.getElementById("about").classList.add("active");
}


/* ---------- DARK MODE ---------- */

function toggleDarkMode() {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem(
            "cosmoVisionTheme",
            "light"
        );

    } else {

        localStorage.setItem(
            "cosmoVisionTheme",
            "dark"
        );

    }
}


/* ---------- LOAD SAVED THEME ---------- */

window.addEventListener("DOMContentLoaded", function() {

    const savedTheme =
        localStorage.getItem("cosmoVisionTheme");

    if (savedTheme === "light") {

        document.body.classList.add("light");

    }

});
