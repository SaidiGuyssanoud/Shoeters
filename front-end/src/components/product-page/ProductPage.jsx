import React from "react";
import "./product.css";
// import {Grid} from "@material-ui/core";
// import ShoppingCart from "../ShoppingCart";
import Slider from "../Slider";

// const products = [
//     {
//         id: "1",
//         name: "Nike Dunk Low Retro ",
//         brand: "Nike",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWoDh1GEHz0xNAIjxEyZMU_1UV-bSIDTQ9g&usqp=CAU ",
//         price: "99.99€ ",
//         description: "Une paire pour sublimer n'importe quel style",
//     },
//     {
//         id: "2",
//         name: "Puma",
//         brand: "Puma wild Rider layers",
//         image: "https://media.gqmagazine.fr/photos/60ace6ec59feb6bf2d96e9bb/master/w_1920,h_1280,c_limit/25052021_JAY_01.jpg",
//         price: "99.99€",
//         description: "Une paire pour sublimer n'importe quel style",
//     },
// ]

const ProductPage = () => {
    return (
        <div>
            <h1>My sneaker</h1>
        
            <div className="container">
                <div className="card navbar">1</div>
                <div className="card produit">
                    <Slider />
                    <span>$Price</span>
                </div>
                <div className=" infos" >
                <div className="card aside">3</div>
                <div className="card lookBook">4</div>
                </div>
            </div>
            <footer>
               <h2>Contact</h2>
            </footer>
        </div>
    )

}

export default ProductPage;