// ==============================
// PAIPLY DRAFT PRO
// MAIN JAVASCRIPT
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Paiply Draft Pro iniciado");

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (backToTop) {

            if (window.scrollY > 300) {

                backToTop.style.display = "flex";

            } else {

                backToTop.style.display = "none";

            }

        }

    });

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

});
// ==========================================
// SCROLL SUAVE PARA LOS ENLACES
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// ===============================
// PAIPLY DRAFT PRO - JavaScript
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("PAIPLY DRAFT PRO iniciado.");

});
