/* =====================================================
   SCREEN CONTROL
===================================================== */


function hideAllScreens() {

    document
        .querySelectorAll(".screen")
        .forEach(function(screen) {

            screen.classList.remove("active");

        });

}


/* =====================================================
   HOME
===================================================== */

function goHome() {

    hideAllScreens();

    document
        .getElementById("home")
        .style.display = "flex";

}


/* =====================================================
   SKY MAP
===================================================== */

function openSkyMap() {

    document
        .getElementById("home")
        .style.display = "none";

    hideAllScreens();

    document
        .getElementById("skyMapScreen")
        .classList.add("active");

}


/* =====================================================
   PREMIUM
===================================================== */

function openPremium() {

    document
        .getElementById("home")
        .style.display = "none";

    hideAllScreens();

    document
        .getElementById("premium")
        .classList.add("active");

}


/* =====================================================
   PREMIUM MESSAGE
===================================================== */

function showPremiumMessage() {

    document
        .getElementById("premiumMessage")
        .style.display = "flex";

}


function closePremiumMessage() {

    document
        .getElementById("premiumMessage")
        .style.display = "none";

}


/* =====================================================
   ABOUT
===================================================== */

function openAbout() {

    document
        .getElementById("home")
        .style.display = "none";

    hideAllScreens();

    document
        .getElementById("about")
        .classList.add("active");

}


/* =====================================================
   DARK MODE
===================================================== */

function toggleDarkMode() {

    document
        .body
        .classList
        .toggle("light");

    localStorage.setItem(
        "cosmoVisionLightMode",
        document
            .body
            .classList
            .contains("light")
    );

}


/* =====================================================
   REMEMBER THEME
===================================================== */

if (
    localStorage.getItem(
        "cosmoVisionLightMode"
    ) === "true"
) {

    document
        .body
        .classList
        .add("light");

}
