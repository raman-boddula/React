import "./Prod.css"

import { useParams,Navigate } from "react-router-dom";
import React, { useEffect } from "react";
export const ProductDetails = () => {
    const [single, setSingle] = React.useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:3005/products/${id}`).then(d => d.json()).then(d => setSingle(d))
    },[])
    return (
        <div className="Single">
            <img src={single.image} alt="single_image" />
                        <h4>{single.name}</h4>
                        <h4>{single.price}</h4>
                    
        </div>
    )
}