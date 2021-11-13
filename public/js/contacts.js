
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;


    axios
    .post("/contacts", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message
    })
        .then((response) => {
            console.log(response);
        })

        .catch((error) => {
            console.log(error);
        })
})

