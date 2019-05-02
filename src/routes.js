const express = require("express");
const routes = express.Router();

const ProductController = require("./controlles/ProductController");
const PostController = require("./controlles/PostController");

// Rotas Products
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

// Rotas Posts
routes.get("/posts", PostController.index);
routes.get("/posts/:id", PostController.show);
routes.post("/posts", PostController.store);
routes.put("/posts/:id", PostController.update);
routes.delete("/posts/:id", PostController.destroy);

module.exports = routes;
