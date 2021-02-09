$(document).ready(function () {

    $("#btn-down").click(function () {
        $("html, body").animate({
            scrollTop: $("#sec-2").offset().top
        }, 1000);
    });
});


window.onload = function () {

    const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
    })

}