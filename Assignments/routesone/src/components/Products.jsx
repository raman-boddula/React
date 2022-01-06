import { Link } from "react-router-dom";
import React from "react";
import "./Prod.css"
export const Products = () => {
    let [data, setData] = React.useState([]);
    React.useEffect(() => {
        
        fetch(`http://localhost:3005/products`).then(d => d.json()).then(d => setData(d))
    },[])
    console.log("data",data)
    return (
        <div className="prodDiv">
            {data.map((e) => {
                return (
                    <Link to={`/products/${e.id}`}>
                        <div >
                    <img src={e.image} alt="product_image"/>
                    <h3>{e.name}</h3>
                        <h3>{e.price}</h3>
                        </div>
                        </Link>
                )
                
            })}
        </div>
    )
}