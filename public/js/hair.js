// Create Cards Items
let shavingPics, hairStraightenerPics, trimersPics, hairDryerPics;
let hairData;


axios.get("/products")
    .then((response) => {
        hairData = response.data;
        console.log(response.data);

        shavingPics = document.getElementById("shavingContainer");

        for (let i = 0; i < hairData.length; i++) {
            if (hairData[i].category == "Shaving") {
                shavingPics.innerHTML += `
            <div id="picAndTextShaving">
        <div id="imgDivShaving">
    <img class= "imageFront" src = "${hairData[i].pics[0]}">
    <img class= "imageBack" src = "${hairData[i].pics[1]}">
    </div>
    <p>Brand: ${hairData[i].name} </p>
    <p>Description: ${hairData[i].description}</p>
    <p>Price: ${hairData[i].price}$</p><br><br><br>
    <button class ="cartBtn" onclick = "addProductToCart('619049afe7a3fb36f5097c3d', ${i})">Add to Cart</button>
    <a href="./updateProduct.html" ><input class ="cartBtnBlue" type="button" value="Update"></a>
    <button class ="deleteBtn" onclick = "deleteProduct('${hairData[i]._id}')">Delete</button>
    </div>`
            }
        };

        hairStraightenerPics = document.getElementById("hairStraightenerContainer");

        for (let i = 0; i < hairData.length; i++) {
            if (hairData[i].category == "hairStraightener") {
                hairStraightenerPics.innerHTML += `
        <div id="picAndTextHairStraighteners">
    <div id="imgDivHairStraighteners">
<img class= "imageFront" src = "${hairData[i].pics[0]}">
<img class= "imageBack" src = "${hairData[i].pics[1]}">
</div>
<p>Brand: ${hairData[i].name} </p>
<p>Description: ${hairData[i].description}</p>
<p>Price: ${hairData[i].price}$</p><br><br><br>
<button class ="cartBtn" onclick = "addProductToCart('619049afe7a3fb36f5097c3d', ${i})">Add to Cart</button>
<a href="./updateProduct.html" ><input class ="cartBtnBlue" type="button" value="Update"></a>
<button class ="deleteBtn" onclick = "deleteProduct('${hairData[i]._id}')">Delete</button>
</div>`
            }
        };

        trimersPics = document.getElementById("trimersContainer");

        for (let i = 0; i < hairData.length; i++) {
            if (hairData[i].category == "trimers") {
                trimersPics.innerHTML += `
        <div id="picAndTextTrimers">
    <div id="imgDivTrimers">
<img class= "imageFront" src = "${hairData[i].pics[0]}">
<img class= "imageBack" src = "${hairData[i].pics[1]}">
</div>
<p>Brand: ${hairData[i].name} </p>
<p>Description: ${hairData[i].description}</p>
<p>Price: ${hairData[i].price}$</p><br><br><br>
<button class ="cartBtn" onclick = "addProductToCart('619049afe7a3fb36f5097c3d', ${i})">Add to Cart</button>
<a href="./updateProduct.html" ><input class ="cartBtnBlue" type="button" value="Update"></a>
<button class ="deleteBtn" onclick = "deleteProduct('${hairData[i]._id}')">Delete</button>
</div>`
            }
        };

        hairDryerPics = document.getElementById("hairDryerContainer");

        for (let i = 0; i < hairData.length; i++) {
            if (hairData[i].category == "hairDryer") {
                hairDryerPics.innerHTML += `
        <div id="picAndTextHairDryers">
    <div id="imgDivHairDryers">
<img class= "imageFront" src = "${hairData[i].pics[0]}">
<img class= "imageBack" src = "${hairData[i].pics[1]}">
</div>
<p>Brand: ${hairData[i].name} </p>
<p>Description: ${hairData[i].description}</p>
<p>Price: ${hairData[i].price}$</p><br><br><br>
<button class ="cartBtn" onclick = "addProductToCart('619049afe7a3fb36f5097c3d', ${i})">Add to Cart</button>
<a href="./updateProduct.html" ><input class ="cartBtnBlue" type="button" value="Update"></a>
<button class ="deleteBtn" onclick = "deleteProduct('${hairData[i]._id}')">Delete</button>
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
    console.log(hairData[index]);
    axios
        .patch(`/carts/add/${cartId}`, hairData[index])
        .then(function (response) {
            console.log(response);
            cartCounter.innerHTML++;

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
      })
      .catch(function (error) {
        console.log(error);
      });
}