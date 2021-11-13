
let cartTable = document.getElementById("cartTable");
let totalSum = document.getElementById("totalSum");
let removeFromCartBtn = document.getElementsByClassName("removeFromCartBtn");
let cartsData;


function deleteProductFromCart(cartId, index) {
    console.log(cartsData[index]);
    console.log(index);
    axios
        .patch(`/carts/delete/${cartId}`, cartsData[index])
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}


axios.get("/carts")
    .then((response) => {
        console.log(response);
        cartsData = response.data[0].products;
        for (let i = 0; i < cartsData.length; i++) {
            cartTable.innerHTML += `
        <tr class="cartItems" id ="${cartsData[i].id}">
        <td id="tdPicDescription"><img src = "${cartsData[i].pics[0]}" style ="width: 25%"></td>
        <td>${cartsData[i].category}</td>
        <td>${cartsData[i].name}</td>
        <td>${cartsData[i].description}</td>
        <td>${cartsData[i].price}$</td>
        <td><button onclick = "deleteProductFromCart('619049afe7a3fb36f5097c3d', ${i})" class ="removeFromCartBtn">x</button></td>
        </tr>`;
            totalDisplay()
            ThanksForBuying()
        }
    })
    .catch((error) => {
        console.log(error);
    })


//-----------------------------------------------------------------------------------------------------
// Total Display

function totalDisplay() {
    let sum = 0;
    for (let i = 0; i < cartsData.length; i++) {
        sum += cartsData[i].price;
    }
    totalSum.innerHTML = `<p id ="totalInpt">Total: &nbsp ${sum}$</p>`;
}


//-----------------------------------------------------------------------------------------------------
//Thanks For Buying Message

let tnx4buy = document.getElementById("tnx4Buy")
let buyNowBtn = document.getElementById("buyNowBtn");

function ThanksForBuying() {
    buyNowBtn.onclick = () => {
        tnx4buy.style.visibility = "visible";
        setTimeout(() => {
            tnx4buy.style.visibility = "hidden";
        }, 2000);
    }
}