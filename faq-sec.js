document.addEventListener("DOMContentLoaded", function () {
    // Fetch and include the HTML content
    fetch("faq.html")
      .then(response => response.text())
      .then(data => {
        // Find the target div
        const targetDiv = document.getElementById('faq');
        // Insert the content just below the target div
        targetDiv.insertAdjacentHTML('afterbegin', data);
      });
  });