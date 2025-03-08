document.addEventListener("DOMContentLoaded", function () {
    // Survey Form Submission
    let surveyForm = document.querySelector("form");
    if (surveyForm) {
        surveyForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for your feedback!");
        });
    }

    // Smooth Scrolling for Navigation Links
    let navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Hover Effect on Navigation Links
    let links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("mouseover", function ()
