import React from 'react';
import "./Home.css";
import Products from "./Products";

function Home() {
    return (
        <div className="home">
            <img className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="" />

            {/* Products => id, title, price, rating, image */}
            <div className="home__products">
                <Products 
                    id="123"
                    title="La Reveuse Personal Size Blender 250 Watts Power for Shakes Smoothies Seasonings Sauces with 2 Pieces 16 oz Mug -Black"
                    price={36.99}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/71GPwz3E1ML._AC_UL480_FMwebp_QL65_.jpg"
                />

                <Products 
                    id="124"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Gray Aluminium Case with Black Sport Band"
                    price={349}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71yrt3+nfkL._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>

            <div className="home__products">
                <Products 
                    id="123"
                    title="Samsung Galaxy A10S A107M 32GB Unlocked GSM DUOS Phone w/ Dual 13MP/2MP Camera (International Variant/US Compatible LTE)"
                    price={181.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61OhSCY69kL._AC_UL480_FMwebp_QL65_.jpg"
                />

                <Products 
                    id="123"
                    title="Nintendo Switch Pro Controller"
                    price={89.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61drpi3cYUL._AC_UL480_FMwebp_QL65_.jpg"
                />

                <Products 
                    id="123"
                    title="American Dirt (Oprah's Book Club): A Novel"
                    price={14.25}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81T2u+-6MaL._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>

            <Products 
                    id="123"
                    title="Sceptre 35 Inch Curved UltraWide 21: 9 LED Creative Monitor QHD 3440x1440 Frameless AMD Freesync HDMI DisplayPort Up to 100Hz, Machine Black 2020 (C355W-3440UN)"
                    price={1108.50}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71PUwKU2jaL._AC_UL480_FMwebp_QL65_.jpg"
                />
            
        </div>
    )
}

export default Home
