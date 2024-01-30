document.addEventListener("DOMContentLoaded", function () {
    // Fetch and include the HTML content
    fetch("demo.html")
      .then(response => response.text())
      .then(data => {
        // Find the target div
        const targetDiv = document.getElementById('demo1');
        // Insert the content just below the target div
        targetDiv.insertAdjacentHTML('beforebegin', data);
      });
  });