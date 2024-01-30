document.addEventListener("DOMContentLoaded", function () {
    // Fetch and include the navbar HTML
    fetch("footer.html")
      .then(response => response.text())
      .then(data => {
        document.body.insertAdjacentHTML("afterend", data);
      });
  });
  