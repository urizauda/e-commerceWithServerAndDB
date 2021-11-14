let laptopPics;
let laptopsData;

// Create Cards Items

axios.get("/products")
    .then((response) => {
        laptopsData = response.data;
        console.log(response.data);

        laptopPics = document.getElementById("laptopContainer");

        for (let i = 0; i < laptopsData.length; i++) {
            if (laptopsData[i].category == "Laptops") {
                laptopPics.innerHTML += `
                <div id="picAndText">
            <div id="imgDiv">
        <img class= "imageFront" src = "${laptopsData[i].pics[0]}">
        <img class= "imageBack" src = "${laptopsData[i].pics[1]}">
        </div>
        <p>Brand: ${laptopsData[i].name} </p>
        <p>Description: ${laptopsData[i].description}</p>
        <p>Price: ${laptopsData[i].price}$</p><br><br><br>
        <button class ="cartBtn" onclick = "addProductToCart('619049afe7a3fb36f5097c3d', ${i})">Add to Cart</button>
        <a href="/updateProduct.html" target = "blank"><button class ="cartBtnBlue" type="submit">Update</button></a>
        <button class ="deleteBtn" onclick = "deleteProduct('${laptopsData[i]._id}')">Delete</button>
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
    axios
        .patch(`/carts/add/${cartId}`, laptopsData[index])
        .then(function (response) {
            console.log(response);
            cartCounter.innerHTML++
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