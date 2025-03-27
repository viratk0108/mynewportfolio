


function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // EmailJS parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
    };

    // Send email using EmailJS
    emailjs.send("service_791wbb1", "template_299rvpj", templateParams)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Thank you! Your message has been sent.");
        }, function(error) {
            console.log("FAILED...", error);
            alert("Oops! Something went wrong. Please try again.");
        });
}
