document.addEventListener("DOMContentLoaded", function() {
    gsap.from("h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from("p", { opacity: 0, y: 20, delay: 0.5, duration: 1 });

    document.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        document.body.style.backgroundPositionY = scrollPos * 0.5 + "px";
    });

    document.getElementById("survey-form").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("thank-you-message").style.display = "block";
        setTimeout(() => {
            document.getElementById("survey-form").reset();
            document.getElementById("thank-you-message").style.display = "none";
        }, 3000);
    });
});
