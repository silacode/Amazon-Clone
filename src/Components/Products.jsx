import React from 'react';
import "./Products.css";
import {useStateValue} from "../StateProvider";




function Products({id, title, rating, price, image}) {

    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
        alert("Item added to basket!");
    };

    return (
        <div className="products">
            <div className="products__info">
                <p>{title}</p>
                <p className="products__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="products__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>{
                            return <p>⭐</p>
                        })
                    }
                </div>
            </div>
           
            <img src={image} alt=""></img>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Products
