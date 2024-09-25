import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RoundedButton from "../Button/buttonRounded";

const ProductItem = ({ product }) =>  {
    const VisibleHandle = () => {
        console.log("Mouse over shopping cart icon");
    }

    const ProductClickHandle = () => {
        console.log("Product clicked");
    }

    return (
        <div className="ProductItem-wrapper">
            <div className="relative">
                <img src={product.imageUrl} alt={product.name} />
                <img src={product.overlayImageUrl} alt="Overlay" className="absolute" />
            </div>
            <h3>{product.name}</h3>
            <div className="flex">
                <h2>{product.price}đ/</h2>
                <h2>{product.quantity}</h2>
            </div>
            <div className="flex">
                <RoundedButton description={"Mua ngay"} func={() => { console.log("Buy now clicked") }} />
                <ShoppingCartIcon onMouseOver={VisibleHandle} />
                <VisibilityIcon onClick={ProductClickHandle} />
            </div>
        </div>
    );
}

export default ProductItem;
