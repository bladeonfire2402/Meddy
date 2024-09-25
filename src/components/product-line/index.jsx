import React from "react";
import './index.css'
import ProductItem from "../product-item";

const ProductLineV1 = ({product}) => {
    return(
        <div className="ProducSection-wrapper p-1">
            <ProductItem product={product}/>
        </div>
    )
}
export default ProductLineV1