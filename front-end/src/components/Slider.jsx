import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css";

const Slider = () => {
    const datas = [
        {
        
            name: "Air max 1 Olive",
            image: "https://images.stockx.com/images/Nike-Air-Max-1-Medium-Olive-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1672213326&q=75"
        },
        {
            name: "Air max 1 Olive",
            image: "https://footdistrict.com/media/resize/2000x2500/catalog/product/d/s/dsc_0096_24/nike-air-max-1-ah8145-201-2.jpg"
        },
        {
            name: "Air max 1 Olive",
            image: "https://static.footshop.com/169600/31065.jpg"
        },
        {
            name: "Air max 1 Olive",
            image: "https://www.kicksonfire.com/wp-content/uploads/2018/07/Nike-Air-Max-1.png"
        }
    ]

    


    return(

        <Carousel>
            {datas.map((slide,id) => (
                <div className="card" key={slide.id}>
                    <img src={slide.image} alt="" />
                </div>
            ))}
           {/* <div>Slider 1</div>
           <div>Slider 2</div>
           <div>Slider 3</div>
           <div>Slider 4</div> */}
        </Carousel>
    )
};

export default Slider;