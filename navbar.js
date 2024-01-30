document.addEventListener("DOMContentLoaded", function () {
    // Fetch and include the navbar HTML
    fetch("nav-bar.html")
      .then(response => response.text())
      .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);
      });
  });
  