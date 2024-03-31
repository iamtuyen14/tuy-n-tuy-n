document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    // Here you can handle the form submission, e.g., send data to server or display a confirmation message
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  });