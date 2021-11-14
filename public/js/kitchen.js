// Create Cards Items
let stovesPics, microwavesPics, toastersPics, mixersPics;
let kitchenData;

axios.get("/products")
    .then((response) => {
        kitchenData = response.data;
        console.log(response.data);

        microwavesPics = document.getElementById("matoContainer");

        for (let i = 0; i < kitchenData.length; i++) {
            if (kitchenData[i].category == "microwavesAndToasterOvens") {
                microwavesPics.innerHTML += `
        <div id="picAndTextMicrowaves">
    <div id="imgDivMicrowaves">
<img class= "imageFront" src = "${kitchenData[i].pics[0]}">
<img class= "imageBack" src = "${kitchenData[i].pics[1]}">
</div>
<p>Brand: ${kitchenData[i].name} </p>
<p>Description: ${kitchenData[i].description}</p>
<p>Price: ${kitchenData[i].price}$</p><br><br><br>
<button class ="cartBtn" onclick = "addProductToCart('619049afe7a3fb36f5097c3d', ${i})">Add to Cart</button>
<a href="./updateProduct.html" ><input class ="cartBtnBlue" type="button" value="Update"></a>
<button class ="deleteBtn" onclick = "deleteProduct('${kitchenData[i]._id}')">Delete</button>
</div>`
            }
        };


        toastersPics = document.getElementById("tstContainer");

        for (let i = 0; i < kitchenData.length; i++) {
            if (kitchenData[i].category == "toasters") {
                toastersPics.innerHTML += `
        <div id="picAndTextToasters">
    <div id="imgDivToasters">
<img class= "imageFront" src = "${kitchenData[i].pics[0]}">
<img class= "imageBack" src = "${kitchenData[i].pics[1]}">
</div>
<p>Brand: ${kitchenData[i].name} </p>
<p>Description: ${kitchenData[i].description}</p>
<p>Price: ${kitchenData[i].price}$</p><br><br><br>
<button class ="cartBtn" onclick = "addProductToCart('619049afe7a3fb36f5097c3d', ${i})">Add to Cart</button>
<a href="./updateProduct.html" ><input class ="cartBtnBlue" type="button" value="Update"></a>
<button class ="deleteBtn" onclick = "deleteProduct('${kitchenData[i]._id}')">Delete</button>
</div>`
            }
        };


        mixersPics = document.getElementById("mxrContainer");

        for (let i = 0; i < kitchenData.length; i++) {
            if (kitchenData[i].category == "mixers") {
                mixersPics.innerHTML += `
        <div id="picAndTextMixers">
    <div id="imgDivMixers">
<img class= "imageFront" src = "${kitchenData[i].pics[0]}">
<img class= "imageBack" src = "${kitchenData[i].pics[1]}">
</div>
<p>Brand: ${kitchenData[i].name} </p>
<p>Description: ${kitchenData[i].description}</p>
<p>Price: ${kitchenData[i].price}$</p><br><br><br>
<button class ="cartBtn" onclick = "addProductToCart('619049afe7a3fb36f5097c3d', ${i})">Add to Cart</button>
<a href="./updateProduct.html" ><input class ="cartBtnBlue" type="button" value="Update"></a>
<button class ="deleteBtn" onclick = "deleteProduct('${kitchenData[i]._id}')">Delete</button>
</div>`
            }
        };


        stovesPics = document.getElementById("stvContainer");

        for (let i = 0; i < kitchenData.length; i++) {
            if (kitchenData[i].category == "electricStoves") {
                stovesPics.innerHTML += `
        <div id="picAndTextStoves">
    <div id="imgDivStoves">
<img class= "imageFront" src = "${kitchenData[i].pics[0]}">
<img class= "imageBack" src = "${kitchenData[i].pics[1]}">
</div>
<p>Brand: ${kitchenData[i].name} </p>
<p>Description: ${kitchenData[i].description}</p>
<p>Price: ${kitchenData[i].price}$</p><br><br><br>
<button class ="cartBtn" onclick = "addProductToCart('619049afe7a3fb36f5097c3d', ${i})">Add to Cart</button>
<a href="./updateProduct.html" ><input class ="cartBtnBlue" type="button" value="Update"></a>
<button class ="deleteBtn" onclick = "deleteProduct('${kitchenData[i]._id}')">Delete</button>
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
    console.log(kitchenData[index]);
    axios
        .patch(`/carts/add/${cartId}`, kitchenData[index])
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