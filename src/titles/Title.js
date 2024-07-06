
import "./title.css"

function Title( {titleData, labelData} ){
    return(
        <span className="titleOfColection">New Colection {titleData}
        <label className="labelT"> {(labelData.haslabel)? labelData.value : "AtonShop"}  </label>
        </span>
    )
}

export default Title