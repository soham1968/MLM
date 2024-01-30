window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.documentElement.scrollTop > 1) {
        element = document.getElementById("nav-head");
        element.classList.add("test");
        element.style.backgroundColor = "#fff";
        document.getElementById("nav-light-logo").style.display = "none";
        document.getElementById("nav-dark-logo").style.display = "block";
        document.getElementById("back-to-top").style.display = "block";
        document.getElementById("nav-dark-head").style.color = "#007880";
        document.getElementById("nav-dark-head1").style.color = "#007880";
        document.getElementById("nav-dark-head2").style.color = "#007880";
        document.getElementById("nav-dark-head3").style.color = "#007880";
        document.getElementById("nav-dark-head4").style.backgroundColor = "#007880";
        document.getElementById("nav-dark-head4").style.color = "#fff";
        document.getElementById("toggle-btn").style.color = "#007880";

    } else {
        element = document.getElementById("nav-head");
        element.classList.remove("test");
        element.style.backgroundColor = "#0698a0";
        document.getElementById("nav-light-logo").style.display = "block";
        document.getElementById("nav-dark-head4").style.backgroundColor = "#fff";
        document.getElementById("back-to-top").style.display = "none";
        document.getElementById("nav-dark-logo").style.display = "none";
        document.getElementById("toggle-btn").style.color = "white";
        document.getElementById("nav-dark-head").style.color = "white";
        document.getElementById("nav-dark-head1").style.color = "white";
        document.getElementById("nav-dark-head2").style.color = "white";
        document.getElementById("nav-dark-head3").style.color = "white";
        document.getElementById("nav-dark-head4").style.color = "#007880";
    }
}