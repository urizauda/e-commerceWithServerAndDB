
const updateForm = document.getElementById("updateForm");


updateForm.addEventListener("submit", updatePrdct);

function updatePrdct(e) {
    e.preventDefault();
    // 1. take inputs value from form
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const img1 = document.getElementById("img1").value;
    const img2 = document.getElementById("img2").value;
    const pics = [img1, img2];
    
    // 2. update a product by given id
    axios
        .patch(`/products/${id}`, {
            name: name,
            price: price,
            description: description,
            category: category,
            pics: pics
        })
        .then(function (response) {
            console.log(response);
            alert("Product Updated");
        })
        .catch(function (error) {
            console.log(error);
        });
}