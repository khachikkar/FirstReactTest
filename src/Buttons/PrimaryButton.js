import "./PrimaryButton.css"
import {MdPerson} from 'react-icons/md';


function PrimaryButton({dat}){
    return(

        <button id="primaryButton">
        { dat && dat.val }
        { ( dat && dat.haslogo) ? <MdPerson style={{fontSize: '18px', color: 'white'}}/> : "" }
       
        </button>
    )    

}


export default PrimaryButton