
// Create Cards Items

let tvData;
let tvPics;

axios.get("/products")
    .then((response) => {
        tvData = response.data;
        console.log(response.data);

        tvPics = document.getElementById("tvContainer");

        for (let i = 0; i < tvData.length; i++) {
            if (tvData[i].category == "TV") {
                tvPics.innerHTML += `
        <div id="picAndText">
    <div id="imgDiv">
<img class= "imageFront" src = "${tvData[i].pics[0]}">
<img class= "imageBack" src = "${tvData[i].pics[1]}">
</div>
<p>Brand: ${tvData[i].name} </p>
<p>Description: ${tvData[i].description}</p>
<p>Price: ${tvData[i].price}$</p><br><br><br>
<button class ="cartBtn" onclick = "addProductToCart('619049afe7a3fb36f5097c3d', ${i})">Add to Cart</button>
<a href="./updateProduct.html" ><input class ="cartBtnBlue" type="button" value="Update"></a>
<button class ="deleteBtn" onclick = "deleteProduct('${tvData[i]._id}')">Delete</button>
</div>`
            }
        };

    })
    .catch((error) => {
        console.log(error);
    })

//------------------------------------------------------------------------------------------
// cart counnter display

let cartCounter = document.getElementById("cartCounter")
let cartBtn = document.getElementsByClassName("cartBtn")

cartCounter.innerHTML = 0;


//------------------------------------------------------------------------------------------
// Add To Cart

function addProductToCart(cartId, index) {
    console.log(tvData[index]);
    axios
        .patch(`/carts/add/${cartId}`, tvData[index])
        .then(function (response) {
            console.log(response);
            cartCounter.innerHTML++;
            alert("Product Added To Cart");
        })
        .catch(function (error) {
            console.log(error);
        });
}


//------------------------------------------------------------------------------------------
// Delete Product

function deleteProduct(id) {
    axios.delete(`/products/${id}`)
    .then(function (response) {
        console.log(response);
        alert("Product Deleted");
      })
      .catch(function (error) {
        console.log(error);
      });
}