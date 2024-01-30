document.addEventListener("DOMContentLoaded", function () {
    // Fetch and include the HTML content
    fetch("carousel.html")
      .then(response => response.text())
      .then(data => {
        // Find the target div
        const targetDiv = document.getElementById('carousel');
  
        // Insert the content just below the target div
        targetDiv.insertAdjacentHTML('afterend', data);
      });
  });