// const arrayOfProducts = require("../public/js/main")
require("dotenv").config()
const mongoDB =  require("mongodb");
const MongoClient = mongoDB.MongoClient;
const ObjectId = mongoDB.ObjectId;
const mongoURL = process.env.MONGOURL || "mongodb://localhost:27017";


// function insertMany(req, res) {
//     MongoClient.connect(mongoURL, (err, db) => {
//         if (err) throw err;
//         const dbo = db.db("ecommerce");
//         dbo.collection("products").insertMany(arrayOfProducts, (error, products) => {
//             if (error) throw error;
//         res.send(products)
//         })
//     })
// }


// <<<<---------------- PRODUCTS FUNCTIONS----------------->>>>>


function getAllProducts(req, res) {
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const dbo = db.db("ecommerce");
        dbo.collection("products").find({}).toArray((error, products) => {
            if (error) throw error;
            res.send(products);
            db.close();
        })
    })
}


function deleteProductById(req, res) {
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const dbo = db.db("ecommerce");
        dbo.collection("products").findOneAndDelete({ _id: ObjectId(req.params.id) }), (error, product) => {
            if (error) throw error;
            res.sendStatus(200);
            db.close();
        }
    })
}


function postNewProduct(req, res) {
    const myObj = req.body;
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const dbo = db.db("ecommerce");
        dbo.collection("products").insertOne(myObj, (error, product) => {
            if (error) throw error;
            res.send(product);
            db.close();
        })
    })
}


function updateProductByGivenId(req, res) {
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const myObj = req.body;
        const objId = { id: req.params.id};
        const dbo = db.db("ecommerce");
        dbo.collection("products").updateOne(objId, { $set: myObj }, (error, docs) => {
            if (error) throw error;
            res.send(docs);
            db.close();
        })
    })
}

// <<<<---------------- CONTACTS FUNCTIONS----------------->>>>>


function getAllMasseges(req, res) {
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const dbo = db.db("ecommerce");
        dbo.collection("contacts").find({}).toArray((error, products) => {
            if (error) throw error;
            res.send(products);
            console.log(products);
            db.close();
        })
    })
}


function postNewMassege(req, res) {
    const myObj = req.body;
    // console.log(myObj);
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const dbo = db.db("ecommerce");
        dbo.collection("contacts").insertOne(myObj, (error, product) => {
            if (error) throw error;
            res.send(product);
            db.close();
        })
    })
}


function deleteContactById(req, res) {
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const dbo = db.db("ecommerce");
        dbo.collection("contacts").findOneAndDelete({ _id: ObjectId(req.params.id) }), (error, product) => {
            if (error) throw error;
            res.sendStatus(200);
            db.close();
        }
    })
}



// <<<<---------------- CART FUNCTIONS----------------->>>>>


// function postNewCart(req, res) {
//     const myObj = req.body;
//     MongoClient.connect(mongoURL, (err, db) => {
//         if (err) throw err;
//         const dbo = db.db("ecommerce");
//         dbo.collection("carts").insertOne(myObj, (error, product) => {
//             if (error) throw error;
//             res.send(product);
//             db.close();
//         })
//     })
// }



function getCartById(req, res) {
    console.log(req.params);
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const dbo = db.db("ecommerce");
        dbo.collection("carts").find({}).toArray((error, product) => {
            if (error) throw error;
            res.send(product);
            db.close();
        })
    })
}

function addToCart(req, res) {
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const myObj = req.body;
        const objId = { _id: mongoDB.ObjectId(req.params.id) };
        const dbo = db.db("ecommerce");
        dbo.collection("carts").updateOne(objId, { $push: {products: myObj} }, (error, docs) => {
            if (error) throw error;
            res.send(docs);
            db.close();
        })
    })
}

function deleteFromCart(req, res) {
    MongoClient.connect(mongoURL, (err, db) => {
        if (err) throw err;
        const myObj = req.body;
        const objId = { _id: mongoDB.ObjectId(req.params.id) };
        const dbo = db.db("ecommerce");
        dbo.collection("carts").updateOne(objId, { $pull: {products: myObj} }, (error, docs) => {
            if (error) throw error;
            res.send(docs);
            db.close();
        })
    })
}


module.exports = { 
    getAllProducts, 
    deleteProductById, 
    postNewProduct, 
    updateProductByGivenId,
    getAllMasseges, 
    postNewMassege,
    deleteContactById,
    getCartById,
    deleteFromCart,
    addToCart
    // insertMany
    // postNewCart,
};