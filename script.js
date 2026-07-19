// Learn More Button

document.getElementById("learnBtn").addEventListener("click", () => {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
});

// Contact Form Validation

document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){

        alert("Please fill all fields.");

        return;
    }

    alert("Message sent successfully!");

    this.reset();

});
