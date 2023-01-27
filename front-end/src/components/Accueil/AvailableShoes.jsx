import React from 'react';
import classes from "./AvailableShoes.css"
import { useState, useEffect } from 'react';

// const ShoesList = [
//     {
//         id: "1",
//         name: "Nike Dunk Low Retro ",
//         brand: "Nike",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWoDh1GEHz0xNAIjxEyZMU_1UV-bSIDTQ9g&usqp=CAU ",
//         price: "99.99 ",
//         gender: "male",
//     },
//     {
//         id: "2",
//         name: "Puma",
//         brand: "Puma wild Rider layers",
//         image: "https://media.gqmagazine.fr/photos/60ace6ec59feb6bf2d96e9bb/master/w_1920,h_1280,c_limit/25052021_JAY_01.jpg",
//         price: "99.99",
//         gender: "male",
//     },
//     {
//         id: "3",
//         name: "Adidas Niteball",
//         brand: "Adidas",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAIRixflZv7TSILjVds0O6cm9ZsOeYLIcXPA&usqp=CAU ",
//         price: "99.99",
//         gender: "male",
//     },

//     {
//         id: "1",
//         name: "Puma Slipstream",
//         brand: "Puma",
//         image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/388634/03/sv01/fnd/EEA/fmt/png/Baskets-Slipstream-Suede-FS",
//         price: "89.99",
//         gender: "female",
//     },
//     {
//         id: "2",
//         name: "Nike Blazer Bordeaux",
//         brand: "Nike",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI62tRQBAOH7XVNRdhSFWOcgZ9INzdQkJBXrbd6xRP0UQXAVkrcIbUZpq6MJtNSwxS3WA&usqp=CAU",
//         price: "89.99",
//         gender: "female",
//     },
//     {
//         id: "3",
//         name: "Adidas Nmd Light Gray",
//         brand: "Adidas",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmQWd4EDgpOsVJLhLDX7cnxXMeRoHm1ZxRg&usqp=CAU",
//         price: "89.99",
//         gender: "female",
//     },
    
//     {
//         id: "1",
//         name: "Nike Huarache Big Run",
//         brand: "Nike",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98J4ZWpKfcCfxMArVtbWL6MUjlowNEwg_LQ&usqp=CAU",
//         price: "49.99",
//         categorie: "kid",
//     },
//     {
//         id: "2",
//         name: "Puma Rs-x Toys",
//         brand: "Puma",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCdfefjY4_adVx87Mlel1fhCmXsJ5NUJ_nQ&usqp=CAU",
//         price: "49.99",
//         categorie: "kid",
//     },
//     {
//         id: "3",
//         name: " Adidas High Top Postmove",
//         brand: "Adidas",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPYXt_SGQ-1IQywi4I20lHtcybzh7BXnblA&usqp=CAU",
//         price: "49.99",
//         categorie: "kid",
//     },
// ] 
function AvailableShoes(){
    const [shoes, setShoes] = useState([])
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:5000/products");
            const responseData = await response.json();
            console.log(responseData);
            setShoes(responseData);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

const AllProducts = shoes.map(shoe => <li>{shoe.product_name}</li>)

    return (
        <section className={classes.shoes}>
            <ul> {AllProducts} </ul>
        </section>
    )
}

export default AvailableShoes