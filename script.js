const navButtons = document.querySelectorAll(".nav-button");
const pages = document.querySelectorAll(".page");
const logo = document.getElementById("logo");
const primaryButtons = document.querySelectorAll(".primary-button");

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


function showPage(pageId) {

    pages.forEach(function (page) {

        page.classList.remove("active-page");

    });


    const selectedPage = document.getElementById(pageId);

    selectedPage.classList.add("active-page");


    navButtons.forEach(function (button) {

        button.classList.remove("active");

    });


    navButtons.forEach(function (button) {

        if (button.dataset.page === pageId) {

            button.classList.add("active");

        }

    });

}


navButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const pageId = button.dataset.page;

        showPage(pageId);

    });

});


primaryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const pageId = button.dataset.page;

        showPage(pageId);

    });

});


logo.addEventListener("click", function (event) {

    event.preventDefault();

    showPage("home");

});