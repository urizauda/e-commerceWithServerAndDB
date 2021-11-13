console.log("app is loading...");

const path = require("path");
const express = require("express");
const app = express();
const PORT = 8080;
const utils = require("./utils");
const basicRouteProducts = "/products";
const basicRouteContacts = "/contacts";
const basicRouteCarts = "/carts";



const publicPath = path.join(__dirname, "..", "public")
app.use(express.json());
app.use(express.static(publicPath))



// <<<<---------------- PRODUCTS ----------------->>>>>


// get all products
app.get(`${basicRouteProducts}`, (req, res) => {
    utils.getAllProducts(req, res);
})


// delete specific product by given id
app.delete(`${basicRouteProducts}/:id`, (req, res) => {
    utils.deleteProductById(req, res);
})


// post new product
app.post(`${basicRouteProducts}`, (req, res) => {
    utils.postNewProduct(req, res);
})


// update a product by given id
app.patch(`${basicRouteProducts}/:id`, (req, res) => {
    utils.updateProductByGivenId(req, res);
})




// <<<<---------------- CONTACTS ----------------->>>>>


// get all massages
app.get(`${basicRouteContacts}`, (req, res) => {
    utils.getAllMasseges(req, res);
})

// post new massages
app.post(`${basicRouteContacts}`, (req, res) => {
    utils.postNewMassege(req, res);
})



// <<<<---------------- CARTS ----------------->>>>>


// get cart by given id
app.get(`${basicRouteCarts}`, (req, res) => {
    utils.getCartById(req, res);
})


// add to cart by given id
app.patch(`${basicRouteCarts}/add/:id`, (req, res) => {
    utils.addToCart(req, res);
})

// delete from cart by given id
app.patch(`${basicRouteCarts}/delete/:id`, (req, res) => {
    utils.deleteFromCart(req, res);
})

// // post new cart
// app.post(`${basicRouteCarts}`, (req, res) => {
//     utils.postNewCart(req, res);
// })


app.listen(PORT, () => console.log(`app listening on ${PORT}`));