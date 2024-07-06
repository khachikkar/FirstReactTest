import "./secondaryButton.css"

function  SecondaryButton( {data} ){

const { width, height }  =  data

    const buttonStyle ={
        width: width,
        height: height
    }
    
    return(
        <button id="secondaryButton" style={buttonStyle} >Sign Up</button>
    )
}

export default SecondaryButton