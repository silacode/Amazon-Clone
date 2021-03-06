import React from 'react';
import {useStateValue} from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (

        <div className="checkout">
            <div>
                <img className="checkout_ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                alt=""
                />
                
                

                { basket?.length === 0 ?(
                    <div> 
                        <h2>Your Shopping Basket is empty.</h2>
                    </div>
                ) : (
                    <div>

                        <h2 className= "heckout__title"> Your Shopping Basket</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title= {item.title}
                            image = {item.image}
                            rating = {item.rating}
                            price={item.price}
                            />
                        ))}

                    </div>
                )}

            </div>

            {basket?.length>0 &&(
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}

        </div>

    );
}

export default Checkout
