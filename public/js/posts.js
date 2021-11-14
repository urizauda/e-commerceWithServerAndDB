const postForm = document.getElementById("postForm");

postForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const img1 = document.getElementById("img1").value;
    const img2 = document.getElementById("img2").value;
    const pics = [img1, img2]


    axios
        .post("/products", {
            name: name,
            price: price,
            description: description,
            category: category,
            pics: pics
        })
        .then((response) => {
            console.log(response);
            alert("Product Added Successfully")
        })

        .catch((error) => {
            console.log(error);
        })
})