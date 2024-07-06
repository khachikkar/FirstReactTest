import "./ProductList.css"
import Product from "./Product /Product"

function ProductList(  props ){
    const products = []
    let data = props.data //my data
    let toshow = props.toShow // show

    for(let i = 0 ; i <data.length; i++){
        // console.log(data[i])
        if(data[i].category === toshow) products.push(<Product data={data[i]} key={data[i].id}  />) 
    }
    return(
        <div id="myList"> 
        {products}
        </div>
    )
}

export default ProductList