const contactsDiv = document.getElementById("contactsDiv");

function getPersons() {
axios
    .get("/contacts")
    .then(function (response) {
        const msg = response.data;
        console.log(response.data);
        for (let i = 0; i < msg.length; i++) {
            contactsDiv.innerHTML += `
    <p>First Name: ${msg[i].firstName}</p>
    <p>Last Name: ${msg[i].lastName}</p>
    <p>E-mail: ${msg[i].email}</p>
    <p>Phone: ${msg[i].phone}</p>
    <p>Message: ${msg[i].message}</p>
    <hr>
    `;
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}
getPersons()