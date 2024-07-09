import "./product.css"
import PrimaryButton from "../Buttons/PrimaryButton"

import picone from "../img/1.jpg"

function Product ( {data} ){

    const {description, category,  image, price, title} = data

    return(
        <div className="card" category={category}>
    <img src={image} alt="hello"></img>
    <div className="card-content">
        <div className="card-title">{title.slice(0, 16) + "..."}</div>
        <div className="card-description">{description.slice(0,50)+"...more"}</div>
        <div className="price">${price}</div>

       <PrimaryButton dat={{ haslogo: false, val:"Buy Now"}} />
    </div>
</div>
    )
}


export default Product